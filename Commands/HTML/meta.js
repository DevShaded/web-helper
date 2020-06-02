'use strict';

module.exports = {
    name: 'meta',
    description: 'How to: HTML meta tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML `<meta>`',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data.\n" +
                    "\n" +
                    "`<meta>` tags always go inside the `<head>` element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.\n" +
                    "\n" +
                    "Metadata will not be displayed on the page, but is machine parsable.\n" +
                    "\n" +
                    "Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.\n" +
                    "\n" +
                    "There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the `<meta>` tag (See \"Setting The Viewport\" example below).\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<head>\n   <meta charset="UTF-8">\n   <meta name="description" content="Web Helper">\n   <meta name="keywords" content="HTML, CSS">\n   <meta name="author" content="John Doe">\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};