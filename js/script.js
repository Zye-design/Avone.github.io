let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}



var swiper = new Swiper(".featured-slider", {
    centeredSlides: true,
    loop:true,
    spaceBetween:20,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
     /* 450: {
        slidesPerView: 2,
      },*/
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /**
 * Go Top
 */ 

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
    window.scrollY >= 800 ? goTopBtn.classList.add("active"): goTopBtn.classList.remove("active");
 });
