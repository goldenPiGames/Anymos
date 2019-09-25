var SinusoidalPlatformSpriteNames = ["Segment"];

function SinusoidalPlatform(cx, y, width, radius, omega, theta = 0) {
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
SinusoidalPlatform.prototype = Object.create(GameObjectBase);
SinusoidalPlatform.prototype.speciesName = "Sinusoidal Platform";
SinusoidalPlatform.prototype.spriteNames = ["Segment"];
SinusoidalPlatform.prototype.update = function() {
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
SinusoidalPlatform.prototype.draw = function() {
	var spr = this.sprites.Segment;
	for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
		drawSpriteOnStage(spr, i, this.y);
	}
}
SinusoidalPlatform.prototype.isSolid = function(x, y) {
	return (this.solid && x > this.x-this.width/2 && x < this.x+this.width/2 && y < this.y && y > this.y-this.height);
}
/*
SinusoidalPlatform.prototype.isSolid = function(x, y) {
	return (this.x-this.width/2 <= x && this.x+this.width/2 >= x && this.y >= y && this.y-this.height <= y);
}
*/