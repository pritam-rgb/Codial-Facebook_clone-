const passport= require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const User=require('../models/user');
const crypto= require('crypto');


passport.use(new googleStrategy({
    clientID:"383736552499-cs1qhhv1mniebfp4he66vl7dnfhqdfcr.apps.googleusercontent.com",
    clientSecret:"5Io-W3A9cGiHtLULpvBjdY74",
    callbackURL:"http://localhost:8000/users/auth/google/callback"
},
function(accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].value}).exec(function(err,user){
        if(err){console.log('Error in google-strategy',err);return};
        console.log(profile);
        if(user){
            return done(null,user);
        }else{
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex')
            },
            function(err,user){
                if(err){console.log('Error in google-strategy',err);return};
                
                return done(null,user);
            }
            )
        }
    })
}
));

module.exports=passport;