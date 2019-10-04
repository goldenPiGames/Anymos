var GameObjectBase = {
	physicsPrecision : .08,
	isGrounded : function() {
		return isPixelSolid(this.x - this.width/2 - Math.max(this.dx, 0), this.y + 1) || isPixelSolid(this.x + this.width/2 - Math.min(this.dx, 0), this.y + 1);
	},
	physics : function() {
		var cd = false//controller.debug//collisionDiagnostics;
		this.grounded = this.isGrounded();
		
		//if (this.grounded)
		//	this.dy = Math.min(this.dy, 0)
		/*var intendedX = this.x + this.dx;
		var intendedY = this.y + this.dy;
		this.x = intendedX;
		this.y = intendedY;*/
		
		//if (stopdx) this.dx = 0;
		//if (stopdy) this.dy = 0;
		var prevx = this.x;
		var prevy = this.y;
		var interval = this.physicsPrecision / Math.max(Math.abs(this.dx), Math.abs(this.dy), .01)
		for (i = 0; i < 1.0; i += interval) {
			var intendedx = this.x + this.dx * interval;
			var intendedy = this.y + this.dy * interval;
			//console.log(this.dx*interval,this.x)
			switch (getCollidingWall(intendedx, intendedy, this.width, this.height)) {
				case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear",i); break;
				case 0: this.dy = Math.max(this.dy, 0); if(cd) console.log("top",i); break;
				case 1: this.dx = Math.min(this.dx, 0); if(cd) console.log("right",i); break;
				case 2: this.dy = Math.min(this.dy, 0); if(cd) console.log("bottom",i); break;
				case 3: this.dx = Math.max(this.dx, 0); if(cd) console.log("left",i); break;
				case 4: this.dx = 0; this.dy = 0; if(cd) console.log("multiple",i); break;
			}
		}
		if (this.y == prevy && this.dy > 0) {
			switch (getCollidingWall(this.x, this.y, this.width, this.height)) {
				//case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear push",i); break;
				case 0: if(cd) console.log("top push"); break;
				case 1: this.x -= .2; if(cd) console.log("right push"); break;
				case 2: if(cd) console.log("bottom push"); break;
				case 3: this.x += .2; if(cd) console.log("left push"); break;
			}
		}
		this.grounded = this.isGrounded();
		if (this.grounded && Math.abs(this.y - Math.round(this.y)) < .1 && (blockOfPixel(this.x-this.width/2, this.y+.1).solid || blockOfPixel(this.x+this.width/2, this.y+.1)))
			this.y = Math.round(this.y);
		/* Old
				case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear",i); break;
				case 0: this.x = intendedx; this.dy = Math.max(this.dy, 0); if(cd) console.log("top",i); break;
				case 1: this.x -= Math.abs(this.dx*interval); this.dx = Math.min(this.dx, 0); if(cd) console.log("right",i); break;
				case 2: this.y -= Math.abs(this.dy*interval); this.dy = Math.min(this.dy, 0); if(cd) console.log("bottom",i); break;
				case 3: this.x += Math.abs(this.dx*interval); this.dx = Math.max(this.dx, 0); if(cd) console.log("left",i); break;
				case 4: this.x -= this.dx*interval; this.dx = 0; this.y -= this.dy*interval; this.dy = 0; if(cd) console.log("multiple",i); break;
		*/
		/*
		var loops = 0;
		while (contin = true && loops <= 70) {
			contin = false;
			ulblock = isPixelSolid(this.x - this.width/2, this.y - this.height);
			urblock = isPixelSolid(this.x + this.width/2, this.y - this.height);
			blblock = isPixelSolid(this.x - this.width/2, this.y);
			brblock = isPixelSolid(this.x + this.width/2, this.y);
			if ((ulblock && !urblock) || (blblock && !brblock))
				{this.x+=.1; this.dx = Math.max(this.dx, 0); contin = true;} //Left
			if ((urblock && !ulblock) || (brblock && !blblock))
				{this.x-=.1; this.dx = Math.min(this.dx, 0); contin = true;} //Right
			ulblock = isPixelSolid(this.x - this.width/2, this.y - this.height);
			urblock = isPixelSolid(this.x + this.width/2, this.y - this.height);
			blblock = isPixelSolid(this.x - this.width/2, this.y);
			brblock = isPixelSolid(this.x + this.width/2, this.y);
			if ((ulblock && !blblock) || (urblock && !brblock))
				{this.y+=.1; contin = true;} //Top
			if ((blblock && !ulblock) || (brblock && !urblock))
				{this.y-=.1; contin = true;} //Bottom
			loops++;
		}
		*/
		if (this.doesGravity && !this.grounded)
			this.dy += gravity * this.doesGravity;
	},
	push : function(pdx, pdy) {
		if (pdx != pdx || pdy != pdy)
			return;
		var cd = controller.debug//collisionDiagnostics;
		var interval = this.physicsPrecision / Math.max(Math.abs(pdx), Math.abs(pdy), .01)
		for (i = 0; i < 1.0; i += interval) {
			var intendedx = this.x + pdx * interval;
			var intendedy = this.y + pdy * interval;
			switch (getCollidingWall(intendedx, intendedy, this.width, this.height)) {
				case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear",i); break;
				case 0: pdy = Math.max(pdy, 0); if(cd) console.log("top",i); break;
				case 1: pdx = Math.min(pdx, 0); if(cd) console.log("right",i); break;
				case 2: pdy = Math.min(pdy, 0); if(cd) console.log("bottom",i); break;
				case 3: pdx = Math.max(pdx, 0); if(cd) console.log("left",i); break;
				case 4: pdx = 0; pdy = 0; if(cd) console.log("multiple",i); break;
			}
		}
	},
	isTouching : function(other) {
		if (Math.abs(this.x-other.x) <= (this.width+other.width)/2) {
			if (this.y >= other.y-other.height && this.y-this.height <= other.y)
				return true;
		}
		return false;
	},
	checkHazards() {
		var haz = Pmax(
			hazardOfPixel(this.x-this.width/2, this.y),
			hazardOfPixel(this.x+this.width/2, this.y),
			hazardOfPixel(this.x-this.width/2, this.y-this.height),
			hazardOfPixel(this.x+this.width/2, this.y-this.height),
			hazardOfPixel(this.x-this.width/2-.6, this.y+.6, true),
			hazardOfPixel(this.x+this.width/2+.6, this.y+.6, true),
			hazardOfPixel(this.x-this.width/2-.6, this.y-this.height-.6, true),
			hazardOfPixel(this.x+this.width/2+.6, this.y-this.height-.6, true)
		);
		//if (controller.debug) console.log(haz);
		if (this.damageable)
			this.takeDamage(haz);
	},
	getHit : function(dmg) {
		if (!this.hittable)
			return false;
		if (this.damageable && dmg > 0) {
			if (this != player) lastHitEnemy = this;
			return this.takeDamage(dmg);
		} else 
			return true;
	},
	takeDamage : function(dmg) {
		if (!this.damageable || dmg == undefined || dmg != dmg)
			return false;
		this.hp -= dmg;
		if (this.hp <= 0)
			this.die();
		return dmg;
	},
	die : function() {
		this.dead = true;
		this.onDeath();
		//gameObjects.splice(gameObjects.indexOf(this), 1);
	},
	onDeath : doNothing,
	sendHurtbox : function(damage, nx, ny, nwidth, nheight) {
		var box;
		if (typeof nx == "number")
			box = {x: nx, y: ny, width: nwidth, height: nheight};
		else if (typeof nx == "object")
			box = nx;
		else
			box = this;
		var hit = null;
		var all = gameObjects.slice();
		all.push(player);
		//console.log(box)
		for (var i = 0; i < all.length; i++) {
			var oj = all[i];
			//console.log(oj.hittable, oj.team != this.team, oj.isTouching(box))
			if (oj.hittable && oj.team != this.team && oj.isTouching(box)) {
				oj.getHit(damage);
				hit = oj;
			}
		}
		return hit;
	},
	nearestEnemy : function() {
		var sof = null;
		var dist = Infinity;
		var all = gameObjects.slice();
		all.push(player);
		var thisser = this;
		all.forEach(function(oj) {
			if (oj.hittable && oj.team != thisser.team) {
				var cdist = Math.sqrt(Math.pow(thisser.x-oj.x, 2) + Math.pow(thisser.y-oj.y, 2));
				//console.log(Math.pow(thisser.x-oj.x, 2), Math.pow(thisser.y-oj.y, 2))
				if (cdist < dist) {
					dist = cdist;
					sof = oj;
				}
			}
		});
		return sof;
	},
	angleTo : function(target) {
		//console.log(target);
		if (!target)
			return false;
		return Math.atan2(target.y-target.height/2-this.y+this.height/2, target.x-this.x);
	},
	angleToLeading : function(target, speed = 0, loops = 5) {
		//console.log(target);
		//return this.angleTo(target)
		var dx = target.dx || 0;
		var dy = target.dy || 0;
		if (!target)
			return false;
		var delay = Math.sqrt(Math.pow(target.y-target.height/2-this.y+this.height/2, 2) + Math.pow(target.x-this.x, 2)) / speed;
		for (var i = 0; i < loops; i++) {
			//console.log(i, delay)
			delay = Math.sqrt(Math.pow(target.y+delay*dy-target.height/2-this.y+this.height/2, 2) + Math.pow(target.x+delay*dx-this.x, 2)) / speed;
		}
		var angle = Math.atan2(target.y+delay*dy-target.height/2-this.y+this.height/2, target.x+delay*dx-this.x)
		//console.log(delay, angle);
		if (angle)
			return angle;
		else
			return this.angleTo(target);
	},
	exposureToSky : function() {
		return (
			clearToSky(this.x - this.width/2, this.y-this.height-.5) +
			clearToSky(this.x - this.width/4, this.y-this.height-.5) +
			clearToSky(this.x, this.y-this.height-.5) +
			clearToSky(this.x + this.width/4, this.y-this.height-.5) +
			clearToSky(this.x + this.width/2, this.y-this.height-.5)
		)/5;
	},
	/*collideAttack : function(damage, nx, ny, nwidth, nheight) {
		this.collCD--;
		var box;
		if (typeof nx == "number")
			box = {x: nx, y: ny, width: nwidth, height: nheight};
		else if (typeof nx == "object")
			box = nx;
		else
			box = this;
		var hit = null;
		var all = gameObjects.slice();
		all.push(player);
		//console.log(box)
		for (var i = 0; i < all.length; i++) {
			var oj = all[i];
			//console.log(oj.hittable, oj.team != this.team, oj.isTouching(box))
			if (oj.hittable && oj.team != this.team && oj.isTouching(box)) {
				oj.getHit(damage);
				hit = oj;
			}
		}
		return hit;
	}*/
}

