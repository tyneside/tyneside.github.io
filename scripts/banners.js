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

    
    
    
    
    
(function(){
			var ad_wrap,basePath;
			
            
			window.onload = function() {
                ad_wrap = document.getElementById("ad_wrap");				
                basePath = "banners";
  
                cArray = [
//                                   

                    
                                    {name: "FieldMuseum", creativePath: "FieldMuseum/index.html", defaultPath:"FieldMuseum/default.jpg", size:{width:300,height:250}},
                    
                                    {name: "Marshalls", creativePath: "Marshalls/index.html", defaultPath:"Marshalls/default.jpg", size:{width:300,height:250}},
                
                                    {name: "Comed1", creativePath: "Comed1/index.html", defaultPath:"Comed1/default.jpg", size:{width:300,height:250}},
 
                                    {name: "Comed2", creativePath: "Comed2/index.html", defaultPath:"Comed2/default.jpg", size:{width:300,height:250}},
    
                                    {name: "Comed3", creativePath: "Comed3/index.html", defaultPath:"Comed3/default.jpg", size:{width:300,height:250}},
                    
                                    {name: "Eggo", creativePath: "Eggo/index.html", defaultPath:"Eggo/default.jpg", size:{width:300,height:250}},
                    
                                    {name: "Molsen", creativePath: "Molsen/index.html", defaultPath:"Molsen/default.jpg", size:{width:300,height:250}},
                    
                                    {name: "MillerCoors", creativePath: "MillerCoors/index.html", defaultPath:"MillerCoors/default.jpg", size:{width:300,height:250}},
                                    
                                    {name: "SpecialK", creativePath: "SpecialK/index.html", defaultPath:"SpecialK/default.jpg", size:{width:300,height:250}},
                                    
                                    ];
              
				
                for (i = 0; i < cArray.length; i++) {
                    generateAd(cArray[i].year, cArray[i].creativePath, cArray[i].defaultPath, cArray[i].size);
                }
                
                var adsContainer = document.getElementsByClassName("ad_title");
                
                for (i = 0; i < adsContainer.length; i++) {
                    adsContainer[i].addEventListener("mouseenter", onAdMouse,false);
                    adsContainer[i].addEventListener("mouseleave", onAdMouse,false);
                    adsContainer[i].addEventListener("click", onAdClick,true);
                }
                
                function onAdMouse(e){
                    var thisAd = e.currentTarget;
                    var thisBtnWrap = thisAd.getElementsByClassName('btn_wrap')[0];

                    /*660px*/
                    if(window.innerWidth > 990){
                        if(e.type == 'mouseenter'){
                            TweenLite.to(thisBtnWrap,.5,{autoAlpha:1});
    //                        TweenLite.from(".playBtn", 0.8, {drawSVG:"0% 1%"}, {drawSVG:"0% 100%"});
                            DropDown = true;
                        } else{
                            if(DropDown){
                                TweenLite.to(thisBtnWrap,.5,{autoAlpha:0});
    //                            TweenLite.to(".playBtn", 0.1, {drawSVG:"0% 100%"}, {drawSVG:"0% 1%"});
                                DropDown = false;
                            }    
                        }
                    }
                    
                    
                }
      
                function onAdClick(e){
                    if(e.target.className == 'replay' || 'playBtn'){
                        var thisAd = e.currentTarget;
                        var thisBtnWrap = thisAd.getElementsByClassName('btn_wrap')[0];
                        var thisFrame = thisAd.getElementsByClassName('ad_frame')[0];
                        thisFrame.src = thisAd.getAttribute('data-banner');
                        //TweenLite.set((".ad_frame"),{attr:{src: }});
                        
                        var adTitle = document.getElementsByClassName('ad_title');
                        for(i = 0; i < adTitle.length; i++){
                            
                            var thatTitle = adTitle[i];
                            var thatFrame = thatTitle.getElementsByClassName('ad_frame')[0];
                            //console.log(thatFrame, thisFrame);
                            if(thatFrame != thisFrame){
                                TweenLite.set(thatFrame, {autoAlpha:0});
                                
                               /*thatFrame.src = thatTitle.getAttribute('data-default');*/
                            }else{
                                TweenLite.set(thisFrame, {autoAlpha:1});
                                /*thisFrame.src = thisAd.getAttribute('data-banner');*/
                            }
                            
                        }
                        /*TweenLite.set(thisBtnWrap,{yPercent:0});
                        TweenLite.set(thisBtnWrap,{yPercent:0});**/
                        
                    }
                }

                init();
               
                var playBtnVisible = window.innerWidth > 990;
                togglePlayBtns();
                
                window.onresize = function(e){
                    togglePlayBtns();
                }
            
            function togglePlayBtns(){
                /*console.log(playBtnVisible, window.innerWidth)*/
                if(window.innerWidth < 990){
                        if(!playBtnVisible){
                            TweenLite.to(".btn_wrap",.3,{autoAlpha:0});
                            playBtnVisible = true;   
                            console.log('show play buttons')
                        }
                    } else{
                        if(playBtnVisible){
                            TweenLite.to(".btn_wrap",.3,{autoAlpha:0});
                            playBtnVisible = false;
                            console.log('hide play buttons')
                        }
                    }
                }
            }
            
            function generateAd(cYear, cPath, dPath, cSize){
                
                
                var dPath = basePath + "/" + dPath;
                var bPath = basePath + "/" + cPath;
                var newAd= document.createElement("div");
                newAd.className = 'ad_title';
                newAd.setAttribute('data-banner', bPath);//path
                newAd.setAttribute('data-default', dPath);//default
                newAd.innerHTML = '<div class="wrapper" style="width:' + cSize.width + 'px; height:' + cSize.height + 'px;"><div class="btn_wrap"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 250" preserveAspectRatio="xMidYMid meet" xml:space="preserve"><path fill="none" class="playBtn" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" d="M108.6,152.8V66.3c0-1.7,1.8-2.9,3.4-2.1l87.9,43.3c1.7,0.9,1.7,3.3,0,4.2L112,154.9C110.4,155.7,108.6,154.6,108.6,152.8z"/></svg></div></div><iframe class="ad_frame" src=' + dPath + ' width="'+ cSize.width +'" height="'+ cSize.height +'" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe><img src="' + dPath +'" class="defaultImg" />';   
                
                
   
                
                ad_wrap.appendChild(newAd); 
                
                /*thisWrapper = newAd.getElementsByClassName("wrapper");*/
            }
            
			var init = function(e){
				var adTl = new TimelineLite();
				
    			adTl.to(ad_wrap, 0.7, {opacity: 1, ease: Power3.easeIn},"-=1.0")
                
			};	

})();
	
        
   
    
    
    
});

