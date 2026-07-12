require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Events
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`${c.user.tag} đã online!`);
});

client.login(process.env.TOKEN)