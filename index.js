const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const prophecies = [
  "🔮 A hidden path shall soon reveal itself.",
  "⚡ The gods watch your next decision carefully.",
  "🏛️ Wisdom awaits those who seek it.",
  "☥ An ancient power stirs beyond the veil.",
  "🪓 A challenge approaches. Meet it boldly."
];

client.once('ready', () => {
  console.log(`Oracle awakened as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (msg.includes('oracle')) {
    message.reply(prophecies[Math.floor(Math.random() * prophecies.length)]);
  }

  if (msg.includes('zeus')) {
    message.reply('⚡ Zeus is the king of the Olympian gods.');
  }

  if (msg.includes('thor')) {
    message.reply('🪓 Thor wields Mjolnir and protects Asgard.');
  }

  if (msg.includes('odin')) {
    message.reply('👁️ Odin sacrificed much in pursuit of wisdom.');
  }

  if (msg.includes('anubis')) {
    message.reply('☥ Anubis guides souls through the afterlife.');
  }
});

client.login(process.env.DISCORD_TOKEN);
