const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

let videoData = require('./Data/videoData');
let audioData = require('./Data/audioData');
let partsData = require('./Data/partsData');
let emails = require('./Data/emails');
let users = require('./Data/users');

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length,
        image: "",
        audios: [],
        parts: [],
        videos: [],
        ...req.body
    };
    users.push(newUser);
    res.send({ users: users, newUser: newUser });
})

app.post('/addPart', (req, res) => {
    let currentUser = users.find(item => item.email === req.body.userData.email && item.name === req.body.userData.name);
    const addPart = {
        id: currentUser.parts.length,
        name: req.body.partData.name,
        src: req.body.partData.src,
        link: req.body.partData.link,
    }
    currentUser.parts.push(addPart)
    res.send(currentUser);
})

app.delete('/removePart', (req, res) => {
    let currentUser = users.find(item => item.email === req.body.userData.email && item.name === req.body.userData.name);
    currentUser.parts = currentUser.parts.filter(item => item.name !== req.body.partData.name);
    res.send(currentUser);
})

app.get('/videoData', (req, res) => {
    res.send(videoData);
})

app.get('/audioData', (req, res) => {
    res.send(audioData);
})

app.get('/partsData', (req, res) => {
    try {
        res.send(partsData);
    }
    catch (err) {
        res.send(err);
    }
})

app.post('/emails', (req, res) => {
    try {
        const email = {
            id: emails.length,
            ...req.body
        };
        emails.push(email);
        res.send(email)
    }
    catch (err) {
        res.send(err)
    }
})

app.get('/emails', (req, res) => {
    res.send(emails)
})

app.listen(port, () => {
    console.log(`Server has been started at http://localhost:${port}`)
});