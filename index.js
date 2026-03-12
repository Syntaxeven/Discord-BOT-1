const { Client, GatewayIntentBits, Collection } = require('discord.js')
const fs = require('fs')
const config = require('./config.json')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
})

client.commands = new Collection()

// command handler
require('./handlers/commandHandler')(client)

// event handler
require('./handlers/eventHandler')(client)

client.login(config.token)