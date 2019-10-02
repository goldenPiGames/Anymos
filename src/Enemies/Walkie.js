const WALKIE_SPEED = 2.5;
class Walkie extends Enemy {
	constructor(name, x, y, facing) {
		super(name);
		this.name = name;
		this.hp = this.maxhp;
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.facingRight = facing;
		this.walkCycle = 0;
	}
	update() {
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
		this.checkCollHit();
		this.physics();
		this.walkCycle = (this.walkCycle + 1) % 30;
		if (!this.grounded)
			this.walkCycle = 0;
	}
	draw = function() {
		//TODO bop along with music
		this.drawSprite("walking"+(musicUpbeat()?1:0));
	}

}
Walkie.prototype.speciesName = "Walkie";
Walkie.prototype.team = "Sqarnos";
Walkie.prototype.sprites = makeSprites("src/Enemies/Walkie.png", {
	walking0 : {x:0, y:0, width:16, height:15},
	walking1 : {x:16, y:0, width:16, height:15},
}, false);
Walkie.prototype.width = 16;
Walkie.prototype.height = 15;
Walkie.prototype.maxhp = 50;
Walkie.prototype.collDamage = 90;
Walkie.prototype.collMaxCD = 60;
Walkie.prototype.doesGravity = true;
