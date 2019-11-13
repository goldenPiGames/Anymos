class AnymBomb extends GameObject {
	constructor(user) {
		super();
		this.user = user;
		this.x = user.x;
		this.y = user.y;
		this.team = user.team;
	}
	update() {
		//TODO sound effect
		if (this.detonated) {
			if (this.detonated == 5) {
				this.sendHurtbox(this.damage);
			}
			if (this.detonated > 9)
				this.die();
			else
				this.detonated++;
		}
	}
	draw() {
		if (this.detonated <= 9)
			this.drawSprite("bomb"+this.detonated);
	}
	detonate() {
		this.detonated = 5;
	}
}
AnymBomb.prototype.team = "Anymos";
AnymBomb.prototype.sprites = makeSprites("src/Objects/AnymBomb.png", {
	bomb0 : {x:0, y:  0, width:40, height:40},
	bomb1 : {x:0, y: 40, width:40, height:40},
	bomb2 : {x:0, y: 80, width:40, height:40},
	bomb3 : {x:0, y:120, width:40, height:40},
	bomb4 : {x:0, y:160, width:40, height:40},
	bomb5 : {x:0, y:200, width:40, height:40},
	bomb6 : {x:0, y:240, width:40, height:40},
	bomb7 : {x:0, y:280, width:40, height:40},
	bomb8 : {x:0, y:320, width:40, height:40},
	bomb9 : {x:0, y:360, width:40, height:40},
	pickup : {x:0, y:400, width:20, height:20},
}, false);
AnymBomb.prototype.width = 40;
AnymBomb.prototype.height = 40;
AnymBomb.prototype.damage = 150;
AnymBomb.prototype.detonated = 0;

var specialBomb = {
	name : "Anymos' Delay Bomb",
	update : function(holder) {
		if (controller.specialClicked) {
			var found = gameObjects.find(bup => bup instanceof AnymBomb && !bup.detonated);
			if (found) {
				found.detonate();
			} else {
				used += 15;
				gameObjects.push(new AnymBomb(holder));
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