
// var preloader = document.querySelector(".preloader")


// Sticky Meny Satrt

let navbar = document.getElementById("navbar");

window.addEventListener("scroll" , function(){
  let value = window.scrollY;
  if (value > 400 ){
    navbar.classList.add("sticky")
  }
  else{
    navbar.classList.remove("sticky")
  }
})


// Sticky Menu End

// Dark mode Start

const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const link = document.querySelector("#link");

let image = 0;

mode.addEventListener("click" , function(){

  body.classList.toggle("darkmode");

  if(image === 0){
    dark.setAttribute("src" , "image/sun.svg")
    link.setAttribute("href" , "CSS/dark-style.css")
    image = 1
  }

  else{
    dark.setAttribute("src" , "image/moon.svg")
    link.setAttribute("href" , "CSS/style.css")
    image = 0
  }

})

// Dark mode End



    window.addEventListener("load", function(){
        setTimeout(()=>{
            preloader.style.display = "none"
        },000)

         
        // Sec07
        $(".slider") .slick({
            autoplay : false ,
            autoplayspeed : 1000 ,
            arrows : true ,
            prevArrow : '.prevArr' ,
            nextArrow : '.nextArr' ,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1, 
            dots : true ,
            
            responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    action: false , 
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    })
    




    feather.replace()



    // Buttons Start ===============

$(function(){
  $(".s2btns button ").click(function(){
    $("button").removeClass("active")
    $(this).addClass("active")
  });
});

// Buttons End =================


    // Video js

    new VenoBox({
        selector: '.venobox' ,
        bgcolor : 'red' ,
        border : '10px' ,
        maxWidth :'600px' ,
        spinner : 'swing'
      });


      // AOS js
      
      AOS.init();