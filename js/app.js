// Navbar beim Scrollen abdunkeln

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
    nav.style.background = "#241812";
    } else {
    nav.style.background = "rgba(36,24,18,0.92)";
    }

});