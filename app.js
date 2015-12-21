var fpsDiv =  document.getElementById('fps');
var pixelRatio = (function(){
	var ctx = document.createElement("canvas").getContext("2d");
	var dPixelRatio = window.devicePixelRatio || 1;
	var bPixelRatio = ctx.backingStorePixelRatio ||  ctx.webkitBackingStorePixelRatio ||  ctx.mozBackingStorePixelRatio ||  ctx.oBackingStorePixelRatio ||  ctx.msBackingStorePixelRatio || 1;
	return dPixelRatio / bPixelRatio;})()
genCanvas = function( w, h , r){if(!r) { r = pixelRatio;}
	var c = document.createElement("canvas");
	c.width = w * r;
	c.height = h * r;
	c.style.height = h + "px";
	c.style.width = w + "px";
	c.getContext('2d').setTransform(r,0,0,r,0,0);
	return c;}

var wrapperDiv = document.getElementById('wrapper');
var canvas = genCanvas(1500,1500);
wrapperDiv.appendChild(canvas);
var ctx =canvas.getContext('2d');
ctx.fillStyle = "rgb(0,0,0)";
ctx.textAlign = "left";
ctx.textBaseline = "top";

canvas.addEventListener("mousehover", function(e){
	new Promise(function(resolve, reject){
		if(prompt("name"))
		resolve (prompt("name") || objects.length+1);
	}).then(function(result){
		var newObj = {
			name: result,
			x: e.offsetX,
			y: e.offsetY,
			target: {
				x: Math.random() * 500 + 1,
				y: Math.random() * 500 + 1
			},
			stationary: true,
			rotation: 0
		}
		objects.push(newObj);	
	})
	
},false);


canvas.addEventListener("mousemove",function(e){
	mousepos = {istarget: true, x: e.offsetX, y: e.offsetY};
});
canvas.addEventListener("mouseleave",function(e){
	mousepos = {istarget: false, x:0,y:0};
	objects.forEach((o)=>{o.target.x= rand(); o.target.y= rand()});
});

var mousepos = {istarget: false, x:0,y:0};
var spriteReady = false;
var sprite = new Image();
sprite.onload = function(){
	spriteReady= true;
}
sprite.src= "triangle.png";


/*canvas.addEventListener("mousedown", function(e){
	var n = new Promise(function(resolve, reject){
		resolve (prompt("name") || objects.length+1);
	});
	n.then(function(result){
		var newObj = {
			name: result,
			x: e.offsetX,
			y: e.offsetY,
			target: {
				x: Math.random() * 500 + 1,
				y: Math.random() * 500 + 1
			},
			stationary: true
		}
		objects.push(newObj);	
	})
	
},false);
*/
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;
var fps = 0;
var fpsSmoothing = 60;
//now we need to launch main! but we need to also seed  our  'then' variable
var then = Date.now();
var main = function(){	var now = Date.now();//get current ticks
    var delta = now-then; //need to set up then!
    //call update send the tick to update\
    update(delta / 1000 ); 
     //call render. however long this takes will result in the new tick or w/e
    render();
    //update our tick 
    then = now;
    //do this stuff!
    requestAnimationFrame(main); }



var objects = [{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}},
{name: "X", x: canvas.width/2 ,y:canvas.height/2, target: {x: rand(),y: rand()}, rotation: 0, mousetarget: {istarget: false,x:0,y:0}}
];
 
var update = function(delta){
	//lets try to lerp these bitches to their targets and also set 
	//new targets if they've reached their target
	objects.forEach( (o)=>{
		if(mousepos.istarget){
			o.mousetarget = mousepos;
		}
		if(!o.stationary){

			if(mousepos.istarget){
			//target mouse x/y
				if(Math.abs(o.x  - o.mousetarget.x) > 5){
					o.x+= (o.mousetarget.x - o.x ) * delta;
				}else{
					o.mousetarget.x = Math.random() * 500 + 1;
				}
				if(Math.abs(o.y  - o.mousetarget.y) >  5) {
						o.y+= (o.mousetarget.y - o.y) * delta;
				}else{
					o.mousetarget.y = Math.random() * 500 + 1;
				}
			}else{
			//target x/y
				if(Math.abs(o.x  - o.target.x) > 5){
					o.x+= (o.target.x - o.x ) * delta;
				}else{
				}
				if(Math.abs(o.y  - o.target.y) >  5) {
						o.y+= (o.target.y - o.y) * delta;
				}else{
					o.target.y = Math.random() * 500 + 1;
				}
			}

		}
		o.rotation = calcDirection(o, delta);




	});	
}



var render = function(){
	clearbg();
	//draw here
	objects.forEach( (o)=>{
		//ctx.fillText(o.name,o.x,o.y);
		if(spriteReady){
			ctx.translate(o.x, o.y);
			ctx.rotate(o.rotation - Math.PI/2);
			ctx.drawImage(sprite, -12,-12);
			ctx.rotate(-o.rotation + Math.PI/2);
			ctx.translate(-o.x,-o.y);
		}
		objects.forEach((other)=>{
			if(o!=other){
				ctx.strokeStyle = "#fff"
				ctx.beginPath();
				ctx.moveTo(o.x, o.y);
				ctx.lineTo(other.x,other.y);
				ctx.stroke();
			}
		});

	});
	updateFPS();

}


















//so now we launch it!
main(); 


function clearbg(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
}
function updateFPS(){	var n = Date.now();//get current ticks   
	var thisframe = 1000 / (n - then);
	if(n != then){fps+= (thisframe - fps) / fpsSmoothing;	}
	fpsDiv.innerHTML = "fps: " +  Number(fps.toFixed(1));
}
function rand(){	return Math.random() *  Math.max(canvas.width , canvas.height) + 1;}

function calcDirection(o,delta){

	var y = o.target.y - o.y;
	var x = o.target.x - o.x;
	var ang = Math.atan2(y,x);
	var orientation= 0;
	var d = (ang - o.rotation);
	var dabs =  Math.abs(d);
	var targetAng = ang + (180 * (Math.PI / 180));
	// console.log("orig rotation: " + o.rotation);
	// console.log("targ rotation: " + targetAng);
	// console.log("d:  " + d);
	// console.log("dabs:  " + dabs);
	// console.log("pi : " + Math.PI);
	// console.log("-------------------");
	

	
	if(d > Math.PI){
		d-=Math.PI *2;
	}
	 if(d !==0){
	 	var dir = d / dabs;//rotate 
	 	orientation+=(dir * Math.min( ((Math.PI * 2) / 3), dabs));
	 	// console.log("orientation:  " + orientation); 
	 }
	orientation %= Math.PI *2;
	
	// return (dir) ? o.rotation += (targetAng * delta) : o.rotation -=(targetAng * delta) ;
	return targetAng;
}


var TO_RAD = Math.PI / 180;
var TO_DEGREES = 180 / Math.PI;
