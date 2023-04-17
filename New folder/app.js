// const bp = require(bodyParser)
const bodyParser = require('body-parser');
const express = require('express');
const port =process.env.PORT || 5000;
const app= express()


app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/hi.html')
});

// taking data from form


app.post('/formPost',(req,res)=>{
    console.log(req.body);
});

app.listen(port,()=>{
    console.log('server started')
});

