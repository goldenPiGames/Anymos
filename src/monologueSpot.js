function MonologueSpot(name, x, y) {
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.name = name;
	this.lines = [];
	var thisser = this;
	Array.prototype.slice.call(arguments, 3).forEach(function(gar) {
		thisser.lines.push(new DialogLine("Anymos", gar, "#00FFFF"));
	});
}
MonologueSpot.prototype = Object.create(GameObjectBase);
MonologueSpot.prototype.hittable = false;
MonologueSpot.prototype.update = function() {
	if (this.isTouching(player) && controller.interactClicked) {
		dialog.begin(this.lines);
		//if (this.name)
		//	this.collect();
	}
}
MonologueSpot.prototype.draw = function() {
	drawSpriteOnStage(miscSprites.MonologueSpot, this.x, this.y, true);
}