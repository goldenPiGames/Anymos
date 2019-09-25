var BeamTurretSpriteNames = ["Shooting"]
function BeamTurret(x, y, facingRight, offset = 0, period = 90) {
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.facingRight = facingRight;
	this.offset = offset
	this.period = period;
}
BeamTurret.prototype = Object.create(GameObjectBase);
BeamTurret.prototype.team = "Hazards";
BeamTurret.prototype.update = function() {
	if ((stageTimer + this.offset) % this.period < 4) {
		gameObjects.push(new Beam(this.x + (this.facingRight?1:-1) * (this.width/2 + 5), this.y - this.height/2 + 1, this.facingRight, this.team));
	}
}
BeamTurret.prototype.draw = function() {
	drawSpriteOnStage(this.sprites.Shooting, this.x, this.y, this.facingRight);
}

Beam = function(x, y, facingRight, team) {
	this.x = x;
	this.y = y;
	this.facingRight = facingRight;
	this.dx = facingRight ? 10 : -10;
	this.dy = 0;
	this.width = 10;
	this.height = 2;
	this.team = team;
}
Beam.prototype = Object.create(GameObjectBase);
Beam.prototype.physicsPrecision = .5;
Beam.prototype.update = function() {
	if (this.dx == 0) {
		this.die();
		return;
	}
	this.physics();
	if (this.sendHurtbox(30))
		this.die();
	if (isPixelSolid(this.x, this.y-this.height/2) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
		this.die();
}
Beam.prototype.draw = function() {
	drawSpriteOnStage(miscSprites.Beam, this.x, this.y);
}