var FadourSpriteNames = ["Normal", "Spawning0", "Spawning1", "Spawning2", "Spawning3", "Spawning4", "Spawning5", "Spawning6", "SpikesSpinning0", "SpikesSpinning1", "SpikesSpinning2", "SpikesSpinning3", "SpikesSpinning4", "SpikesSpinning5"]
const FADOUR_BASE_SPEED = 6;
const FADOUR_SPAWN_DELAY = 6;
const FADOUR_SPAWNABLES = [Walkie, Hoverie, Bouncie, Spinnie];
class Fadour extends Boss {
	constructor(name, x, y, facingRight, doDialog = true) {
		super(name);
		this.x = x;
		this.y = y;
		this.facingRight = facingRight;
		this.dx = -FADOUR_BASE_SPEED;
		this.dy = 0;
		this.spinCycle = 0;
		this.spikeCD = 0;
		this.spawned = [];
		this.spikebox = {
			isTouching : GameObject.prototype.isTouching,
			width : 44,
			height : 44
		}
		this.portys = [y];
		this.doDialog = doDialog;
	}
	update() {//TODO make not random
		if (!this.doneportys) {
			var i = this.y + 80;
			while (i < cameraBottomBound) {
				this.portys.push(i);
				i += 80;
			}
			i = this.y - 80;
			while (i > cameraTopBound+60) {
				this.portys.push(i);
				i -= 80;
			}
			this.doneportys = true;
		}
		if (this.doDialog && !this.doneDialog) {
			this.doneDialog = true;
			dialog.begin(
				new DialogLine("???", "Oh, come on. The town is still standing! Can't you stupid little things get anything done?", "#FF00FF"),
				new DialogLine("???", "Hey, you over there. Do you know where all of my minions went?", "#FF00FF"),
				new DialogLine("Anymos", "Minions?", "#00FFFF"),
				new DialogLine("???", "Small, pathetic little things with yellow eyes and red auras?", "#FF00FF"),
				new DialogLine("Anymos", "Oh, those. Yeah, I killed them all.", "#00FFFF"),
				new DialogLine("???", "You WHAT?!", "#FF00FF"),
				new DialogLine("Anymos", "They were rampaging around the town and frightening the villagers. I was just protecting the innocents.", "#00FFFF"),
				new DialogLine("???", "You idiot! The whole REASON I sent those monsters here was to destroy the town and kill people!", "#FF00FF"),
				new DialogLine("???", "*sigh* If you want something done right, do it yourself, I suppose. Outta my way, little light-blue-eyes dude. I've got some havoc to wreak.", "#FF00FF"),
				new DialogLine("Anymos", "If you want to lay a single spike on these innocent people, you'll have to go through me first. And by the way, my eyes are cyan, not light blue.", "#00FFFF"),
				function(){playMusic("Massacre on Teddy Bear Hill - Darren Curtis")},
				new DialogLine("Fadour", "You know, I gave you the chance to run. But you didn't. So prepare to feel the awesome creative and destructive wrath of the great Fadour, servant of the even greater Sqarnos!", "#FF00FF"));
			return;
		}
		if (this.spawnDelay <= 0) {
			this.spawnDelay = undefined;
			var newSpawn = new (FADOUR_SPAWNABLES[Math.floor(Math.random()*FADOUR_SPAWNABLES.length)])(null, this.spawnx, this.y-this.height/2+10, flipCoin(), flipCoin());
			this.spawned.push(newSpawn);
			gameObjects.push(newSpawn);
		}
		if (this.spawnDelay != undefined)
			this.spawnDelay --;
		if (this.x+this.width/2 < cameraLeftBound) {
			this.x = cameraLeftBound-this.width/2;
			this.dx = FADOUR_BASE_SPEED;
			this.port();
		} else if (this.x-this.width/2 > cameraRightBound) {
			this.x = cameraRightBound+this.width/2;
			this.dx = -FADOUR_BASE_SPEED;
			this.port();
		} else if ((this.dx > 0 && this.x > this.startSpawnX) || (this.dx < 0 && this.x < this.startSpawnX)) {
			this.spawnDelay = FADOUR_SPAWN_DELAY;
			this.startSpawnX = undefined;
		}
		this.x += this.dx; //this.physics
		this.y += this.dy;
		this.spikebox.x = this.x;
		this.spikebox.y = this.y-this.height/2+this.spikebox.height/2;
		this.spikeCD--;
		if (typeof this.spawnDelay != "number" && this.spikeCD <= 0) {
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
			var spikesSprite = this.sprites["spikesSpinning"+(this.spinCycle)]
			drawSpriteOnStage(spikesSprite, this.x, this.y-this.height/2+spikesSprite.height/2);
		}
		this.drawSprite(state);
	}
	onDeath() {
		super.onDeath();
		this.spawned.forEach(spew=>spew.die());
		//console.log(collectedThisRun)
		//this.collect();
		if (this.doDialog) {
			/*
			dialog.begin(
				new DialogLine("Fadour", "Ugh... All I wanted was to follow Sqarnos' wishes to destroy the innocence in the world... Was that really too much to ask?", "#FF00FF"),
				new DialogLine("Anymos", "Yeh.", "#00FFFF"));*/
		}
	}
	port() {//TODO make deterministic
		var lasty = this.y;
		this.y = this.portys[Math.floor(this.portys.length*Math.random())];
		if (this.y == lasty)
			this.y = this.portys[Math.floor(this.portys.length*Math.random())];
		/*if (player.y - this.y > 40 && Math.random() < .8)
			this.y += 80;
		else if (player.y - this.y < -60 && Math.random() < .8)
			this.y -= 80;*/
		this.spawnx = Math.random() * (cameraRightBound - cameraLeftBound - 40) + cameraLeftBound + 20;
		if (isPixelSolid(this.spawnx-10, this.y-this.height/2+10) || isPixelSolid(this.spawnx+10, this.y-this.height/2+10) || isPixelSolid(this.spawnx-10, this.y-this.height/2-10) || isPixelSolid(this.spawnx+10, this.y-this.height/2-10))
			this.spawnx = Math.random() * (cameraRightBound - cameraLeftBound - 40) + cameraLeftBound + 20;
		if (isPixelSolid(this.spawnx-10, this.y-this.height/2+10) || isPixelSolid(this.spawnx+10, this.y-this.height/2+10) || isPixelSolid(this.spawnx-10, this.y-this.height/2-10) || isPixelSolid(this.spawnx+10, this.y-this.height/2-10))
			this.spawnx = undefined;
		this.startSpawnX = this.spawnx - this.dx * FADOUR_SPAWN_DELAY;
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
