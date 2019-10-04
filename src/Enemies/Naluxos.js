class Naluxos extends Teion {
	
}
Naluxos.prototype.sprites = makeSprites("src/Enemies/Naluxos.png", {
	pickup: {x:0, y:0, width:20, height:20},
	standing: {x:20, y:0, width:16, height:30},
}, false);

const FLASH_REDUCE_RATE = .05;

class FlashPickup extends GameObject {
	constructor(x, y, doDialog = true) {
		super();
		this.x = x;
		this.y = y;
		this.doDialog = doDialog;
	}
	update() {
		if (this.isTouching(player) && controller.interactClicked && player.special != specialFlash) {
			player.special = specialFlash;
			if (this.doDialog) {
				this.doDialog = false;
				dialog.begin(new DialogLine("Anymos", "So this is... Naluxos' Flash.", "#00FFFF"),
					new DialogLine("Naluxos", "Yeah! It's a Special, so you can use it by pressing [Shift] or (Right trigger).", "#FFFFFF"),
					new DialogLine("Naluxos", "When you use it, it'll dispel the darkness, but only briefly. You can use it as much as you need, but it may take some energy.", "#FFFFFF"));
			}
		}
	}
	draw() {
		if (player.special != specialFlash)
			this.drawSprite("pickup");
	}
}
FlashPickup.prototype.width = 20;
FlashPickup.prototype.height = 20;
FlashPickup.prototype.sprites = Naluxos.prototype.sprites;

var specialFlash = {
	name : "Naluxos' Flash",
	update : function() {
		if (controller.specialClicked) {
			used += 30;
			player.flashing = 1;
		}
	}
}