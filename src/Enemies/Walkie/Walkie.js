var WalkieSpriteNames = ["Walking0", "Walking1"];
const WALKIE_SPEED = 2.5;
function Walkie(name, x, y, facing) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 15;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facing;
	this.walkCycle = 0;
	this.collCD = 0;
}
Walkie.prototype = Object.create(Vessel.prototype);
Walkie.prototype.speciesName = "Walkie";
Walkie.prototype.team = "Sqarnos";
Walkie.prototype.spriteNames = ["Walking0", "Walking1"];
Walkie.prototype.hittable = true;
Walkie.prototype.damageable = true;
Walkie.prototype.maxhp = 50;
Walkie.prototype.doesGravity = true;
Walkie.prototype.update = function() {
	if (this.facingRight == "player")
		this.facingRight = player.x > this.x;
	if (isPixelSolid(this.x - this.width/2 - 1, this.y))
		this.facingRight = true;
	else if (isPixelSolid(this.x + this.width/2 + 1, this.y))
		this.facingRight = false;
	else if (!isPixelSolid(this.x - this.width/2 - 3, this.y + 1))
		this.facingRight = true;
	else if (!isPixelSolid(this.x + this.width/2 + 3, this.y + 1))
		this.facingRight = false;
	this.dx = this.facingRight ? WALKIE_SPEED : -WALKIE_SPEED;
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90))
			this.collCD = 60;
	}
	this.physics();
	this.walkCycle++;
	if (this.walkCycle >= 30)
		this.walkCycle -= 30;
	if (!this.grounded)
		this.walkCycle = 0;
}
Walkie.prototype.draw = function() {
	drawSpriteOnStage(this.sprites["Walking"+(this.walkCycle<15?0:1)], this.x, this.y, this.facingRight);
}