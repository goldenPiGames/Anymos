var FadourSpriteNames = ["Normal", "Spawning0", "Spawning1", "Spawning2", "Spawning3", "Spawning4", "Spawning5", "Spawning6", "SpikesSpinning0", "SpikesSpinning1", "SpikesSpinning2", "SpikesSpinning3", "SpikesSpinning4", "SpikesSpinning5"]
const FADOUR_BASE_SPEED = 6;
const FADOUR_SPAWN_DELAY = 6;
const FADOUR_SPAWNABLES = [Walkie, Hoverie, Bouncie, Spinnie];
function Fadour(name, x, y, facingRight, doDialog = true) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 32;
	this.height = 32;
	this.dx = -FADOUR_BASE_SPEED;
	this.dy = 0;
	this.facingRight = facingRight;
	this.spikeLooper= 0;
	this.spikeCD = 0;
	this.spawned = [];
	this.spikebox = {
		__proto__ : Object.create(GameObjectBase),
		width : 44,
		height : 44
	}
	this.portys = [y];
	this.doDialog = doDialog;
}
Fadour.prototype = Object.create(Vessel.prototype);
Fadour.prototype.speciesName = "Fadour";
Fadour.prototype.team = "Sqarnos";
Fadour.prototype.hittable = true;
Fadour.prototype.damageable = true;
Fadour.prototype.maxhp = 750;
Fadour.prototype.update = function() {
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
	removeDead(this.spawned);
}
Fadour.prototype.draw = function() {
	var state;
	if (typeof this.spawnDelay == "number") {
		state = "Spawning"+this.spawnDelay;
	} else
		state = "Normal";
	var sprite = this.sprites[state];
	if (typeof this.spawnDelay != "number") {
		this.spikeLooper = (this.spikeLooper+1) % 6;
		var spikesSprite = this.sprites["SpikesSpinning"+(this.spikeLooper)];
		drawSpriteOnStage(spikesSprite, this.x, this.y-sprite.height/2+spikesSprite.height/2);
	}
	drawSpriteOnStage(sprite, this.x, this.y, player.x>this.x);
}
Fadour.prototype.onDeath = function() {
	this.spawned.forEach(function(spew) {
		spew.die();
	});
	if (this.name) {
		for (var i = 1; i <= 3; i++) {
			new Vessel(this.name+i).collect();
		}
	}
	//console.log(collectedVesselNames)
	//this.collect();
	if (this.doDialog) {
		/*
		dialog.begin(
			new DialogLine("Fadour", "Ugh... All I wanted was to follow Sqarnos' wishes to destroy the innocence in the world... Was that really too much to ask?", "#FF00FF"),
			new DialogLine("Anymos", "Yeh.", "#00FFFF"));*/
	}
}
Fadour.prototype.port = function() {
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