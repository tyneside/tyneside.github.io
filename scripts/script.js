//$(document).ready(function(){
//			var logoTl = new TimelineMax();
//				logoTl.set("#Clientwork",{opacity:0},"+=0.0")
//						.set("#name, #mobileNav",{y:-150})
////						.to("#logo-large", 0.8,{scale:0,opacity:0},"+0.8")
////						.set("#logo-large",{display:"none"},"+1.8")
//						.to("#name, #mobileNav",0.5,{y:0, ease: Back.easeOut.config(1.5)},"+0.2")
//						.to("#Clientwork",0.5,{opacity:1, ease:Sine.easeInOut},"+0.3")
//						.staggerFrom(".title",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.5")
//						.staggerFrom(".subtitle",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.6")
//	
//});
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
	

		if (!sessionStorage.getItem('hasVisited')) {
//			var logoTl = new TimelineMax();
//				logoTl.from("#logo",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.2")

		  sessionStorage.setItem('hasVisited', true); 
		} else{
//			var titleTl = new TimelineMax();
//						titleTl.staggerFrom(".title",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.3")
//						.staggerFrom(".subtitle",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.5")
//						.staggerFrom("img",0.5,{opacity:0,ease: Sine.easeInOut},0.2,"+0.5")			
       			var logoTl = new TimelineMax();
				logoTl.staggerFrom(".logoletter1",0.4,{rotation:30,scale:0, ease: Back.easeOut.config(1.5)},0.2,"+=0.0")     
				      .staggerFrom(".logoletter",0.2,{rotation:30,scale:0, ease: Back.easeOut.config(1.5)},0.1,"-=0.6")     
                      .from("#mobileNav",0.6,{x:200,ease: Back.easeOut.config(1.7)},"-=1")
                      .staggerFrom(".headerSVG", 0.5, {scale:0, transformOrigin:"50% 50%",ease: Back.easeOut.config(1)},0.03,"-=1.0")
                      .from("#contentBtm",0.6,{x:320,ease: Back.easeOut.config(1.7)},"-=0.5")

		}
	
	
	
        var mobileNav = document.getElementById("mobileNav");
        var mobileNavClose = document.getElementById("mobileNavClose");
        var mainNav = document.getElementById("mainNav");

//       document.getElementById("mobileNav").addEventListener("click", function() {
//          		var navTl = new TimelineMax();
//		   			navTl.set(mobileNav,{css:{display:'none'}});
//		   			navTl.set(mobileNavClose,{css:{display:'inherit'}});
//		   			navTl.to(mainNav,0.3,{css:{right:0},ease: Sine.easeInOut});
//
//       });
//		
//       document.getElementById("mobileNavClose").addEventListener("click", function() {
//          		var navCloseTl = new TimelineMax();
//					navCloseTl.set(mobileNavClose,{css:{display:'none'}});
//					navCloseTl.set(mobileNav,{css:{display:'inherit'}});
//					navCloseTl.to(mainNav,0.3,{css:{right:-300},ease: Sine.easeInOut});
//
//       });	

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

