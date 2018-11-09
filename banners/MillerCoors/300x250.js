window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||
		   window.mozRequestAnimationFrame ||
			function(callback) {
				window.setTimeout( callback, 1000 / 60 );
			};

})();

var running = true;
var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		cw = 300,
		ch = 250,
		fireworks = [],
		particles = [],
		hue = 120,
		limiterTotal = 5,
		limiterTick = 0,
		timerTotal = 80,
		timerTick = 0,
		mousedown = false,
		mx,
		my;
//console.log(ctx);		
canvas.width = cw;
canvas.height = ch;

function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

function Firework( sx, sy, tx, ty ) {
	this.x = sx;
	this.y = sy;
	this.sx = sx;
	this.sy = sy;
	this.tx = tx;
	this.ty = ty;
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	this.coordinates = [];
	this.coordinateCount = 2;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 5;
	this.acceleration = 500;
	this.brightness = random( 50, 70 );
	this.targetRadius = 1;
}

Firework.prototype.update = function( index ) {
	this.coordinates.pop();
	this.coordinates.unshift( [ this.x, this.y ] );
	
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	this.speed *= this.acceleration;
	
	var vx = Math.cos( this.angle ) * this.speed,
			vy = Math.sin( this.angle ) * this.speed;
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		fireworks.splice( index, 1 );
	} else {
		this.x += vx;
		this.y += vy;
	}
}

Firework.prototype.draw = function() {
	ctx.beginPath();
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

function Particle( x, y ) {
	this.x = x;
	this.y = y;
	this.coordinates = [];
	this.coordinateCount = 5;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 5 );
	this.friction = 0.95;
	this.gravity = 0.2;
	this.hue = random( hue - 20, hue + 20 );
	this.brightness = random( 50, 80 );
	this.alpha = 1;
	this.decay = random( 0.015, 0.03 );
}

Particle.prototype.update = function( index ) {
	this.coordinates.pop();
	this.coordinates.unshift( [ this.x, this.y ] );
	this.speed *= this.friction;
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	this.alpha -= this.decay;
	
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

Particle.prototype.draw = function() {
	ctx. beginPath();
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

function createParticles( x, y ) {
	var particleCount = 230;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}
//requestAnimFrame();
var firstTime = true;
function loop() {
	//console.log('looped')
	
	if(firstTime){
		startAnimation();	
		firstTime = false
	}

	hue += 2.3;
	

	ctx.globalCompositeOperation = 'destination-out';
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	ctx.globalCompositeOperation = 'lighter';

	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}

	var i = particles.length;
	while( i-- ) {
		particles[ i ].draw();
		particles[ i ].update( i );
	}

	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			fireworks.push( new Firework( 100, 100, 50, 50 ) );
			limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
	if(running){
	requestAnimFrame( loop );
}
}

canvas.addEventListener( 'mousemove', function(e) {
	mx = e.pageX - canvas.offsetLeft;
	my = e.pageY - canvas.offsetTop;
});

canvas.addEventListener( 'mousedown', function(e) {
	e.preventDefault();
	mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
	e.preventDefault();
	mousedown = false;
});

window.onload = loop;
 









startAnimation = function() {
    //ALL animation code goes here...including 
hotspot = document.getElementById("hotspot");

hotspot.addEventListener("click", onHotSpotClick, false);

function onHotSpotClick(){
	window.open(window.clickTag,'_blank');
}
	
	console.log('here there...', fireworks);
    var adTl = new TimelineMax({});
    adTl.add("startAd")
        .from("#txt1", 1.0,{opacity:0},"+=0.5")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 150, 8 ) );
	},[],this, "-=1.0")
        .from("#burg1", 1.0,{opacity:0},"+=0.2")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 10, 150 ) );
	},[],this, "-=1.0")	
		.call(function(){
		fireworks.push( new Firework( 100, 100, 250, 50 ) );
	},[],this, "-=0.2")		
        .staggerFrom(["#burg2","#coors"], 1.0,{opacity:0},0.2,"-=0.0")
//        .from("#coors", 1.0,{opacity:0},"+=0.2")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 100, 150 ) );
	},[],this, "-=1.0")	
        .from("#redds", 1.0,{opacity:0},"+=0.2")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 150, 80 ) );
	},[],this, "-=1.0")	
        .from("#blue_moon", 1.0,{opacity:0},"+=0.2")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 220, 100 ) );
	},[],this, "-=1.0")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 50, 70 ) );
	},[],this, "-=0.5")
        .from("#cta", 1.0,{opacity:0},"+=0.2")
			.call(function(){
		fireworks.push( new Firework( 100, 100, 220, 100 ) );
	},[],this, "-=1.0")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 40, 120 ) );
	},[],this, "-=1.0")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 280, 10 ) );
	},[],this, "-=0.8")
//        .set("#bg_end",{opacity:1},"+=0.0")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 20, 10 ) );
	},[],this, "-=0.8")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 100, 80 ) );
	},[],this, "-=0.5")
		.call(function(){
		fireworks.push( new Firework( 100, 100, 260, 50 ) );
	},[],this, "-=0.5")


	
     .from("#bg2", 0.8,{opacity:0, ease: Sine.easeInOut},"-=0.3")	
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







	


