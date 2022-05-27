const mailer = require('../config/mail')

class EmailService {

    async sendEmail(to,from, subject, content){
        await mailer.sendMail({
            from,
            to,
            subject: subject,
            text: content
        })
    }
}

module.exports = EmailService