function openMenu() {
    document.querySelector('.menu').style.width = "250px";
    document.querySelector('canvas').style.width = "250px";
    document.querySelector('.menu').style.transition="all 1.5s ease-in-out";
    document.querySelector('canvas').style.transition="all 1.5s ease-in-out";
    document.querySelector('header').style.height = "0";
    document.querySelector('header').style.color = "black";
    document.querySelector('header').style.transition="all 1.5s ease-in-out";
    document.querySelector('.carousel-container').style.border = "5px solid black";
    document.querySelector('.carousel-container').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.carousel-container').style.boxShadow = "10px 10px 10px black";

}
function closeMenu() {
    document.querySelector('.menu').style.width = "";
    document.querySelector('canvas').style.width = "";
    document.querySelector('header').style.height = "";
    document.querySelector('header').style.color = "";
    document.querySelector('.carousel-container').style.border = "";
    document.querySelector('.carousel-container').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.carousel-container').style.boxShadow = "";

}