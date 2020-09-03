const Post=require('../models/post');

module.exports.home = function(req, res){
    // console.log(req.cookies);

    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err,posts){
        return res.render('home', {
            title: "Codial | Home",
            posts: posts
        });
    })
    
}

// module.exports.actionName = function(req, res){}