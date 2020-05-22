'use strict';

module.exports = {
    name: 'doctype',
    description: 'How to: DOCTYPE Declaration',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML <!DOCTYPE>",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " All HTML documents must start with a `<!DOCTYPE>` declaration.\n" +
                    "\n" +
                    "The declaration is not an HTML tag. It is an \"information\" to the browser about what document type to expect.\n" +
                    "\n" +
                    `**It must only appear once, at the top of the page (before any HTML tags).**\n` +
                    "\n" +
                    "In HTML 5, the declaration is simple\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<!DOCTYPE>\n<html>\n   <head>\n    <title>Hello there</title>\n  </head>\n</html>\`\`\``,
            }
        });
    }
};
