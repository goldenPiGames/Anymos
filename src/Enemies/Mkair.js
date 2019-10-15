const MKAIR_Y_OMEGA = 0.004;
const MKAIR_P_OMEGA = .02;
const MKAIR_RADIUS = 110;
class Mkair extends Boss {
	constructor(name, facingRight) {
		super(name);
		this.facingRight = facingRight;
		this.natx = this.facingRight ? 200 : (staticColl[0].length * PIXELS_PER_BLOCK - 200);
		this.y = staticColl.length * PIXELS_PER_BLOCK / 2 + this.height/2;
		this.mtheta = Math.PI/4;
		this.ramming = false;
		this.spawned = [];
		this.spawnDelay = 300;
		this.ramReturn();
		this.ptheta = 0;
		this.periphs = [
			new MkairPeriphTrigun(this, Math.PI*0/2),
			new MkairPeriphSpiralgun(this, Math.PI*2/2),
		];
	}
	update() {
		this.ptheta += MKAIR_P_OMEGA;
		if (!this.addedPeriphs) {
				gameObjects.push(...this.periphs);
			this.addedPeriphs = true;
		}
		if (this.returning >= 0) {
			this.x = this.natx + (this.facingRight?-1:1)*this.returning*this.returning;
			//this.dx = 2*(this.facingRight?1:-1)*this.returning;
			this.returning-= .5;
		} else if (this.ramming) {
			
		} else {
			this.mtheta += MKAIR_Y_OMEGA;
			var py = this.y;
			this.y = stageheight()/6 + (stageheight()*2/3 * Math.pow(Math.sin(this.mtheta), 2))+this.height/2;
			this.dy = this.y - py;	
		}
		removeDead(this.spawned);
		this.spawnDelay -= (4-this.spawned.length);
		if (this.spawnDelay <= 0) {
			var pew = new Aapew(this.facingRight, this.x, this.y, false)
			this.spawned.push(pew);
			gameObjects.push(pew);
			this.spawnDelay = 150;
		}
	}
	draw() {
		this.periphs.forEach(oj=>oj.drawLineBehind());
		var state = "central";
		if (this.spawnDelay < 28)
			state = "spawning"+Math.floor(this.spawnDelay/4);
		//console.log(state)
		this.drawSprite(state);
	}
	ramReturn() {
		this.x = this.facingRight ? -200 : (staticColl[0].length * PIXELS_PER_BLOCK + 200);
		this.ramming = false;
		this.returning = 20;
	}
	onDeath() {
		
		super.onDeath();
		this.periphs.forEach(spew=>spew.die());
		this.spawned.forEach(spew=>spew.die());
	}
}
Mkair.prototype.speciesName = "M'kair";
Mkair.prototype.team = "Sqarnos";
Mkair.prototype.sprites = makeSprites("src/Enemies/Mkair.png", {
	central: {x:0, y:0, width:64, height:64},
	spawning0: {x:64, y:0, width:64, height:64},
	spawning1: {x:128, y:0, width:64, height:64},
	spawning2: {x:192, y:0, width:64, height:64},
	spawning3: {x:256, y:0, width:64, height:64},
	spawning4: {x:320, y:0, width:64, height:64},
	spawning5: {x:384, y:0, width:64, height:64},
	spawning6: {x:448, y:0, width:64, height:64},
	periph: {x:512, y:0, width:64, height:64},
	irisMagenta: {x:576, y:0, width:16, height:16},
	spikesSpinning0: {x:0, y:64, width:96, height:96},
	spikesSpinning1: {x:96, y:64, width:96, height:96},
	spikesSpinning2: {x:192, y:64, width:96, height:96},
	spikesSpinning3: {x:288, y:64, width:96, height:96},
	spikesSpinning4: {x:384, y:64, width:96, height:96},
	spikesSpinning5: {x:960, y:64, width:96, height:96},
	//["Central", "Peripheral", "IrisMagenta", "IrisYellow", "SpikesSpinning0", "SpikesSpinning1", "SpikesSpinning2", "SpikesSpinning3", "SpikesSpinning4", "SpikesSpinning5"];
	
}, false);
Mkair.prototype.width = 64;
Mkair.prototype.height = 64;
Mkair.prototype.maxhp = 5000;
Mkair.prototype.numVessels = 5;

