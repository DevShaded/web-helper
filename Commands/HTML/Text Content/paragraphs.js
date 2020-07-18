'use strict';

module.exports = {
    name: 'paragraph',
    description: 'How to: HTML paragraph tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML paragraphs',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<p>` tag defines a paragraph.\n" +
                    "\n" +
                    "Browsers automatically add a single blank line before and after each `<p>` element.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n    <p>This is some text in a paragraph.</p>\n</body>\`\`\``,
            }
        });
    }
};
