
// menu control ----------------

const openBar = document.querySelector(".toggle");
const container = document.querySelector('.container');
const menu = document.querySelector(".menu");
const headControl = document.querySelector(".headControl")
const menuItem = document.querySelectorAll(".menuItem")


openBar.addEventListener("click", function () {


    openBar.classList.toggle('active');
    container.classList.toggle('active');
    headControl.classList.toggle('active');

    menuItem.forEach(menuItem => {
        menuItem.classList.toggle('menuActivate')
    });


})

menu.addEventListener("click", function () {
    container.classList.toggle('active')
    openBar.classList.toggle('active');
    headControl.classList.toggle('active');
    menuItem.forEach(menuItem => {
        menuItem.classList.toggle('menuActivate')
    });
})


// movie control---------------- 

//--call movies here -------

movieTitle = ["beach", "hotel1", "hotel2", "feet"]


// -------Play random movie----------


function loadMovie() {

    let movieNumber = Math.floor(Math.random() * movieTitle.length)

    let movieLocation = `./images/${movieTitle[movieNumber]}.mp4`;


    document.getElementById("movie").src = movieLocation
    console.log(movieLocation)
}

// setInterval(loadMovie, 8000)

//------Play movies in order------------


// function loadMovieLoop() {


//     for (let n = 0; n < movieTitle.length; n++) {

//         playHead(n)
//     }

//     function playHead(n) {

//         setTimeout(() => {
//             document.getElementById("movie").setAttribute('src', `./images/${movieTitle[n]}.mp4`)
//         }, 10000 * n);

//     }
// }

// setInterval(loadMovieLoop, 5000 * movieTitle.length)

// --------scroll lock

window.onscroll = function () { scrollLock() }

const header = document.querySelector(".headControl")
const mastHead = document.querySelector(".mastHead")
const title = document.getElementById("titleMain")
const title2 = document.getElementById("titleMain2")
const title3 = document.getElementById("titleMain3")
const title4 = document.getElementById("titleMain4")

const sticky = header.offsetTop;

function scrollLock() {
    if (window.pageYOffset > sticky) {
        header.classList.add("superHeader")
        title.classList.add("titleShrink")
        title2.classList.add("titleShrink")
        title3.classList.add("titleShrink")
        title4.classList.add("titleShrink")
        mastHead.classList.add("mastHeadShrink")

    } else {
        header.classList.remove("superHeader")
        title.classList.remove("titleShrink")
        title2.classList.remove("titleShrink")
        title3.classList.remove("titleShrink")
        title4.classList.remove("titleShrink")
        mastHead.classList.remove("mastHeadShrink")
    }
}