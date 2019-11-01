class TeleportMaze {
	constructor(segments) {
		//console.log(segments);
		this.segments = segments;
		for (nom in this.segments) {
			var seg = this.segments[nom];
			seg.name = nom;
			seg.width = seg.staticColl[0].length * PIXELS_PER_BLOCK;
			seg.height = seg.staticColl.length * PIXELS_PER_BLOCK;
			seg.objects.unshift(this);
		}
	}
	update() {
		if (player.x < 0 && this.current.left) {
			this.enter(this.current.left);
			player.x += this.width;
			camerax += this.width;
			this.previousX = this.width;
			this.previousY = 0;
		}
		if (player.x > this.width && this.current.right) {
			this.previousX = -this.width;
			this.previousY = 0;
			player.x -= this.width;
			camerax -= this.width;
			this.enter(this.current.right);
		}
		if (player.y - player.height/2 < 0 && this.current.up) {
			this.enter(this.current.up);
			player.y += this.height;
			cameray += this.width;
			this.previousX = 0;
			this.previousY = this.height;
			if (player.dy > -6.5)
				player.dy = -6.5;
		}
		if (player.y - player.height/2 > this.height && this.current.down) {
			this.previousX = 0;
			this.previousY = -this.height;
			player.y -= this.height;
			cameray -= this.height;
			this.enter(this.current.down);
		}
	}
	start(name) {
		edgesSolid = false;
		this.enter(name);
	}
	enter(seg) {
		this.previous = this.current;
		seg = this.asStage(seg);
		console.log(seg.name);
		this.current = seg;
		this.width = seg.width;
		this.height = seg.height;
		staticColl = seg.staticColl;
		stageImages.mainBack = seg.mainBack;
		stageImages.mainFore = seg.mainFore;
		cameraRightBound = seg.width;
		cameraBottomBound = seg.height;
		gameObjects = seg.objects;
	}
	asStage(seg) {
		return typeof seg == "string" ? this.segments[seg] : seg;
	}
	draw() {
		if (this.previous) {
			drawOnStage(this.previous.mainBack, this.previousX, this.previousY);
			drawOnStage(this.previous.mainFore, this.previousX, this.previousY);
		}
	}
}

function makeTeleportMazeSegmentGenerator(defaults) {
	return function(spliss) {
		for (prop in defaults) {
			if (spliss[prop] == undefined)
				spliss[prop] = defaults[prop];
		}
		return spliss;
	}
}