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
		this.benchmarks = [/*1000,           700,            400*/];
		this.specials   = [/*this.startRush, this.startRain, this.startRush*/];
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
		
		if (this.blading) {
			if (this.blading == this.bladeStartup) {
				//playSound(this.sfx.Blast);
				this.sendHurtbox(210, this.bladeBox);
			}
			this.blading++;
			if (this.blading > this.bladeStartup + this.bladeEndlag)
				this.blading = false;
		} else if (this.throwing) {
			this.throwing ++;
			if (this.throwing >= 10) {
				gameObjects.push(new FwegBomb(this.x, this.y, 0, -5)); //TODO give actual velocity
				this.throwing = false;
				this.actionCD = 60;
			}
		} else if (this.leaping) {
			if (!this.grounded) {
				
			} else if (this.leaping == "ready") {
				this.dx = 0;
				gameObjects.push(new FwegBlast(this.x, this.y), new FwegWave(this.x, this.y, false), new FwegWave(this.x, this.y, true));
				this.leaping = 1;
				this.actionCD = 60;
			} else if (this.leaping < 15) {
				this.leaping ++;
			} else {
				this.leaping = false;
			}
		} else if (!this.checkBenchmarks()) {
			//if (this.grounded && Math.random() < .02)
				//this.dy = -DEFAULT_JUMP_SPEED;
			//this.facingRight = (player.x > this.x);
			//this.dx = (this.facingRight?1:-1)*FWEGOS_BASE_SPEED;
			this.actionCD--;
			if (this.actionCD <= 0) {
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
		}
		this.physics();
		this.checkCollHit();
	}

	ballUp() {
		this.hittable = false;
		player.drained = false;
		this.update = this.updateBall;
	}
	updateBall() {
		this.dy -= 1;
		this.y += this.dy;
		if (this.y < this.boundTop-20) {
			this.update = this.nextUpdate;
		}
	}
	ballReturn() {
		this.x = (this.boundLeft + this.boundRight)/2;
		this.y = this.boundTop;
		this.dx = 0;
		this.dy = 0;
		this.update = this.updateReturn;
	}
	updateReturn() {
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

	startRush() {
		this.rushes = 5;
		this.nextUpdate = this.updateRush;
		this.ballUp();
	}
	updateRush() {
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

	startRain() {
		this.rainTimer = 200;
		this.nextUpdate = this.updateRain;
		this.ballUp();
	}
	updateRain() {
		this.rainTimer--;
		if (this.rainTimer%2 == 0 && this.rainTimer > 20) {
			gameObjects.push(new FwegDrop(this.boundLeft+Math.random()*(this.boundRight-this.boundLeft), this.boundTop));
		}
		if (this.rainTimer <= 0) {
			this.ballReturn();
		}
	}
	makeWaves() {
		gameObjects.push(new FwegWave(this.x, this.boundBottom, false), new FwegWave(this.x, this.boundBottom, true));
		playSound(this.sfx.BlastL);
	}
	
	draw() {
		var state;
		if (this.hp <= 0) {
			state = "defeated";
		} else if (this.update != this.updateNormal) {
			/*this.ballCycle++;
			if (this.ballCycle > 2)
				this.ballCycle = 0;
			state = "Ball" + this.ballCycle;*/
			state = "ball";
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
//Fwegos.prototype.spriteNames = ["Standing", "Readying", "Blasting-4", "Blasting-3", "Blasting-2", "Blasting-1", "Blasting0", "Blasting1", "Blasting2", "Blasting3", "Ball", "Defeated", "Shockwave"]
Fwegos.prototype.sprites = makeSprites("src/Enemies/Fwegos.png", {
	standing : {x:0, y:0, width:20, height:40},
	bladeStartup : {x:70, y:40, width:40, height:40},
	bladeSwing : {x:-25, y:40, width:90, height:40},
	leapAir : {x:40, y:0, width:30, height:40},
	leapAfter : {x:70, y:0, width:30, height:40},
	wave : {x:0, y:80, width:20, height:10},
}, false);
Fwegos.prototype.sfxNames = ["Blast", "BlastL"]
Fwegos.prototype.maxhp = 1300;
Fwegos.prototype.doesGravity = true;
Fwegos.prototype.actionCD = 0;
Fwegos.prototype.collDamage = 90;
Fwegos.prototype.collMaxCD = 45;
Fwegos.prototype.bladeStartup = 45;
Fwegos.prototype.bladeEndlag = 5;
Fwegos.prototype.walkSpeed = 5;
Fwegos.prototype.jumpSpeed = 10;
Fwegos.prototype.jumpMinDistance = 200;
Fwegos.prototype.numVessels = 5;

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

class FwegBlast extends GameObject {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.timer = 0;
	}
	update() {
		if (this.timer == 4)
			this.sendHurtbox(150);
		else if (this.timer >= 10)
			this.die();
		this.timer++;
	}
	draw() {
		
	}
}
FwegBlast.prototype.team = "Sqarnos";
FwegBlast.prototype.sprites = Fwegos.prototype.sprites;
FwegBlast.prototype.width = 60;
FwegBlast.prototype.height = 40;

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