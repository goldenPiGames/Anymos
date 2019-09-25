function NPC(name, imageGetFunction, x, y, facingRight) {
	this.name = name;
	if (typeof imageGetFunction == "function") {
		this.imageGetFunction = imageGetFunction;
	} else {
		this.image = imageGetFunction;
	}
	this.inited = false;
	this.x = x;
	this.y = y;
	this.facingRight = facingRight;
	this.lines = Array.prototype.slice.call(arguments, 5);
}
NPC.prototype = Object.create(GameObjectBase);
NPC.prototype.hittable = false;
NPC.prototype.update = function() {
	if (!this.inited) {
		this.init();
	}
	if (this.isTouching(player) && controller.interactClicked) {
		this.facingRight = (this.x < player.x);
		player.facingRight = !this.facingRight;
		
		dialog.begin(this.lines);
		//if (this.name)
		//	this.collect();
	}
}
NPC.prototype.draw = function() {
	if (!this.inited)
		this.init();
	drawSpriteOnStage(this.image, this.x, this.y, this.facingRight);
}
NPC.prototype.init = function() {
	if (this.imageGetFunction)
		this.image = this.imageGetFunction();
	this.width = this.image.width+6;
	this.height = this.image.height;
}
//function(){return Teion.prototype.sprites.Normal}