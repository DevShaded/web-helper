'use strict';

module.exports = {
    name: 'buttons',
    description: 'How to: HTML buttons tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML buttons',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<button>` tag defines a clickable button.\n" +
                    "\n" +
                    "Inside a `<button>` element you can put text and you can style the button with css!\n" +
                    "\n" +
                    "**Attributes**: https://www.w3schools.com/tags/tag_button.asp\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n   <button class="custom-class"></button>\n</body>\`\`\``,
            }
        });
    }
};
