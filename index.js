const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7498251188:AAGpMNYzejMvhPcP0t0VbVC0LNSH3eAKWXU"; // Replace with your bot token
const webhookUrl = "https://i-ai-telegram-afg7.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN);

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});