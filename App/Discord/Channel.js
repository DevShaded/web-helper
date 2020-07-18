'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('../DB');
const moment = require('moment');
/**
 * This class is based for maintaining Channels
 * */

function Channel() {

}

/**
 * What to do when a new <text/category/etc> channel has been created
 * @param channel
 * */
Channel.prototype.createChannel = async function (channel){
    let createdDatetime = channel.createdTimestamp;
    createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');

    let nsfw;
    let deleted;

    if (channel.deleted) {
        deleted = 1;
    } else {
        deleted = 0;
    }

    if (channel.nsfw) {
        nsfw = 1;
    } else {
        nsfw = 0;
    }

    await pool.execute("INSERT INTO channels (name, id, nsfw, topic, deleted, createdTimestamp) VALUES (?, ?, ?, ?, ?, ?)", [
        channel.name,
        channel.id,
        nsfw,
        channel.topic,
        deleted,
        createdTimestamp,
    ]);
};
/**
 * What to do when a <text/category/etc> channel has been edited
 * @param channel
 * */
Channel.prototype.channelUpdate = async function (channel){
    let createdDatetime = channel.createdTimestamp;
    createdDatetime = moment(createdDatetime).format('YYYY-MM-DD HH-mm-ss');

    let nsfw;
    let deleted;

    if (channel.deleted) {
        deleted = 1;
    } else {
        deleted = 0;
    }

    if (channel.nsfw) {
        nsfw = 1;
    } else {
        nsfw = 0;
    }


    await pool.execute("UPDATE channels SET name = ?, nsfw = ?, topic = ?, deleted = ?, createdTimestamp = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?", [
        channel.name,
        nsfw,
        channel.topic,
        deleted,
        createdTimestamp,
        channel.id
    ]);
};


module.exports = {
    Channel
};
