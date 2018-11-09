var container, content, hotspot;

window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
    line1 = document.getElementById('line1');
    line2 = document.getElementById('line2');
    line3 = document.getElementById('line3');
    line4 = document.getElementById('line4');
    line5 = document.getElementById('line5');
    line6 = document.getElementById('line6');
    line7 = document.getElementById('line7');
    line8 = document.getElementById('line8');
    logo = document.getElementById('logo');
    cultureTxt = document.getElementById('cultureTxt');
    hotspot = document.getElementById('hotspot');
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
    var adTl = new TimelineMax();
    adTl.add("startAd")
		.set([line3,line5,line1], {x:-900},"+=0.0")
		.set([line2,line4,line6], {x:-600},"+=0.0")
		.set(line7, {x:0},"+=0.0")
		.set(line8, {x:-560},"+=0.0")
		.to([line1,line2,line3,line4,line5,line6],8, {x:-757,ease: Sine.easeOut},"+=0.0")
         .to(line7, 8.8, {x:800,ease: Power0.easeOut},"-=8.0")
         .to(line8, 8.8, {x:-1450,ease: Power0.easeOut},"-=9.9")
         .from([logo,cultureTxt], 1.5, {scale:0.9,opacity:0,transformOrigin:"50% 50%", ease:Sine.easeIn},"-=1.5")
        .to(".empires", 1.5, {opacity:0,transformOrigin:"50% 50%", ease:Sine.easeIn},"-=1.5")




        
//adTl.duration(7).play();    



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