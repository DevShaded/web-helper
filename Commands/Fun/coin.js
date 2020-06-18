'use strict';

module.exports = {
    name: 'coin',
    description: 'Game: flips a coin and returns heads or tails',
    execute: async function (client, message, args) {

        let coin = [
            'heads',
            'tails',
        ];


        let answer = Math.floor(Math.random() * coin.length);

            await  message.channel.send({
                embed: {
                    color: `#00ddff`,
                    description: `I flipped a coin and it landed on **${coin[answer]}**`,
                }
            });

    }
}

