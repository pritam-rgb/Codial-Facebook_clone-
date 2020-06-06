const express= require('express');

const app= express();

const port=8000;

app.listen(port,function(err){
    if(err){
        console.log(`Error :${err}`);
    }
    console.log(`My server is up and running in the port: ${port}`);
});
