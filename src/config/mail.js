const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "73fd720b3281e2",
        pass: "fd8aae513c9111"
    }
})

module.exports = transport;