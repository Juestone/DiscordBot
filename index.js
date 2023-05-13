const discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(process.env.TOKEN);