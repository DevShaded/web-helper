'use strict';

module.exports = {
    name: 'link',
    description: 'How to: HTML link tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML link',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `link>` tag defines the relationship between the current document and an external resource.\n" +
                    "\n" +
                    "The `link>` tag is most often used to link to external style sheets.\n" +
                    "\n" +
                    "The `<link>` element is an empty element, it contains attributes only.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<head>\n    <link rel="stylesheet" href="styles.css">\n</head>\`\`\``,
            }
        });
    }
};