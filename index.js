const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const prophecies = [
  "The threads of fate tighten around a choice not yet made.",
  "A forgotten truth sleeps beneath familiar ground.",
  "Power without wisdom becomes its own prison.",
  "The gods are silent because they await your answer.",
  "A door long sealed shall soon open."
];

const lore = {
  zeus: `ZEUS ⚡

King of Olympus and ruler of the skies. Zeus led the Olympians to victory during the Titanomachy and became sovereign of the cosmos.`,

  odin: `ODIN ⚡

The All-Father of Norse mythology. Odin sacrificed an eye for wisdom and mastered the runes through great sacrifice.`,

  ra: `RA ☀️

The supreme sun god of Egypt who sails across the heavens by day and battles Apophis through the underworld each night.`,

  thor: `THOR 🔨

Protector of Midgard and wielder of Mjolnir, the legendary hammer of thunder.`,

  hades: `HADES 💀

Ruler of the Underworld and guardian of the dead. Though feared, he is not evil and maintains the balance of life and death.`
};

const events = {
  ragnarok: `RAGNAROK

The final battle of Norse mythology in which gods, giants, and monsters clash before the world is reborn.`,

  titanomachy: `TITANOMACHY

The great war between the Titans and Olympian gods that established Zeus as ruler of the cosmos.`,

  trojanwar: `TROJAN WAR

The legendary conflict between Greece and Troy that produced heroes such as Achilles and Odysseus.`
};

client.once('ready', () => {
  console.log(`Oracle awakened as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (!msg.startsWith('oracle')) return;

  const query = msg.replace('oracle', '').trim();

  if (query === 'prophecy') {
    return message.reply(
      prophecies[Math.floor(Math.random() * prophecies.length)]
    );
  }

  for (const [name, text] of Object.entries(lore)) {
    if (query.includes(name)) {
      return message.reply(text);
    }
  }

  for (const [name, text] of Object.entries(events)) {
    if (query.includes(name)) {
      return message.reply(text);
    }
  }

  if (query === 'who are you') {
    return message.reply(
      'I am the Oracle of Everywhen, keeper of myths, legends, and prophecy.'
    );
  }

  return message.reply(
    'I do not know that tale. Try: oracle zeus, oracle odin, oracle ra, oracle ragnarok, or oracle prophecy.'
  );
});

client.login(process.env.DISCORD_TOKEN);
