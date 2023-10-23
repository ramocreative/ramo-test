/*---------------- BACKGROUND ----------------*/

let background = document.getElementById('background');
let homepageOne = document.getElementById('homepage-one');
let homepageTwo = document.getElementById('homepage-two');
let homepageThree = document.getElementById('homepage-three');
let homepageFour = document.getElementById('homepage-four');
let homepageFive = document.getElementById('homepage-five');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    background.style.right = value * -0.02 + '%';
    homepageOne.style.translate = value * -0.800 + '%';
    homepageTwo.style.translate = value * -0.050 + '%';
    homepageThree.style.translate = value * -0.050 + '%';
    homepageFour.style.translate = value * -0.020 + '%';
    homepageFive.style.translate = value * -0.050 + '%';
});

/*---------------- HEADER ----------------*/

let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    header.style.top = value * -0.01 + '%';
});

/*---------------- NAVBAR ----------------*/

let navbar = document.getElementById("navbar");
        
function showMenu(){
    navbar.style.right = "0";
}

function hideMenu(){
    navbar.style.right = "-50%";
}

/*---------------- SCROLLUP ----------------*/

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "flex";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#31e981 ${scrollValue}%, #fcfcfc ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    /*---------------- PROJECTS ----------------*/

    let projectTitle = document.getElementById('project-title');
    let projectTitle2 = document.getElementById('project-title2');
    let projectTitle3 = document.getElementById('project-title3');
    let projectTitle4 = document.getElementById('project-title4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    projectTitle.style.left = value * 0.06 + 'px';
    projectTitle2.style.left = value * 0.06 + 'px';
    projectTitle3.style.left = value * 0.06 + 'px';
    projectTitle4.style.left = value * 0.06 + 'px';
});