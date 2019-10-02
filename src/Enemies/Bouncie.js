class Bouncie extends Enemy {
	constructor(name, x, y, facingRight) {
		super(name);
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.facingRight = facingRight;
		this.collCD = 0;
	}
	update() {
		if (isPixelSolid(this.x - this.width/2 - 1, this.y))
			this.facingRight = true;
		if (isPixelSolid(this.x + this.width/2 + 1, this.y))
			this.facingRight = false;
		this.dx = this.facingRight ? WALKIE_SPEED : -WALKIE_SPEED;
		if (this.grounded)
			this.dy = -Math.abs(DEFAULT_JUMP_SPEED);
		this.checkCollHit();
		this.physics();
	}
	draw() {
		var state;
		if (this.dy < -.6)
			state = "airUp";
		else if (this.dy > .6)
			state = "airDown";
		else
			state = "airMid";
		this.drawSprite(state);
	}
}

Bouncie.prototype.speciesName = "Bouncie";
Bouncie.prototype.team = "Sqarnos";
Bouncie.prototype.sprites = makeSprites("src/Enemies/Bouncie.png", {
	airUp : {x:0, y:0, width:16, height:16},
	airMid : {x:0, y:16, width:16, height:16},
	airDown : {x:0, y:32, width:16, height:16},
}, false);
Bouncie.prototype.width = 16;
Bouncie.prototype.height = 16;
Bouncie.prototype.maxhp = 40;
Bouncie.prototype.collDamage = 90;
Bouncie.prototype.collMaxCD = 60;
Bouncie.prototype.doesGravity = true;
