const queue = require('../config/kue');
const commentMailer = require('../mailers/comments_mailer');

queue.process('emails',function(job,done){
    console.log("Emails worker are processing a job",job)
    commentMailer.newComment(job.data);
    done();
});