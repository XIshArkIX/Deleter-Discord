message.channel.fetchMessages({ limit: 100 }).then(m => {
  const filtered = m.filter(a => a.author.username === 'self-promoter');
  message.channel.send(`Message size: ${filtered.size}`);
  filtered.tap(c => message.guild.ban(c.author, { days: 7, reason: 'PR' }));
}).catch(console.error());
