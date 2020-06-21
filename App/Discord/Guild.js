'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('../DB');
const moment = require('moment');

/**
 * This class is based for maintaining a Guild
 * */

function Guild() {

}

Guild.prototype.guildCreate = async function (guild) {

    // let createdDatetime = guild.createdTimestamp;
    // createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');
    //
    // await pool.execute("INSERT INTO guilds (guildName, guildID, banner, deleted, description, explicitContentFilter, iconURL, large, memberCount, mfaLevel, ownerID, partnered, premiumSubscriptionCount, premiumTier, region, splashURL, vanityURLCode, verificationLevel, verified, createdTimestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
    //     guild.name,
    //     guild.id,
    //     guild.banner,
    //     guild.deleted,
    //     guild.description,
    //     guild.explicitContentFilter,
    //     guild.iconURL(),
    //     guild.large,
    //     guild.memberCount,
    //     guild.mfaLevel,
    //     guild.ownerID,
    //     guild.partnered,
    //     guild.premiumSubscriptionCount,
    //     guild.premiumTier,
    //     guild.region,
    //     guild.splashURL(),
    //     guild.vanityURLCode,
    //     guild.verificationLevel,
    //     guild.verified,
    //     createdDatetime
    // ]);
    //
    // let mGuild = client.guilds.get('713152163366568016');
    // let mChannel = mGuild.channels.get('724242330529300552');
    //
    // await mChannel.send({
    //     embed: {
    //         color: '#28a745',
    //         description: `<:signin:619237304975884328> Bot has joined **${guild.name}**`,
    //         timestamp: new Date(),
    //         footer: {
    //             text: 'Web Helper',
    //             icon_url: '',
    //         }
    //     }
    // });

};

/**
 * What to do when a guild becomes (un)available
 * @param guild
 * */
Guild.prototype.updateGuildStatus = async function (guild) {

};

/**
 * What to do when a guild has been updated, such as guild name
 * @param oldGuild
 * @param newGuild
 * */
Guild.prototype.updateGuild = async function (oldGuild, newGuild) {

};

module.exports = {
    Guild
};
