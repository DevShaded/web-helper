'use strict';

module.exports = {
    name: 'buttons',
    description: 'How to: HTML buttons tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML `<button>`',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The **HTML** `<button>` element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.\n" +
                    "\n" +
                    "By default, HTML buttons are presented in a style resembling the platform the user agent runs on\n" +
                    "\n" +
                    "You can change buttons’ appearance with CSS.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n   <button class="custom-class"></button>\n</body>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
