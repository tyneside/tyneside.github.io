
var container, content,adTl, text1, loop,text2,hotspot;

		window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
		hotspot = document.getElementById("hotspot");
    hotspot.addEventListener("click", onHotSpotClick, false);
//		hotspot.addEventListener("mouseover",onHotSpotOver,false);
		adTl = new TimelineMax({repeat:1, repeatDelay:1.0});
		mouseTl=new TimelineMax();
		sparkleTl=new TimelineMax({repeat:1});
//		musicTl = new TweenMax();
    	startAnimation();
 
};

function onHotSpotClick(){
    window.open(window.clickTag,'_blank');
}
//function onHotSpotOver(){
//  mouseTl.add("start")
//	.set("#cta_glimmer",{x:-90})
//	.to("#cta_glimmer",.75,{x:210,ease:Power3.easeOut})
//}
function sparkle(){
  sparkleTl.add("sparkle")
	.from("#sparkle1",0.4,{scale:0,rotation:30,ease:Sine.easeIn},"+=0.0")
	.to("#sparkle1",0.2,{scale:0,ease:Sine.easeOut},"-=0.0")
	.from("#sparkle2",0.4,{scale:0,rotation:30,ease:Sine.easeIn},"-=0.2")
	.to("#sparkle2",0.2,{scale:0,ease:Sine.easeOut},"+=0.0")
	.from("#sparkle3",0.4,{scale:0,rotation:30,ease:Sine.easeIn},"-=0.5")
	.to("#sparkle3",0.2,{scale:0,ease:Sine.easeOut},"-=0.0")
//	.from("#sparkle4",0.4,{scale:0,rotation:30,ease:Sine.easeIn},"+=0.5")
//	.to("#sparkle4",0.2,{scale:0,ease:Sine.easeOut},"-=0.0")
//	.from("#sparkle5",0.4,{scale:0,rotation:30,ease:Sine.easeIn},"+=0.0")
//	.to("#sparkle5",0.2,{scale:0,ease:Sine.easeOut},"-=0.0")
//	.from("#sparkle6",0.4,{scale:0,rotation:30,ease:Sine.easeIn},"-=0.4")
//	.to("#sparkle6",0.2,{scale:0,ease:Sine.easeOut},"-=0.0")	
}

function music(){
	var path1 = MorphSVGPlugin.pathDataToBezier("#path1", {align:"#note1"});
	TweenMax.to("#note1", 2.5, {bezier:{values:path1, type:"cubic"}, ease:Power3.easeIn},"-=0.0")
}
function music2(){
	var path2 = MorphSVGPlugin.pathDataToBezier("#path2", {align:"#note2"});
	TweenMax.to("#note2", 2.5, {bezier:{values:path2, type:"cubic"}, ease:Power3.easeIn},"+=0.0")
}
function music3(){
	var path3 = MorphSVGPlugin.pathDataToBezier("#path3", {align:"#note3"});
	TweenMax.to("#note3", 2.5, {bezier:{values:path3, type:"cubic"}, ease:Power3.easeIn},"+=0.0")
}
startAnimation = function() {
	var path1 = MorphSVGPlugin.pathDataToBezier("#path1", {align:"#note1"});
	var path2 = MorphSVGPlugin.pathDataToBezier("#path2", {align:"#note2"});
	var path3 = MorphSVGPlugin.pathDataToBezier("#path3", {align:"#note3"});



    adTl.add("startAd","+=.25")
	
	.add(sparkle,"-=0.0")		
	.from("#txt1",0.5,{scale:0,opacity:0,ease:Power3.easeOut},"+=0.2")
	.to(["#sparkleWrap","#purse"],2.5,{rotation:45,x:220,y:-85,ease:Expo.easeOut},"+=0.8")
	.set(["#sparkleWrap"],{opacity:0},"-=2.8")
	.to(["#legal"],0.2,{opacity:0,ease:Expo.easeOut},"-=2.5")
	.from("#speaker",0.5,{y:200,ease: Back.easeOut.config(1)},"-=2.3")
	.from("#txt2",0.5,{scale:0,opacity:0,ease:Power3.easeOut},"-=2.2")

	.add(music,"-=3.0")
	.from(["#note1"], 1,{scale:0, rotation:40},"-=1.8")
	.add(music2,"-=2.0")
	.from(["#note2"], 1,{scale:0, rotation:40},"-=1.1")
	.add(music3,"-=1.8")
	.from(["#note3"], 1,{scale:0, rotation:40},"-=0.8")

//	.add("cta","+=1")
//	.to("#cta_glimmer",.75,{x:210,ease:Power3.easeOut},"glimmer")


};

//
//replay=function(){
//	adTl.restart();
//}




