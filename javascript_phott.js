(function($) { "use strict";
        
    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
        t.style.top = n.clientY + "px", 
        e.style.left = n.clientX + "px", 
        e.style.top = n.clientY + "px", 
        i.style.left = n.clientX + "px", 
        i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    
    //About page
    
    $(".about-text").on('click', function () {
        $("body").addClass("about-on");
    });
    $(".about-close").on('click', function () {
        $("body").removeClass("about-on");
    });

    
    //Contact page
    
    $(".contact-text").on('click', function () {
        $("body").addClass("contact-on");
    });
    $(".contact-close").on('click', function () {
        $("body").removeClass("contact-on");
    });

    
    //Travel portfolio page
    
    $(".travel").on('click', function () {
        $("body").addClass("travel-on");
    });
    $(".travel-close").on('click', function () {
        $("body").removeClass("travel-on");
    });

    
    //Wildlife portfolio page
    
    $(".wildlife").on('click', function () {
        $("body").addClass("wildlife-on");
    });
    $(".wildlife-close").on('click', function () {
        $("body").removeClass("wildlife-on");
    });

    
    //Nature portfolio page
    
    $(".nature").on('click', function () {
        $("body").addClass("nature-on");
    });
    $(".nature-close").on('click', function () {
        $("body").removeClass("nature-on");
    });

     // JavaScript for the slideshow
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }
    
  function activateHover() {
    document.querySelector('.bottom-hover-container').style.height = '100vh';
  }
  
     function closeContainer() {
     document.querySelector('.bottom-hover-container').style.height = '0';;
    }

})(jQuery);