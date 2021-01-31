const nodeMailer = require('../config/nodeMailer');

exports.newComment = (comment) => {
    console.log("Inside new comment mailer");

    nodeMailer.transporter.sendMail({
        from:'Pritam',
        to:comment.user.email,
        subject:"New Comment Published",
        html:'<h1>Yup,your comment has published</h1>'
    },(err,info)=>{
        if(err){console.log("Error in sending mail",err);return;}

        console.log("Mail delivered",info);
        return;
    })
}