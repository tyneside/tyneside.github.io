var container, content, logo, hotspot;

window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
    logo = document.getElementById('logo');
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
        .set(["#girl1","#girl2","#girl3","#logo","#bg2","#txt1","#txt2","#logo2","#cta","#racing_stripe_top","#racing_stripe_btm","#racing_stripe_top2","#racing_stripe_btm2","#racing_stripe_top3","#racing_stripe_btm3","#racing_stripe_top_last","#racing_stripe_btm_last"],{opacity:1})
        .to("#bg", 0.5, {x:380,ease: Power2.easeOut},"+=0.0")
        .set("#container_dc",{backgroundColor:"#ea5563"})
        .to("#girl1", 0.4, {x:300,ease: Power2.easeOut},"-=0.3")
        .to("#bg", 0.5, {x:990,ease: Power2.easeInOut},"+=0.7")
        .to("#girl1", 0.4, {x:800,ease: Power2.easeIn},"-=0.8")
        .to("#girl2", 0.4, {x:315,ease: Power2.easeOut},"-=0.1")
        .to("#bg", 0.5, {x:1520,ease: Power2.easeInOut},"+=0.7")
        .to("#girl2", 0.4, {x:700,ease: Power2.easeIn},"-=0.8")
        .to("#girl3", 0.4, {x:290,ease: Power2.easeOut},"-=0.1")
        .to("#bg", 0.5, {x:2200,ease: Power2.easeInOut},"+=0.7")
        .add("Logo_start")
        .to("#girl3", 0.4, {x:700,ease: Power2.easeIn},"-=0.8")
//        .from("#logo", 0.7, {x:-250,ease: Power2.easeOut},"-=0.1")
        .add("Logo_1")
        .set("#red_mask",{opacity:1})
        .to("#racing_stripe_top2", 1.0, {x:700,ease: Power2.easeIn},"-=0.5")
        .to("#racing_stripe_btm2", 1.0, {x:700,ease: Power2.easeIn},"-=1.3")
        .from(["#racing_stripe_top","#racing_stripe_btm"], 0.5, {x:-280,ease: Power2.easeOut},"-=0.0")
//        .from("#racing_stripe_btm", 0.7, {x:-200,ease: Power2.easeIn},"-=0.0")
        .to("#racing_stripe_top3", 1.3, {x:700,ease: Power2.easeIn},"-=1.5")
        .to("#racing_stripe_btm3", 1.3, {x:700,ease: Power2.easeIn},"-=1.7")
        .from("#logo", 0.1, {opacity:0,ease: Power0.easeOut},"-=0.2")

        .to(["#racing_stripe_top","#racing_stripe_btm"], 0.1,{opacity:0,ease: Power0.easeOut},"-=0.0")
        .set("#red_mask", {opacity:0},"-=0.0")
    
        .set(["#racing_stripe_top2","#racing_stripe_btm2","#racing_stripe_top3","#racing_stripe_btm3"], {clearProps: 'all'})
.set(["#racing_stripe_top2","#racing_stripe_btm2","#racing_stripe_top3","#racing_stripe_btm3","#racing_stripe_top_last","#racing_stripe_btm_last"],{opacity:1})
        .to("#logo", 0.4, {x:500,ease: Power2.easeIn},"+=0.5")
        .to("#bg2", 0.5, {x:500,ease: Power2.easeOut},"-=0.0")
        .from("#txt1", 0.4, {x:-200,ease: Power2.easeOut},"-=0.4")
        .to("#bg2", 0.5, {x:1100,ease: Power2.easeOut},"+=1.0")
        .to("#txt1", 0.4, {x:500,ease: Power2.easeIn},"-=0.8")
        .from("#txt2", 0.4, {x:-260,ease: Power2.easeOut},"-=0.3")
        .to("#bg2", 0.5, {x:2000,ease: Power2.easeOut},"+=1.9")
        .to("#txt2", 0.4, {x:500,ease: Power2.easeIn},"-=1.0")

        .set("#red_mask",{opacity:1, left:90})

        .to("#racing_stripe_top2", 1.0, {x:700,ease: Power2.easeIn},"-=0.5")
        .to("#racing_stripe_btm2", 1.0, {x:700,ease: Power2.easeIn},"-=1.3")
        .from(["#racing_stripe_top_last","#racing_stripe_btm_last"], 0.5, {x:-280,ease: Power2.easeOut},"-=0.0")
        .to("#racing_stripe_top3", 1.3, {x:700,ease: Power2.easeIn},"-=1.5")
        .to("#racing_stripe_btm3", 1.3, {x:700,ease: Power2.easeIn},"-=1.7")
        .from("#logo2", 0.1, {opacity:0,ease: Power0.easeOut},"-=0.2")
        .to(["#racing_stripe_top_last","#racing_stripe_btm_last"], 0.1,{opacity:0,ease: Power0.easeOut},"-=0.0")
        .from("#cta", 0.7, {x:-250,ease: Power2.easeOut},"-=0.5")
        .add("Logo_2")
    
//    adTl.seek("Logo_1")
//    adTl.pause("Logo_2")
//    adTl.seek("Logo_1")
//    adTl.play()
adTl.duration(15).play();    



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