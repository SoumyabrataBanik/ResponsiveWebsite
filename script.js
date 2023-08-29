burger = document.querySelector(".burger");
navbar = document.querySelector(".nav-bar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightnav")

burger.addEventListener('click', () => {
    rightNav.classList.toggle("visibility-nav-resp");
    navList.classList.toggle("visibility-nav-resp");
    navbar.classList.toggle("height-nav-resp")
})