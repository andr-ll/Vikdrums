const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

let videoData = [
    {
        id: 1,
        collection: "Elementar Percussion",
        content: [
            {
                key: 1,
                name: "Rock",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Disco",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Reggae",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            },
            {
                key: 4,
                name: "Waltz",
                src: "https://youtube.com/embed/EuSqrA1TG1U"
            },
            {
                key: 5,
                name: "Samba",
                src: "https://youtube.com/embed/-irT8ll3f_0"
            },
            {
                key: 6,
                name: "Swing",
                src: "https://youtube.com/embed/kFYAUWZ8eW4"
            },
            {
                key: 7,
                name: "Tango version 1",
                src: "https://youtube.com/embed/jdFj9VK-BXw"
            },
            {
                key: 8,
                name: "Tango version 2",
                src: "https://youtube.com/embed/ZnCnWGnyYA0"
            },
            {
                key: 9,
                name: "Shuffle",
                src: "https://youtube.com/embed/ugNle_3Dw6A"
            },
            {
                key: 10,
                name: "Mambo",
                src: "https://youtube.com/embed/NxfgqIWRLf4"
            },
            {
                key: 11,
                name: "Rock-n-Roll",
                src: "https://youtube.com/embed/6AoEOyZdq80"
            },
            {
                key: 12,
                name: "Funk",
                src: "https://youtube.com/embed/Pdh-uTxoUYc"
            },
            {
                key: 13,
                name: "Marsch Polka",
                src: "https://youtube.com/embed/hsdMXJ7nCcQ"
            },
            {
                key: 14,
                name: "Foxtrot",
                src: "https://youtube.com/embed/-F0rJbaMnAM"
            },
            {
                key: 15,
                name: "Cha-Cha-Cha",
                src: "https://youtube.com/embed/XMbTR3SoLxY"
            },
            {
                key: 16,
                name: "Beguine",
                src: "https://youtube.com/embed/_zYHFOl4Gl8"
            },
            {
                key: 17,
                name: "Bossa Nova",
                src: "https://youtube.com/embed/8HWwUsbHZD0"
            }
        ]
    },
    {
        id: 2,
        collection: "R.Rumpel",
        content: [
            {
                key: 1,
                name: "On The Rocks",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Just a piccolo",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Time",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 3,
        collection: "Houghton",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 4,
        collection: "Houghton",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 5,
        collection: "Houghton",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 6,
        collection: "Artist",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 7,
        collection: "Artist",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 8,
        collection: "Artist",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 9,
        collection: "Artist",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
    {
        id: 10,
        collection: "Artist",
        content: [
            {
                key: 1,
                name: "Song 1",
                src: "https://youtube.com/embed/Y1L9BQq6WX8"
            },
            {
                key: 2,
                name: "Song 2",
                src: "https://youtube.com/embed/n1SocIhZ96E"
            },
            {
                key: 3,
                name: "Song 3",
                src: "https://youtube.com/embed/9wTBO8xguzQ"
            }
        ]
    },
]

let audioData = [
    {
        id: 1,
        name: "Elementar Percussion",
        audio: [
            {
                id: 1,
                name: "Titanium",
                plus: './assets/audio/plus/Elementar_Percussion/Titanium.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Sugar.mp3'
            },
            {
                id: 2,
                name: "Chandelier",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
        ]

    },
    {
        id: 2,
        name: "Template 1",
        audio: [
            {
                id: 1,
                name: "Song 1",
                plus: './assets/audio/plus/Elementar_Percussion/Titanium.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Sugar.mp3'
            },
            {
                id: 2,
                name: "Song 2",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
        ]

    },
    {
        id: 3,
        name: "Template 3",
        audio: [
            {
                id: 1,
                name: "Song 1",
                plus: './assets/audio/plus/Elementar_Percussion/Titanium.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Sugar.mp3'
            },
            {
                id: 2,
                name: "Song 2",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
            {
                id: 3,
                name: "Song 3",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
            {
                id: 4,
                name: "Song 4",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
            {
                id: 5,
                name: "Song 5",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
            {
                id: 6,
                name: "Song 6",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
        ]

    },
    {
        id: 4,
        name: "Template 4",
        audio: [
            {
                id: 1,
                name: "Song 1",
                plus: './assets/audio/plus/Elementar_Percussion/Titanium.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Sugar.mp3'
            },
            {
                id: 2,
                name: "Song 2",
                plus: './assets/audio/plus/Elementar_Percussion/Chandelier.mp3',
                minus: './assets/audio/minus/Elementar_Percussion/Paradise.mp3'
            },
        ]

    },
]

let partsData = [
    {
        id: 1,
        name: 'Edward Kopietski - "Elementar Percussion"',
        parts: [
            {
                id: 1,
                name: "Rock",
                src: './assets/parts/Elementar_Percussion/Rock.jpg',
                link: './assets/parts/Elementar_Percussion/Download/Rock.pdf'
            },
            {
                id: 2,
                name: "Disco",
                src: './assets/parts/Elementar_Percussion/Disco.jpg',
                link: './assets/parts/Elementar_Percussion/Download/Disco.pdf'
            },
            {
                id: 3,
                name: "Reggae",
                src: './assets/parts/Elementar_Percussion/Reggae.jpg',
                link: './assets/parts/Elementar_Percussion/Download/Reggae.pdf'
            },
        ]
    },
    {
        id: 2,
        name: "Rick Latham",
        parts: [
            {
                name: "Just a Piccolo",
                src: './assets/parts/Rick_Latham/just_a_piccolo.jpg',
                link: './assets/parts/Rick_Latham/Download/just a piccolo.zip'
            }
        ]
    }
]

let emails = [

]

let users = [
    {
        id: 0,
        name: "AndrII",
        email: "andr@ya.ru",
        image: "",
        password: "123qwe",
        audios: [],
        parts: [],
        videos: []
    }
]

app.get('/', (req, res) => {
    res.end('Everything is working here!')
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
    res.send({users: users, newUser: newUser});

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