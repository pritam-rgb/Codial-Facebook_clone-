module.exports.profile= function(req,res){
    return res.render('user_profile',{
        title:'User Profile'
    });
};

module.exports.sign_in= function(req,res){
    return res.render('user_sign_in',{
        title:'Sign In'
    })
}

module.exports.sign_up= function(req,res){
    return res.render('user_sign_up',{
        title:'Sign Up'
    })
}