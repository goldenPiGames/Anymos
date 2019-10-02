const HOVERIE_SPEED = 2.5;
class Hoverie extends Enemy {
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
		this.dx = this.facingRight ? HOVERIE_SPEED : -HOVERIE_SPEED;
		this.checkCollHit();
		this.physics();
		this.hoverCycle = !this.hoverCycle;
	}
	draw() {
		//TODO bop along with music
		this.drawSprite("hovering"+(this.hoverCycle?1:0));
	}

}
Hoverie.prototype.speciesName = "Hoverie";
Hoverie.prototype.team = "Sqarnos";
Hoverie.prototype.sprites = makeSprites("src/Enemies/Hoverie.png", {
	hovering0 : {x:0, y:0, width:16, height:20},
	hovering1 : {x:0, y:0, width:16, height:20},
}, false);
Hoverie.prototype.width = 16;
Hoverie.prototype.height = 16;
Hoverie.prototype.maxhp = 50;
Hoverie.prototype.collDamage = 90;
Hoverie.prototype.collMaxCD = 60;
Hoverie.prototype.doesGravity = false;
