class Goalpost extends GameObject {
	constructor(toStage, x, y, height) {
		super();
		this.toStage = toStage;
		this.x = x;
		this.y = y;
		this.height = height;
	}
	update() {
		if (this.isTouching(player)) {
			finishStage(this.toStage);
		}
	}
	draw() {
		drawSpriteOnStage(this.sprites.bottom, this.x, this.y);
		for (var i = this.sprites.bottom.height; i <= this.height - this.sprites.top.height; i+= this.sprites.segment.height) {
			drawSpriteOnStage(this.sprites.segment, this.x, this.y - i);
		}
		drawSpriteOnStage(this.sprites.top, this.x, this.y-this.height+this.sprites.top.height);
	}
}
Goalpost.prototype.sprites = makeSprites("src/Objects/Goalpost.png", {
	top: {x:0, y:0, width:18, height:17},
	segment: {x:6, y:18, width:6, height:8},
	bottom: {x:2, y:27, width:14, height:6},
}, true);
Goalpost.prototype.width = 14;

class EndLight extends Goalpost {
	constructor(toStage, x, y) {
		super(toStage, x, y, 30);
	}
	draw() {
		this.drawSprite("light");
	}
}
EndLight.prototype.sprites = makeSprites("src/Objects/EndLight.png", {
	light : {x:0, y:0, width:20, height:30},
}, true);
EndLight.prototype.width = 20;
EndLight.prototype.illumination = 300;