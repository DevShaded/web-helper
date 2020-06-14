'use strict';

module.exports = {
    name: 'br',
    description: 'Command: Defines a single line break',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML <br>',
                description: "**Definition and Usage**\n" +
                    "\n" +
                    " The `<br>` tag inserts a single line break.\n" +
                    "\n" +
                    "The `<br>` tag is useful for writing addresses or poems." +
                    "\n" +
                    "The `<br>` tag is an empty tag which means that it has no end tag.\n" +
                    "\n" +
                    "**Note**: Use the `<br>` tag to enter line breaks, not to add space between paragraphs.\n" +
                    "\n" +
                    "**Example**\n" +
                    `\`\`\`HTML\n<body>\n   <p>Be not afraid of greatness.<br>\n   Some are born great,<br>\n   some achieve greatness,<br>\n   and others have greatness thrust upon them.</p>\n</body>\`\`\``,
            }
        });
    }
}
