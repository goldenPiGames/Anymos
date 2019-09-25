var BouncieSpriteNames = ["Air1"];
function Bouncie(name, x, y, facingRight) {
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
Bouncie.prototype = Object.create(Vessel.prototype);
Bouncie.prototype.speciesName = "Bouncie";
Bouncie.prototype.team = "Sqarnos";
Bouncie.prototype.sprites = {};
Bouncie.prototype.hittable = true;
Bouncie.prototype.damageable = true;
Bouncie.prototype.maxhp = 40;
Bouncie.prototype.doesGravity = true;
Bouncie.prototype.update = function() {
	if (isPixelSolid(this.x - this.width/2 - 1, this.y))
		this.facingRight = true;
	if (isPixelSolid(this.x + this.width/2 + 1, this.y))
		this.facingRight = false;
	this.dx = this.facingRight ? WALKIE_SPEED : -WALKIE_SPEED;
	if (this.grounded)
		this.dy = -Math.abs(DEFAULT_JUMP_SPEED);
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90))
			this.collCD = 60;
	}
	this.physics();
}
Bouncie.prototype.draw = function() {
	drawSpriteOnStage(this.sprites.Air1, this.x, this.y, this.facingRight);
}