class BeamTurret extends GameObject {
	constructor(x, y, facingRight, offset = 0, period = 90) {
		super();
		this.x = x;
		this.y = y;
		this.facingRight = facingRight;
		this.offset = offset
		this.period = period;
	}
	update() {
		if ((stageTimer + this.offset) % this.period < 4) {
			gameObjects.push(new HorizonBeam(this.x, this.y - this.height/2, this.facingRight ? 10 : -10, this.team, 30));
		}
	}
	draw() {
		ctx.fillStyle = TEAM_COLORS[this.team];
		ctx.fillRect(stagex(this.x+this.facingRight?-this.width:0), stagey(this.y-this.height), this.width*zoom, this.height*zoom)
		ctx.beginPath();
		ctx.arc(stagex(this.x),stagey(this.y),this.height*zoom,0,2*Math.PI);
		ctx.fill();
		//drawSpriteOnStage(this.sprites.Shooting, this.x, this.y, this.facingRight);
	}
}
BeamTurret.prototype.team = "Hazards";
BeamTurret.prototype.width = 10;
BeamTurret.prototype.height = 1;


const TEAM_COLORS = {
	Anymos : "#00FFFF",
	Sqarnos : "#FF0000",
	Chanos : CHANOS_COLOR,
	Hazards : "#FF0000",
}

/*class Beam extends GameObject {
	constructor(x, y, facingRight, team) {
		super();
		this.x = x + (facingRight?1:-1)*this.width/2;
		this.y = y;
		this.facingRight = facingRight;
		this.dx = facingRight ? this.width : -this.width;
		this.dy = 0;
		this.team = team;
	}
	update() {
		if (this.dx == 0) {
			this.die();
			return;
		}
		this.physics();
		if (this.sendHurtbox(this.damage))
			this.die();
		if (isPixelSolid(this.x, this.y-this.height/2) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
			this.die();
	}
	draw() {
		this.fillRect("#FF0000");
		//drawSpriteOnStage(miscSprites.Beam, this.x, this.y);
	}
}
Beam.prototype.physicsPrecision = 1.0;
Beam.prototype.width = 10;
Beam.prototype.height = 2;
Beam.prototype.damage = 30;
*/