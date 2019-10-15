class Fricchee extends Enemy {
	constructor(name, x, surfacey, facingRight) {
		super(name);
		this.name = name;
		this.hp = this.maxhp;
		this.x = x;
		this.maxy = surfacey + this.height;
		this.y = surfacey + this.height;
		this.dx = 0;
		this.dy = 0;
		this.facingRight = facingRight;
		this.jumpDelay = 5;
	}
	update() {
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
				gameObjects.push(new HorizonBeam(this.x + (this.facingRight?1:-1) * 12, this.y - this.height - 2, this.facingRight?10:-10, this.team, 30));
			}
		}
	}
	draw() {
		drawSpriteOnStage(this.sprites.normal, this.x, this.y, this.facingRight);
	}
}
Fricchee.prototype.speciesName = "Fricchee";
Fricchee.prototype.team = "Aqros";
Fricchee.prototype.sprites = makeSprites("src/Enemies/Fricchee.png", {
	normal : {x:0, y:0, width:60, height:60},
}, false);
Fricchee.prototype.width = 40;
Fricchee.prototype.height = 40;
Fricchee.prototype.maxhp = 250;
Fricchee.prototype.doesGravity = true;
