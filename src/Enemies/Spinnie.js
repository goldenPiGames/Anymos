const SPINNIE_VELOCITY = 2.5;
class Spinnie extends Enemy {
	constructor(name, x, y, facingRight, goingDown) {
		super(name);
		this.x = x;
		this.y = y;
		this.facingRight = facingRight;
		this.goingDown = goingDown;
		this.dx = this.facingRight ? SPINNIE_VELOCITY : -SPINNIE_VELOCITY;
		this.dy = this.goingDown ? SPINNIE_VELOCITY : -SPINNIE_VELOCITY;
		this.spinCycle = 0;
	}
	update() {
		if (this.dx == 0)
			this.facingRight = !this.facingRight;
		this.dx = this.facingRight ? SPINNIE_VELOCITY : -SPINNIE_VELOCITY;
		if (this.dy == 0)
			this.goingDown = !this.goingDown;
		this.dy = this.goingDown ? SPINNIE_VELOCITY : -SPINNIE_VELOCITY;
		this.checkCollHit();
		this.physics();
		if (this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
			this.takeDamage(2);
		this.spinCycle = (this.spinCycle+1) % 4;
	}
	draw() {
		this.drawSprite("spinning"+this.spinCycle);
	}
}
Spinnie.prototype.speciesName = "Spinnie";
Spinnie.prototype.team = "Sqarnos";
Spinnie.prototype.sprites = makeSprites("src/Enemies/Spinnie.png", {
	spinning0: {x:0, y:0, width:24, height:24},
	spinning1: {x:24, y:0, width:24, height:24},
	spinning2: {x:48, y:0, width:24, height:24},
	spinning3: {x:72, y:0, width:24, height:24},
}, false);
Spinnie.prototype.width = 24;
Spinnie.prototype.height = 24;
Spinnie.prototype.maxhp = 60;
Spinnie.prototype.collDamage = 120;
Spinnie.prototype.collMaxCD = 60;
Spinnie.prototype.doesGravity = false;
