var MirrorSpriteNames = ["Segment", "Pickup"];
function Mirror(x, y, height) {
	this.x = x;
	this.y = y;
	this.width = 10;
	this.height = height;
}
Mirror.prototype = Object.create(GameObjectBase)
Mirror.prototype.isMirror = true;
Mirror.prototype.update = function() {
	
}
Mirror.prototype.draw = function() {
	for (var i = 0; i < this.height; i+= this.sprites.Segment.height) {
		drawSpriteOnStage(this.sprites.Segment, this.x, this.y - i);
	}
	ctx.globalAlpha = .5;
	if (player.y - player.height >= this.y - this.height && player.y <= this.y) {
		drawSpriteOnStage(playerSprites[player.state+player.stateCycle], 2 * this.x - player.x, player.y, !player.facingRight);
		if (player.attacking)
			drawSpriteOnStage(playerSprites["ArmAttacking"+player.attacking], 2 * this.x - player.x, player.y, !player.facingRight);
	}
	ctx.globalAlpha = 1;
}
Mirror.prototype.isSolid = function(x, y) {
	return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
}

function ReflectorPickup(x, y, doDialog = true) {
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.doDialog = doDialog;
}
ReflectorPickup.prototype = Object.create(GameObjectBase)
ReflectorPickup.prototype.update = function () {
	if (this.isTouching(player) && controller.interactClicked && player.special != "Aqros' Reflector") {
		player.special = "Aqros' Reflector";
		if (this.doDialog) {
			this.doDialog = false;
			dialog.begin(new DialogLine("Anymos", "So this is... Aqros' Reflector.", "#00FFFF"),
				new DialogLine("Anymos", "This is a Special. I can activate my Special by pressing [Shift] or (R).", "#00FFFF"),
				new DialogLine("Anymos", "I have the feeling it can interact somehow with the mirrors in this temple...", "#00FFFF"));
		}
	}
}
ReflectorPickup.prototype.draw = function () {
	if (player.special != "Aqros' Reflector")
		drawSpriteOnStage(Mirror.prototype.sprites.Pickup, this.x, this.y);
}

function resolveReflector() {
	var mir = null;
	var dist = Infinity;
	gameObjects.forEach(function(oj) {
		if (oj.isMirror && player.y <= oj.y && player.y-player.height >= oj.y-oj.height && Math.abs(oj.x - player.x) < dist) {
			mir = oj;
			dist = Math.abs(oj.x - player.x);
		}
	})
	if (mir) {
		var intendedx = 2 * mir.x - player.x;
		if (!isPixelSolid(intendedx-player.width/2, player.y) && !isPixelSolid(intendedx+player.width/2, player.y) && !isPixelSolid(intendedx-player.width/2, player.y-player.height/2) && !isPixelSolid(intendedx+player.width/2, player.y-player.height/2) && !isPixelSolid(intendedx-player.width/2, player.y-player.height) && !isPixelSolid(intendedx+player.width/2, player.y-player.height)) {
			var px = player.x;
			var py = player.y - player.height/2;
			player.x = intendedx;
			player.dx = - player.dx;
			player.facingRight = !player.facingRight;
			gameObjects.push(new FadeDrawing(function() {
				ctx.lineWidth = 2 * zoom;
				ctx.strokeStyle = "#00FFFF";
				ctx.beginPath();
				ctx.moveTo(stagex(px), stagey(py));
				ctx.lineTo(stagex(intendedx), stagey(py));
				ctx.stroke();
			}, 1, .2));
		}
	}
}