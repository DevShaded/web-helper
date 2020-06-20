'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
    name: 'help',
    description: `Returns a message with all available commands`,
    execute: async function (client, message, args) {

        let htmlCommands = fs.readdirSync('./Commands/HTML');
        let funCommands = fs.readdirSync('./Commands/Fun');

        let funCommandsArray = [];
        let htmlCommandsArray = [];

        let command;

        for(let i = 0; i < htmlCommands.length; i++) {
            command = path.parse(htmlCommands[i]);
            htmlCommandsArray.push(` \`${command.name}\``);
        }

        for (let i = 0; i < funCommands.length; i++) {
            command = path.parse(funCommands[i]);
            funCommandsArray.push(` \`${command.name}\``);
        }

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                fields: [
                    {
                        name: `<:HTML5:714052987051311115> HTML\n`,
                        value: `${htmlCommandsArray}\n\u200b`,
                    },
                    {
                        name: `🏓 Fun\n`,
                        value: `${funCommandsArray}\n\u200b`,
                    },
                ],
            }
        });
    }
}
