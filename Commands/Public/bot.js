'use strict';

const pm2 = require('pm2');
const moment = require('moment');

module.exports = {
    name: 'bot',
    description: `Display information of the bot itself`,
    execute: async function (client, message){

        await pm2.describe(0, (err, processDescriptionList) => {

            let name = processDescriptionList[0]['pm2_env']['name'];
            let pm_uptime = processDescriptionList[0]['pm2_env']['pm_uptime'];
            let restart_time = processDescriptionList[0]['pm2_env']['restart_time'];
            let version = processDescriptionList[0]['pm2_env']['version'];
            let node_version = processDescriptionList[0]['pm2_env']['node_version'];
            let memory = (processDescriptionList[0]['monit']['memory'] / 1000000).toFixed(2);
            let cpu = processDescriptionList[0]['monit']['cpu'];

            let now = moment.now();
            let seconds = moment(now).diff(moment(pm_uptime), 'seconds');

            function secondsToDHMS(seconds) {
                seconds = Number(seconds);
                let d = Math.floor(seconds / (3600*24));
                let h = Math.floor(seconds % (3600*24) / 3600);
                let m = Math.floor(seconds % 3600 / 60);
                let s = Math.floor(seconds % 60);

                let dDisplay = d > 0 ? d + (d === 1 ? "d, " : "d, ") : "";
                let hDisplay = h > 0 ? h + (h === 1 ? "h, " : "h, ") : "";
                let mDisplay = m > 0 ? m + (m === 1 ? "m, " : "m, ") : "";
                let sDisplay = s > 0 ? s + (s === 1 ? "s" : "s") : "";
                return dDisplay + hDisplay + mDisplay + sDisplay;
            }

            message.channel.send({
                embed: {
                    author: {
                        name: 'Bot Information',
                        icon_url: `${message.guild.me.user.displayAvatarURL()}`,
                    },
                    color: `#17a2b8`,
                    description: `This bot is being develop by DevShaded#1435.\n\nThis bot is active in **${(client.guilds.cache.size).toLocaleString()}** Servers and serves **${(client.users.cache.size).toLocaleString()}** Users.\n\n**Process Information**`,
                    fields: [
                        {
                            name: `Name`,
                            value: name,
                            inline: false,
                        },
                        {
                            name: `Uptime`,
                            value: secondsToDHMS(seconds),
                            inline: true,
                        },
                        {
                            name: `Restarts`,
                            value: restart_time,
                            inline: true,
                        },
                        {
                            name: `Bot Version`,
                            value: version,
                            inline: true,
                        },
                        {
                            name: `Node Version`,
                            value: node_version,
                            inline: true,
                        },
                        {
                            name: `Memory`,
                            value: `${memory}MB`,
                            inline: true,
                        },
                        {
                            name: `CPU`,
                            value: `${cpu}%`,
                            inline: true,
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Web Helper',
                        icon_url: '',
                    }
                }
            });
        });
    }
};
