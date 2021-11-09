
const toggleBtn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");


toggleBtn.addEventListener('click', function(){
    if(navbar.classList != ".toggle"){
        navbar.classList.add("toggle");
    }
    else{
        navbar.classList.remove("toggle");
    }
})