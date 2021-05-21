const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');
const { METHODS } = require('http');
const app = express();

app.use(bodyParser.urlencoded ({extended: true}));

const PORT = process.env.PORT || 3000;

app.set('views', 'dist');
app.set('view engine', 'ejs');
// app.listen(PORT, console.log('Server started on ${3000}'));
app.listen(PORT);

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/videos', express.static(__dirname + 'public/videos'))

app.get('/', (req, res)=>{
    // var pageInfo = {};
    // pageInfo.body_id = 'index';
    res.render('index', {active: "index"});
});

app.get('/about', (req, res)=>{
    res.render('about', {active:"about"});
});

app.get('/work', (req, res)=>{
    res.render('work', {active:"work"});
});

app.get('/invest', (req, res)=>{
    res.render('invest', {active:"invest"});
});

app.get('/blog', (req, res)=>{
    res.render('blog', {active:"blog"});
});

app.get('/newBlog', (req, res)=>{
    res.render('newBlog', {active:"newBlog"});
});

app.get('/contact', (req, res)=>{
    res.render('contact', {active:"contact"});
});

app.get('/login', (req, res)=>{
    res.render('login', {active:"login"});
});

app.get('/signup', (req, res)=>{
    res.render('signup', {active:"signup"});
});

app.get('/userInfo', (req, res)=>{
    res.render('userInfo', {active:"userInfo"});
});

app.get('/forgotPass', (req, res)=>{
    res.render('forgotPass', {active:"forgotPass"});
});

app.get('/addInvestee', (req, res)=>{
    res.render('addInvestee', {active:"addInvestee"});
});

app.get('/kyc', (req, res)=>{
    res.render('kyc', {active:"kyc"});
});

app.get('/link-aadhar', (req, res)=>{
    res.render('link-aadhar', {active:"link-aadhar"});
});

app.get('/link-all', (req, res)=>{
    res.render('link-all', {active:"link-all"});
});

app.get('/pancard', (req, res)=>{
    res.render('pancard', {active:"pancard"});
});

app.get('/choice', (req, res)=>{
    res.render('choice', {active:"choice"});
});

app.post('/newsletter', (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.redirect('/');
        return;
    }

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
            }
        ]
    };

    const postData = JSON.stringify(data);

    fetch ('https://us6.api.mailchimp.com/3.0/lists/c5bfa0297b',{
      method: 'POST',
      headers: {
          Authorization: 'auth c283db3b6e50e57247a8e0f951e9df24-us6'
      },
      body: postData
     })

.then(res.statusCode === 200 ?
    res.redirect('/') :
    res.redirect('/newsletter'))
  .catch(err => console.log(err))
})
