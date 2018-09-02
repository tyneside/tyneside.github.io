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
$(function() {	
	

		if (!sessionStorage.getItem('hasVisited')) {
			var logoTl = new TimelineMax();
				logoTl.set("#Clientwork",{opacity:0},"+=0.0")
						.set("#name, #mobileNav",{y:-150})
						.to("#name, #mobileNav",0.5,{y:0, ease: Back.easeOut.config(1.5)},"+0.2")
						.to("#Clientwork",0.5,{opacity:1, ease:Sine.easeInOut},"+0.3")
						.staggerFrom(".title",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.3")
						.staggerFrom(".subtitle",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.5")

		  sessionStorage.setItem('hasVisited', true); 
		} else{
			var titleTl = new TimelineMax();
						titleTl.staggerFrom(".title",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.3")
						.staggerFrom(".subtitle",0.5,{scale:0, ease: Back.easeOut.config(1.5)},0.2,"+0.5")
						.staggerFrom("img",0.5,{opacity:0,ease: Sine.easeInOut},0.2,"+0.5")			
		}
	
	
	
        var mobileNav = document.getElementById("mobileNav");
        var mobileNavClose = document.getElementById("mobileNavClose");
        var mainNav = document.getElementById("mainNav");

	

       document.getElementById("mobileNav").addEventListener("click", function() {
          		var navTl = new TimelineMax();
		   			navTl.set(mobileNav,{css:{display:'none'}});
		   			navTl.set(mobileNavClose,{css:{display:'inherit'}});
		   			navTl.to(mainNav,0.3,{css:{right:0},ease: Sine.easeInOut});

       });
		
       document.getElementById("mobileNavClose").addEventListener("click", function() {
          		var navCloseTl = new TimelineMax();
					navCloseTl.set(mobileNavClose,{css:{display:'none'}});
					navCloseTl.set(mobileNav,{css:{display:'inherit'}});
					navCloseTl.to(mainNav,0.3,{css:{right:-300},ease: Sine.easeInOut});

       });
		
           
		
});
