var FadourSpriteNames = ["Normal", "Spawning0", "Spawning1", "Spawning2", "Spawning3", "Spawning4", "Spawning5", "Spawning6", "SpikesSpinning0", "SpikesSpinning1", "SpikesSpinning2", "SpikesSpinning3", "SpikesSpinning4", "SpikesSpinning5"]
const FADOUR_BASE_SPEED = 6;
const FADOUR_SPAWN_DELAY = 6;
const FADOUR_SPAWNABLES = [Walkie, Hoverie, Bouncie, Spinnie];
class Fadour extends Boss {
	constructor(name, x, y, facingRight, boundLeft, boundRight, portys) {
		super(name);
		this.x = x;
		this.y = y;
		this.facingRight = facingRight;
		this.dx = -FADOUR_BASE_SPEED;
		this.dy = 0;
		this.spinCycle = 0;
		this.spikeCD = 0;
		this.spawned = [];
		this.numSpawned = 0;
		this.numLeftPorts = 0;
		this.spikebox = {
			isTouching : GameObject.prototype.isTouching,
			width : 44,
			height : 44,
		}
		this.boundLeft = boundLeft;
		this.boundRight = boundRight;
		this.portys = portys;
		//this.portys = [y];
	}
	update() {
		if (this.spawnDelay <= 0) {
			this.spawnDelay = undefined;
			var newSpawn = new (FADOUR_SPAWNABLES[this.numSpawned % FADOUR_SPAWNABLES.length])(null, this.x, this.y-this.height/2+10, player.x > this.x, player.y > this.y);
			this.spawned.push(newSpawn);
			gameObjects.push(newSpawn);
			this.numSpawned++;
		}
		if (this.spawnDelay != undefined)
			this.spawnDelay --;
		if (this.x+this.width/2 < cameraLeftBound) {
			this.port(false);
		} else if (this.x-this.width/2 > cameraRightBound) {
			this.port(true);
		} else if ((this.dx > 0 && this.x > this.startSpawnX) || (this.dx < 0 && this.x < this.startSpawnX)) {
			this.spawnDelay = FADOUR_SPAWN_DELAY;
			this.startSpawnX = undefined;
		}
		this.x += this.dx; //this.physics
		this.y += this.dy;
		this.spikebox.x = this.x;
		this.spikebox.y = this.y-this.height/2+this.spikebox.height/2;
		this.spikeCD--;
		if (this.spikeCD <= 0) {
			if (this.sendHurtbox(210, this.spikebox) == player)
				this.spikeCD = 60;
		}
		this.spawned = this.spawned.filter(oj=>!oj.dead);
		this.facingRight = player.x > this.x;
	}
	draw() {
		var state;
		if (typeof this.spawnDelay == "number") {
			state = "spawning"+this.spawnDelay;
		} else
			state = "normal";
		if (typeof this.spawnDelay != "number") {
			this.spinCycle = (this.spinCycle+1) % 6;
		}
		var spikesSprite = this.sprites["spikesSpinning"+(this.spinCycle)];
		drawSpriteOnStage(spikesSprite, this.x, this.y-this.height/2+spikesSprite.height/2, this.dx > 0);
		this.drawSprite(state);
	}
	onDeath() {
		super.onDeath();
		this.spawned.forEach(spew=>spew.die());
		//console.log(collectedThisRun)
		//this.collect();
	}
	port(side) {//TODO make deterministic
		this.lasty = this.y;
		if (!side) { //left
			this.x = this.boundLeft-this.width/2;
			this.dx = FADOUR_BASE_SPEED;
			this.y = this.portys[(this.portys.length + this.closestPortIndex(player.y) + this.portoffs[this.numLeftPorts % this.portoffs.length]) % this.portys.length];
			this.numLeftPorts++;
		} else { //right
			this.x = this.boundRight+this.width/2;
			this.dx = -FADOUR_BASE_SPEED;
			this.y = this.closestPorty(player.y);
		}
		this.spawnx = player.x;
		this.startSpawnX = this.spawnx - this.dx * FADOUR_SPAWN_DELAY;
	}
	closestPorty(y) {
		return this.portys[this.closestPortIndex(y)];
	}
	closestPortIndex(goal) {
		var best = 0;
		var dist = Infinity;
		for (var i = 0; i < this.portys.length; i++) {
			let ndist = Math.abs(this.portys[i] - goal);
			if (ndist < dist) {
				best = i;
				dist = ndist;
			}
		}
		return best;
	}
}
Fadour.prototype.speciesName = "Fadour";
Fadour.prototype.team = "Sqarnos";
Fadour.prototype.sprites = makeSprites("src/Enemies/Fadour.png", {
	normal: {x:0, y:0, width:32, height:32},
	spawning0: {x:32, y:0, width:32, height:32},
	spawning1: {x:64, y:0, width:32, height:32},
	spawning2: {x:96, y:0, width:32, height:32},
	spawning3: {x:128, y:0, width:32, height:32},
	spawning4: {x:160, y:0, width:32, height:32},
	spawning5: {x:192, y:0, width:32, height:32},
	spawning6: {x:224, y:0, width:32, height:32},
	spikesSpinning0: {x:0, y:32, width:48, height:48},
	spikesSpinning1: {x:48, y:32, width:48, height:48},
	spikesSpinning2: {x:96, y:32, width:48, height:48},
	spikesSpinning3: {x:144, y:32, width:48, height:48},
	spikesSpinning4: {x:192, y:32, width:48, height:48},
	spikesSpinning5: {x:240, y:32, width:48, height:48},
}, false);
Fadour.prototype.width = 32;
Fadour.prototype.height = 32;
Fadour.prototype.maxhp = 750;
Fadour.prototype.numVessels = 5;
Fadour.prototype.portoffs = [-1, 1, -2, 2];
