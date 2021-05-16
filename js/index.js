$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('#navbar .navbar').addClass("sticky");
        }else{
            $('#navbar .navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    let ul = document.querySelector('.navbar-nav');
    let li = document.querySelectorAll('.nav-link');
 
    li.forEach(el =>{
        el.addEventListener('click',function(){
            ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
        });
    });
});

// About
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("peerSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

//Counter
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id , start, end, duration){
        let obj = document.getElementById(id),
         current = start,
         range = end-start,
         increament = end>start?1:-1,
         step = Math.abs(Math.floor(duration/range)),
         timer = setInterval(()=>{
             current+=increament;
             obj.textContent = current;
             if(current==end){
                 clearInterval(timer);
             }

         },step);
    }
    counter("count1",0,150,0.00000000001);
    counter("count2",0,590,0.00000000001);
    counter("count3",0,97.4,0.00000000001);
    counter("count4",0,10000,0.00000000001);
})

// image slider
$("#gallery .carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});

// Testimonial
$("#testimonial .carousel").owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	navText:["<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>"],
	responsive:{
		0:{
			items: 1,
			nav: false
		},
		600:{
			items: 1,
			nav: true
		},
		1000:{
			items: 2,
			nav: true
		},
	}
});

// FAQ Section
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));