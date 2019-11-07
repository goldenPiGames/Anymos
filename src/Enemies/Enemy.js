class Enemy extends GameObject {
	constructor(name) {
		super();
		this.name = name;
		if (name && !this.numVessels)
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
		super(name);
		if (name) {
			this.vessels = [];
			for (var i = 1; i <= this.numVessels; i++) {
				this.vessels.push(new Vessel(name + i));
			}
		}
	}
	checkBenchmarks() {
		if (this.hp <= this.benchmarks[0]) {
			this.specialStart = this.specials.shift();
			this.specialStart();
			this.benchmarks.shift();
			return true;
		}
	}
	onDeath() {
		if (this.vessels) {
			this.vessels.forEach(ves=>ves.collect());
		}
	}
}