class GameObject {
	constructor() {
		
	}
	isGrounded() {
		return isPixelSolid(this.x - this.width/2 - Math.max(this.dx, 0), this.y + 1) || isPixelSolid(this.x + this.width/2 - Math.min(this.dx, 0), this.y + 1);
	}
	physics() {
		var cd = false//controller.debug//collisionDiagnostics;
		this.grounded = this.isGrounded();
		
		//if (this.grounded)
		//	this.dy = Math.min(this.dy, 0)
		/*var intendedX = this.x + this.dx;
		var intendedY = this.y + this.dy;
		this.x = intendedX;
		this.y = intendedY;*/
		
		//if (stopdx) this.dx = 0;
		//if (stopdy) this.dy = 0;
		var prevx = this.x;
		var prevy = this.y;
		var interval = this.physicsPrecision / Math.max(Math.abs(this.dx), Math.abs(this.dy), .01)
		for (i = 0; i < 1.0; i += interval) {
			var intendedx = this.x + this.dx * interval;
			var intendedy = this.y + this.dy * interval;
			//console.log(this.dx*interval,this.x)
			switch (getCollidingWall(intendedx, intendedy, this.width, this.height)) {
				case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear",i); break;
				case 0: this.dy = Math.max(this.dy, 0); if(cd) console.log("top",i); break;
				case 1: this.dx = Math.min(this.dx, 0); if(cd) console.log("right",i); break;
				case 2: this.dy = Math.min(this.dy, 0); if(cd) console.log("bottom",i); break;
				case 3: this.dx = Math.max(this.dx, 0); if(cd) console.log("left",i); break;
				case 4: this.dx = 0; this.dy = 0; if(cd) console.log("multiple",i); break;
			}
		}
		if (this.y == prevy && this.dy > 0) {
			switch (getCollidingWall(this.x, this.y, this.width, this.height)) {
				//case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear push",i); break;
				case 0: if(cd) console.log("top push"); break;
				case 1: this.x -= .2; if(cd) console.log("right push"); break;
				case 2: if(cd) console.log("bottom push"); break;
				case 3: this.x += .2; if(cd) console.log("left push"); break;
			}
		}
		this.grounded = this.isGrounded();
		if (this.grounded && Math.abs(this.y - Math.round(this.y)) < .1 && (blockOfPixel(this.x-this.width/2, this.y+.1).solid || blockOfPixel(this.x+this.width/2, this.y+.1)))
			this.y = Math.round(this.y);
		if (this.doesGravity && !this.grounded)
			this.dy += gravity * this.doesGravity;
	}
	push(pdx, pdy) {
		if (pdx != pdx || pdy != pdy)
			return;
		var cd = controller.debug//collisionDiagnostics;
		var interval = this.physicsPrecision / Math.max(Math.abs(pdx), Math.abs(pdy), .01)
		for (i = 0; i < 1.0; i += interval) {
			var intendedx = this.x + pdx * interval;
			var intendedy = this.y + pdy * interval;
			switch (getCollidingWall(intendedx, intendedy, this.width, this.height)) {
				case -1: this.x = intendedx; this.y = intendedy; if(cd) console.log("clear",i); break;
				case 0: pdy = Math.max(pdy, 0); if(cd) console.log("top",i); break;
				case 1: pdx = Math.min(pdx, 0); if(cd) console.log("right",i); break;
				case 2: pdy = Math.min(pdy, 0); if(cd) console.log("bottom",i); break;
				case 3: pdx = Math.max(pdx, 0); if(cd) console.log("left",i); break;
				case 4: pdx = 0; pdy = 0; if(cd) console.log("multiple",i); break;
			}
		}
	}
	isTouching(other) {
		if (Math.abs(this.x-other.x) <= (this.width+other.width)/2) {
			if (this.y >= other.y-other.height && this.y-this.height <= other.y)
				return true;
		}
		return false;
	}
	checkHazards() {
		var haz = Pmax(
			hazardOfPixel(this.x-this.width/2, this.y),
			hazardOfPixel(this.x+this.width/2, this.y),
			hazardOfPixel(this.x-this.width/2, this.y-this.height),
			hazardOfPixel(this.x+this.width/2, this.y-this.height),
			hazardOfPixel(this.x-this.width/2-.6, this.y+.6, true),
			hazardOfPixel(this.x+this.width/2+.6, this.y+.6, true),
			hazardOfPixel(this.x-this.width/2-.6, this.y-this.height-.6, true),
			hazardOfPixel(this.x+this.width/2+.6, this.y-this.height-.6, true)
		);
		//if (controller.debug) console.log(haz);
		if (this.damageable)
			this.takeDamage(haz);
	}
	getHit(dmg) {
		if (!this.hittable)
			return false;
		if (this.damageable && dmg > 0) {
			if (this != player) lastHitEnemy = this;
			return this.takeDamage(dmg);
		} else 
			return true;
	}
	takeDamage(dmg) {
		if (!this.damageable || dmg == undefined || dmg != dmg)
			return false;
		this.hp -= dmg;
		if (this.hp <= 0)
			this.die();
		return dmg;
	}
	die() {
		this.dead = true;
		this.onDeath();
		//gameObjects.splice(gameObjects.indexOf(this), 1);
	}
	onDeath() {
		
	}
	sendHurtbox(damage, nx, ny, nwidth, nheight) {
		var box;
		if (typeof nx == "number")
			box = {x: nx, y: ny, width: nwidth, height: nheight};
		else if (typeof nx == "object")
			box = nx;
		else
			box = this;
		var hit = null;
		var all = gameObjects.slice();
		all.push(player);
		//console.log(box)
		for (var i = 0; i < all.length; i++) {
			var oj = all[i];
			//console.log(oj.hittable, oj.team != this.team, oj.isTouching(box))
			if (oj.hittable && oj.team != this.team && oj.isTouching(box)) {
				oj.getHit(damage);
				hit = oj;
			}
		}
		return hit;
	}
	nearestEnemy() {
		var sof = null;
		var dist = Infinity;
		var all = gameObjects.slice();
		all.push(player);
		var thisser = this;
		all.forEach(function(oj) {
			if (oj.hittable && oj.team != thisser.team) {
				var cdist = Math.sqrt(Math.pow(thisser.x-oj.x, 2) + Math.pow(thisser.y-oj.y, 2));
				//console.log(Math.pow(thisser.x-oj.x, 2), Math.pow(thisser.y-oj.y, 2))
				if (cdist < dist) {
					dist = cdist;
					sof = oj;
				}
			}
		});
		return sof;
	}
	angleTo(target) {
		//console.log(target);
		if (!target)
			return false;
		return Math.atan2(target.y-target.height/2-this.y+this.height/2, target.x-this.x);
	}
	angleToLeading(target, speed = 0, loops = 5) {
		//console.log(target);
		//return this.angleTo(target)
		var dx = target.dx || 0;
		var dy = target.dy || 0;
		if (!target)
			return false;
		var delay = Math.sqrt(Math.pow(target.y-target.height/2-this.y+this.height/2, 2) + Math.pow(target.x-this.x, 2)) / speed;
		for (var i = 0; i < loops; i++) {
			//console.log(i, delay)
			delay = Math.sqrt(Math.pow(target.y+delay*dy-target.height/2-this.y+this.height/2, 2) + Math.pow(target.x+delay*dx-this.x, 2)) / speed;
		}
		var angle = Math.atan2(target.y+delay*dy-target.height/2-this.y+this.height/2, target.x+delay*dx-this.x)
		//console.log(delay, angle);
		if (angle)
			return angle;
		else
			return this.angleTo(target);
	}
	exposureToSky() {
		return (
			clearToSky(this.x - this.width/2, this.y-this.height-.5) +
			clearToSky(this.x - this.width/4, this.y-this.height-.5) +
			clearToSky(this.x, this.y-this.height-.5) +
			clearToSky(this.x + this.width/4, this.y-this.height-.5) +
			clearToSky(this.x + this.width/2, this.y-this.height-.5)
		)/5;
	}
	drawSprite(sprit) {
		//console.log(sprit);
		drawSpriteOnStage(typeof sprit == "string" ? this.sprites[sprit] : sprit, this.x, this.y, this.facingRight);
	}
}
GameObject.prototype.physicsPrecision = .08;

