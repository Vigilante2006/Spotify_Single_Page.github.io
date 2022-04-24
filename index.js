console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let miniPlayBtn = document.getElementById("miniPlayBtn");
let myProgressBar = document.getElementById("myProgressBar");
let songName = document.getElementById("songName");
let profile = document.getElementById("profile");

let progressBar = document.getElementById("progressBar");
let miniArtistName = document.getElementById("miniArtistName");
let gif = document.getElementById("gif");
let volumeControl = document.getElementsByClassName("volumeControl");
let titleName = Array.from(document.getElementsByClassName("titleName"));
let albumList = Array.from(document.getElementsByClassName("albumList"));
let songAddedBy = Array.from(document.getElementsByClassName("songAddedBy"));
let songs = [{
    filePath: " songs/1.mp3",
    songName: "Baarishein",
    coverPath: "covers/1.png",
    artist: "Atif Aslam",
    albumFolder: "Baarishein",
},
{
    filePath: "songs/2.mp3",
    songName: "Haaye Oye",
    coverPath: "covers/2.jpg",
    artist: "QARAN",
    albumFolder: "Haaye Oye",
},
{
    filePath: "songs/3.mp3",
    songName: "Ishq Mubarak",
    coverPath: "covers/3.png",
    artist: "Arijit Singh, Zack Knight",
    albumFolder: "Tum Bin-2",
},
{
    filePath: "songs/4.mp3",
    songName: "Ishqan De Lekhe 2",
    coverPath: "covers/4.png",
    artist: "Sajjan Adeeb",
    albumFolder: "Ishqan De Lekhe 2",
},
{
    filePath: " songs/5.mp3",
    songName: "Meri Kamzori",
    coverPath: "covers/5.png",
    artist: "Ladi Singh",
    albumFolder: "Meri Kamzori",
},
{
    filePath: "songs/6.mp3",
    songName: "Naino Ki To Baat Naina Jane Hai",
    coverPath: "covers/6.png",
    artist: "Prateeksha Shrivastava",
    albumFolder: "Shades Of Love",
},
{
    filePath: "songs/7.mp3",
    songName: "Tenu Na Bol Pawaan",
    coverPath: "covers/7.png",
    artist: "Jyotica Tangri, Yasser Desai",
    albumFolder: "Behen Hogi Teri",
},
{
    filePath: "songs/8.mp3",
    songName: "Tu Aa Jaana",
    coverPath: "covers/8.png",
    artist: "Palak Muchhal",
    albumFolder: "Tu Aa Jaana",
},
{
    filePath: "songs/10.mp3",
    songName: "Zakhmi Dil",
    coverPath: "covers/9.jfif",
    artist: "Gippy Grewal",
    albumFolder: "Singh vs Kaur",
},
{
    filePath: "songs/10.mp3",
    songName: "Zaroorat 2.0",
    coverPath: "covers/10.png",
    artist: "Rahul Jain",
    albumFolder: "Zaroorat 2.0",
},
];

titleName.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByClassName("sName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("artistName")[0].innerText = songs[i].artist;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
});
albumList.forEach((element, i) => {
    element.getElementsByClassName("albumFolder")[0].innerText =
        songs[i].albumFolder;
});
songAddedBy.forEach((element, i) => {
    element.getElementsByClassName("songAlbum")[0].innerText = songs[i].artist;
});

// audioElement.play();
//handeling play/pause button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
        (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("miniPlayBtn")).forEach(
        (element) => {
            element.classList.add("fa-play");
            element.classList.remove("fa-pause");
            masterPlay.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
            gif.style.opacity = 0;
        }
    );
};
Array.from(document.getElementsByClassName("miniPlayBtn")).forEach(
    (element) => {
        element.addEventListener("click", (e) => {
            makeAllPlay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            audioElement.src = `songs/${songIndex}.mp3`;
            songName.innerText = songs[songIndex - 1].songName;
            profile.src = songs[songIndex - 1].coverPath;
            miniArtistName.innerText = songs[songIndex - 1].artist;
            audioElement.play();
            audioElement.currentTime = 0;
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            gif.style.opacity = 1;
        });
    }
);

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    songName.innerText = songs[songIndex].songName;
    profile.src = songs[songIndex].coverPath;
    miniArtistName.innerText = songs[songIndex].artist;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
});
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    songName.innerText = songs[songIndex].songName;
    profile.src = songs[songIndex].coverPath;
    miniArtistName.innerText = songs[songIndex].artist;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
});
audioElement.addEventListener("timeupdate", () => {
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
    if (progress == 100) {
        if (songIndex >= 9) {
            songIndex = 0;
        } else {
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        songName.innerText = songs[songIndex].songName;
        profile.src = songs[songIndex].coverPath;
        miniArtistName.innerText = songs[songIndex].artist;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
});

// volumeControl.getElementsByClassName("volumeControl")addEventListener("scroll",()=>{
//     if(volume==0){
//         volume.classList
//     }
// })




// duration/currentTime

progressBar.addEventListener("change", () => {
    audio.volume = progressBar / 100;
});


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctr1Key && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
    if (e.ctr1Key && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }
    if (e.ctr1Key && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }
    if (e.ctr1Key && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }

};
