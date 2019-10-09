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

function ObscurerRect(x, y, width, height, color) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}
ObscurerRect.prototype.update = function() {
	
}
ObscurerRect.prototype.draw = function() {
	if (!player.isTouching(this)) {
		ctx.fillStyle = this.color;
		ctx.fillRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width * zoom, this.height * zoom);
	}
}