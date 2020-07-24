module.exports.profile= function(req,res){
    return res.render('user_profile',{
        title:'User Profile'
    });
};
// To render the Sign-in page
module.exports.sign_in= function(req,res){
    return res.render('user_sign_in',{
        title:'Sign In'
    })
}
// To render the sign-up page
module.exports.sign_up= function(req,res){
    return res.render('user_sign_up',{
        title:'Sign Up'
    })
}

module.exports.create= function(req,res){
// ToDO later
};

module.exports.create_session= function(req,res){
    //TODO later
};