getCollidingWall = function(x, y, width, height) {
	ulblock = isPixelSolid(x - width/2, y - height);
	urblock = isPixelSolid(x + width/2, y - height);
	blblock = isPixelSolid(x - width/2, y);
	brblock = isPixelSolid(x + width/2, y);
	if (ulblock + urblock + blblock + brblock >= 3)
		return 4;
	if (ulblock && urblock)
		return 0;
	if (urblock && brblock)
		return 1;
	if (brblock && blblock)
		return 2;
	if (blblock && ulblock)
		return 3;
	if (urblock)
		return greater(solidDistance(x+width/2, y-height, 3) , solidDistance(x+width/2, y-height, 2)) ? 0 : 1;
	if (brblock)
		return greater(solidDistance(x+width/2, y, 0) , solidDistance(x+width/2, y, 3)) ? 1 : 2;
	if (blblock)
		return greater(solidDistance(x-width/2, y, 1) , solidDistance(x-width/2, y, 0)) ? 2 : 3;
	if (ulblock)
		return greater(solidDistance(x-width/2, y-height, 2) , solidDistance(x-width/2, y-height, 1)) ? 3 : 0;
	for (var i = y - 1; i > y-height; i--) { 
		//console.log(i)
		if (isPixelSolid(x + width/2, i))
			return 1;
	}
	for (var i = y - 1; i > y-height; i--) {
		if (isPixelSolid(x - width/2, i))
			return 3;
	}
	return -1;
}

function loadEnemy(nom) {
	loadSprites(nom.prototype.sprites);
	/*if (typeof nom == "string") {
		window[nom].prototype.sprites = {};
		var ritz = window[nom].prototype.sprites;
		window[nom+"SpriteNames"].forEach(function(ritten) {
			ritz[ritten] = makeImage("src/Enemies/"+nom+"/"+ritten+".png");
		});
	} else {
		var prot = nom.prototype;
		prot.sprites = {};
		var fol = nom.prototype.folderName || nom.prototype.speciesName.replace(/\s/g, "");
		prot.spriteNames.forEach(function(ritten) {
			prot.sprites[ritten] = makeImage("src/Enemies/"+fol+"/"+ritten+".png");
		});
		if (prot.sfxNames) {
			prot.sfx = {};
			prot.sfxNames.forEach(function(ritten) {
				prot.sfx[ritten] = makeSound("src/Enemies/"+fol+"/"+ritten+".mp3");
			});
		}
	}*/
}

class CustomObject extends GameObject {
	constructor(update, draw = doNothing, other = {}) {
		super();
		this.update = update;
		this.draw = draw;
		for (bluh in other) {
			this[bluh] = other[bluh];
		}
	}
}