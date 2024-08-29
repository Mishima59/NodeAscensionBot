const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    on: true,
    async execute(client, commandeName, channel, booleanTriggerInterne) {
        if (commandeName === 'mishima-reset-salon-suivi' && booleanTriggerInterne) {
            let fetched;
            do {
                fetched = await channel.messages.fetch({limit: 99});
                await channel.bulkDelete(fetched);
            }
            while (fetched.size >= 2);

            for (let i = 1; i < 21; i++) {
                await channel.send("————\n" + i.toString() + " -");
            }
            await channel.send(
                "Consignes GS : \n🎯 : Vous faites des tests sur la cible\n🛡️: Défense T1 posée en 1v1\n⚔️: Défense T1 posée en 3v3\n1️⃣: Résultat ⭐\n2️⃣: Résultat ⭐⭐\n✅: Résultat ⭐⭐⭐ / Cible clear\n🌶️ : Fail")

            await channel.send(
                "\nFichier à disposition, dès midi veuillez poser des Defs pour les copains pour la journée et remplir le fichier merci 👆.\n\n——————\n\nVeuillez réagir seulement avec un emoji comme expliqué ci-dessus et ne rien écrire en dessous svp. Merci")

        }
    },
};