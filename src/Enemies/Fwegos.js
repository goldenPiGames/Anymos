const FWEGOS_BASE_SPEED = 3.5;
const FWEGOS_ATTACK_STARTUP = 30;
const FWEGOS_ATTACK_TIME = 50;
const FWEGOS_RUSH_SPEED = 12;
const FWEGOS_NORMAL_WIDTH = 15;
const FWEGOS_NORMAL_HEIGHT = 37;
const FWEGOS_BALL_SIZE = 20;
const FWEGOS_WAVE_SPEED = 8;

class Fwegos extends Boss {
	constructor(name, x, y, facingRight, bl, br, bt, bb, manipBlock) {
		super(name);
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
		this.bladeBox = {
			isTouching : GameObject.prototype.isTouching,
			width : 60,
			height : 40
		}
		this.manipBlock = manipBlock;
		this.ballCycle = 0;
		this.collCD = 0;
		this.update = this.updateNormal;
		this.benchmarks = [1200,             750];
		this.specials   = [this.startSummon, this.startMainRush];
	}
	updateNormal() {
		if (this.boundLeft == undefined) {
			this.boundLeft = cameraLeftBound+10;
			this.boundRight = cameraRightBound-10;
			this.boundTop = cameraTopBound+10;
			this.boundBottom = cameraBottomBound-10;
		}
		this.bladeBox.x = this.x + (this.facingRight?1:-1) * (this.bladeBox.width/2);
		this.bladeBox.y = this.y;
		
		if (this.summoning) {
			this.summoning++;
			if (this.summoning >= this.summonTime) {
				this.summonBetties();
				this.summoning = false;
			}
		} else if (this.blading) {
			if (this.blading == this.bladeStartup) {
				this.sendHurtbox(210, this.bladeBox);
				playSFX("Swish3");
			}
			this.blading++;
			if (this.blading > this.bladeStartup + this.bladeEndlag)
				this.blading = false;
		} else if (this.leaping) {
			if (!this.grounded) {
				
			} else if (this.leaping == "ready") {
				this.dx = 0;
				playSFX("BlastL");
				gameObjects.push(new FwegBlast(this.x, this.y), new FwegWave(this.x, this.y, false), new FwegWave(this.x, this.y, true));
				this.leaping = 1;
			} else if (this.leaping < 60) {
				this.leaping ++;
			} else {
				this.leaping = false;
			}
		} else if (!this.checkBenchmarks()) {
			if (Math.abs(this.x - player.x) >= this.jumpMinDistance) {
				this.leaping = "ready";
				this.dy = -this.jumpSpeed;
				this.dx = (player.x-this.x) / (Math.abs(this.dy) * 2 / (gravity || .1));
				this.facingRight = this.dx > 0;
			} else if (this.bladeBox.isTouching(player)) {
				this.blading = 1;
				this.dx = 0;
			} else {
				this.facingRight = (player.x > this.x);
				this.dx = this.facingRight ? this.walkSpeed : -this.walkSpeed;
			}
		}
		this.physics();
		this.checkCollHit();
	}
	
	startSummon() {
		this.summoning = 1;
	}
	summonBetties() {
		if (player.x < this.getXOfPortion(1/3)) {
			this.addBettie(this.getXOfPortion(3/6));
			this.addBettie(this.getXOfPortion(5/6));
		} else if (player.x > this.getXOfPortion(2/3)) {
			this.addBettie(this.getXOfPortion(1/6));
			this.addBettie(this.getXOfPortion(3/6));
		} else {
			this.addBettie(this.getXOfPortion(1/6));
			this.addBettie(this.getXOfPortion(5/6));
		}
	}
	addBettie(x) {
		gameObjects.push(new Bettie(this.name+"Bettie"+(++this.numBettiesSummoned), x, this.boundTop + Bettie.prototype.height));
	}
	getXOfPortion(portion) {
		return this.boundLeft + (this.boundRight - this.boundLeft) * portion;
	}
	
