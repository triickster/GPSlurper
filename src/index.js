
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const tokenpleaseuseenvvar = '';

const idchannel = '';


const regexp = /(https?:\/\/[^\s]+\.(?:jpg|png|jpeg|gif|mov|mp4))/gi;

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  const channel = client.channels.get(idchannel);
  let messages = await channel.fetchMessages({ limit: 100 });
  while (messages.size > 0) {
    messages.forEach((message) => {
      if (message.content) {
        const urls = message.content.match(regexp);
        if (urls) {
          const gayblackniggers = urls.filter((url) =>
            /\.(jpg|png|jpeg|gif|mov|mp4)$/.test(url)
          );
          if (gayblackniggers.length > 0) {
            fs.appendFileSync('links.txt', gayblackniggers.join('\n') + '\n');
          }
        }
      }
    });

   
    const fatniggers = messages.last().id;

   
    messages = await channel.fetchMessages({ limit: 100, before: fatniggers });
  }

  console.log('UGH UHHHHHH NIGGERSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
});

client.on('message', (message) => {
  if (message.channel.id === idchannel) {
    const urls = message.content.match(regexp);
    if (urls) {
      const gayblackniggers = urls.filter((url) =>
        /\.(jpg|png|jpeg|gif|mov|mp4|webp|)$/.test(url)
      );
      if (gayblackniggers.length > 0) {
        fs.appendFileSync('links.txt', gayblackniggers.join('\n') + '\n');
      }
    }
  }
});


client.login(tokenpleaseuseenvvar).then(() => {
  console.log('nigger on...');
}).catch((error) => {
  console.error('cant login:', error);
});
