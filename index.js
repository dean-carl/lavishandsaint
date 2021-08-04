
// menu control ----------------

const openBar = document.querySelector(".toggle");
const container = document.querySelector('.container');
const menu = document.querySelector(".menu");


openBar.addEventListener("click", function () {


    openBar.classList.toggle('active');
    container.classList.toggle('active');

})

menu.addEventListener("click", function () {
    container.classList.toggle('active')
    openBar.classList.toggle('active');
})


// movie control---------------- 

//--call movies here -------

movieTitle = ["beach", "hotel1", "hotel2", "feet"]


// -------Play random movie----------


// function loadMovie() {

//     let movieNumber = Math.floor(Math.random() * movieTitle.length)

//     let movieLocation = `./images/${movieTitle[movieNumber]}.mp4`;


//     document.getElementById("movie").src = movieLocation
//     console.log(movieLocation)
// }

// setInterval(loadMovie, 8000)

//------Play movies in order------------


function loadMovieLoop() {


    for (let n = 0; n < movieTitle.length; n++) {

        playHead(n)
    }

    function playHead(n) {

        setTimeout(() => {
            document.getElementById("movie").setAttribute('src', `./images/${movieTitle[n]}.mp4`)
        }, 10000 * n);

    }
}

setInterval(loadMovieLoop, 5000 * movieTitle.length)

