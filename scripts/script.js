
window.addEventListener("resize", () => {
    images();
});
window.onload = ()=> {
    images();
}

function images() {
    if(window.screen.width < 751) {
        document.querySelector("#bg-pattern-right").src = "./images/bg-pattern-intro-right-mobile.svg";
        document.querySelector("#bg-pattern-left").src = "./images/bg-pattern-intro-left-mobile.svg"
    } else {
        document.querySelector("#bg-pattern-right").src = "./images/bg-pattern-intro-right-desktop.svg";
        document.querySelector("#bg-pattern-left").src = "./images/bg-pattern-intro-left-desktop.svg"
    }
}

let menu = document.querySelector("#header-navbar-wrapper");
let menuButton = document.querySelector("#menu-hamburger-icon");

menuButton.addEventListener("click", function() {
    switch(menu.className) {
        case "mobile-menu-closed": 
        menuButton.src = "./images/icon-close.svg";
        break;
        case "mobile-menu-opened": 
        menuButton.src = "./images/icon-hamburger.svg";
        break;
    }
    menu.classList.toggle("mobile-menu-opened");
    menu.classList.toggle("mobile-menu-closed");
});
document.querySelector("body").addEventListener("click", function() {
    if(event.target != menu && event.target != menuButton) {
        menuButton.src = "./images/icon-hamburger.svg";
        menu.classList.remove("mobile-menu-opened");
        menu.classList.add("mobile-menu-closed");
    }
})
