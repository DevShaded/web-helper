'use strict';

module.exports = {
    name: 'lists',
    description: 'How to: HTML lists tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML Lists',
                description: `HTML lists allow web authors to group a set of related items in lists.\n` +
                    "\n" +
                    " **Unordered HTML List**\n" +
                    "\n" +
                    "An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.\n" +
                    "\n" +
                    "The list items will be marked with bullets (small black circles) by default\n" +
                    "\n" +
                    "**Example**" +
                    `\`\`\`HTML\n<body>\n  <ul>\n   <li>Coffee</li>\n   <li>Tea</li>\n   <li>Milk</li>\n  </ul>\n</body>\`\`\`` +
                    "\n" +
                    `**Ordered HTML List**\n` +
                    "\n" +
                    "An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.\n" +
                    "\n" +
                    "The list items will be marked with numbers by default\n" +
                    "\n" +
                    "**Example**" +
                    `\`\`\`HTML\n<body>\n  <ol>\n   <li>Coffee</li>\n   <li>Tea</li>\n   <li>Milk</li>\n  </ol>\n</body>\`\`\`` +
                    "\n" +
                    `**HTML Description Lists**\n` +
                    "\n" +
                    "HTML also supports description lists.\n" +
                    "\n" +
                    "A description list is a list of terms, with a description of each term.\n" +
                    "\n" +
                    "The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), \nand the `<dd>` tag describes each term\n" +
                    "\n" +
                    "**Example**" +
                    `\`\`\`HTML\n<body>\n  <dl>\n   <dt>Coffee</dt>\n   <dd>- black hot drink</dd>\n   <dt>Milk</dt>\n   <dd>- white cold drink</dd>\n  </dl>\n</body>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
