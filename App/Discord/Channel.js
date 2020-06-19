'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { pool } = require('../DB');

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
        channel.createdTimestamp,

    ]);
};
/**
 * What to do when a <text/category/etc> channel has been edited
 * @param channel
 * */
Channel.prototype.updateChannel = async function (channel){

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
        channel.createdTimestamp,
        channel.id
    ]);

    console.log(
        channel.name,
        nsfw,
        channel.topic,
        deleted,
        channel.createdTimestamp,
        channel.id
    );
};

/**
 * What to do when a new <text/category/etc> channel has been deleted
 * @param channel
 * */
Channel.prototype.deleteChannel = async function (channel){

    // await pool.execute("DELETE FROM channels WHERE = channels, id");

};

module.exports = {
    Channel
};
