$(document).ready(function(){
    $('.art-album').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
    });

    $('.storyboard-album').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    $('.dmb-album').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top-0
            }, 500);
            return false;
          }
        }
      });
    });
    

	
    
 $(function(){	
        var mobileNav = document.getElementById("mobileNav");
        var mobileNavClose = document.getElementById("mobileNavClose");
        var mainNav = document.getElementById("mainNav");

       $("#mobileNav").click(function(e) {
          		var navTl = new TimelineMax();
		   			navTl.to(mobileNav,0.2,{scale:0,ease: Back.easeIn.config(1.7)},"+=0.0")
		   			     .to(mobileNavClose,0.2,{scale:1,ease: Back.easeOut.config(1.7)},"+=0.0")
		   			     .to(mainNav,0.3,{css:{right:0},ease: Sine.easeInOut},"-=0.3");
                        e.stopPropagation();

       });
		
       $("#mobileNavClose").click(function(e) {
          		var navCloseTl = new TimelineMax();
					navCloseTl.to(mobileNavClose,0.2,{scale:0,ease: Back.easeIn.config(1.7)},"+=0.0")
		   			     .to(mobileNav,0.2,{scale:1,ease: Back.easeOut.config(1.7)},"+=0.0")
		   			     .to(mainNav,0.3,{css:{right:-300},ease: Sine.easeInOut},"-=0.3");
       });
		
       $(document.body).click( function() {
          		var bodynavCloseTl = new TimelineMax();
					bodynavCloseTl.to(mobileNavClose,0.2,{scale:0,ease: Back.easeIn.config(1.7)},"+=0.0")
		   			     .to(mobileNav,0.2,{scale:1,ease: Back.easeOut.config(1.7)},"+=0.0")
		   			     .to(mainNav,0.3,{css:{right:-300},ease: Sine.easeInOut},"-=0.3");
        });
     
        $("#mobileNavClose").click( function(e) {
            e.stopPropagation(); // this stops the event from bubbling up to the body
        });
     
        $("#mobileNav").click( function(e) {
            e.stopPropagation(); // this stops the event from bubbling up to the body
        });   

});
   
    
    
    
});

