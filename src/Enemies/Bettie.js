class Bettie extends Enemy {
	constructor(name, x, y) {
		super(name);
		this.x = x;
		this.y = y;
	}
	update() {
		if (this.active) {
			if (this.grounded) {
				playSFX("BlastL");
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
			if (this.grounded && Math.abs(this.x - target.x) <= this.activationDistance && Math.abs(this.y - target.y) < 10) {
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
	blast0 : {x:0, y:10, width:60, height:40},
	blast1 : {x:0, y:50, width:60, height:40},
	blast2 : {x:0, y:90, width:60, height:40},
	blast3 : {x:0, y:130, width:60, height:40},
	blast4 : {x:0, y:170, width:60, height:40},
	blast5 : {x:0, y:210, width:60, height:40},
	blast6 : {x:0, y:250, width:60, height:40},
	blast7 : {x:0, y:290, width:60, height:40},
	blast8 : {x:0, y:330, width:60, height:40},
	blast9 : {x:0, y:370, width:60, height:40},
}, false);
Bettie.prototype.sfxNames = ["Blast", "BlastL"];
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

class FwegBlast extends GameObject {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.timer = 0;
	}
	update() {
		if (this.timer == 4)
			this.sendHurtbox(150);
		else if (this.timer >= 9)
			this.die();
		this.timer++;
	}
	draw() {
		this.drawSprite("blast"+this.timer);
	}
}
FwegBlast.prototype.team = Bettie.prototype.team;
FwegBlast.prototype.sprites = Bettie.prototype.sprites;
FwegBlast.prototype.width = 60;
FwegBlast.prototype.height = 40;
