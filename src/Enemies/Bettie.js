class Bettie extends Enemy {
	constructor(name, x, y) {
		super(name);
		this.x = x;
		this.y = y;
	}
	update() {
		if (this.active) {
			if (this.grounded) {
				gameObjects.push(new FwegBlast(this.x, this.y));
				this.active = false;
				this.recharge = this.maxRecharge;
				this.dx = 0;
			}
		} else if (this.recharge) {
			this.recharge--;
		} else {
			var target = this.nearestEnemy();
			this.facingRight = target.x > this.x;
			if (Math.abs(this.x - target.x) <= this.activationDistance && Math.abs(this.y - target.y) < 10) {
				this.active = true;
				this.dy = -this.jumpSpeed;
				this.dx = (target.x-this.x) / (Math.abs(this.dy) * 2 / (gravity || .1));
			}
		}
		this.checkCollHit();
		this.physics();
	}
	draw() {
		var state;
		if (this.grounded)
			state = "waiting";
		else if (this.dy < 0)
			state = "jumping";
		else
			state = "falling";
		this.drawSprite(state);
	}
}
Bettie.prototype.speciesName = "Bettie";
Bettie.prototype.team = "Sqarnos";
Bettie.prototype.sprites = makeSprites("src/Enemies/Bettie.png", {
	waiting : {x:0, y:0, width:20, height:10},
	jumping : {x:20, y:0, width:20, height:10},
	falling : {x:40, y:0, width:20, height:10},
}, false);
Bettie.prototype.maxhp = 30;
Bettie.prototype.width = 20;
Bettie.prototype.height = 10;
Bettie.prototype.heightWaiting = 8;
Bettie.prototype.doesGravity = true;
Bettie.prototype.collDamage = 60;
Bettie.prototype.collMaxCD = 90;
Bettie.prototype.maxRecharge = 30;
Bettie.prototype.jumpSpeed = 5;
Bettie.prototype.activationDistance = 120;