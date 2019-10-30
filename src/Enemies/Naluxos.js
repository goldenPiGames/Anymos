class Naluxos extends Enemy {
	constructor(x, y, facingRight) {
		super();
		this.x = x;
		this.y = y;
		this.facingRight = facingRight;
	}
	update() {
		//this.power++;
		//this.illumination = Math.sqrt(this.power*10);
	}
	draw() {
		this.drawSprite("standing");
	}
}
Naluxos.prototype.speciesName = "Naluxos";
Naluxos.prototype.team = "Anymos";
Naluxos.prototype.sprites = makeSprites("src/Enemies/Naluxos.png", {
	pickup: {x:0, y:0, width:20, height:20},
	standing: {x:20, y:0, width:16, height:30},
}, false);