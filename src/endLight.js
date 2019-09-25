function EndLight(toStage, x, y) {
	this.toStage = toStage;
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 30;
}
EndLight.prototype = Object.create(GameObjectBase);
EndLight.prototype.update = function() {
	if (this.isTouching(player))
		finishStage(this.toStage);
}
EndLight.prototype.draw = function() {
	drawSpriteOnStage(miscSprites.EndLight, this.x, this.y);
}