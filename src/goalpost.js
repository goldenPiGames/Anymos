function Goalpost(toStage, x, y, height) {
	this.toStage = toStage;
	this.x = x;
	this.y = y;
	this.width = 14;
	this.height = height;
}
//console.log(Goalpost)
Goalpost.prototype = Object.create(GameObjectBase);
Goalpost.prototype.update = function() {
	if (this.isTouching(player)) {
		finishStage(this.toStage);
	}
}
Goalpost.prototype.draw = function() {
	drawSpriteOnStage(miscSprites.GoalpostBottom, this.x, this.y);
	for (var i = miscSprites.GoalpostBottom.height; i <= this.height - miscSprites.GoalpostTop.height; i+= miscSprites.GoalpostSegment.height) {
		drawSpriteOnStage(miscSprites.GoalpostSegment, this.x, this.y - i);
	}
	drawSpriteOnStage(miscSprites.GoalpostTop, this.x, this.y-this.height+miscSprites.GoalpostTop.height);
}