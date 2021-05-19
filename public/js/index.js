// Chatbot
// (function(d, m){
//     var kommunicateSettings = 
//         {"appId":"37e1ec4d80f2f3e763c824cb8d4317124","popupWidget":true,"automaticChatOpenOnNavigation":true};
//     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//     window.kommunicate = m; m._globals = kommunicateSettings;
// })(document, window.kommunicate || {});

(function(d, w, c) {
    w.ChatraID = 'h2Woig7y2EmCrntZ7';
    var s = d.createElement('script');
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

window.ChatraSetup = {
    colors: {
        buttonText: '#f0f0f0', /* chat button text color */
        buttonBg: '#0e6621'    /* chat button background color */
    },
    chatWidth: 350,
    chatHeight: 500
};

// Navbar
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
    // let ul = document.querySelector('.navbar-nav');
    // let li = document.querySelectorAll('.nav-link');
 
    // li.forEach(el =>{
    //     el.addEventListener('click',function(){
    //         ul.querySelector('.active').classList.remove('active');

    //     el.classList.add('active');
    //     });
    // });
    // $('ul li a').click(function(){ $('li a').removeClass("active"); $(this).addClass("active"); });
    // (function($) {
    //     $(document).ready(function() {
    //        // get current URL path and assign 'active' class
    //        var pathname = window.location.index;
    //        $('.nav.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    //    });
    //  })(jQuery);
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
    counter("count1",0,150,0.000001);
    counter("count2",0,590,0.000001);
    counter("count3",0,97,0.0001);
    counter("count4",0,1000,0.00000000001);
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
