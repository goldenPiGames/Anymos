var Switches = {};

function Switch(color, x, y, defaultState) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.width = 18;
	this.height = 20;
	Switches[this.color] = defaultState;
}
Switch.prototype = Object.create(GameObjectBase);
Switch.prototype.update = function() {
	if (this.isTouching(player) && controller.interactClicked) {
		Switches[this.color] = !Switches[this.color];
	}
}
Switch.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.fillRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width*zoom, this.height*zoom);
	drawSpriteOnStage(Switches[this.color] ? miscSprites.SwitchOn : miscSprites.SwitchOff, this.x, this.y)
}

function Door(color, x, y, width, height) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}
Door.prototype = Object.create(GameObjectBase);
Door.prototype.update = function() {
	
}
Door.prototype.draw = function() {
	if (Switches[this.color]) {
		ctx.fillStyle = this.color;
		ctx.fillRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width*zoom, this.height*zoom);
	}
}
Door.prototype.isSolid = function(x, y) {
	if (Switches[this.color]) {
		return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
	}
}