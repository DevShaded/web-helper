'use strict';

module.exports = {
    name: 'coinroll',
    description: 'Game: flips a coin and returns heads or tails',
    execute: async function (client, message, args) {

        let commandFile = require('./coin');
        await commandFile.execute(client, message, args);
    }
};
