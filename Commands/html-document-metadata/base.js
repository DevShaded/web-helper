'use strict';

module.exports = {
    name: 'base',
    description: 'How to: <base> element',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML <base>",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<base>` tag specifies the base URL and/or target for all relative URLs in a document.\n" +
                    "\n" +
                    "The `<base>` tag must have either an href or a target attribute present, or both.\n" +
                    "\n" +
                    "There can only be one single `<base>` element in a document, and it must be inside the `<head>` element.\n" +
                    "\n" +
                    "**Example**\n" +
                    `\`\`\`HTML\n<!DOCTYPE>\n<html>\n  <head>\n    <base href="https://www.w3schools.com/" target="_blank">\n  </head>\n  <body>\n    <a href="tags/tag_base.asp">HTML base Tag</a>\n  </body>\n</html>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
