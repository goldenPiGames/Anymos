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
Mirror.prototype.sprites = makeSprites("src/Objects/Mirror.png", {
	segment: {x:0, y:0, width:10, height:10},
	pickup: {x:10, y:0, width:20, height:20},
}, false);
Mirror.prototype.width = 10;
Mirror.prototype.isMirror = true;

var specialReflector = {
	name : "Aqros' Reflector",
	update : function(holder) {
		if (holder.controller.specialClicked) {
			var mir = null;
			var dist = Infinity;
			gameObjects.forEach(function(oj) {
				if (oj.isMirror && holder.y <= oj.y && holder.y-holder.height >= oj.y-oj.height && Math.abs(oj.x - holder.x) < dist) {
					mir = oj;
					dist = Math.abs(oj.x - holder.x);
				}
			})
			//console.log(mir);
			if (mir) {
				var intendedx = 2 * mir.x - holder.x;
				if (!isPixelSolid(intendedx-holder.width/2, holder.y) && !isPixelSolid(intendedx+holder.width/2, holder.y) && !isPixelSolid(intendedx-holder.width/2, holder.y-holder.height/2) && !isPixelSolid(intendedx+holder.width/2, holder.y-holder.height/2) && !isPixelSolid(intendedx-holder.width/2, holder.y-holder.height) && !isPixelSolid(intendedx+holder.width/2, holder.y-holder.height)) {
					var px = holder.x;
					var py = holder.y - holder.height/2;
					holder.x = intendedx;
					holder.dx = - holder.dx;
					holder.facingRight = !holder.facingRight;
					gameObjects.push(new FadeDrawing(function() {
						ctx.lineWidth = 2 * zoom;
						ctx.strokeStyle = "#0080FF";
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

class ReflectorPickup extends SpecialPickup {
	getDialog() {
		return [
			new DialogLine("Anymos", "So this is... Aqros' Reflector.", "#00FFFF"),
			new DialogLine("Anymos", "It's a Special, so I can use it by pressing [Shift] or (Right trigger).", "#00FFFF"),
			new DialogLine("Anymos", "I have the feeling it can interact somehow with the mirrors in here...", "#00FFFF"),
		];
	}
}
ReflectorPickup.prototype.special = specialReflector;
ReflectorPickup.prototype.sprites = Mirror.prototype.sprites;