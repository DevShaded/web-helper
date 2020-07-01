'use strict';

const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: `Returns a message with server information`,
    execute: async function (client, message, args){



        let date = moment(message.guild.createdAt).format("YYYY-MM-DD, hh:mm A");
        await message.guild.members.fetch();

        let onlinePresence = message.guild.presences.cache.filter(p => p.status === 'online');
        onlinePresence = onlinePresence.map(p => p.status);

        let dndPresence = message.guild.presences.cache.filter(p => p.status === 'dnd');
        dndPresence = dndPresence.map(p => p.status);

        let idlePresence = message.guild.presences.cache.filter(p => p.status === 'idle');
        idlePresence = idlePresence.map(p => p.status);

        let offlinePresence = message.guild.memberCount - message.guild.presences.cache.size

        let roles = message.guild.roles.cache.map(roles => `<@&${roles.id}>`);

        roles.shift();

        if(roles.length > 10){
            roles = `This server has **${roles.length}** roles`;
        } else {
            roles = roles.join(', ');
        }

        await message.channel.send({
            embed: {
                author: {
                    name: message.guild.name ,
                    url: message.guild.iconURL(),
                },
                color: `#17a2b8`,
                fields: [
                    {
                        name: 'Members',
                        value: message.guild.memberCount.toLocaleString(),
                        inline: false,
                    },
                    {
                        name: 'Created At',
                        value: date,
                        inline: false,
                    },
                    {
                        name: 'Presences',
                        value: `Online: \`${(onlinePresence.length).toLocaleString()}\` Idle: \`${(idlePresence.length).toLocaleString()}\` DND: \`${(dndPresence.length).toLocaleString()}\` Offline: \`${(offlinePresence)}\``,
                        inline: false,
                    },
                    {
                        name: 'Roles',
                        value: roles,
                        inline: false,
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                    icon_url: '',
                }
            }
        });
    }
};
