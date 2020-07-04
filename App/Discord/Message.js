'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('../DB');
const moment = require('moment');

function Message() {

}

Message.prototype.getUser = async function (message, client) {
    const [users] = await pool.execute("SELECT * FROM users WHERE userID = ?", [
        message.author.id
    ]);

    if (users.length === 0) {
        await Message.prototype.createUser(message, client);
    } else {
        await Message.prototype.updateUser(message, client);
    }

    if (message.guild) {
        const [guilds] = await pool.execute("SELECT * FROM guilds WHERE guildID = ?", [
            message.guild.id
        ]);

        if (guilds.length === 0) {
            await Message.prototype.createGuild(message, client);
        } else {
            await Message.prototype.updateGuild(message, client);
        }
    }

    const [channels] = await pool.execute("SELECT * FROM channels WHERE channelID = ?", [
        message.channel.id
    ]);

    if(channels.length === 0){
        await Message.prototype.createChannel(message, client);
    } else {
        await Message.prototype.updateChannel(message, client);
    }

    const [messages] = await pool.execute("SELECT * FROM messages WHERE messageID = ?", [
        message.id
    ]);

    if(messages.length === 0){
        await Message.prototype.createMessage(message, client);
    } else {
        await Message.prototype.updateMessage(message, client);
    }
};

Message.prototype.createUser = async function (message) {
    let createdDatetime = message.author.createdTimestamp;
    createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');

    pool.execute("INSERT INTO users (userID, bot, createdTimestamp, discriminator, username, displayAvatarURL) VALUES (?, ?, ?, ?, ?, ?)", [
        message.author.id,
        message.author.bot,
        createdDatetime,
        message.author.discriminator,
        message.author.username,
        message.author.displayAvatarURL()
    ]);
};

/**
 * What to do when a new <message> has been sent
 * @param message
 * */
Message.prototype.createMessage = async function (message) {

    await pool.execute("INSERT INTO messages (messageID, guildID, channelID, userId, content, url, edits, deleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
        message.id,
        message.guild.id,
        message.channel.id,
        message.author.id,
        message.content,
        message.url,
        message.edits,
        message.deleted
    ]);
};

module.exports = {
    Message
};
