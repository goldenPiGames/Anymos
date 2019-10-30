function ObscurerImage(x, y, img) {
	this.img = img;
	this.x = x;
	this.y = y;
}
ObscurerImage.prototype.update = function() {
	
}
ObscurerImage.prototype.draw = function() {
	if (!this.width) {
		this.width = this.img.width;
		this.height = this.img.height;
	}
	if (!player.isTouching(this)) {
		drawSpriteOnStage(this.img, this.x, this.y);
	}
}