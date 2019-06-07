import { Client, Guild } from 'discord.js';
export default class Destroyer {
    private client;
    private guild;
    constructor(client: Client, guild: Guild);
    destroyRoles(): Promise<void>;
    destroyChannels(): Promise<void>;
    kickOrBanMembers(): Promise<void>;
    sendNotice(): Promise<void>;
    getInvite(): Promise<void>;
}
