const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~~~~`);
      console.log(`ON [ ${client.guilds.size} ] Server `);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`~~~~~~~~~~~~~~~~~~~~`);
});

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`****
سلام عليكم :heart: 
 مليت وانت تلعب لوحدك فورتنايت وتبغا تعرف كل تسريبات اللعبه و تبغا تشتري فيباكس وما معاك فيزا تبغا تعرف كل معلومات فورتنايت
السيرفر دا يتيح لك كل شئ ادخل ما تتردد
https://discord.gg/kBbZ5nU
**`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم :heart: 
 مليت وانت تلعب لوحدك فورتنايت وتبغا تعرف كل تسريبات اللعبه و تبغا تشتري فيباكس وما معاك فيزا تبغا تعرف كل معلومات فورتنايت
السيرفر دا يتيح لك كل شئ ادخل ما تتردد
https://discord.gg/kBbZ5nU
**`) 
}).catch(console.error)
})
another.login(process.env.BOT_TOKEN);
