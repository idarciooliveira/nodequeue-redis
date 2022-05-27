const EmailService = require('../services/EmailService');

module.exports =  {
    key: 'RegistrationMail',
    async handle({ data }){
       const {user} = data;

       const emailService = new EmailService();
       await emailService.sendEmail(user.email,
                        'nodequeue@node.com',
                        'Welcome to Queue',
                        `Thanks for Subscribe ${user.name}`)

    }
}