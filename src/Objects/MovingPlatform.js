const MOVING_PLATFORM_SPRITES = makeSprites("src/Objects/MovingPlatform.png", {
	movingSegment : {x:0, y:0, width:10, height:10},
	spawnerSegment : {x:0, y:10, width:10, height:10},
	sinusoidalSegment : {x:10, y:0, width:10, height:10},
}, false);

class MovingPlatformSpawner extends GameObject {
	constructor(x, y, width, speed, ...dests) {
		super();
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = 10;
		this.speed = speed;
		this.spawnCD = 0;
		this.xdests = [];
		this.ydests = [];
		//var thisser = this;
		//var rest = Array.prototype.slice.call(arguments, 4);
		dests.forEach((cord, deck) => {
			if (deck % 2 == 0)
				this.xdests.push(cord)
			else
				this.ydests.push(cord)
		});
	}
	update() {
		this.spawnCD --;
		if (this.spawnCD <= 0 && player.isTouching({x:this.x, y:this.y-3, width:this.width, height:this.height})) {
			gameObjects.push(new MovingPlatform(this.x, this.y, this.width, this.speed, this.xdests, this.ydests));
			this.spawnCD = 30;
		}
	}
	draw() {
		var spr = MovingPlatform.prototype.sprites.spawnerSegment;
		for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
			drawSpriteOnStage(spr, i, this.y);
		}
	}
	isSolid(x, y) {
		return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
	}
}
MovingPlatformSpawner.prototype.height = 10;
MovingPlatformSpawner.prototype.sprites = MOVING_PLATFORM_SPRITES;

class MovingPlatform extends GameObject {
	constructor(x, y, width, speed, xdests, ydests) {
		super();
		this.x = x;
		this.y = y;
		this.width = width;
		this.speed = speed;
		this.xdests = xdests;
		this.ydests = ydests;
		this.destIndex = 0;
		this.solid = true;
	}
	update() {
		//console.log("position: ",this.x,this.y)
		if (this.x == this.xdests[this.destIndex] && this.y == this.ydests[this.destIndex]) {
			this.destIndex++;
			if (this.destIndex >= this.ydests.length) {
				this.die();
				return;
			}
		}
		var xto = (this.xdests[this.destIndex]-this.x);
		var yto = (this.ydests[this.destIndex]-this.y);
		//console.log("to destination: ",xto,yto)
		var theta = Math.atan2(yto, xto);
		//console.log("theta: ",theta)
		var dx = this.speed * Math.cos(theta);
		var dy = this.speed * Math.sin(theta);
		//console.log("velocity: ",dx,dy)
		var intendedx = this.x + (dx > 0 ? Math.min : Math.max)(xto, dx);
		var intendedy = this.y + (dy > 0 ? Math.min : Math.max)(yto, dy);
		//console.log("indended: ",intendedx,intendedy)
		if (player.isTouching({x:this.x, y:this.y, width:this.width, height:this.height+1})) {
			this.solid = false;
			player.push(intendedx - this.x, intendedy - this.y)
			//console.log("player: ", player.x, player.y)
			this.solid = true;
		}
		this.x = intendedx;
		this.y = intendedy;
		if (player.isTouching({x:this.x, y:this.y-this.height, width:this.width, height:.02}) && !player.isTouching({x:this.x, y:this.y, width:this.width, height:.02})) {
			player.y = this.y - this.height;
		}
	}
	draw() {
		var spr = this.sprites.movingSegment;
		for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
			drawSpriteOnStage(spr, i, this.y);
		}
	}
	isSolid(x, y) {
		return (this.solid && x > this.x-this.width/2 && x < this.x+this.width/2 && y < this.y && y > this.y-this.height);
	}
}
MovingPlatform.prototype.speciesName = "Moving Platform";
MovingPlatform.prototype.height = 10;
MovingPlatform.prototype.sprites = MOVING_PLATFORM_SPRITES;
/*
MovingPlatform.prototype.isSolid = function(x, y) {
	return (this.x-this.width/2 <= x && this.x+this.width/2 >= x && this.y >= y && this.y-this.height <= y);
}
*/
var SinusoidalPlatformSpriteNames = ["Segment"];

class SinusoidalPlatform extends GameObject {
	constructor(cx, y, width, radius, omega, theta = 0) {
		super();
		this.cx = cx;
		this.y = y;
		this.width = width;
		this.height = 10;
		this.theta = theta;
		this.radius = radius;
		this.omega = omega;
		this.x = cx + radius * Math.sin(theta);
		this.solid = true;
	}
	update() {
		this.theta += this.omega;
		if (this.theta > 2*Math.PI)
			this.theta -= 2*Math.PI;
		var nx = this.cx + this.radius * Math.sin(this.theta);
		var ny = this.y;
		//console.log("indended: ",intendedx,intendedy)
		if (player.isTouching({x:nx, y:ny, width:this.width+1, height:this.height+1})) {
			this.solid = false;
			player.push(nx-this.x, ny-this.y)
			//console.log("player: ", player.x, player.y)
			this.solid = true;
		}
		this.x = nx;
		this.y = ny;
		if (player.isTouching({x:this.x, y:this.y-this.height, width:this.width, height:0}) && !player.isTouching({x:this.x, y:this.y-this.height+.05, width:this.width, height:0})) {
			player.y = this.y - this.height;
		}
	}
	draw() {
		var spr = this.sprites.sinusoidalSegment;
		for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
			drawSpriteOnStage(spr, i, this.y);
		}
	}
	isSolid(x, y) {
		return (this.solid && x > this.x-this.width/2 && x < this.x+this.width/2 && y < this.y && y > this.y-this.height);
	}
}
SinusoidalPlatform.prototype.speciesName = "Sinusoidal Platform";
SinusoidalPlatform.prototype.sprites = MOVING_PLATFORM_SPRITES;
/*
SinusoidalPlatform.prototype.isSolid = function(x, y) {
	return (this.x-this.width/2 <= x && this.x+this.width/2 >= x && this.y >= y && this.y-this.height <= y);
}
*/