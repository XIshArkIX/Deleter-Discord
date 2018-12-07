if (message.content === 'delete') {
  const guild = message.guild;
  const mmb = guild.members.filter(e => e.user.username === 'self-promoter');
  mmb.tap(e => e.ban({ days: 7, reason: 'PR' }));
  message.channel.send(`How much: ${mmb.size}`); // For some info

}
