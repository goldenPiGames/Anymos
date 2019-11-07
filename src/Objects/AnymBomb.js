class AnymBomb extends GameObject {
	update() {
		if (this.detonated) {
			if (this.detonated == 3) {
				this.sendHurtbox
			} else if (this.detonated >= 10) {
				
			}
		}
	}
	draw() {
		
	}
	detonate() {
		this.detonated = 1;
	}
}

var specialBomb = {
	name : "Anymos' Delay Bomb",
	update : function(holder) {
		if (controller.specialClicked) {
			var found = gameObjects.find(bup => bup instanceof AnymBomb && !bup.detonated);
			if (found) {
				found.detonate();
			} else {
				used
				gameObjects.push(new AnymBomb(player.x, player.y));
			}
		}
	},
	isActive : function() {
		return player.special == this && this.active;
	},
	remove : function(holder) {
		this.active = 0;
	},
}

class BombPickup extends SpecialPickup {
	constructor(x, y, d, name) {
		super(x, y, d);
		if (name)
			this.vessel = new Vessel(name);
	}
	update() {
		super.update();
	}
	getDialog() {
		return [
			new DialogLine("Anymos", "It would be easier to defeat these enemies if I didn't have to chase them all over the town.", "#00FFFF"),
			new DialogLine("Anymos", "I place a stationary bomb using the Special key - [Shift] or (Right trigger). I can later press the button again to detonate the bomb.", "#00FFFF"),
		];
	}
	onCollect() {
		this.vessel.collect();
	}
}
BombPickup.prototype.special = specialBomb;
BombPickup.prototype.sprites = AnymBomb.prototype.sprites;
BombPickup.prototype.baseIllumination = 50;