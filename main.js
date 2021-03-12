client.on('guildMemberAdd', (member) => {
  let kanal = db.fetch(`gelengidenkanal.${member.guild.id}`);

  if(!kanal) return;

  member.guild.channels.cache.get(`${kanal}`).send(
    new MessageEmbed()
    .setTitle(`${client.config.emoji.girdi} | Yeni Üye Katıldı!`) // kendi emojilerinizi ayarlarsınız benim emojilerim config dosyasında kayıtlı oldugundan bu şekilde yaptım
  .setColor(client.config.colors.default)
  .setDescription(`**${member.user.username}** Sunucuya Katıldı!`)
  .setThumbnail(member.user.displayAvatarURL())
    )
});

client.on('guildMemberRemove', (member) => {
  let kanal = db.fetch(`gelengidenkanal.${member.guild.id}`);

  if(!kanal) return;

  member.guild.channels.cache.get(`${kanal}`).send(
    new MessageEmbed()
    .setTitle(`${client.config.emoji.çıktı} | Üye Ayrıldı!`) // kendi emojilerinizi ayarlarsınız benim emojilerim config dosyasında kayıtlı oldugundan bu şekilde yaptım
  .setColor(client.config.colors.failed)
  .setDescription(`**${member.user.username}** Sunucudan Ayrıldı!`)
  .setThumbnail(member.user.displayAvatarURL())
    )
});
