class Enemy extends GameObject {
	constructor(name) {
		super();
		if (name)
			this.vessel = new Vessel(name);
		this.hp = this.maxhp;
	}
	checkCollHit() {
		this.collCD--;
		if (this.collCD <= 0) {
			if (this.sendHurtbox(this.collDamage ))
				this.collCD = this.collMaxCD;
		}
	}
	onDeath() {
		if (this.vessel) {
			this.vessel.collect();
		}
	}
}
Enemy.prototype.hittable = true;
Enemy.prototype.damageable = true;
Enemy.prototype.collCD = 0;

class Boss extends Enemy {
	constructor(name) {
		super();
		if (name) {
			for (var i = 1; i <= this.numVessels)
				this.vessels = [];
				this.vessels.push(new Vessel(name + i));
		}
	}
	onDeath() {
		if (this.vessel) {
			this.vessels.forEach(ves=>ves.collect();
		}
	}
}