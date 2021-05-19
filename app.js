const express = require('express');
const app = express();
app.set('views', 'dist');
app.set('view engine', 'ejs');
app.listen(3000);

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