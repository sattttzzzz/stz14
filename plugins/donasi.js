let handler = async m => m.reply(`
            .✵.GRUP PANDABOT.✵.

           https://chat.whatsapp.com/Ceyf9fqMNWe9nHC7dG9Fag
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
