class TeleportMazeSegment/* extends GameObject*/ {
	constructor(staticColl, mainBack, mainFore, objects) {
		//super();
		this.staticColl = staticColl;
		this.width = this.staticColl[0].length * PIXELS_PER_BLOCK;
		this.height = this.staticColl.length * PIXELS_PER_BLOCK;
		this.mainBack = mainBack;
		this.mainFore = mainFore;
		this.objects = [this];
		this.objects.push(...objects);
	}
	update() {
		var thisser = this;
		if (player.x < 0 && this.left) {
			this.left.enter();
			player.x += this.left.width;
			camerax += this.left.width;
			gameObjects.push(
				new FadeDrawing(function(){drawOnStage(thisser.mainBack, thisser.left.width, 0)}, 1, .001),
				new FadeDrawing(function(){drawOnStage(thisser.mainFore, thisser.left.width, 0)}, 1, .001)
			);
		}
		if (player.x > this.width && this.right) {
			this.right.enter();
			player.x -= this.width;
			camerax -= this.width;
			gameObjects.push(
				new FadeDrawing(function(){drawOnStage(thisser.mainBack, -thisser.width, 0)}, 1, .001),
				new FadeDrawing(function(){drawOnStage(thisser.mainFore, -thisser.width, 0)}, 1, .001),
			);
		}
		if (player.y - player.height/2 < 0 && this.up) {
			this.up.enter();
			player.y += this.up.height;
			//console.log(player.dy);
			if (player.dy > -6.5)
				player.dy = -6.5;
			cameray += this.up.height;
			gameObjects.push(
				new FadeDrawing(function(){drawOnStage(thisser.mainBack, 0, thisser.up.height)}, 1, .001),
				new FadeDrawing(function(){drawOnStage(thisser.mainFore, 0, thisser.up.height)}, 1, .001)
			);
		}
		if (player.y - player.height/2 > this.height && this.down) {
			this.down.enter();
			player.y -= this.height;
			cameray -= this.height;
			gameObjects.push(
				new FadeDrawing(function(){drawOnStage(thisser.mainBack, 0, -thisser.height)}, 1, .001),
				new FadeDrawing(function(){drawOnStage(thisser.mainFore, 0, -thisser.height)}, 1, .001),
			);
		}
	}
	draw() {
		
	}
	enter() {
		staticColl = this.staticColl;
		stageImages.mainBack = this.mainBack;
		stageImages.mainFore = this.mainFore;
		cameraRightBound = this.mainBack.width;
		cameraBottomBound = this.mainBack.height;
		gameObjects = this.objects;
	}
}