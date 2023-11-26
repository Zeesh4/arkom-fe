const menuToogle = document.querySelector(".menu-toogle input");
const nav = document.querySelector("nav ul");

menuToogle.addEventListener("click", function(){
    nav.classList.toggle("slide");
});

// ubah navbar
const heroElement =document.querySelector("section.hero");

const heroObserver = new IntersectionObserver(
    (entries) => {

        const [entry] = entries;

        if(entry.isIntersecting) {
            document.querySelector("nav").classList.add("scrolled");
        } else {
            document.querySelector("nav").classList.remove("scrolled");
        }

    }, 
    {threshold: 0.9}
);

heroObserver.observe(heroElement);
