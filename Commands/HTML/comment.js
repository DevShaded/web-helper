'use strict';

module.exports = {
    name: 'htmlcomments',
    description: 'How to: HTML comments',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
            color: '#14b1f5',
            title: 'HTML Comments',
            description: `**Definition and Usage**\n` +
                "\n" +
                " The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers.\n" +
                "\n" +
                "You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.\n" +
                "\n" +
                `**Example**` +
                    `\`\`\`HTML\n<body>\n  <!--This is a comment-->\n  <p>This is a paragraph.</p>\n</body>\`\`\``,
            }
        });
    }
};
