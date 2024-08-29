const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mishima-reset-salon-suivi')
        .setDescription('Reset salon Suivi GS'),
    async execute(interaction) {
        if(interaction.commandName === 'mishima-reset-salon-suivi')
        {
            interaction.client.emit('messageCreate', interaction.client, interaction.commandName, interaction.channel, true);
        }

        await interaction.reply("En cours de refresh");
        console.log(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};