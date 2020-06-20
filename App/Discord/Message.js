'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('../DB');
const moment = require('moment');

function Message() {

}

Message.prototype.createGuild = async function (message) {
    let createdDatetime = message.guild.createdTimestamp;
    createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');

    await pool.execute("INSERT INTO guilds (guildName, guildID, banner, deleted, description, explicitContentFilter, iconURL, large, memberCount, mfaLevel, ownerID, partnered, premiumSubscriptionCount, premiumTier, region, splashURL, vanityURLCode, verificationLevel, verified, createdTimestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        message.guild.name,
        message.guild.id,
        message.guild.banner,
        message.guild.deleted,
        message.guild.description,
        message.guild.explicitContentFilter,
        message.guild.iconURL(),
        message.guild.large,
        message.guild.memberCount,
        message.guild.mfaLevel,
        message.guild.ownerID,
        message.guild.partnered,
        message.guild.premiumSubscriptionCount,
        message.guild.premiumTier,
        message.guild.region,
        message.guild.splashURL(),
        message.guild.vanityURLCode,
        message.guild.verificationLevel,
        message.guild.verified,
        createdDatetime
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
