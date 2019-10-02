class Wallie extends Enemy {
	constructor(name, x, y, facingRight, goingDown) {
		super(name);
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.facingRight = facingRight;
		this.goingDown = goingDown;
		if (this.facingRight)
			this.x = PIXELS_PER_BLOCK*Math.floor(x/PIXELS_PER_BLOCK)+this.width/2;
		else
			this.x = PIXELS_PER_BLOCK*Math.ceil(x/PIXELS_PER_BLOCK)-this.width/2 - .05;
	}
	update() {
		var basex = this.x + (this.facingRight ? -this.width/2 : this.width/2);
		var fc = this.facingRight ? 1 : -1;
		if (!isPixelSolid(this.x - fc * (this.width/2 + 1), this.y - this.height - 3))
			this.goingDown = true;
		else if (!isPixelSolid(this.x - fc * (this.width/2 + 1), this.y + 3))
			this.goingDown = false;
		else if (this.dy == 0)
			this.goingDown = !this.goingDown;
		this.dy = this.goingDown ? WALKIE_SPEED : -WALKIE_SPEED;
		this.checkCollHit();
		this.physics();
	}
	draw() {
		this.drawSprite("walking"+(this.goingDown?"Down":"Up"));
	}
}
Wallie.prototype.speciesName = "Wallie";
Wallie.prototype.team = "Sqarnos";
Wallie.prototype.sprites = makeSprites("src/Enemies/Wallie.png", {
	walkingUp : {x:0, y:0, width:15, height:16},
	walkingDown : {x:0, y:16, width:15, height:16},
}, false);
Wallie.prototype.width = 15;
Wallie.prototype.height = 16;
Wallie.prototype.maxhp = Walkie.prototype.maxhp;
Walkie.prototype.collDamage = 90;
Walkie.prototype.collMaxCD = 60;
Wallie.prototype.doesGravity = false;