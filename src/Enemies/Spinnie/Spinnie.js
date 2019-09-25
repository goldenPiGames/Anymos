var SpinnieSpriteNames = ["Spinning0", "Spinning1", "Spinning2", "Spinning3"];
const SPINNIE_VELOCITY = 2.5;
function Spinnie(name, x, y, facingRight, goingDown) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 24;
	this.height = 24;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facingRight;
	this.collCD = 0;
}
Spinnie.prototype = Object.create(Vessel.prototype);
Spinnie.prototype.speciesName = "Spinnie";
Spinnie.prototype.team = "Sqarnos";
Spinnie.prototype.sprites = {};
Spinnie.prototype.hittable = true;
Spinnie.prototype.damageable = true;
Spinnie.prototype.maxhp = 60;
Spinnie.prototype.doesGravity = false;
Spinnie.prototype.update = function() {
	if (this.dx == 0)
		this.facingRight = !this.facingRight;
	this.dx = this.facingRight ? SPINNIE_VELOCITY : -SPINNIE_VELOCITY;
	if (this.dy == 0)
		this.goingDown = !this.goingDown;
	this.dy = this.goingDown ? SPINNIE_VELOCITY : -SPINNIE_VELOCITY;
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(120))
			this.collCD = 60;
	}
	this.physics();
	if (this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
		this.takeDamage(2);
}
Spinnie.prototype.draw = function() {
	drawSpriteOnStage(this.sprites["Spinning"+(stageTimer%4)], this.x, this.y, this.facingRight);
}