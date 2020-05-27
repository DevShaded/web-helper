'use strict';

module.exports = {
    name: 'anchor',
    description: 'How to: HTML anchor tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML anchor',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<a>` tag defines a hyperlink, which is used to link from one page to another.\n" +
                    "\n" +
                    "The most important attribute of the `<a>` element is the href attribute, which indicates the link's destination.\n" +
                    "\n" +
                    "By default, links will appear as follows in all browsers:\n" +
                    "• An unvisited link is underlined and blue\n" +
                    "• A visited link is underlined and purple\n" +
                    "• An active link is underlined and red\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n    <a href="https://www.google.com">Visit Google!</a>\n</body>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
