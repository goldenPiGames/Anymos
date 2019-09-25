var MovingPlatformSpriteNames = ["SpawnerSegment", "Segment"];

function MovingPlatformSpawner(x, y, width, speed) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = 10;
	this.speed = speed;
	this.spawnCD = 0;
	this.xdests = [];
	this.ydests = [];
	var thisser = this;
	var rest = Array.prototype.slice.call(arguments, 4);
	rest.forEach(function(cord, deck) {
		if (deck % 2 == 0)
			thisser.xdests.push(cord)
		else
			thisser.ydests.push(cord)
	});
}
MovingPlatformSpawner.prototype = Object.create(GameObjectBase);
MovingPlatformSpawner.prototype.update = function() {
	this.spawnCD --;
	if (this.spawnCD <= 0 && player.isTouching({x:this.x, y:this.y-3, width:this.width, height:this.height})) {
		gameObjects.push(new MovingPlatform(this.x, this.y, this.width, this.speed, this.xdests, this.ydests));
		this.spawnCD = 30;
	}
}
MovingPlatformSpawner.prototype.draw = function() {
	var spr = MovingPlatform.prototype.sprites.SpawnerSegment;
	for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
		drawSpriteOnStage(spr, i, this.y);
	}
}
MovingPlatformSpawner.prototype.isSolid = function(x, y) {
	return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
}

function MovingPlatform(x, y, width, speed, xdests, ydests) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = 10;
	this.speed = speed;
	this.xdests = xdests;
	this.ydests = ydests;
	this.destIndex = 0;
	this.solid = true;
}
MovingPlatform.prototype = Object.create(GameObjectBase);
MovingPlatform.prototype.speciesName = "Moving Platform";
MovingPlatform.prototype.spriteNames = ["SpawnerSegment", "Segment"];
MovingPlatform.prototype.update = function() {
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
MovingPlatform.prototype.draw = function() {
	var spr = this.sprites.Segment;
	for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
		drawSpriteOnStage(spr, i, this.y);
	}
}
MovingPlatform.prototype.isSolid = function(x, y) {
	return (this.solid && x > this.x-this.width/2 && x < this.x+this.width/2 && y < this.y && y > this.y-this.height);
}
/*
MovingPlatform.prototype.isSolid = function(x, y) {
	return (this.x-this.width/2 <= x && this.x+this.width/2 >= x && this.y >= y && this.y-this.height <= y);
}
*/