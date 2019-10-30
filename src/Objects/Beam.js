

class HorizonBeam extends GameObject {
	constructor(x, y, dx, team, damage = 30, color) {
		super();
		this.x = x;
		this.y = y;
		this.facingRight = dx >= 0;
		this.dx = dx;
		this.dy = 0;
		this.width = Math.abs(dx);
		this.height = .1;
		this.team = team;
		this.damage = damage;
		if (color)
			this.color = color;
		else {
			switch (team) {
				case "Anymos" : this.color = "#00FFFF"; break;
				case "Sqarnos" : this.color = "#FF0000"; break;
				default : this.color = "#FF0000"; break;
			}
		}
		if (this.color == "#000000")
			this.illumination = null;
	}
	update() {
		this.x += this.dx;
		if (this.sendHurtbox(this.damage))
			this.die();
		if (isPixelSolid(this.x, this.y) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
			this.die();
	}
	draw() {
		ctx.strokeStyle = this.color;
		ctx.lineWidth = zoom*2;
		ctx.beginPath();
		ctx.moveTo(stagex(this.x-this.width/2), stagey(this.y));
		ctx.lineTo(stagex(this.x+this.width/2), stagey(this.y));
		ctx.stroke();
	}
}
HorizonBeam.prototype.illumination = 15;