const config = require('../config.json')

module.exports = {

name: 'guildMemberAdd',

async execute(member) {

const role = member.guild.roles.cache.get(config.autoRole)

if (!role) return

await member.roles.add(role).catch(() => {})

}

}