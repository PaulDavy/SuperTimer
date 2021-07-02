const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const skins = require('./skins.json');
const loot = require('./loot.json');
const command = require('./command.json');

client.on('ready', () => {
    let currentTime = new Date();
    console.log(`I\'m Online started at ${currentTime}`);
});

client.on('disconnect', () => {
    let currentTime = new Date();
    console.log(`You have been disconnected at ${currentTime}`);
});

client.on('reconnecting', () => {
    console.log('Reconnecting ....');
});

client.on("guildMemberAdd", member => {
    let guild = member.guild;
    let playRole = guild.roles.find('name', 'Small Tiddies');
    guild.defaultChannel.sendMessage(`Please welcome ${member.user} to the server.`);
    member.addRole(playRole);
});

var bamb1 = false;
var bamb2 = "Bambi run is inactive";
var bambu = "";

let prefix = "sat";
client.on('message', message => {

    let args = message.content.split(' ').slice(1);
    let argresult = args.join(' ');

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + ' command')) {
        message.delete();
        return message.author.sendMessage(command.usercommand)
    };

    if (message.content.startsWith(prefix + ' logout')) {
        message.delete();
        if (message.author.id !== `131083790477950976`) {
            return message.reply("You dont have permissions to do this action");
        } else {
            client.destroy();
        }
    };
    
    if(message.content.startsWith(prefix + " bambiset")){
        message.delete();
        if(bamb1 === true){
            bamb1 = false;
            bamb2 = "Bambi run is inactive";
            message.guild.channels.find("name", "newz-bot-channel").sendMessage("Disabled").then(msg => msg.delete(4000)).catch(console.error);
        }else{
            bamb1 = true;
            bamb2 = `Bambi run is active`;
            message.guild.channels.find("name", "newz-bot-channel").sendMessage("Activated").then(msg => msg.delete(4000)).catch(console.error);
        }
    }else

    if(message.content.startsWith(prefix + " bambi")){
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(bamb2).then(msg => msg.delete(20000)).catch(console.error);
    }else

    // Zombie loot timer
    if (message.content.startsWith(prefix + ' spawn')) {

        message.delete();

        let currentTime = new Date();
        let m = currentTime.getMinutes();
        if ((m >= 9) && (m <= 50)) {
            if (50 - m == 1) {
                min = "minute";
            } else {
                min = "minutes";
            }
            message.guild.channels.find("name", "newz-bot-channel").sendMessage(`Log out in ${50-m} ${min} so the super alien can spawn.`).then(msg => msg.delete(20000)).catch(console.error); // global message
        };

        if ((m >= 51) && (m <= 56)) {
            if (57 - m == 1) {
                min = "minute";
            } else {
                min = "minutes";
            }
            message.guild.channels.find("name", "newz-bot-channel").sendMessage(`Super Alien Will Spawn In ${57-m} ${min} please STAY logged out other wise the alien will not spawn.`).then(msg => msg.delete(20000)).catch(console.error); // global message
        };

        if ((m >= 57) && (m <= 59)) {
            message.guild.channels.find("name", "newz-bot-channel").sendMessage(`Alien super has spawned. hurry, kill them!`).then(msg => msg.delete(20000)).catch(console.error); // global message
        };

        if ((m >= 0) && (m <= 8)) {
            if (9 - m == 1) {
                min = "minute";
            } else {
                min = "minutes";
            }
            message.guild.channels.find("name", "newz-bot-channel").sendMessage(`Alien super has spawned you have ${9-m} ${min} left to kill them.`).then(msg => msg.delete(20000)).catch(console.error); // global message
        };

    } else // timer check ends

    // Looting listings - newz loot
    if (message.content.startsWith(prefix + ' loot rifles')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.ar).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot snipers')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.snipers).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot pistols')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.pistols).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot melee')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.melee).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot ammo')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.ammo).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot backpacks')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.backpack).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot consumables')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.consumables).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot armor')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.armor).catch(console.error);
    } else

    if (message.content.startsWith(prefix + ' loot various')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(loot.various).catch(console.error);
    } else // loot listings ends



    // skins
    if (message.content.startsWith(prefix + ' skins hynx')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(skins.hynx);
    } else

    if (message.content.startsWith(prefix + ' skins dreadnought')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(skins.dreadnought);
    } else

    if (message.content.startsWith(prefix + ' skins reddragon')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(skins.reddragon);
    } else

    if (message.content.startsWith(prefix + ' skins neondragon')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(skins.neondragon);
    } else

    if (message.content.startsWith(prefix + ' skins chrome')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(skins.chrome);
    } else

    if (message.content.startsWith(prefix + ' skins infinity')) {
        message.delete();
        message.guild.channels.find("name", "newz-bot-channel").sendMessage(skins.infinity);
    } //skins end here
});
client.login(settings.token);