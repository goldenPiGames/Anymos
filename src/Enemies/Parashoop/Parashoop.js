const PARASHOOP_VELOCITY = 2.5;
const PARASHOOP_CYCLE_LENGTH = 90;
const PARASHOOP_BEAM_LENGTH = 3;
function Parashoop(x, y, dy) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.bx = x;
	this.theta = Math.random() * 2*Math.PI;
	this.y = y;
	this.dx = 0;
	this.width = 10;
	this.height = 30;
	this.dy = dy;
	this.beamCycle = Math.floor(Math.random()*PARASHOOP_CYCLE_LENGTH);
	this.collCD = 0;
}
Parashoop.prototype = Object.create(GameObjectBase);
Parashoop.prototype.speciesName = "Parashoop";
Parashoop.prototype.team = "Sqarnos";
Parashoop.prototype.spriteNames = ["Falling"];
Parashoop.prototype.hittable = true;
Parashoop.prototype.damageable = true;
Parashoop.prototype.maxhp = 30;
Parashoop.prototype.doesGravity = false;
Parashoop.prototype.update = function() {
	var lx = this.x;
	this.x = this.bx + 5*Math.sin(this.theta);
	this.dx = this.x-lx;
	this.theta += .05;
	this.y += this.dy;
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(60, this.x, this.y, 8, 8))
			this.collCD = 60;
	}
	if (this.y > stageheight())
		this.takeDamage(2);
	this.beamCycle--;
	if (this.beamCycle < 0)
		this.beamCycle += PARASHOOP_CYCLE_LENGTH;
	else if (this.beamCycle < PARASHOOP_BEAM_LENGTH)
		gameObjects.push(new Beam(this.x-3, this.y-3, false, this.team));
	else if (this.beamCycle >= PARASHOOP_CYCLE_LENGTH/2 && this.beamCycle < PARASHOOP_CYCLE_LENGTH/2 + PARASHOOP_BEAM_LENGTH)
		gameObjects.push(new Beam(this.x+3, this.y-3, true, this.team));
}
Parashoop.prototype.draw = function() {
	drawSpriteOnStage(this.sprites.Falling, this.x, this.y);
}
