'use strict';

module.exports = {
    name: 'diceroll',
    description: 'Game: Dice roll, returns a number between 1 to 6',
    execute: async function (client, message, args) {
        let commandFile = require('./dice');
        await commandFile.execute(client, message, args);
    }
}
