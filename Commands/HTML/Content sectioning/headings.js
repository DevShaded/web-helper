'use strict';

module.exports = {
    name: 'heading',
    description: 'How to: headings in HTML',
    execute: async function (client, message, args) {

        await message.channel.send({
            embed: {
                color: '#14b1f5',
                title: "HTML Headings",
                description: `**Definition and Usage**\n` +
                    "\n" +
                    " The `<h1>` to `<h6>` tags are used to define HTML headings.\n" +
                    "\n" +
                    "The declaration is not an HTML tag. It is an \"information\" to the browser about what document type to expect.\n" +
                    "\n" +
                    "`<h1>`defines the most important heading.`<h6>` defines the least important heading.\n" +
                    "\n" +
                    "**Note**: Only use one `<h1>` per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with `<h1>`, then use `<h2>`, and so on.\n" +
                    "\n" +
                    `**Example**` +
                    `\`\`\`HTML\n<body>\n  <h1>This is heading 1</h1>\n  <h2>This is heading 2</h2>\n  <h3>This is heading 3</h3>\n  <h4>This is heading 4</h4>\n  <h5>This is heading 5</h5>\n  <h6>This is heading 6</h6>\n</body>\`\`\``,
                timestamp: new Date(),
                footer: {
                    text: 'Web Helper',
                },
            }
        });
    }
};
