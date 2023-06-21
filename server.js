const express = require('express');
const logger = require('morgan');
// const multer = require('multer')
// const upload = multer()

const app = express(); 

app.use(logger('dev'))
app.use(express.urlencoded())
// app.use(upload.any()) 
app.use(express.json())

app.get('/', (req, res) => {
    res.send("ok")
})

app.post('/api/:articleId/:lang', (req, res) => {
    console.log("req.body= ", req.body); 
    // console.log(req.body.email);
    // console.log(req.headers);
    console.log("req.header.authorization= ", req.headers.authorization)
    console.log("req.query= ", req.query); 
    console.log("req.params=", req.params);
    // console.log("req.params.articleId=", req.params.articleId);
    res.status(200).send("POST /api works");
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
}) 
