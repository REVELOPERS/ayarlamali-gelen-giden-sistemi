const {MessageEmbed} = require("discord.js");
const db = require("quick.db");

module.exports = {
    run: async(client, message, args) =>{

if(!args[0]) return message.reply(`Gelen Giden Log Kanalını Ayarlaman İçin **${client.config.info.prefix}gg ayarla #kanal**`)

if (args[0] === "ayarla") {
    let kanal = message.mentions.channels.first()
    if(!kanal) return message.reply(`ayarlamak istediğin kanalı etiketlemelisin!`)
    message.channel.send(new MessageEmbed().setTitle(`Başarılı!`).setColor("RANDOM").setDescription(`Başarılı Bir Şekilde Gelen Giden Log Kanalı ${kanal} Olarak Ayarlanmıştır!`))
    db.set(`gelengidenkanal.${message.guild.id}`, kanal.id)
}

if (args[0] === "sıfırla") {
    const sorgu = db.fetch(`gelengidenkanal.${message.guild.id}`)
    if(!sorgu) return message.reply(`sıfırlamam için ilk önce ayarlamalısın!`)
message.channel.send(new MessageEmbed().setTitle(`Başarılı!`).setColor("RANDOM").setDescription(`Başarılı Bir Şekilde Gelen Giden Log Kanalı Sıfırlanmıştır!`))
db.delete(`gelengidenkanal.${message.guild.id}`)
}

    },
    config:{
        name: "gg" // ben şimdilik bu şekilde yapacağım botta ekli olan gelen giden sistemi ile karışmasın diye siz ayarlarsınız normal isni
    }
}