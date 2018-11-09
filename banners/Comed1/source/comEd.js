var container,adTl, box, hotspot, txt1,txt1b,forTxt, box, subText 
		
window.onload = function() {
		container = document.getElementById("container_dc");
   	adTl = new TimelineMax();
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
    //ALL animation code goes here...including 
//	{repeat:1,repeatDelay:1}
    adTl.add("startAd")


        .add('meter')
    	.set([".mt1",".mt2",".mt3",".bgTxt"],{opacity:0})

        .set([".logo"],{width:26964, x:-12064, y:-2181},"meter+=0.0")

		.add('Txt1')	
		.call(digiClockBG,[],this, "+=0.0")
		.call(digiClock1,[],this, "+=1.0")
	
    	.to([".bgTxt"],0.5,{opacity:0})
		.from("#Txt1", 0.5,{y:-100, ease: Sine.easeIn},"-=0.7")	
		.to("#Txt1", 0.2,{y:-100, ease: Sine.easeIn},"+=2.0")	

		.call(digiClockReverse1,[],this, "-=0.2")
		.call(digiClockBG,[],this, "-=0.1")
	
		.add('Txt2')
		.call(digiClock2,[],this, "+=1.0")	
    	.to([".bgTxt"],0.5,{opacity:0})
		.from("#Txt2", 0.3,{y:-110, ease: Sine.easeIn},"-=0.7")
        .to("#Txt2", 0.2,{y:-110, ease: Sine.easeIn},"+=2")

		.call(digiClockReverse2,[],this, "-=0.2")
		.call(digiClockBG,[],this, "-=0.1")
	
		.add('Txt3')
		.call(digiClock3,[],this, "+=1.0")
    	.to([".bgTxt"],0.5,{opacity:0})
		.from("#Txt3", 0.3,{y:-110, ease: Sine.easeIn},"-=0.7")

    
        .add('endFrameGo', '+=1.25')
        .set([".logo"],{opacity:1},"endFrameGo+=0.0")
        .to([".logo"], 0.5,{y:0, x:0, width:252, transformOrigin:"45% 38%", ease:ExpoScaleEase.config(107, 1, Power1.easeOut)},"endFrameGo+=0.0")
        .to([".scene"], 0.5,{scale:0.009, x:-28.5, y:-60, transformOrigin:"50% 50%", ease:ExpoScaleEase.config(1, 0.009, Power1.easeOut)},"endFrameGo+=0.0")
        .to([".scene"],0.5,{opacity:0,ease: Power1.easeOut},"+=0.0")
        .to('.smallLogo', 0.45,{opacity:0, ease:Power4.easeOut},"endFrameGo+=0.0")
    
        .to('.cta', 0.35,{opacity:1, ease:Power4.easeOut},"endFrameGo+=0.6")
        .from('.cta', 0.45,{y:25, transformOrigin:"50% 50%", ease:Power4.easeOut},"endFrameGo+=0.6")
	

	
	
function digiClock1(){
	var tl = new TimelineLite(),
    elements = $(".mt1"),
    randomGap = 0.3, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.02, {opacity:1}, Math.random() * randomGap);
	}
	
	return tl;
}
	
function digiClockReverse1(){
	var tl = new TimelineLite(),
    elements = $(".mt1"),
    randomGap = 0.3, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.02, {opacity:0}, Math.random() * randomGap);
	}
	return tl;
}	
	
function digiClock2(){
	var tl = new TimelineLite(),
    elements = $(".mt2"),
    randomGap = 0.3, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.02, {opacity:1}, Math.random() * randomGap);
	}
	return tl;
}
function digiClockReverse2(){
	var tl = new TimelineLite(),
    elements = $(".mt2"),
    randomGap = 0.3, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.02, {opacity:0}, Math.random() * randomGap);
	}
	return tl;
}	
	
function digiClock3(){
	var tl = new TimelineLite(),
    elements = $(".mt3"),
    randomGap = 0.3, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.02, {opacity:1}, Math.random() * randomGap);
	}
	return tl;
}
function digiClockReverse3(){
	var tl = new TimelineLite(),
    elements = $(".mt3"),
    randomGap = 0.3, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.02, {opacity:0}, Math.random() * randomGap);
	}
	return tl;
}
	
function digiClockBG(){
	var tl = new TimelineLite(),
    elements = $(".bgTxt"),
    randomGap = 0.2, //use whatever you want here to space things out more/less
    i;
	for (i = 0; i < elements.length; i++) {
		tl.to(elements[i], 0.2, {opacity:1, repeat:6}, Math.random() * randomGap);
	}
	return tl;
}
	
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