class Sqarnos extends Boss {
	constructor(name, x, y) {
		super(name);
		this.x = x;
		this.y = y;
	}
	update() {
		this.physics();
	}
	draw() {
		
	}
}
Sqarnos.prototype.speciesName = "Sqarnos";
Sqarnos.prototype.team = "Sqarnos";
Sqarnos.prototype.width = 40;
Sqarnos.prototype.width = 40;