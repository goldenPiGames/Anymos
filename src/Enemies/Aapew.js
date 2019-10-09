const AAPEW_MOVING_PORTION = .2;
const AAPEW_CYCLE_LENGTH = 80;
const AAPEW_BEAM_SPEED = 15;
class Aapew extends Enemy {
	constructor(facingRight, x, y, offScreen) {
		super();
		this.hp = this.maxhp;
		this.facingRight = facingRight;
		if (offScreen) {
			this.x = this.facingRight ? -50 : (staticColl[0].length * PIXELS_PER_BLOCK + 50);
			this.y = y;
			this.xd = x;
			this.yd = y;
			this.moving = true;
		} else {
			this.x = x;
			this.y = y;
			this.moving = false;
			this.cycle = 5;
		}
		this.width = 35;
		this.height = 28;
	}
	update() {
		if (this.moving) {
			this.dx = (this.xd - this.x) * AAPEW_MOVING_PORTION;
			this.dy = (this.yd - this.y) * AAPEW_MOVING_PORTION;
			this.x += this.dx;
			this.y += this.dy;
			if (Math.abs(this.xd-this.x) < .5 && Math.abs(this.yd-this.y) < .5) {
				this.moving = false;
				this.cycle = AAPEW_CYCLE_LENGTH;
				this.dx = 0;
				this.dy = 0;
			}
		} else {
			this.cycle--;
			if (this.cycle > 15 && this.cycle < AAPEW_CYCLE_LENGTH - 25) {
				gameObjects.push(new HorizonBeam(this.x, this.y-this.height/2, (this.facingRight?1:-1)*AAPEW_BEAM_SPEED, this.team, 10));
			}
			if (this.cycle <= 0) {
				this.moving = true;
				this.xd = (this.facingRight ? 50 : (stagewidth() - 250)) + 200*Math.random()
				this.yd = 50 + (stageheight()-100)*Math.random();
			}
		}
	}
	draw() {
		this.drawSprite("flying");
	}
}
Aapew.prototype.speciesName = "Aapew";
Aapew.prototype.team = "Sqarnos";
Aapew.prototype.spriteNames = ["Flying"];
Aapew.prototype.maxhp = 120;
Aapew.prototype.sprites = makeSprites("src/Enemies/Aapew.png", {
	flying: {x:0, y:0, width:35, height:28},
}, false);