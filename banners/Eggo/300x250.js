var container, content, logo, hotspot;

window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
    logo = document.getElementById('logo');
    hotspot = document.getElementById('hotspot');
    starburst = document.getElementById('starburst');
    txt1 = document.getElementById('txt1');
    pack = document.getElementById('pack');
    eggo = document.getElementById('eggo');
    stars1 = document.getElementById('stars1');
    stars2 = document.getElementById('stars2');
    starWrap = document.getElementById('starWrap');
    eggoBlur = document.getElementById('eggoBlur');
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
	var sparkleTl = new TimelineMax({repeat:1,repeatDelay:2.8});
	sparkleTl.add("spark")
			.from(".s1",.25,{scale:0,rotation:350, ease:Back. easeOut.config( 1.4)},"+=3.8")
			.to(".s1",.05,{opacity:0})
			.from(".s2",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.1")
			.to(".s2",.05,{opacity:0})
			.from(".s3",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.1")
			.to(".s3",.05,{opacity:0})
			.from(".s4",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.8")
			.to(".s4",.05,{opacity:0})
			.from(".s5",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.1")
			.to(".s5",.05,{opacity:0})
			.from(".s6",.25,{scale:0,rotation:350, ease:Back. easeOut.config( 1.4)},"-=0.8")
			.to(".s6",.05,{opacity:0})
			.from(".s7",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.1")
			.to(".s7",.05,{opacity:0})
			.from(".s8",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.1")
			.to(".s8",.05,{opacity:0})
			.from(".s9",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.8")
			.to(".s9",.05,{opacity:0})
			.from(".s10",.25,{scale:0, rotation:350,ease:Back. easeOut.config( 1.4)},"-=.1")
			.to(".s10",.05,{opacity:0});	
	
    var adTl = new TimelineMax({repeat:1,repeatDelay:2});
    adTl.add("startAd")
        .set([pack,logo], {opacity:1},"-=0.0")
		.set(stars1,{clip:"rect(250px,250px,250px,0px)"})
		.set(stars2,{clip:"rect(250px,296px,250px,0px)"})
        .to(pack, 0.5, {scale:0.8,ease:ExpoScaleEase.config(1, 0.8),transformOrigin:"50% 0%",y:-5,},"+=1.2")
		.to(txt1,0.5,{opacity:1,ease: Power2.easeIn},"-=0.2")

		.to(eggoBlur,0.8,{y:-10,x:-68,scale:2.9,rotation:-10,ease: Power2.easeInOut},"+=0.8")
		.set(eggoBlur, {opacity:1},"-=0.7")
		.to(eggo,0.2,{opacity:1,ease: Sine.easeOut},"-=0.3")
		.to(eggoBlur,0.2,{opacity:0,ease: Sine.easeOut},"-=0.2")
		.to(pack,0.8,{scale:0,y:100,x:-50,ease: Sine.easeInOut},"-=0.5")
		.to(stars1,1.0,{clip:"rect(0px,250px,250px,0px)",ease: Sine.easeIn},"-=0.6")
		.to(stars2,1.0,{clip:"rect(0px,296px,250px,0px)",ease: Sine.easeIn},"-=1.0")
		.to(stars2, 0.5, {opacity:0.2, repeat:4, yoyo:true},"-=0.4")
		.to(stars1,0.6,{clip:"rect(0px,250px,0px,0px)",opacity:0,ease: Sine.easeInOut},"-=1.3")
		.to(stars2,0.6,{clip:"rect(0px,250px,0px,0px)",opacity:0,ease: Sine.easeInOut},"-=1.3")
		.to(eggo,0.5,{scale:0.74,x:60,rotation:8,y:-5, ease: Sine.easeInOut},"-=0.8")
		.to(pack,0.8,{opacity:1,scale:0.8,transformOrigin:"50% 0%",x:-35,y:-5,ease:ExpoScaleEase.config(1, 0.8)},"-=1.0")


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