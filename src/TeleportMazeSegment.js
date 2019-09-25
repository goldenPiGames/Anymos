function TeleportMazeSegment(staticColl, mainBack, mainFore, objects) {
	this.staticColl = staticColl;
	this.width = this.staticColl[0].length * PIXELS_PER_BLOCK;
	this.height = this.staticColl.length * PIXELS_PER_BLOCK;
	this.mainBack = mainBack;
	this.mainFore = mainFore;
	this.objects = objects;
}
TeleportMazeSegment.prototype = Object.create(GameObjectBase);
TeleportMazeSegment.prototype.update = function() {
	var thisser = this;
	if (player.x < 0 && this.left) {
		this.left.enter();
		player.x = this.left.width;
		camerax += this.left.width;
		gameObjects.push(
			new FadeDrawing(function(){drawOnStage(thisser.mainBack, thisser.left.width, 0)}, 1, .001),
			new FadeDrawing(function(){drawOnStage(thisser.mainFore, thisser.left.width, 0)}, 1, .001)
		);
	}
	if (player.x > this.width && this.right) {
		this.right.enter();
		player.x = 0;
		camerax -= this.width;
		gameObjects.push(
			new FadeDrawing(function(){drawOnStage(thisser.mainBack, -thisser.width, 0)}, 1, .001),
			new FadeDrawing(function(){drawOnStage(thisser.mainFore, -thisser.width, 0)}, 1, .001),
		);
	}
	if (player.y < 0 && this.up) {
		this.up.enter();
		player.y = this.up.height;
		cameray += this.up.height;
		gameObjects.push(
			new FadeDrawing(function(){drawOnStage(thisser.mainBack, 0, thisser.up.height)}, 1, .001),
			new FadeDrawing(function(){drawOnStage(thisser.mainFore, 0, thisser.up.height)}, 1, .001)
		);
	}
	if (player.y > this.height && this.down) {
		this.down.enter();
		player.y = 0;
		cameray -= this.height;
		gameObjects.push(
			new FadeDrawing(function(){drawOnStage(thisser.mainBack, 0, -thisser.height)}, 1, .001),
			new FadeDrawing(function(){drawOnStage(thisser.mainFore, 0, -thisser.height)}, 1, .001),
		);
	}
}
TeleportMazeSegment.prototype.draw = function() {
	
}

TeleportMazeSegment.prototype.isSolid = function() {
	
}
TeleportMazeSegment.prototype.enter = function() {
	staticColl = this.staticColl;
	stageImages.mainBack = this.mainBack;
	stageImages.mainFore = this.mainFore;
	gameObjects = [this];
	Array.prototype.push.apply(gameObjects, this.objects);
}