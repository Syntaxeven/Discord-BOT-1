const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {

data: new SlashCommandBuilder()
.setName('send')
.setDescription('Send embed message')
.addChannelOption(option =>
option.setName('channel')
.setDescription('Choose channel')
.setRequired(true))
.addStringOption(option =>
option.setName('title')
.setDescription('Embed title')
.setRequired(true))
.addStringOption(option =>
option.setName('description')
.setDescription('Embed message')
.setRequired(true))
.addStringOption(option =>
option.setName('image')
.setDescription('Image URL')
.setRequired(false)),

async execute(interaction) {

const channel = interaction.options.getChannel('channel')
const title = interaction.options.getString('title')
let description = interaction.options.getString('description')
description = description.replace(/\\n/g, '\n')
const image = interaction.options.getString('image')

const embed = new EmbedBuilder()
.setColor('#2b2d31')
.setTitle(title)
.setDescription(description)
.setFooter({ text: `Sent by ${interaction.user.username}` })
.setTimestamp()

if (image) embed.setImage(image)

await channel.send({ embeds: [embed] })

await interaction.reply({ content: '✅ Message Sent', ephemeral: true })

}

}