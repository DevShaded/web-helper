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
 * What to do when a new <text/category/etc> channel has been deleted
 * @param channel
 * */
Channel.prototype.deleteChannel = async function (channel){

};

/**
 * What to do when a <text/category/etc> channel has been edited
 * @param oldChannel
 * @param newChannel
 * */
Channel.prototype.updateChannel = async function (oldChannel, newChannel){

};

module.exports = {
    Channel
};
