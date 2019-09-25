const MKAIR_Y_OMEGA = 0.004;
const MKAIR_P_OMEGA = .02;
const MKAIR_RADIUS = 110;
function Mkair(name, facingRight) {
	this.name = name;
	this.hp = this.maxhp;
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
		new MkairPeriphMachgun(this, Math.PI*0/2),
		new MkairPeriphSpiralgun(this, Math.PI*2/2),
	];
}
Mkair.prototype = Object.create(GameObjectBase);
Mkair.prototype.speciesName = "M'kair";
Mkair.prototype.team = "Sqarnos";
Mkair.prototype.folderName = "Mkair";
Mkair.prototype.spriteNames = ["Central", "Peripheral", "IrisMagenta", "IrisYellow", "SpikesSpinning0", "SpikesSpinning1", "SpikesSpinning2", "SpikesSpinning3", "SpikesSpinning4", "SpikesSpinning5"];
Mkair.prototype.width = 64;
Mkair.prototype.height = 64;
Mkair.prototype.hittable = true;
Mkair.prototype.damageable = true;
Mkair.prototype.maxhp = 5000;
Mkair.prototype.update = function() {
	this.ptheta += MKAIR_P_OMEGA;
	if (!this.addedPeriphs) {
		this.periphs.forEach(function(oj) {
			gameObjects.push(oj);
		});
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
Mkair.prototype.draw = function() {
	this.periphs.forEach(function(oj) {
		if (oj)
			oj.drawLineBehind();
	});
	drawSpriteOnStage(this.sprites["Central"], this.x, this.y);
}
Mkair.prototype.ramReturn = function() {
	this.x = this.facingRight ? -200 : (staticColl[0].length * PIXELS_PER_BLOCK + 200);
	this.ramming = false;
	this.returning = 20;
}
Mkair.prototype.die = function() {
	this.dead = true;
	if (this.name != null) {
		for (var i = 0; i < 1+this.periphs.length; i++) {
			new Vessel(this.name+i).collect();
		}
	}
	this.periphs.forEach(function(oj) {
		if (oj)
			oj.die();
	});
	this.spawned.forEach(function(oj) {
		if (oj)
			oj.die();
	});
}
/*
function MkairPeriph(central, roffset) {
	this.central = central;
	this.rx = rx;
	this.ry = ry;
	this.roffset = roffset;
	this.dx = 0;
	this.dy = 0;
	this.x = central.x + rx;
	this.y = central.y + ry;
	this.dampxlast = true;
	this.dampylast = true;
	this.bulletCD = 20;
}
MkairPeriph.prototype = Object.create(GameObjectBase);
MkairPeriph.prototype.team = "Sqarnos";
MkairPeriph.prototype.width = 64;
MkairPeriph.prototype.height = 64;
MkairPeriph.prototype.hittable = true;
MkairPeriph.prototype.damageable = true;
MkairPeriph.prototype.update = function() {
	//this.theta += .05;
	this.rx = Math.cos(this.central.rho);
	this.dx += (Math.random()-.5) *.2;
	this.dy += (Math.random()-.5) *.2;
	if (this.x > this.central.x+this.rx+2) {
		this.dx -= 1;
		this.x -= .5;
	}
	if (this.x < this.central.x+this.rx-2) {
		this.dx += 1;
		this.x += .5;
	}
	if (this.y > this.central.y+this.ry+2) {
		this.dy -= 1;
		this.y -= .5;
	}
	if (this.y < this.central.y+this.ry-2) {
		this.dy += 1;
		this.y += .5;
	}
	if ((this.x > this.central.x+this.rx) != this.dampxlast) {
		this.dampxlast = (this.x > this.central.x+this.rx);
		this.dx *= .5;
	}
	if ((this.y > this.central.y+this.ry) != this.dampylast) {
		this.dampylast = (this.y > this.central.y+this.ry);
		this.dy *= .5;
	}
	this.x += this.dx;
	this.y += this.dy;
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		var theta = this.angleTo(player);
		var r = this.width*2/3;
		gameObjects.push(new MkairBullet(this.x + r*Math.cos(theta), this.y-this.height/2 + r*Math.sin(theta), theta));
		this.bulletCD = 20;
	}
}
MkairPeriph.prototype.drawLineBehind = function() {
	ctx.lineWidth = zoom * 50/Math.pow(Math.pow(this.x-this.central.x, 2) + Math.pow(this.y-this.central.y, 2), .25);
	ctx.strokeStyle = "#404040";
	ctx.beginPath();
	ctx.moveTo(stagex(this.central.x), stagey(this.central.y-this.central.height/2));
	ctx.lineTo(stagex(this.x), stagey(this.y-this.height/2));
	//console.log(this.central.x, this.central.y-this.central.height/2, this.x, this.y-this.height/2);
	ctx.stroke();
}
MkairPeriph.prototype.draw = function() {
	drawSpriteOnStage(Mkair.prototype.sprites["Peripheral"], this.x, this.y);
	var theta = this.angleTo(player);
	var irmag = Mkair.prototype.sprites["IrisMagenta"];
	var r = this.width/2-irmag.width/2-4;
	drawSpriteOnStage(irmag, this.x + r*Math.cos(theta), this.y-this.height/2 +irmag.height/2 + r*Math.sin(theta));
}
MkairPeriph.prototype.getHit = function(dam) {
	this.central.getHit(Math.floor(dam*2/3));
}*/

MkairPeriphProto = {
	__proto__ : Object.create(GameObjectBase),
	team : "Sqarnos",
	hittable : true,
	height : 64,
	width : 64,
	move : function() {
		var bx = this.x;
		var by = this.y;
		this.x = this.central.x + MKAIR_RADIUS*Math.cos(this.central.ptheta+this.offset);
		this.y = this.central.y + MKAIR_RADIUS*Math.sin(this.central.ptheta+this.offset);
		this.dx = this.x-bx;
		this.dy = this.y-by;
	},
	drawLineBehind : function() {
		ctx.lineWidth = zoom * 50/Math.pow(Math.pow(this.x-this.central.x, 2) + Math.pow(this.y-this.central.y, 2), .25);
		ctx.strokeStyle = "#404040";
		ctx.beginPath();
		ctx.moveTo(stagex(this.central.x), stagey(this.central.y-this.central.height/2));
		ctx.lineTo(stagex(this.x), stagey(this.y-this.height/2));
		//console.log(this.central.x, this.central.y-this.central.height/2, this.x, this.y-this.height/2);
		ctx.stroke();
	},
	drawCenter : function() {
		drawSpriteOnStage(Mkair.prototype.sprites["Peripheral"], this.x, this.y);
	},
	drawIris : function(theta) {
		//var theta = this.angleTo(player);
		var irmag = Mkair.prototype.sprites["IrisMagenta"];
		var r = this.width/2-irmag.width/2-4;
		drawSpriteOnStage(irmag, this.x + r*Math.cos(theta), this.y-this.height/2 +irmag.height/2 + r*Math.sin(theta));
	},
	getHit : function(dam) {
		this.central.getHit(Math.floor(dam*2/3));
	}
}

function MkairPeriphMachgun(central, offset) {
	this.central = central;
	this.offset = offset;
	this.bulletCD = 15;
}
MkairPeriphMachgun.prototype = Object.create(MkairPeriphProto);
MkairPeriphMachgun.prototype.update = function() {
	this.move();
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		var theta = this.angleTo(player);
		var r = this.width*2/3;
		gameObjects.push(new MkairBullet(this.x + r*Math.cos(theta), this.y-this.height/2 + r*Math.sin(theta), theta, 10));
		this.bulletCD = 15;
	}
}
MkairPeriphMachgun.prototype.draw = function() {
	this.drawCenter();
	this.drawIris(this.angleTo(player));
}

function MkairPeriphSpiralgun(central, offset) {
	this.central = central;
	this.offset = offset;
	this.rho = 0;
	this.bulletCD = 10;
}
MkairPeriphSpiralgun.prototype = Object.create(MkairPeriphProto);
MkairPeriphSpiralgun.prototype.update = function() {
	this.move();
	this.rho += .1;
	this.bulletCD--;
	if (this.bulletCD <= 0) {
		var theta = this.rho;
		var r = this.width*2/3;
		gameObjects.push(new MkairBullet(this.x + r*Math.cos(theta), this.y-this.height/2 + r*Math.sin(theta), theta, 8));
		this.bulletCD = 5;
	}
}
MkairPeriphSpiralgun.prototype.draw = function() {
	this.drawCenter();
	this.drawIris(this.rho);
}

function MkairBullet(x, y, theta, speed = null) {
	this.x = x;
	this.y = y;
	this.width = 8;
	this.height = 8;
	this.theta = theta;
	if (Math.random() < .5)
		this.theta += .1*(Math.random()-.5)
	if (speed == null)
		speed = 3 + 4*Math.random();
	this.dx = speed * Math.cos(theta);
	this.dy = speed * Math.sin(theta);
}
MkairBullet.prototype = Object.create(GameObjectBase);
MkairBullet.prototype.team = "Sqarnos";
MkairBullet.prototype.physicsPrecision = 1;
MkairBullet.prototype.damage = 30;
MkairBullet.prototype.update = function() {
	this.x += this.dx;
	this.y += this.dy;
	if (this.sendHurtbox(this.damage)) {
		this.die();
		return;
	}
	if (isPixelSolid(this.x, this.y-this.height/2) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
		this.die();
}
MkairBullet.prototype.draw = function() {
	ctx.fillStyle = "#FF007F";
	ctx.beginPath();
	ctx.arc(stagex(this.x),stagey(this.y-this.height/2),this.width*.6*zoom,0,2*Math.PI);
	ctx.fill();
}