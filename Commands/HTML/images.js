'use strict';

module.exports = {
    name: 'images',
    description: 'How to: HTML images tag',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML images',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<img>` tag is used to embed an image in an HTML page.\n" +
                    "\n" +
                    "Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.\n" +
                    "\n" +
                    "The `<img>` tag has two required attributes\n" +
                    "\n" +
                    "• `src` - Specifies the path to the image\n" +
                    "• `alt` - Specifies an alternate text for the image, if the image for some reason cannot be displayed\n" +
                    "\n" +
                    "**Note**: Also, always specify the `width` and `height` of an image. If width and height are not specified, the page might flicker while the image loads.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n    <img src="w3schools.jpg" alt="W3Schools.com">\n</body>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
