var FriccheeSpriteNames = ["Normal"];
function Fricchee(name, x, surfacey, facingRight) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.width = 40;
	this.height = 40;
	this.maxy = surfacey + this.height;
	this.y = surfacey + this.height;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facingRight;
	this.doneDialog = false;
	this.collCD = 0;
	this.jumpDelay = 5;
}
Fricchee.prototype = Object.create(Vessel.prototype);
Fricchee.prototype.speciesName = "Fricchee";
Fricchee.prototype.team = "Aqros";
Fricchee.prototype.hittable = true;
Fricchee.prototype.damageable = true;
Fricchee.prototype.maxhp = 250;
Fricchee.prototype.doesGravity = true;
Fricchee.prototype.update = function() {
	if (this.jumpDelay <= 0 && this.grounded) {
		this.dy = -13;
		this.facingRight = player.x > this.x;
	}
	this.physics();
	if (this.y >= this.maxy) {
		this.dy = Math.min(this.dy, 0);
		this.grounded = true;
		if (this.jumpDelay <= 0) {
			this.jumpDelay = 10 + Math.random() * 30;
		} else
			this.jumpDelay--;
	} else {
		if (stageTimer % 30 < 4) {
			gameObjects.push(new Beam(this.x + (this.facingRight?1:-1) * 12, this.y - this.height - 2, this.facingRight, this.team));
		}
	}
}
Fricchee.prototype.draw = function() {
	var state;
	drawSpriteOnStage(this.sprites.Normal, this.x, this.y, this.facingRight);
}