'use strict';

module.exports = {
    name: 'title',
    description: 'Define a title for your HTML document',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: 'HTML <title>',
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<title>` tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.\n" +
                    "\n" +
                    "The `<title>` tag is required in HTML documents\n" +
                    "\n" +
                    `The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.\n` +
                    "\n" +
                    "The `<title>` element:\n" +
                    "\n" +
                    "• Defines a title in the browser toolbar\n" +
                    "\n" +
                    "• Provides a title for the page when it is added to favorites\n" +
                    "\n" +
                    "• Displays a title for the page in search-engine results\n" +
                    "\n" +
                    "**Note**: You can NOT have more than one `<title>` element in an HTML document.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<!DOCTYPE>\n<html>\n   <head>\n    <title>Hello there</title>\n  </head>\n</html>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};