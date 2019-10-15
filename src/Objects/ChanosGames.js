var specialChanmote = {
	name : "Chanos's Remote",
	update : function() {
		this.active = (controller.special);
		player.playerControlled = !this.active;
	},
	isActive : function() {
		return (this.active && player.special == this);
	},
	active : false,
}

class ChanmotePickup extends SpecialPickup {
	getDialog() {
		return [
			new DialogLine("Anymos", "What's this thing?", "#00FFFF"),
			new DialogLine("Chanos", "That, my friend, is the latest version of the Chanmote.", CHANOS_COLOR),
			new DialogLine("Anymos", "Oh, no, I recognize that voice...", "#00FFFF"),
			new DialogLine("Chanos", "By holding Special, you can control some of the various things in this tower.", CHANOS_COLOR),
			new DialogLine("Anymos", "But why? This is stupid.", "#00FFFF"),
			new DialogLine("Chanos", "Come see me at the top of the tower and oyu can say that to my face.", CHANOS_COLOR),
		];
	}
}
ChanmotePickup.prototype.special = specialChanmote;
ChanmotePickup.prototype.sprites = makeSprites("src/Objects/ChanosGames.png", {
	pickup: {x:0, y:0, width:20, height:20},
	slideBlock: {x:20, y:0, width:20, height:20},
}, false);

class SlideBlock extends GameObject {
	constructor(x, y, width = 1, height = 1) {
		super();
		this.width = 20//width*PIXELS_PER_BLOCK;
		this.height = 20//height*PIXELS_PER_BLOCK;
		this.x = x*PIXELS_PER_BLOCK + this.width/2;
		this.y = y*PIXELS_PER_BLOCK + this.height;
	}
	update() {
		if (this.moving) {
			var nx = this.x;
			var ny = this.y;
			switch (this.moving) {
				case 1: nx += PIXELS_PER_BLOCK; break;
				case 2: ny += PIXELS_PER_BLOCK; break;
				case 3: nx -= PIXELS_PER_BLOCK; break;
				case 4: ny -= PIXELS_PER_BLOCK; break;
			}
			if (isPixelSolid(nx, ny-this.height/2) || blockOfPixel(nx, ny-this.height/2).blockSlide) {
				this.moving = false;
				//console.log("stopped");
			} else {
				//console.log(nx-this.x, ny-this.y);
				this.x = nx;
				this.y = ny;
				this.sendHurtbox(this.collDamage);
			}
		} else if (specialChanmote.isActive()) {
			if (controller.rightClicked)
				this.moving = 1;
			else if (controller.downClicked)
				this.moving = 2;
			else if (controller.leftClicked)
				this.moving = 3;
			else if (controller.upClicked)
				this.moving = 4;
		}
		//console.log(specialChanmote.active, this.moving)
	}
	draw() {
		this.drawSprite("slideBlock");
	}
	isSolid(x, y) {
		return (x > this.x-this.width/2 && x < this.x+this.width/2 && y < this.y && y > this.y-this.height);
	}
}
SlideBlock.prototype.team = "lol";
SlideBlock.prototype.sprites = ChanmotePickup.prototype.sprites;
SlideBlock.prototype.collDamage = 150;
SlideBlock.prototype.width = PIXELS_PER_BLOCK;
SlideBlock.prototype.team = PIXELS_PER_BLOCK;
/*var chanmoteEngine = {
	update: function() {
		specialChanos.updateChanmote();
		if (player.special != specialChanos) {
			runnee = gameEngine;
			specialChanos.active = false;
		} else if (specialChanmote.active) {
			gameObjects.forEach(oj => {
				if (oj.updateChanmote)
					oj.updateChanmote();
			});
		} else {
			gameEngine.update();
		}
	},
	draw : function() {
		gameEngine.draw();
	},
}*/