'use strict';


module.exports = {
    name: 'dice',
    description: 'Game: Dice roll, returns a number between 1 to 6',
    execute: async function (client, message, args) {

        let diceArray = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6'
        ];

        let answer = Math.floor(Math.random() * diceArray.length);

        await message.channel.send({
            embed: {
                color: '#00ddff',
                description: `I threw a dice and it turned out to be **${diceArray[answer]}**`,
            }
        });
    }
}
