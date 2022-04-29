// Song data
const songList = [
    {
        title: "The Pretender",
        file: "thePretender.mp3",
        cover: "1.jpg"

    },
    {
        title: "Run",
        file: "Run.mp3",
        cover: "2.jfif"
    },
    {
        title: "Everlong",
        file: "Everlong.mp3",
        cover: "3.jfif"
    },
]

// Cancion actual
let actualSong = null;



// capturar elementos el DOM para trabajar con JS
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const titulo = document.getElementById("titulo");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
progressContainer.addEventListener("click", setProgress);

// escuchar el elemento Audio
audio.addEventListener("timeupdate", updateProgress)

// escuchar clicks en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
})

next.addEventListener("click", () => nextSong());
prev.addEventListener("click", () => prevSong());

// cargar canciones y mostrar listado de canciones
function loadSongs(){
    songList.forEach((song, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        
        link.textContent = song.title;
        link.href = "#"
        link.addEventListener("click", () => loadSong(index))
        
        li.appendChild(link);
        songs.appendChild(li);
    })
}

// Cargar cancion seleccionada
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        ChangeActiveClass(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = `./Audio/${songList[songIndex].file}`;
        playSong();
        //audio.play();
        //updateControls();
        changeSongTitle(songIndex);
        changeCover(songIndex);
        
        
    }
    
}

// hacer la de barra de progreso clicable
function setProgress(event){
    const totalWidth = this.offsetWidth;
    const progressWidth = event.offsetX;
    const current = (progressWidth/totalWidth)*audio.duration;
    audio.currentTime = current;
}

// Actualizar barra de progreso de la cancion
function updateProgress(event){
    const {duration, currentTime} = event.srcElement;
    const percent = (currentTime/duration)*100;
    progress.style.width = percent + "%";
}

// Actualizar controles
function updateControls(){
    if (audio.paused) {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    } else {
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

// reproducir cancion
function playSong(){
    if (actualSong !== null) {
        audio.play();
        updateControls();
    }
    
}

// pausar cancion
function pauseSong(){
    
    audio.pause();
    updateControls();
}

//Cambiar clase activa
function ChangeActiveClass(lastIndex, newIndex){
    const links = document.querySelectorAll("a");
    if (lastIndex !== null) {
        //links[lastSong].classList.remove("active");
        links[actualSong].classList.remove("active");
    }
    
    links[newIndex].classList.add("active");
}

// Cambiar el cover de la funcion
function changeCover(songIndex){
    cover.src = `./img/${songList[songIndex].cover}`;
}

// Cambiartitulo de la cancion
function changeSongTitle(songIndex){
    titulo.innerText = songList[songIndex].title;
}

//Anterior cancion
function prevSong() {
    //let newIndex = actualSong--;
    if (actualSong > 0) {
        loadSong(actualSong - 1);
    } else {
        loadSong(songList.length - 1);
    }
    
}

//siguiente cancion
function nextSong(){
    //let newIndex = actualSong++;
    if (actualSong < songList.length - 1) {
        loadSong(actualSong + 1);
    } else {
        loadSong(0);
    }
    
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

loadSongs()