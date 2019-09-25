

function Bolizos(x, y, facingRight, bl, br, bt, bb) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = FWEGOS_NORMAL_WIDTH;
	this.height = FWEGOS_NORMAL_HEIGHT;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facingRight;
	//this.specialCD = 150;
	this.boundLeft = bl;
	this.boundRight = br;
	this.boundTop = bt;
	this.boundBottom = bb;
	this.atkbox = {
		__proto__ : Object.create(GameObjectBase),
		width : 60,
		height : 40
	}
	this.ballCycle = 0;
	this.collCD = 0;
	this.update = this.updateNormal;
	this.benchmarks = [1000,           700,            400]
	this.specials   = [this.startRush, this.startRain, this.startRush]
}
Bolizos.prototype = Object.create(GameObjectBase);
Bolizos.prototype.speciesName = "Bolizos";
Bolizos.prototype.team = "Sqarnos";
Bolizos.prototype.spriteNames = ["Standing", "Readying", "Blasting-4", "Blasting-3", "Blasting-2", "Blasting-1", "Blasting0", "Blasting1", "Blasting2", "Blasting3", "Ball", "Defeated"]
Bolizos.prototype.sfxNames = ["Thunder"]
Bolizos.prototype.hittable = true;
Bolizos.prototype.damageable = true;
Bolizos.prototype.maxhp = 1300;
Bolizos.prototype.doesGravity = true;
Bolizos.prototype.updateNormal = function() {
	
}
Bolizos.prototype.draw = function() {
	var state;
	if (this.hp <= 0) {
		state = "Defeated";
	} else if (this.update != this.updateNormal) {
		/*this.ballCycle++;
		if (this.ballCycle > 2)
			this.ballCycle = 0;
		state = "Ball" + this.ballCycle;*/
		state = "Ball";
	} else if (this.attacking) {
		var relat = this.attacking-FWEGOS_ATTACK_STARTUP;
		if (relat < -4)
			state = "Readying";
		else if (relat <= 3)
			state = "Blasting"+relat;
		else 
			state = "Standing";
	} else
		state = "Standing";
	drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
	//this.state = null;
}

Bolizos.prototype.ballUp = function() {
	this.hittable = false;
	player.drained = false;
	this.update = this.updateBall;
}
Bolizos.prototype.updateBall = function() {
	this.dy -= 1;
	this.y += this.dy;
	if (this.y < this.boundTop-20) {
		this.update = this.nextUpdate;
	}
}
Bolizos.prototype.ballReturn = function() {
	this.x = (this.boundLeft + this.boundRight)/2;
	this.y = this.boundTop;
	this.dx = 0;
	this.dy = 0;
	this.update = this.updateReturn;
}
Bolizos.prototype.updateReturn = function() {
	this.dy += gravity;
	this.physics();
	if (this.dy <= 0) {
		this.update = this.updateNormal;
		this.hittable = true;
		player.drained = true;
		this.width = FWEGOS_NORMAL_WIDTH;
		this.height = FWEGOS_NORMAL_HEIGHT;
	}
}

Bolizos.prototype.startRush = function() {
	this.rushes = 5;
	this.nextUpdate = this.updateRush;
	this.ballUp();
}
Bolizos.prototype.updateRush = function() {
	if (this.x < this.boundLeft-20 || this.x > this.boundRight+20 || this.y < this.boundTop-10) {
		if (this.rushes <= 0) {
			this.ballReturn();
		} else {
			this.rushes--;
			var siderng = Math.random();
			if (siderng <= .5) {
				this.x = this.boundLeft+Math.random()*(this.boundRight-this.boundLeft);
				this.y = this.boundTop;
			} else {
				this.x = (siderng < .75) ? (this.boundLeft-10) : (this.boundRight+10);
				this.y = this.boundTop+Math.random()*(this.boundBottom-this.boundTop);
			}
			var theta = this.angleTo(player) + (.5+Math.random())*.2;
			this.dx = FWEGOS_RUSH_SPEED * Math.cos(theta);
			this.dy = FWEGOS_RUSH_SPEED * Math.sin(theta);
			this.facingRight = (this.dx > 0);
			this.hitYet = false;
		}
	} else {
		for (var i = 0; i < 4; i++) {
			this.x += this.dx/4;
			this.y += this.dy/4;
			if (this.y > this.boundBottom)
				this.dy = -this.dy;
			if (!this.hitYet) {
				if (this.sendHurtbox(120) == player)
					this.hitYet = true;
			}
		}
	}
}

Bolizos.prototype.startRain = function() {
	this.rainTimer = 200;
	this.nextUpdate = this.updateRain;
	this.ballUp();
}
Bolizos.prototype.updateRain = function() {
	this.rainTimer--;
	if (this.rainTimer%2 == 0 && this.rainTimer > 20) {
		gameObjects.push(new FwegDrop(this.boundLeft+Math.random()*(this.boundRight-this.boundLeft), this.boundTop));
	}
	if (this.rainTimer <= 0) {
		this.ballReturn();
	}
}