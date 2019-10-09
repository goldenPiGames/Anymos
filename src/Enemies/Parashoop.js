const PARASHOOP_VELOCITY = 2.5;
const PARASHOOP_CYCLE_LENGTH = 90;
const PARASHOOP_BEAM_LENGTH = 3;
class Parashoop extends Enemy {
	constructor(x, y, dy) {
		super();
		this.x = x;
		this.bx = x;
		this.theta = Math.random() * 2*Math.PI;
		this.y = y;
		this.dx = 0;
		this.dy = dy;
		this.beamCycle = Math.floor(Math.random()*PARASHOOP_CYCLE_LENGTH);
		this.collCD = 0;
	}
	update() {
		var lx = this.x;
		this.x = this.bx + 5*Math.sin(this.theta);
		this.dx = this.x-lx;
		this.theta += .05;
		this.y += this.dy;
		if (this.y > stageheight())
			this.takeDamage(2);
		this.beamCycle--;
		if (this.beamCycle < 0)
			this.beamCycle += PARASHOOP_CYCLE_LENGTH;
		else if (this.beamCycle < PARASHOOP_BEAM_LENGTH)
			gameObjects.push(new HorizonBeam(this.x-3, this.y-3, -10, this.team, 30));
		else if (this.beamCycle >= PARASHOOP_CYCLE_LENGTH/2 && this.beamCycle < PARASHOOP_CYCLE_LENGTH/2 + PARASHOOP_BEAM_LENGTH)
			gameObjects.push(new HorizonBeam(this.x+3, this.y-3, 10, this.team, 30));
	}
	draw() {
		this.drawSprite("falling");
	}
}
Parashoop.prototype.speciesName = "Parashoop";
Parashoop.prototype.team = "Sqarnos";
Parashoop.prototype.sprites = makeSprites("src/Enemies/Parashoop.png", {
	falling: {x:0, y:0, width:14, height:30}
}, false);
Parashoop.prototype.width = 10;
Parashoop.prototype.height = 30;
Parashoop.prototype.maxhp = 30;
Parashoop.prototype.doesGravity = false;
Parashoop.prototype.collDamage = 60;
Parashoop.prototype.collMaxCD = 90;