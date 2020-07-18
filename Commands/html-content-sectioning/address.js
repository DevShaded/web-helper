'use strict';

module.exports = {
    name: 'address',
    description: 'How to: <address> element',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML Address",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<address>` tag defines the contact information for the author/owner of a document or an article.\n" +
                    "\n" +
                    "The contact information can be an email address, URL, physical address, phone number, social media handle, etc.\n" +
                    "\n" +
                    "The text in the `<address>` element usually renders in italic, and browsers will always add a line break before and after the `<address>` element.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<address>\n  Written by <a href="example@example.com">WH</a>.<br>\n  Visit us at:<br>\n  Example.com<br>\n  Box 564, Disneyland<br>\n  USA\n</address>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
