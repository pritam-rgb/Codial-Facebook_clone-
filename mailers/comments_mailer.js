const nodeMailer = require('../config/nodeMailer');

exports.newComment = (comment) => {
    console.log("Inside new comment mailer");
    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');
    nodeMailer.transporter.sendMail({
        from:'Pritam',
        to:comment.user.email,
        subject:"New Comment Published",
        html:htmlString
    },(err,info)=>{
        if(err){console.log("Error in sending mail",err);return;}

        console.log("Mail delivered",info);
        return;
    })
}