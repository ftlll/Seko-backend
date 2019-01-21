const mailer = require('nodemailer');

const config = require('../config/mailConfig');

const transport = mailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure || false, 
    auth: {
        user: config.user, 
        pass: config.pass 
    }
});

function sendMail(email, subject, content) {
    return new Promise(() => {
        const mailOptions = {
            from: config.user,
            to: email,
            subject: subject,
            html: content // html body
        };
        transport.sendMail(mailOptions, (err, info) => {
            if (err) {
                resolve(err);
            } else {
                resolve(info);
            }
        });
    });
}
 
module.exports = sendMail;