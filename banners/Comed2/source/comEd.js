var container, adTl, hotspot; 
		
window.onload = function() {
		container = document.getElementById("container_dc");
   	adTl = new TimelineMax({repeat:1,repeatDelay: 0.5});
   	appTl = new TimelineMax();
   	loaderTl = new TimelineMax();
   	meterTl = new TimelineMax({repeat:3,repeatDelay: 0});
    hotspot = document.getElementById('hotspot');
   	subText = document.getElementById('subText');
		
		
    addListeners();
};

addListeners = function() {
    //CTA/LOGO/GENERAL HOTSPOT EVENTS - REMOVE ONLY WITH CARE
    hotspot.addEventListener("click", onHotSpotClick, false);
    // ALL ADDITIONAL EVENT LISTNERS GO BELOW IN THIS FUNCTION
    startAnimation();
};

function onHotSpotClick(){
    window.open(window.clickTag,'_blank');
}

startAnimation = function() {
	
var RAD  = Math.PI / 180;
var PI_2 = Math.PI / 2;

var clipPath = document.querySelector("#arcPath");

var arc = {  
  start: 0,
  end: 360,
  cx: 62.23,
  cy: 61.8,
  r: 42.24 
};

//TweenMax.to(arc, 3, {
//  start: 360,
//  ease: Linear.easeNone,
//  onUpdate: updatePath,
//});

updatePath();

function updatePath() {
  clipPath.setAttribute("d", getPath(arc.cx, arc.cy, arc.r, arc.start, arc.end)); 
}

function getPath(cx, cy, r, a1, a2) {
   
  var delta = a2 - a1;
  
  if (delta === 360) {
        
    return "M " + (cx - r) + " " + cy + " a " + r + " " + r + " 0 1 0 " + r * 2 + " 0 a " + r + " " + r + " 0 1 0 " + +r * 2 + " 0z"; 
  }
  
  var largeArc = delta > 180 ? 1 : 0;
    
  a1 = a1 * RAD - PI_2;
  a2 = a2 * RAD - PI_2;

  var x1 = cx + r * Math.cos(a2);   
  var y1 = cy + r * Math.sin(a2);

  var x2 = cx + r * Math.cos(a1); 
  var y2 = cy + r * Math.sin(a1);
    
  return "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 0 " + x2 + " " + y2 + " L " + cx + " " + cy + "z";
}
       
    //ALL animation code goes here...including 
	adTl
	
	.add(meterTl)
	.add(loaderTl)
	.add(appTl)
	
//    .fromTo("#arrow", 0.4, {y:-40}, {y:-40,ease: Back.easeOut.config(8.0)},"+=0.2")
	
	meterTl.from("#m6", .1,{scaleY:0, ease: Sine.easeIn},"-=0.2")
			.to("#m6", .1,{transformOrigin:"50% 100%", scaleY:0, ease: Sine.easeIn},"-=0.0")
		.from("#m2", .1,{scaleY:0, ease: Sine.easeIn},"-=0.2")
		.to("#m2", .1,{transformOrigin:"50% 100%", scaleY:0, ease: Sine.easeIn},"-=0.0")

		.from("#m4", .1,{scaleY:0, ease: Sine.easeIn},"-=0.2")
		.to("#m4", .1,{transformOrigin:"50% 100%", scaleY:0, ease: Sine.easeIn},"-=0.0")

		.from("#m3", .1,{scaleY:0, ease: Sine.easeIn},"-=0.2")
		.to("#m3", .1,{transformOrigin:"50% 100%", scaleY:0, ease: Sine.easeIn},"-=0.0")

		.from("#m5", .1,{scaleY:0, ease: Sine.easeIn},"-=0.2")
		.to("#m5", .1,{transformOrigin:"50% 100%", scaleY:0, ease: Sine.easeIn},"-=0.0")

		.from("#m1", .1,{scaleY:0, ease: Sine.easeIn},"-=0.2")
		.to("#m1", .1,{transformOrigin:"50% 100%", scaleY:0, ease: Sine.easeIn},"-=0.0")
	
	
	loaderTl.to(arc, 4, {
		  start: 360,
		  ease: Linear.easeNone,
		  onUpdate: updatePath,
		},"+=0.0")
		.to("#btnMask",0.2,{opacity:0, ease: Sine.easeIn})

	
    appTl.add("startApp")
	
        .set([".logo"],{width:26964, x:-12064, y:-2181},"startApp+=0.0")	

        //.fromTo([".logo"],2.5,{scale:70, opacity:1, transformOrigin:"45% 38%"},{scale:1, ease:Power2.easeIn},"sunUp+=0.0")
		.from(["#txt1"], .2,{css:{display:"none"}, ease: Sine.easeIn},"-=0.0")
//		.to("#m1", .2,{transformOrigin:"50% 100%",scaleY:0, ease: Sine.easeIn},"-=0.2")
//		.to("#m2", .2,{transformOrigin:"50% 100%",scaleY:0, ease: Sine.easeIn},"+=0.2")
//		.to("#m3", .2,{transformOrigin:"50% 100%",scaleY:0, ease: Sine.easeIn},"+=0.2")
		.to(["#txt1"], .2,{css:{display:"none"}, ease: Sine.easeIn},"+=1.0")
		.to("#icon1", .2,{transformOrigin:"50% 50%",scaleX:0, ease: Sine.easeIn},"-=0.2")
		.from(["#txt2"], .2,{css:{display:"none"}, ease: Sine.easeIn},"-=0.0")
		.from(["#icon2"], .2,{transformOrigin:"50% 50%",scaleX:0, ease: Sine.easeIn},"-=0.2")
		.to(["#txt2"], .2,{css:{display:"none"}, ease: Sine.easeIn},"+=2.2") 
		.to("#icon2", .2,{transformOrigin:"50% 50%",scaleX:0, ease: Sine.easeIn},"-=0.2")
		.from("#money", 0.6,{transformOrigin:"50% 50%",scale:0.9, ease: Sine.easeInOut, yoyo:true, repeat:6},"-=2.5")
		.from(["#txt3"], .2,{css:{display:"none"}, ease: Sine.easeIn},"-=1.7")
		.from(["#icon3"], .2,{transformOrigin:"50% 50%",scaleX:0, ease: Sine.easeIn},"-=1.7")
//		.from("#arrow", .4,{y:-40, ease: Back.easeOut.config(8.0)},"+=0.0")
		.from("#arrow", .6,{y:-35, ease: Sine.easeInOut, yoyo:true, repeat:6},"-=1.7")
//		.to("#arrow", .4,{y:0, ease: Back.easeOut.config(8.0)},"+=0.0")



//    .fromTo("#arrow", 0.4, {y:-40}, {y:-40,ease: Back.easeOut.config(8.0)},"+=0.2")
	
	
	
        .add('endFrameGo', '-=2.0')
        .set([".logo"],{opacity:1},"endFrameGo+=0.0")
        .to([".logo"], 0.5,{y:0, x:0, width:252, transformOrigin:"45% 38%", ease:ExpoScaleEase.config(107, 1, Power1.easeOut)},"endFrameGo+=0.0")
        .to([".scene"], 0.5,{scale:0.009, x:12, y:18, transformOrigin:"50% 50%", ease:ExpoScaleEase.config(1, 0.009, Power1.easeOut)},"endFrameGo+=0.0")
        .to('.smallLogo', 0.45,{opacity:0, ease:Power4.easeOut},"endFrameGo+=0.0")
    
        .to('.cta', 0.35,{opacity:1, ease:Power4.easeOut},"endFrameGo+=0.6")
        .from('.cta', 0.45,{y:25, transformOrigin:"50% 50%", ease:Power4.easeOut},"endFrameGo+=0.6")
            .set([".scene"], {autoAlpha:0},"endFrameGo+=0.5")
};

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

Element.prototype.removeClass = function(cls) {
    //console.log("removing class named: " + cls);
  if (this.hasClass(cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    this.className=this.className.replace(reg,' ');
  }
}

Element.prototype.addClass = function (cls) {
   // console.log("adding class named: " + cls);
  if (!this.hasClass(cls)) this.className += " "+cls;
}