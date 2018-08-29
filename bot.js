const another = new Discord.Client();
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
  let words = [`**
سيرفر فورتنايت
تبغا تعرف كل تسريبات فورتنايت
تبغا تشوف الايتيم شوب حق فورتنايت بدون ما تفتح العبه
تبغا تعرف كل شي جديد في فورتنايت
تبغا لعب وفله وضحك السيرفر دا يضمنلك كل شي
[ https://discord.gg/4ubEVQN ]
**`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
سيرفر فورتنايت
تبغا تعرف كل تسريبات فورتنايت
تبغا تشوف الايتيم شوب حق فورتنايت بدون ما تفتح العبه
تبغا تعرف كل شي جديد في فورتنايت
تبغا لعب وفله وضحك السيرفر دا يضمنلك كل شي
[ https://discord.gg/4ubEVQN ]
**`) 
}).catch(console.error)
})

another.login(process.env.BOTTT_TOKEN);
