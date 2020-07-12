'use strict';

// Define DOTENV
const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('./App/DB');
const moment = require('moment');

// Defining Discord.js module
const Discord = require('discord.js');
const {Client, Intents} = require('discord.js');

const client = new Client({
    disableMentions: 'everyone',
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION'
    ],
    ws: {
        intents: Intents.ALL
    }
});


/**
 * Custom Modules
 * Loading in our custom written modules (AKA Classes, Methods and Functions).
 * */
const { Channel } = require('./App/Discord/Channel');  // Handle all channel stuff
const { Guild } = require('./App/Discord/Guild');     // Handle all guild stuff
const { Message } = require('./App/Discord/Message'); // Handle all Message stuff

client.commands = new Discord.Collection();

const fs = require('fs');

try {
    const registerCommandFolders = [
        ["HTML", "Html Commands"],
        ["Fun", "Fun Commands"],
        ["Public", "Public Commands"]
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

// Verify login and a steady connection to Discord their API
client.on('ready', async () => {
    console.log('\x1b[32mBot has succesfully signed in and is listening to events\x1b[0m');

    const [bot] = await pool.execute("SELECT * FROM bot ORDER BY id DESC LIMIT 1");
    await client.user.setActivity(bot[0]['description'], { type: bot[0]['type']});
});


// Guild Create - Whenever the client (BOT) joins a new guild
client.on('guildCreate', async (guild) => {
    let createdDatetime = guild.createdTimestamp;
    createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');

    let deleted;
    let large;
    let partnered;
    let verified;

    if (guild.deleted) {
        deleted = 1;
    } else {
        deleted = 0;
    }

    if (guild.large) {
        large = 1;
    } else {
        large = 0;
    }

    if (guild.partnered) {
        partnered = 1;
    } else {
        partnered = 0;
    }

    if (guild.verified) {
        verified = 1;
    } else {
        verified = 0;
    }

    await pool.execute("INSERT IGNORE INTO guilds (guildName, guildID, banner, deleted, description, explicitContentFilter, iconURL, large, memberCount, mfaLevel, ownerID, partnered, premiumSubscriptionCount, premiumTier, region, splashURL, vanityURLCode, verificationLevel, verified, createdTimestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        guild.name,
        guild.id,
        guild.banner,
        deleted,
        guild.description,
        guild.explicitContentFilter,
        guild.iconURL(),
        large,
        guild.memberCount,
        guild.mfaLevel,
        guild.ownerID,
        partnered,
        guild.premiumSubscriptionCount,
        guild.premiumTier,
        guild.region,
        guild.splashURL(),
        guild.vanityURLCode,
        guild.verificationLevel,
        verified,
        createdDatetime
    ]);

    let mGuild = client.guilds.cache.get('713152163366568016');
    let mChannel = mGuild.channels.cache.get('724242330529300552');

    await mChannel.send({
        embed: {
            color: '#28a745',
            description: `<:signin:724245591244275774> Bot has joined **${guild.name}**`,
            timestamp: new Date(),
            footer: {
                text: 'Web Helper',
                icon_url: '',
            }
        }
    });
});

// Guild Delete - Whenever the client (BOT) leaves a guild
client.on('guildDelete', async (guild) => {
    let mGuild = await client.guilds.cache.get('713152163366568016');
    let mChannel = await mGuild.channels.cache.get('724242330529300552');

    await mChannel.send({
        embed: {
            color: '#dc3545',
            description: `<:signout:724245823482888244> Bot has left **${guild.name}**`,
            timestamp: new Date(),
            footer: {
                text: 'Web Helper',
                icon_url: '',
            }
        }
    });
});


// // Channel Create - What to do when a guild creates a new channel / category within the guild
client.on('channelCreate', async (channel) => {
    let createChannel = new Channel();
    await createChannel.createChannel(channel);
});

// // Channel Update - Whenever a channel / category has been updated
// // Example: Name changes, topic changes, channel type
client.on('channelUpdate', async (channel) => {
    let channelUpdate = new Channel();
    await channelUpdate.channelUpdate(channel);
});

// Message - Whenever a message has been send
// Example: In a Direct Message, Text-Channel
client.on('message', async (message) => {
    let createMessage = new Message();
    await createMessage.createMessage(message);
});

// TOS Agreement: Whenever a client accept the TOS
client.on('messageReactionAdd', async (messageReaction, user) => {
    if(messageReaction.message.id !== '728235085735657474') return;

    if(messageReaction.emoji.name !== '✅') return;

    const member = messageReaction.message.guild.members.cache.get(user.id);


    if(member) {
        const role = messageReaction.message.guild.roles.cache.get('728227400709832746');
        if(role) {
            await member.roles.add(role);
            console.log(`Role added to ${user.username}`);
        }
    }
});

// Guild Member Add - Whenever a user joins a guild
client.on('guildMemberAdd', async (member) => {
    let createdDatetime = member.user.createdTimestamp;
    createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');

    pool.execute("INSERT IGNORE INTO users (userID, bot, createdTimestamp, discriminator, username, displayAvatarURL) VALUES (?, ?, ?, ?, ?, ?)", [
        member.user.id,
        member.user.bot,
        createdDatetime,
        member.user.discriminator,
        member.user.username,
        member.user.displayAvatarURL()
    ]);

    const [newMember] = await pool.execute("SELECT * FROM guilds WHERE guildID = ? AND log_welcome IS NOT NULL", [
        member.guild.id
    ]);

    if(newMember.length > 0){
        try {
            let iGuild = await client.guilds.cache.get(newMember[0]['guildID']);
            let iChannel = await iGuild.channels.cache.get(newMember[0]['log_welcome']);

            await iChannel.send({
                embed: {
                    color: '#28a745',
                    author: {
                        name: `${member.user.tag} (${member.user.id})`,
                        icon_url: member.user.displayAvatarURL(),
                    },
                    timestamp: new Date(),
                    footer: {
                        text: `Web Helper`,
                    }
                }
            });
        } catch {

        }
    }
});

// Guild Member Remove - Whenever a user leaves a guild
client.on('guildMemberRemove', async (member) => {

    const [oldMember] = await pool.execute("SELECT * FROM guilds WHERE guildID = ? AND log_welcome IS NOT NULL", [
        member.guild.id
    ]);

    if(oldMember.length > 0){
        try {
            let iGuild = await client.guilds.cache.get(oldMember[0]['guildID']);
            let iChannel = await iGuild.channels.cache.get(oldMember[0]['log_welcome']);

            await iChannel.send({
                embed: {
                    color: '#dc3545',
                    author: {
                        name: `${member.user.tag} (${member.user.id})`,
                        icon_url: member.user.displayAvatarURL(),
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'Web Helper',
                    }
                }
            });
        } catch {

        }
    }
});

client.on('message', async (message) => {

    let prefix;
    const [getPrefix] = await pool.execute("SELECT prefix FROM guilds WHERE guildID = ?", [
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

// Not in use
/**
 * Process message reaction
 *
 * @param reaction
 * @param user
 * @param type
 * */
// async function getMessageReaction(reaction, user, type) {
//     try {
//         let emoji;
//
//         if(reaction.emoji.id === null) {
//             emoji = reaction.emoji.name;
//         } else {
//             emoji = reaction.emoji.id;
//         }
//         if (!reaction.message.guild) return;
//
//         const member = reaction.message.guild.members.cache.get(user.id);
//         if (!member) return;
//
//         if (type === 'add' || type === 'remove') {
//
//             if (type === 'add') {
//                 const role = reaction.message.guild.roles.cache.get('728227400709832746');
//                 if (!role) return;
//
//                 await member.roles.add(role);
//             } else if (type === 'remove') {
//                 const role = reaction.message.guild.roles.cache.get('728227400709832746');
//                 if (!role) return;
//
//                 await member.roles.remove(role);
//             }
//         }
//     } catch {}
// }
