var RisingPlatformSpriteNames = ["SpawnerSegment", "Segment"];

function RisingPlatformSpawner(x, y, width, spawndy, maxy) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = 10;
	this.spawndy = spawndy;
	this.maxy = maxy;
	this.spawnCD = 0;
}
RisingPlatformSpawner.prototype = Object.create(GameObjectBase);
RisingPlatformSpawner.prototype.sprites = {};
RisingPlatformSpawner.prototype.update = function() {
	this.spawnCD --;
	if (this.spawnCD <= 0 && player.isTouching({x:this.x, y:this.y-1, width:this.width, height:this.height})) {
		gameObjects.push(new RisingPlatform(this.x, this.y, this.width, this.spawndy, this.maxy));
		this.spawnCD = 30;
	}
}
RisingPlatformSpawner.prototype.draw = function() {
	var spr = RisingPlatform.prototype.sprites.SpawnerSegment;
	for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
		drawSpriteOnStage(spr, i, this.y);
	}
}
RisingPlatformSpawner.prototype.isSolid = function(x, y) {
	return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
}

function RisingPlatform(x, y, width, dy, maxy) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = 10;
	this.dy = dy;
	this.maxy = maxy;
}
RisingPlatform.prototype = Object.create(GameObjectBase);
RisingPlatform.prototype.sprites = {};
RisingPlatform.prototype.update = function() {
	this.y += this.dy;
	if (this.isTouching(player)) {
		player.y = this.y - this.height-0.1;
		//player.dy = 0;
	}
	if (this.y < this.maxy)
		this.die();
}
RisingPlatform.prototype.draw = function() {
	var spr = this.sprites.Segment;
	for (var i = this.x - this.width/2 + spr.width/2; i <= this.x + this.width/2 - spr.width/2; i += spr.width) {
		drawSpriteOnStage(spr, i, this.y);
	}
}
RisingPlatform.prototype.isSolid = function(x, y) {
	return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
}
/*
RisingPlatform.prototype.isSolid = function(x, y) {
	return (this.x-this.width/2 <= x && this.x+this.width/2 >= x && this.y >= y && this.y-this.height <= y);
}
*/