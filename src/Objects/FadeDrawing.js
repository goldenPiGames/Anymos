function FadeDrawing(drawFunction, opacity, fadeSpeed = 0) {
	this.drawFunction = drawFunction;
	this.opacity = opacity;
	this.fadeSpeed = fadeSpeed;
}
FadeDrawing.prototype = Object.create(GameObjectBase);
FadeDrawing.prototype.update = function() {
	this.opacity -= this.fadeSpeed;
	if (this.opacity <= 0)
		this.die();
}
FadeDrawing.prototype.draw = function() {
	ctx.globalAlpha = this.opacity;
	this.drawFunction(this.opacity);
	ctx.globalAlpha = 1;
}