'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('../DB');
const moment = require('moment');

function Message() {

}

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
