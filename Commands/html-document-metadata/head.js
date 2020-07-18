'use strict';

module.exports = {
    name: 'head',
    description: 'How to: <head> element',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML <head>",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.\n" +
                    "\n" +
                    "Metadata is data about the HTML document. Metadata is not displayed.\n" +
                    "\n" +
                    `Metadata typically define the document title, character set, styles, scripts, and other meta information.\n` +
                    "\n" +
                    "The following elements can go inside the `<head>` element:\n" +
                    "\n" +
                    "• `<title>` (required in every HTML document)\n" +
                    "• `<styles>`\n" +
                    "• `<base>`\n" +
                    "• `<meta>`\n" +
                    "\n" +
                    "**Example**\n" +
                    "\n"+
                    `\`\`\`HTML\n<!DOCTYPE>\n<html>\n   <head>\n    <title>Hello there</title>\n  </head>\n</html>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
