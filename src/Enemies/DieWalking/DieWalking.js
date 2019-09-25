var DieWalkingSpriteNames = ["Upright", "Rolling1", "Rolling2", "Rolling3", "ShootingDot"];
function DieWalking(x, y, facing, cycleLength, shooting) {
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 19;
	this.height = 19;
	this.cycleLength = cycleLength;
	this.cycle = 5;
	this.dx = 0;
	this.dy = 0;
	this.facingRight = facing;
	this.collCD = 0;
}
DieWalking.prototype = Object.create(Vessel.prototype);
DieWalking.prototype.speciesName = "Walking Die";
DieWalking.prototype.team = "Chanos";
DieWalking.prototype.folderName = "DieWalking";
DieWalking.prototype.spriteNames = ["Upright", "Rolling1", "Rolling2", "Rolling3", "ShootingDot"];
DieWalking.prototype.hittable = true;
DieWalking.prototype.damageable = true;
DieWalking.prototype.maxhp = 60;
DieWalking.prototype.doesGravity = true;
DieWalking.prototype.update = function() {
	this.grounded = this.isGrounded();
	if (this.grounded) {
		this.cycle ++;
		if (this.cycle <= 4)
			this.x += (this.facingRight?1:-1) * 5;
		else if (this.cycle > this.cycleLength) {
			this.cycle = 0;
			var facentx = this.x + (this.facingRight?20:-20)
			if (isPixelSolid(facentx - this.width/4, this.y - this.height/2) || isPixelSolid(facentx + this.width/4, this.y - this.height/2))
				this.facingRight = !this.facingRight;
		}
	} else {
		this.cycle = 5;
		this.physics();
	}
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90))
			this.collCD = 60;
	}
}
DieWalking.prototype.draw = function() {
	var state;
	if	(this.cycle >= 1 && this.cycle <= 3)
		state = "Rolling"+Math.floor(this.cycle);
	else 
		state = "Upright";
	drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
}