	startMainRush() {
		player.drained = false;
		this.hittable = false;
		this.update = this.updateRocket;
		this.dy = this.jumpSpeed;
	}
	updateRocket() {
		this.dy -= (gravity + 0.3);
		this.physics();
		if (this.y <= this.boundTop) {
			this.rainTimer = 0;
			this.update = this.updateRain;
		}
	}
	updateRain() {
		this.rainTimer++;
		if (this.rainTimer == 5 || this.rainTimer == 45) {
			for (var bx = this.boundLeft + 20; bx < this.boundRight; bx += 100) {
				gameObjects.push(new FwegBomb(bx, this.boundTop, 0, 0));
			}
		} else if (this.rainTimer == 25 || this.rainTimer == 65) {
			for (var bx = this.boundLeft + 70; bx < this.boundRight; bx += 100) {
				gameObjects.push(new FwegBomb(bx, this.boundTop, 0, 0));
			}
		} else if (this.rainTimer == 100) {
			for (var bx = this.boundLeft + 10; bx < this.boundRight; bx += 40) {
				gameObjects.push(new FwegBomb(bx, this.boundTop, 0, 0));
			}
		} else if (this.rainTimer >= 150) {
			this.returnAfterRush();
		}
	}
	returnAfterRush() {
		player.drained = true;
		this.hittable = true;
		this.update = this.updateNormal;
		this.facingRight = player.x > this.x;
		this.x = player.x;
		this.y = this.boundTop;
		this.dy = 5;
		this.leaping = "ready";
	}
	
	
	draw() {
		var state;
		if (this.hp <= 0) {
			state = "defeated";
		} else if (this.update == this.updateRocket) {
			state = "rocket";
		} else if (this.summoning) {
			state = "summoning";
		} else if (this.blading) {
			if (this.blading < this.bladeStartup)
				state = "bladeStartup";
			else
				state = "bladeSwing";
		} else if (this.leaping) {
			if (!this.grounded)
				state = "leapAir";
			else
				state = "leapAfter";
		} else
			state = "standing";
		//console.log(state);
		drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
		//this.state = null;
	}
}
Fwegos.prototype.speciesName = "Fwegos";
Fwegos.prototype.team = "Sqarnos";
Fwegos.prototype.sprites = makeSprites("src/Enemies/Fwegos.png", {
	standing : {x:0, y:0, width:20, height:40},
	bladeStartup : {x:70, y:40, width:40, height:40},
	bladeSwing : {x:-25, y:40, width:90, height:40},
	leapAir : {x:40, y:0, width:30, height:40},
	leapAfter : {x:70, y:0, width:30, height:40},
	summoning : {x:0, y:80, width:20, height:40},
	rocket : {x:20, y:80, width:20, height:40},
	wave : {x:80, y:120, width:20, height:10},
	bomb : {x:42, y:7, width:5, height:5},
}, false);
Fwegos.prototype.sfxNames = ["Blast", "BlastL"];
Fwegos.prototype.maxhp = 1600;
Fwegos.prototype.doesGravity = true;
Fwegos.prototype.actionCD = 0;
Fwegos.prototype.collDamage = 90;
Fwegos.prototype.collMaxCD = 45;
Fwegos.prototype.bladeStartup = 45;
Fwegos.prototype.bladeEndlag = 5;
Fwegos.prototype.walkSpeed = 5;
Fwegos.prototype.jumpSpeed = 10;
Fwegos.prototype.jumpMinDistance = 150;
Fwegos.prototype.summonTime = 20;
Fwegos.prototype.numVessels = 5;
Fwegos.prototype.numBettiesSummoned = 0;

class FwegBomb extends GameObject {
	constructor(x, y, dx, dy) {
		super();
		this.x = x;
		this.y = y;
		this.dx = dx || .01;
		this.dy = dy;
	}
	update() {
		this.physics();
		if (this.sendHurtbox(30) || this.grounded || this.dx == 0) {
			this.die();
			playSFX("BlastL");
			gameObjects.push(new FwegBlast(this.x, this.y));
		}
	}
	draw() {
		this.drawSprite("bomb");
	}
}
FwegBomb.prototype.team = "Sqarnos";
FwegBomb.prototype.sprites = Fwegos.prototype.sprites;
FwegBomb.prototype.width = 5;
FwegBomb.prototype.height = 5;
FwegBomb.prototype.doesGravity = true;

class FwegDrop extends GameObject {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 0;
		this.height = 8;
		this.dx = 0;
		this.dy = 0;
	}
	update() {
		this.dy += gravity/2;
		this.y += this.dy;
		if (this.sendHurtbox(60))
			this.die();
		if (this.y >= stageheight())
			this.die();
	}
	draw() {
		ctx.fillStyle = "#FF8000";
		ctx.fillRect(stagex(this.x-2), stagey(this.y-this.height), 4*zoom, this.height*zoom);
	}
}
FwegDrop.prototype.team = "Sqarnos";
FwegDrop.prototype.sprites = Fwegos.prototype.sprites;
FwegDrop.prototype.doesGravity = true;

class FwegWave extends GameObject {
	constructor(x, y, facing) {
		super();
		this.x = x;
		this.y = y;
		this.facingRight = facing;
		this.width = 20;
		this.height = 3;
		this.dx = (facing?1:-1)*FWEGOS_WAVE_SPEED;
		this.dy = 0;
	}
	update() {
		this.x += this.dx;
		if (this.sendHurtbox(60))
			this.die();
		if (this.x <= -10 || this.x >= stagewidth()+10)
			this.die();
	}
	draw() {
		this.drawSprite("wave");
	}
}
FwegWave.prototype.team = Fwegos.prototype.team;
FwegWave.prototype.sprites = Fwegos.prototype.sprites;