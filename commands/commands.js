const dc = require('discord.js'); // Praktisch für RichEmbed etc.
const index = require('./../index');
const Discord = require('discord.js'); // Praktisch für RichEmbed etc.

module.exports.cmd = {
  name: 'help'
};

module.exports.onCommand = async (bot, msg, cmd, args) => {
  var prefix = index.getGuildPrefix(msg.guild.id)

  const start = new Discord.RichEmbed()
    .setTitle("Help")
    .setDescription(`Here is a full List of all the Commands. \n Prefix on your Server: **${index.getGuildPrefix(msg.guild.id)}**`)
    .setColor(0x7067CF)
  msg.author.send(start)

  const api = new Discord.RichEmbed()
    .setTitle("API")
    .setDescription("API Commands provided by **nekos.life**.")
    .addBlankField(true)
    .setColor(0xFFB7D8)

    .addField(`${prefix}nekos`, `!neko Show's a Image of a Neko. Use !neko help for more Information.`)
    .addField(`${prefix}lewd`, `**[NSFW]** Show's a Image of a Lewd Girl.`)
    .addField(`${prefix}cum`, `**[NSFW]** Show's a Image of a Lewd Girl.`)
    .addField(`${prefix}fox`, `Show's a Image of a Fox Girl.`)
    .addField(`${prefix}magicball`, `Let the Fate decide!`)
    .addField(`${prefix}hug`, `Lets you hug another User.`)
  msg.author.send(api)



  const commands = new Discord.RichEmbed()
    .setTitle("Commands")
    .setDescription("Helpful Commands for you and your Server.")
    .addBlankField(true)
    .setColor(0xB7C0EE)

    .addField(`${prefix}help`, `Shows you this List.`)
    .addField(`${prefix}google`, `Lets you Google right from the Discord Chat.`)
    .addField(`${prefix}invite`, `Generates a Bot Invite Link for you to share.`)
    .addField(`${prefix}ping`, `Shows you your Ping.`)
  msg.author.send(commands)



  const admin = new Discord.RichEmbed()
    .setTitle("Admin Commands")
    .setDescription("Commands that help you Administrate your Server.")
    .addBlankField(true)
    .setColor(0xEF2B48)

    .addField(`${prefix}prefix`, `**[ADMINISTRATOR]** Lets you set the Prefix for the Bot.`)
  msg.author.send(admin)
}