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
    },
    {
        id: 1,
        name: "AndrIII",
        email: "1@.",
        image: "",
        password: "1",
        audios: [],
        parts: [
            {
                id: 0,
                name: "Disco",
                src: './assets/parts/Elementar_Percussion/Disco.jpg',
                link: './assets/parts/Elementar_Percussion/Download/Disco.pdf'
            },
            {
                id: 1,
                name: "Just a Piccolo",
                src: './assets/parts/Rick_Latham/just_a_piccolo.jpg',
                link: './assets/parts/Rick_Latham/Download/just a piccolo.zip'
            }
        ],
        videos: []
    }
]

module.exports = users;