class MkairPeriph extends Enemy {
	constructor(central, roffset) {
		super();
		this.central = central;
		this.team = central.team;
		this.sprites = central.sprites;
		//this.rx = rx;
		//this.ry = ry;
		this.roffset = roffset;
		this.move;
	}
	move() {
		var bx = this.x;
		var by = this.y;
		this.x = this.central.x + MKAIR_RADIUS*Math.cos(this.central.ptheta+this.roffset);
		this.y = this.central.y + MKAIR_RADIUS*Math.sin(this.central.ptheta+this.roffset);
		this.dx = this.x-bx;
		this.dy = this.y-by;
	}
	makeBullet(theta, speed) {
		let r = this.width*2/3;
		return new MkairBullet(this.x + r*Math.cos(theta), this.y-this.height/2 + r*Math.sin(theta), theta, speed)
	}
	drawLineBehind() {
		ctx.lineWidth = zoom * 50/Math.pow(Math.pow(this.x-this.central.x, 2) + Math.pow(this.y-this.central.y, 2), .25);
		ctx.strokeStyle = "#404040";
		ctx.beginPath();
		ctx.moveTo(stagex(this.central.x), stagey(this.central.y-this.central.height/2));
		ctx.lineTo(stagex(this.x), stagey(this.y-this.height/2));
		//console.log(this.central.x, this.central.y-this.central.height/2, this.x, this.y-this.height/2);
		ctx.stroke();
	}
	drawCenter() {
		this.drawSprite("periph");
	}
	drawIris(theta) {
		//var theta = this.angleTo(player);
		var irmag = this.sprites.irisMagenta;
		var r = this.width/2-irmag.width/2-4;
		drawSpriteOnStage(irmag, this.x + r*Math.cos(theta), this.y-this.height/2 + irmag.height/2 + r*Math.sin(theta));
	}
	getHit(dam) {
		this.central.getHit(Math.floor(dam*2/3));
	}
}
MkairPeriph.prototype.width = 64;
MkairPeriph.prototype.height = 64;

class MkairPeriphTrigun extends MkairPeriph {
	update() {
		this.move();
		this.bulletCD--;
		if (this.bulletCD <= 0) {
			var theta = this.angleTo(this.nearestEnemy());
			var r = this.width*2/3;
			//console.log(this.x + r*Math.cos(theta), this.y-this.height/2 + r*Math.sin(theta), theta, 10)
			gameObjects.push(
				this.makeBullet(theta-.12, 10),
				this.makeBullet(theta, 10),
				this.makeBullet(theta+.12, 10),
			);
			this.bulletCD = 45;
		}
	}
	draw() {
		this.drawCenter();
		this.drawIris(this.angleTo(player));
	}
}
MkairPeriphTrigun.prototype.bulletCD = 15;

class MkairPeriphSpiralgun extends MkairPeriph {
	update() {
		this.move();
		this.rho += .1;
		this.bulletCD--;
		if (this.bulletCD <= 0) {
			//console.log(this.x + r*Math.cos(theta), this.y-this.height/2 + r*Math.sin(theta), theta, 10)
			gameObjects.push(this.makeBullet(this.rho, 8));
			this.bulletCD = 5;
		}
	}
	draw() {
		this.drawCenter();
		this.drawIris(this.rho);
	}
}
MkairPeriphSpiralgun.prototype.rho = 0;
MkairPeriphSpiralgun.prototype.bulletCD = 10;

//TODO not have redundant bullet classes
class MkairBullet extends GameObject {
	constructor(x, y, theta, speed) {
		super();
		this.x = x;
		this.y = y;
		this.theta = theta;
		this.dx = speed * Math.cos(theta);
		this.dy = speed * Math.sin(theta);
	}
	update() {
		this.x += this.dx;
		this.y += this.dy;
		if (this.sendHurtbox(this.damage)) {
			this.die();
			return;
		}
		if (isPixelSolid(this.x, this.y-this.height/2) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
			this.die();
	}
	draw() {
		ctx.fillStyle = "#FF007F";
		ctx.beginPath();
		ctx.arc(stagex(this.x),stagey(this.y),this.displayRadius*zoom,0,2*Math.PI);
		ctx.fill();
	}
}
MkairBullet.prototype.team = "Sqarnos";
MkairBullet.prototype.physicsPrecision = 1;
MkairBullet.prototype.damage = 30;
MkairBullet.prototype.displayRadius = 4;
MkairBullet.prototype.width = 0;
MkairBullet.prototype.height = 0;