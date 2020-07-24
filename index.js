const express= require('express');
const cookieParser= require('cookie-parser');

const app= express();

const port=8000;

const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose');


app.use(express.urlencoded());

app.use(cookieParser());
app.use(express.static('./asset'));

app.use(expressLayouts);
// To have diffrent styles and script on pages renderd via layout design 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);









// To use the express router

app.use('/',require('./router'));


app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error :${err}`);
    }
    console.log(`My server is up and running in the port: ${port}`);
});
