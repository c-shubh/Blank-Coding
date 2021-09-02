const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".main-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".my-img", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".cont", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');


menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});


$(function () {
    $(".disable").bind("paste cut paste", function (e) {
        e.preventDefault();
        return false;
    });
});
