var WallieSpriteNames = ["Walking1Down", "Walking1Up"];
function Wallie(name, x, y, facingRight, goingDown) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 15;
	this.height = 16;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facingRight;
	this.goingDown = goingDown;
	this.collCD = 0;
	if (this.facingRight)
		this.x = PIXELS_PER_BLOCK*Math.floor(this.x/PIXELS_PER_BLOCK)+this.width/2
	else
		this.x = PIXELS_PER_BLOCK*Math.ceil(this.x/PIXELS_PER_BLOCK)-this.width/2 - .05;
}
Wallie.prototype = Object.create(Vessel.prototype);
Wallie.prototype.speciesName = "Wallie";
Wallie.prototype.team = "Sqarnos";
Wallie.prototype.sprites = {};
Wallie.prototype.hittable = true;
Wallie.prototype.damageable = true;
Wallie.prototype.maxhp = 50;
Wallie.prototype.doesGravity = false;
Wallie.prototype.update = function() {
	var basex = this.x + (this.facingRight ? -this.width/2 : this.width/2);
	var fc = this.facingRight ? 1 : -1;
	if (!isPixelSolid(this.x - fc * (this.width/2 + 1), this.y - this.height - 3))
		this.goingDown = true;
	else if (!isPixelSolid(this.x - fc * (this.width/2 + 1), this.y + 3))
		this.goingDown = false;
	else if (this.dy == 0)
		this.goingDown = !this.goingDown;
	this.dy = this.goingDown ? WALKIE_SPEED : -WALKIE_SPEED;
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90))
			this.collCD = 60;
	}
	this.physics();
}
Wallie.prototype.draw = function() {
	drawSpriteOnStage(this.sprites["Walking1"+(this.goingDown?"Down":"Up")], this.x, this.y, this.facingRight);
}