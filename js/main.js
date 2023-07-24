// aos
AOS.init();
// 
let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-x-lg")
})

// 

let typed = new Typed(".auto-input",{
    strings:["Front-End Developer","Graphic Designer","UI Desingner","UX Desingner"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})

// active link state on scroll
//get all links
let navLinks = document.querySelectorAll('nav ul li a');
// get all sections 
let sections = document.querySelectorAll('section');
window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute("href").substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});   