'use strict';

module.exports = {
    name: 'article',
    description: 'How to: <article> element',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML Article",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<article>` tag specifies independent, self-contained content.\n" +
                    "\n" +
                    "An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.\n" +
                    "\n" +
                    "Potential sources for the `<article>` element:\n" +
                    "\n" +
                    "• Forum post\n" +
                    "• Blog post\n" +
                    "• News story\n" +
                    "\n" +
                    "**Note**: The `<article>` element does not render as anything special in a browser. However, you can use CSS to style the `<article>` element.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<article>\n  <h2>Web Helper</h2>\n  <p>Helps you with web development</p>\n</article>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
