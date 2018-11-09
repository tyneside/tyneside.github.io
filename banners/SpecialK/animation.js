
var container, content,adTl, text1, loop,text2,hotspot;

		window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
		hotspot = document.getElementById("hotspot");
    hotspot.addEventListener("click", onHotSpotClick, false);
	adTl = new TimelineMax({repeat:1,repeatDelay:0.5});
    startAnimation();
 
};

function onHotSpotClick(){
    window.open(window.clickTag,'_blank');
}

startAnimation = function() {
    
   
    adTl.add("startAd","+=.25")
//	.set("#pinkStar",{scale:1})
	.from(["#pinkBolt","#bowl","#tealStar1","#pinkStar","#tealBolt"],.5,{y:200,ease:Power3.easeOut },"startAd+=0.0")
	.from("#logo", 0.35, {scale:0.85, yoyo:true, repeat:1, ease: Back. easeIn.config( 1.12)}, "startAd+=0.0")
	.staggerFrom(".bvit",.15,{scale:.75,opacity:0,ease: Back.easeOut.config( 1.2)},-.09,"startAd+=0.5")
	.to(["#tealStar1"],0.001,{scale:0.6, yoyo:true, repeat:10,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=0.5")
	.to(["#pinkStar"],0.001,{scale:0.8, yoyo:true, repeat:10,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=0.7")
	.to(["#tealBolt"],0.001,{scale:0.8, yoyo:true, repeat:10,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=0.6")
	.to(["#pinkBolt"],0.001,{scale:0.8, yoyo:true, repeat:10,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=0.9")
	.to(["#bvitamens"],.25,{opacity:0},"startAd+=3.0")
	
	.staggerFrom(".energizew",.5,{scale:.75,y:10,x:20,opacity:0,ease: Back.easeOut.config( 1.2)},.09,"startAd+=3.0")
	.staggerFrom(".energize",.5,{scale:.75,y:10,x:20,opacity:0,ease: Back.easeOut.config( 1.2)},.09,"startAd+=3.0")
	

	.to(["#pinkBolt","#pinkStar","#tealStar1","#energize","#logo","#tealBolt"],.25,{scale:0, ease: Back. easeIn.config( 1)},"startAd+=6.0")
	.to(["#bowl"],.25,{scale:0, y:400, ease: Back. easeIn.config( 0.2)},"startAd+=6.0")

	
	.from("#cerealpacks",.5,{y:300, ease:Expo.easeOut},"startAd+=6.5")
	.from("#poweryou",.25,{x:-300,y:50, ease:Expo.easeOut},"startAd+=6.5")
	
	
    	.from(["#tealStar2"],0.1,{scale:0, ease: Power0. easeOut}, "startAd+=6.6")
    	.from(["#tealStar3"],0.1,{scale:0, ease: Power0. easeOut}, "startAd+=6.8")
    	.from(["#tealStar4"],0.1,{scale:0, ease: Power0. easeOut}, "startAd+=7.0")
	
    	.to(["#tealStar2"],0.001,{scale:0.6, yoyo:true, repeat:3,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=7.1")
    	.to(["#tealStar3"],0.001,{scale:0.5, yoyo:true, repeat:3,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=7.3")
    	.to(["#tealStar4"],0.001,{scale:0.8, yoyo:true, repeat:3,repeatDelay:0.5, ease: Power0. easeOut}, "startAd+=7.5")

	
};
//
//replay=function(){
//	adTl.restart();
//}




