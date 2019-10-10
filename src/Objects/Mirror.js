class Mirror extends GameObject {
	constructor(x, y, height) {
		super();
		this.x = x;
		this.y = y;
		this.height = height;
	}
	update() {
		
	}
	draw() {
		for (var i = 0; i < this.height; i += this.sprites.segment.height) {
			drawSpriteOnStage(this.sprites.segment, this.x, this.y - i);
		}
		if (player.y - player.height >= this.y - this.height && player.y <= this.y) {
			ctx.globalAlpha = .5;
			var ai = new AnymosAfterimage(player);
			ai.x = 2 * this.x - ai.x;
			ai.facingRight = !ai.facingRight;
			ai.draw();
			ctx.globalAlpha = 1;
		}
	}
	isSolid(x, y) {
		return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
	}
}
Mirror.prototype.sprites = makeSprites("src/Enemies/Mirror.png", {
	segment: {x:0, y:0, width:10, height:10},
	pickup: {x:10, y:0, width:20, height:20},
}, false);
Mirror.prototype.width = 10;
Mirror.prototype.isMirror = true;

class ReflectorPickup extends GameObject {
	constructor(x, y, doDialog = true) {
		super();
		this.x = x;
		this.y = y;
		this.doDialog = doDialog;
	}
	update() {
		if (this.isTouching(player) && controller.interactClicked && player.special != specialReflector) {
			player.special = specialReflector;
			if (this.doDialog) {
				this.doDialog = false;
				dialog.begin(new DialogLine("Anymos", "So this is... Aqros' Reflector.", "#00FFFF"),
					new DialogLine("Anymos", "It's a Special, so I can use it by pressing [Shift] or (Right trigger).", "#00FFFF"),
					new DialogLine("Anymos", "I have the feeling it can interact somehow with the mirrors in here...", "#00FFFF"));
			}
		}
	}
	draw() {
		if (player.special != specialReflector)
			this.drawSprite("pickup");
	}
}
ReflectorPickup.prototype.sprites = Mirror.prototype.sprites;
ReflectorPickup.prototype.width = 20;
ReflectorPickup.prototype.height = 20;

var specialReflector = {
	name : "Aqros' Reflector",
	update : function() {
		if (controller.specialClicked) {
			var mir = null;
			var dist = Infinity;
			gameObjects.forEach(function(oj) {
				if (oj.isMirror && player.y <= oj.y && player.y-player.height >= oj.y-oj.height && Math.abs(oj.x - player.x) < dist) {
					mir = oj;
					dist = Math.abs(oj.x - player.x);
				}
			})
			//console.log(mir);
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
	}
}