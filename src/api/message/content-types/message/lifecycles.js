module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;
        console.log(event)

        let html = '<p>Oggetto: ' + result.subject + '</p>'
        html += '<p>Mittente: ' + result.senderName + '</p>'
        html += '<p>Email: ' + result.email + '</p>'
        html += '<p>Telefono: ' + result.phone + '</p>'
        html += '<p>Descrizione: ' + result.message + '</p>'

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'valecreative@grr.la',
              from: 'noreply@valecreative.it', // e.g. single sender verification in SendGrid
              replyTo: 'noreply@valecreative.it',
              subject: '[ValeCreative] Hai ricevuto un nuovo messaggio',
              html: html, 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}