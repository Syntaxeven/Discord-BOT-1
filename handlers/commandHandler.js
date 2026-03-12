const fs = require('fs')
const path = require('path')

module.exports = (client) => {

const commandsPath = path.join(__dirname, '../commands')
const commandFiles = fs.readdirSync(commandsPath)

for (const file of commandFiles) {

const command = require(`../commands/${file}`)
client.commands.set(command.data.name, command)

}

client.on('interactionCreate', async interaction => {

if (!interaction.isChatInputCommand()) return

const command = client.commands.get(interaction.commandName)
if (!command) return

try {
await command.execute(interaction)
} catch (error) {
console.error(error)
}

})

}