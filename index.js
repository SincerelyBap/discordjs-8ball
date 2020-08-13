const Discord = require('discord.js');
const client = new Discord.Client();
const token = "INSERT TOKEN HERE"
const prefix = "+"
const eightballresponses = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes, definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Ask again later",
	"Better not tell you now",
	"Maybe",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
]

// STARTUP
client.once('ready', () => {
    console.log('Logged in as ' + client.user.tag);
});

// COMMAND
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === '8b') {
        if(!args[0]){
			message.channel.send('Please ask a question.')
		} else {
		let randomcolor = ((1 << 24) * Math.random() | 0).toString(16)
		const AwnserEmbed = new Discord.MessageEmbed()
			.addField(message.author.username + ' asked:', args.join(' '))
			.addField("Answer:", (eightballresponses[Math.floor(Math.random() * eightballresponses.length)]))
			.setColor(randomcolor)
			message.channel.send(AwnserEmbed)
		}
    }
});

client.login(token);