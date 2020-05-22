'use strict';

// Define DOTENV
const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('./App/DB');

// Defining Discord.js module
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: [
        'MESSAGE',
        'CHANNEL'
    ]
});


/**
* Custom Modules
* Loading in our custom written modules (AKA Classes, Methods and Functions).
* */
const { Channel } = require('./App/Discord/Channel');  // Handle all channel stuff

client.commands = new Discord.Collection();

const fs = require('fs');

try {
    const registerCommandFolders = [
        ["HTML", "Html Commands"],
        ["CSS", "Css command"]
    ];

    for (let i = 0; i < registerCommandFolders.length; i++){
        const commandFiles = fs.readdirSync('./Commands/' + registerCommandFolders[i][0])
            .filter(file => file.endsWith('.js'));

        for (const file of commandFiles){
            const command = require('./Commands/' + registerCommandFolders[i][0] + '/' + file);
            client.commands.set(command.name, command);
        }
    }

} catch (e) {
    console.error('Could not load commands.', e);
}


// Channel Create - What to do when a guild creates a new channel / category within the guild
client.on('createChannel', async (channel) => {
    let createChannel = new channel();
    await createChannel.createChannel(channel);
});

client.on('ready', async () => {
    console.log('\x1b[32mBot has succesfully signed in and is listening to events\x1b[0m');

const [bot] = await pool.execute("SELECT * FROM bot ORDER BY id DESC LIMIT 1");
await client.user.setActivity(bot[0]['description'], { type: bot[0]['type']});
});

client.on('message', async (message) => {

let prefix;
    const [getPrefix] = await pool.execute("SELECT prefix FROM guild WHERE guildID = ?", [
    message.guild.id
]);

if (getPrefix.length > 0) {
    prefix = getPrefix[0]['prefix'];
} else {
    prefix = '!';
}


if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).split(/ +/);

const command = args.shift().toLowerCase();

if (!client.commands.has(command)) return;

try {
    client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.log(error);
    }
});

/**
* Sign in the bot with Discord.
* */
if(process.env.ENVIRONMENT === 'dev') {
    client.login(process.env.DISCORD_API_KEY_DEV).then(() => {
    console.log('\x1b[33mBot is trying to sign in as DEVELOPER\x1b[0m')
});
} else if (process.env.ENVIRONMENT === 'prod') {
    client.login(process.env.DISCORD_API_KEY).then(() => {
    console.log('\x1b[36mBot is trying to sign in as PRODUCTION\x1b[0m')
});
} else {
    return console.error('Environment has not been set up correctly');
}
