var HoverieSpriteNames = ["Hovering0", "Hovering1"];
const HOVERIE_SPEED = 2.5;
function Hoverie(name, x, y, facingRight) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 16;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facingRight;
	this.collCD = 0;
}
Hoverie.prototype = Object.create(Vessel.prototype);
Hoverie.prototype.speciesName = "Hoverie";
Hoverie.prototype.team = "Sqarnos";
Hoverie.prototype.spriteNames = ["Hovering0", "Hovering1"];
Hoverie.prototype.hittable = true;
Hoverie.prototype.damageable = true;
Hoverie.prototype.maxhp = 50;
Hoverie.prototype.doesGravity = false;
Hoverie.prototype.update = function() {
	if (isPixelSolid(this.x - this.width/2 - 1, this.y))
		this.facingRight = true;
	if (isPixelSolid(this.x + this.width/2 + 1, this.y))
		this.facingRight = false;
	this.dx = this.facingRight ? HOVERIE_SPEED : -HOVERIE_SPEED;
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90))
			this.collCD = 60;
	}
	this.physics();
}
Hoverie.prototype.draw = function() {
	drawSpriteOnStage(this.sprites["Hovering"+(stageTimer%2)], this.x, this.y, this.facingRight);
}