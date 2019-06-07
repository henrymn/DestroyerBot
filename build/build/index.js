"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord = require("discord.js");
const Destroyer_1 = require("./Destroyer");
const client = new discord.Client();
client.on('ready', async () => {
    console.log(client.guilds.map(a => `${a.name} - ${a.id}`));
    const guild = client.guilds.find(a => a.name === process.argv[2]);
    const destroyer = new Destroyer_1.default(client, guild);
    await destroyer.destroyRoles();
    await destroyer.destroyChannels();
    await destroyer.kickOrBanMembers();
    await destroyer.sendNotice();
    await destroyer.getInvite();
});
client.login('TOKEN');
//# sourceMappingURL=index.js.map