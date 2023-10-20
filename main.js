/*----------------NAVBAR----------------*/

var navbar = document.getElementById("navbar");
        
function showMenu(){
    navbar.style.right = "0";
}

function hideMenu(){
    navbar.style.right = "-50%";
}

/*----------------SCROLLUP----------------*/

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

    /*----------------CONTACT----------------*/