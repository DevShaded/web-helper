'use strict';

module.exports = {
    name: 'div',
    description: 'How to: division Declaration',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML <div>",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<div>` tag defines a division or a section in an HTML document.\n" +
                    "\n" +
                    "The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.\n" +
                    "\n" +
                    "The `<div>` tag is easily styled by using the class or id attribute.\n" +
                    "\n" +
                    "Any sort of content can be put inside the `<div>` tag!\n" +
                    "\n" +
                    "**Note**: By default, browsers always place a line break before and after the `<div>` element.\n" +
                    "\n"+
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n  <div class="myDiv">\n   <h2>This is a heading in a div element</h2>\n   <p>This is some text in a div element.</p>\n  </div>\n</body>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
