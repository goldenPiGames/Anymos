class Naluxos extends Teion {
	
}
Naluxos.prototype.sprites = makeSprites("src/Enemies/Naluxos.png", {
	pickup: {x:0, y:0, width:20, height:20},
	standing: {x:20, y:0, width:16, height:30},
}, false);

const FLASH_REDUCE_RATE = .05;

var specialFlash = {
	name : "Naluxos' Flash",
	update : function() {
		this.active = Math.max(0, this.active - FLASH_REDUCE_RATE);
		if (controller.specialClicked) {
			used += 60;
			this.active = 1;
		}
	}
}

class FlashPickup extends SpecialPickup {
	getDialog() {
		return [
			new DialogLine("Anymos", "So this is... Naluxos' Flash.", "#00FFFF"),
			new DialogLine("Naluxos", "Yeah! It's a Special, so you can use it by pressing [Shift] or (Right trigger).", "#FFFFFF"),
			new DialogLine("Naluxos", "When you use it, it'll dispel the darkness, but only briefly. You can use it as much as you need, but it may take some energy.", "#FFFFFF"),
		];
	}
}
FlashPickup.prototype.special = specialFlash;
FlashPickup.prototype.sprites = Naluxos.prototype.sprites;