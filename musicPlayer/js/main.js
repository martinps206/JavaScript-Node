// Song data
const songList = [
    {
        title: "The Pretender",
        file: "thepretender.mp3",
        cover: "1.jpeg"

    },
    {
        title: "Run",
        file: "run.mp3",
        cover: "2.jpeg"
    },
    {
        title: "Everlong",
        file: "everlong.mp3",
        cover: "3.jpeg"
    },
]

// capturar elementos el DOM para trabajar con JS
const songs = document.getElementById("songs");
// cargar canciones mostrar listado de canciones
function loadSongs(){
    songList.forEach(song => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = song.title;
        li.appendChild(link);
        songs.appendChild(li)
    })
}

loadSongs()