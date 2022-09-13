module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        const administrators = await strapi.query("plugin::users-permissions.user").findMany({
            where: {
                confirmed: true,
                blocked: true,
            }
        });
        const emails = administrators.map((a) => a.email);

        let html = '<p>Oggetto: ' + result.subject + '</p>'
        html += '<p>Mittente: ' + result.senderName + '</p>'
        html += '<p>Email: ' + result.email + '</p>'
        html += '<p>Telefono: ' + result.phone + '</p>'
        html += '<p>Descrizione: ' + result.message + '</p>'

        try {
            await strapi.plugins['email'].services.email.send({
                to: emails,
                subject: '[ValeCreative] Hai ricevuto un nuovo messaggio',
                html: html,
            })
        } catch (err) {
            console.log(err);
        }
    }
}