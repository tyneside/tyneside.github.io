var container, content, logo, hotspot;

window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
    logo = document.getElementById('logo');
    blur = document.getElementById('blur');
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
    var adTl = new TimelineLite();
    adTl.add("startAd")
        .set(puck, {rotation:0.5})
        .from(zamboni,4.5,{left:-210,ease: Power0.easeNone},"+=0.0")
        .to(ice_blur_top, 2.8, {clip:"rect(0px 300px 125px 300px)",ease: Power0.easeNone},"-=3.5")
        .set(zamboni,{y:124,rotation:180},"+=0.0")
        .to(zamboni,4.5,{left:-280,ease: Power0.easeNone},"+=0.0")
        .to(ice_blur_btm, 2.3, {clip:"rect(0px 0px 125px 0px)",ease: Power0.easeNone},"-=2.8")
        .from(puck, 1.2, {x:200, rotation:-30},"-=0.3")
        .from(legal, 0.8, {y:10, opacity:0},"-=0.8")


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