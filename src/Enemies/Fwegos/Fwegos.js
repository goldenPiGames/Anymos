const FWEGOS_BASE_SPEED = 3.5;
const FWEGOS_ATTACK_STARTUP = 30;
const FWEGOS_ATTACK_TIME = 50;
const FWEGOS_RUSH_SPEED = 12;
const FWEGOS_NORMAL_WIDTH = 15;
const FWEGOS_NORMAL_HEIGHT = 37;
const FWEGOS_BALL_SIZE = 20;
const FWEGOS_WAVE_SPEED = 8;

function Fwegos(x, y, facingRight, bl, br, bt, bb) {
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
Fwegos.prototype = Object.create(GameObjectBase);
Fwegos.prototype.speciesName = "Fwegos";
Fwegos.prototype.team = "Sqarnos";
Fwegos.prototype.spriteNames = ["Standing", "Readying", "Blasting-4", "Blasting-3", "Blasting-2", "Blasting-1", "Blasting0", "Blasting1", "Blasting2", "Blasting3", "Ball", "Defeated", "Shockwave"]
Fwegos.prototype.sfxNames = ["Blast", "BlastL"]
Fwegos.prototype.hittable = true;
Fwegos.prototype.damageable = true;
Fwegos.prototype.maxhp = 1300;
Fwegos.prototype.doesGravity = true;
Fwegos.prototype.updateNormal = function() {
	if (this.boundLeft == undefined) {
		this.boundLeft = cameraLeftBound+10;
		this.boundRight = cameraRightBound-10;
		this.boundTop = cameraTopBound+10;
		this.boundBottom = cameraBottomBound-10;
	}
	this.atkbox.x = this.x + (this.facingRight?1:-1) * (this.atkbox.width/2);
	this.atkbox.y = this.y;
	if (this.attacking) {
		if (this.attacking == FWEGOS_ATTACK_STARTUP-4) {
			playSound(this.sfx.Blast);
		}
		if (this.attacking == FWEGOS_ATTACK_STARTUP) {
			this.sendHurtbox(210, this.atkbox)
		}
		this.attacking++;
		if (this.attacking > FWEGOS_ATTACK_TIME+1)
			this.attacking = false;
	} else if (this.hp <= this.benchmarks[0]) {
		this.specials[0].call(this);
		this.benchmarks = this.benchmarks.slice(1);
		this.specials = this.specials.slice(1);
	} else {
		//if (this.grounded && Math.random() < .02)
			//this.dy = -DEFAULT_JUMP_SPEED;
		this.facingRight = (player.x > this.x);
		this.dx = (this.facingRight?1:-1)*FWEGOS_BASE_SPEED;
		this.physics();
		if (this.atkbox.isTouching(player)) {
			this.attacking = 1;
		}
	}
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90) == player)
			this.collCD = 45;
	}
}
Fwegos.prototype.draw = function() {
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

Fwegos.prototype.ballUp = function() {
	this.hittable = false;
	player.drained = false;
	this.update = this.updateBall;
}
Fwegos.prototype.updateBall = function() {
	this.dy -= 1;
	this.y += this.dy;
	if (this.y < this.boundTop-20) {
		this.update = this.nextUpdate;
	}
}
Fwegos.prototype.ballReturn = function() {
	this.x = (this.boundLeft + this.boundRight)/2;
	this.y = this.boundTop;
	this.dx = 0;
	this.dy = 0;
	this.update = this.updateReturn;
}
Fwegos.prototype.updateReturn = function() {
	this.dy += gravity;
	this.physics();
	if (this.dy <= 0) {
		this.makeWaves();
		this.update = this.updateNormal;
		this.hittable = true;
		player.drained = true;
		this.width = FWEGOS_NORMAL_WIDTH;
		this.height = FWEGOS_NORMAL_HEIGHT;
	}
}

Fwegos.prototype.startRush = function() {
	this.rushes = 5;
	this.nextUpdate = this.updateRush;
	this.ballUp();
}
Fwegos.prototype.updateRush = function() {
	if (this.x < this.boundLeft-20 || this.x > this.boundRight+20 || this.y < this.boundTop-10) {
		if (this.rushes <= 0) {
			this.ballReturn();
		} else {
			this.rushes--;
			this.x = this.boundLeft+Math.random()*(this.boundRight-this.boundLeft);
			this.y = this.boundTop;
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
			if (this.y > this.boundBottom) {
				this.dy = -this.dy;
				this.makeWaves();
			}
			if (!this.hitYet) {
				if (this.sendHurtbox(120) == player)
					this.hitYet = true;
			}
		}
	}
}

Fwegos.prototype.startRain = function() {
	this.rainTimer = 200;
	this.nextUpdate = this.updateRain;
	this.ballUp();
}
Fwegos.prototype.updateRain = function() {
	this.rainTimer--;
	if (this.rainTimer%2 == 0 && this.rainTimer > 20) {
		gameObjects.push(new FwegDrop(this.boundLeft+Math.random()*(this.boundRight-this.boundLeft), this.boundTop));
	}
	if (this.rainTimer <= 0) {
		this.ballReturn();
	}
}

Fwegos.prototype.makeWaves = function() {
	gameObjects.push(new FwegWave(this.x, this.boundBottom, false), new FwegWave(this.x, this.boundBottom, true));
	playSound(this.sfx.BlastL);
}

function FwegDrop(x, y) {
	this.x = x;
	this.y = y;
	this.width = 0;
	this.height = 8;
	this.dx = 0;
	this.dy = 0;
}
FwegDrop.prototype = Object.create(GameObjectBase);
FwegDrop.prototype.team = "Sqarnos";
FwegDrop.prototype.doesGravity = true;
FwegDrop.prototype.update = function() {
	this.dy += gravity/2;
	this.y += this.dy;
	if (this.sendHurtbox(60))
		this.die();
	if (this.y >= stageheight())
		this.die();
}
FwegDrop.prototype.draw = function() {
	ctx.fillStyle = "#FF8000";
	ctx.fillRect(stagex(this.x-2), stagey(this.y-this.height), 4*zoom, this.height*zoom);
}

function FwegWave(x, y, facing) {
	this.x = x;
	this.y = y;
	this.facingRight = facing;
	this.width = 20;
	this.height = 3;
	this.dx = (facing?1:-1)*FWEGOS_WAVE_SPEED;
	this.dy = 0;
}
FwegWave.prototype = Object.create(GameObjectBase);
FwegWave.prototype.team = "Sqarnos";
FwegWave.prototype.doesGravity = true;
FwegWave.prototype.update = function() {
	this.x += this.dx;
	if (this.sendHurtbox(60))
		this.die();
	if (this.x <= -10 || this.x >= stagewidth()+10)
		this.die();
}
FwegWave.prototype.draw = function() {
	drawSpriteOnStage(Fwegos.prototype.sprites.Shockwave, this.x, this.y, this.facingRight);
}