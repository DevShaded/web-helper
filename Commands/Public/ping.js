'use strict';

module.exports = {
    name: 'ping',
    description: 'Returns a message with response time',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                description: `🏓 Pong - ${Math.floor(client.ws.ping).toLocaleString()} milliseconds.`,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
}