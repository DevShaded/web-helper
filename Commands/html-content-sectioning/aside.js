'use strict';

module.exports = {
    name: 'aside',
    description: 'How to: <aside> element',
    execute: async function (client, message, args) {

      await message.channel.send({
          embed: {
            color: '#14b1f5',
            description: `**Definition and Usage**\n` +
                "\n" +
                " The `<aside>` tag defines some content aside from the content it is placed in.\n" +
                "\n" +
                "The aside content should be indirectly related to the surrounding content.\n" +
                "\n" +
                "**Tip**: The `<aside>` content is often placed as a sidebar in a document.\n" +
                "\n" +
                "**Note**: The `<aside>` element does not render as anything special in a browser. However, you can use CSS to style the <aside> element (See CSS example below)\n" +
                "\n" +
                `**Example**` +
                `\`\`\`HTML\n<aside>\n  <h4>Epcot Cente</h4>\n  <p>Epcot is a theme park at Walt Disney World Resort</p>\n</aside>\`\`\``,
          }
      });

      await message.channel.send({
          embed: {
            color: '#14b1f5',
            title: 'With CSS',
            description: `\`\`\`HTML\n<style>\naside {\n   width: 30%;\n   padding-left: 15px;\n   margin-left: 15px;\n   float: right;\n   font-style: italic;\n   background-color: lightgray;\n  }\n</style>\`\`\``,
          }
      });
    }
};
