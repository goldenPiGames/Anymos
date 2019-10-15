const AQROS_BASE_SPEED = 4;

class AqrosEvil extends Boss {
	constructor(x, y, facingRight, bl, br, bt, bb) {
		super(name);
		this.x = x;
		this.y = y;
		this.dx = facingRight?3.5:-3.5;
		this.dy = 0;
		this.facingRight = facingRight;
		//this.specialCD = 150;
		this.boundLeft = bl;
		this.boundRight = br;
		this.boundTop = bt;
		this.boundBottom = bb;
		this.benchmarks = [2000,          1600,       1200,          400,           60]
		this.specials   = [this.rainTrap, this.flood, this.rainTrap, this.rainTrap, this.flood]
	}
	update() {//TODO use new benchmark system with alternate update functions
		if (this.boundLeft == undefined) {
			this.boundLeft = cameraLeftBound+20;
			this.boundRight = cameraRightBound-20;
			this.boundTop = cameraTopBound+20;
			this.boundBottom = cameraBottomBound-20;
		}
		if (this.rainTrapping) {
			if ((player.x > this.mirror.x) == this.rainingSide)
				player.takeDamage(2);
			else
				this.rainTrapReturn();
		} else if (this.flooding) {
			if (this.hp < this.hpStarted)
				this.floodReturn();
			else
				player.takeDamage(2);
		} else {
			if (this.hp <= this.benchmarks[0]) {
				this.specials[0].call(this);
				this.benchmarks = this.benchmarks.slice(1);
				this.specials = this.specials.slice(1);
			} else {
				//if (this.grounded && Math.random() < .02)
					//this.dy = -DEFAULT_JUMP_SPEED;
				if (this.dx == 0)
					this.facingRight = !this.facingRight;
				this.dx = this.facingRight?3.5:-3.5;
				this.physics();
			}
		}
	}
	draw() {
		var state;
		if (this.rainTrapping) {
			return;
		} else {
			state = "standing";
		}
		this.drawSprite("standing");
		//this.state = null;
	}
	rainTrap () {
		this.rainTrapping = 1;
		this.hittable = false;
		//this.state = "Vanishing1";
		this.raingen = new RainGenerator(20, 5);
		this.mirror = new Mirror((this.boundLeft+this.boundRight)/2, this.boundBottom, this.boundBottom-this.boundTop);
		if (this.mirror.isTouching(player)) {
			if (player.x > this.mirror.x)
				player.x = this.mirror.x+this.mirror.width/2+player.width/2+1;
			else
				player.x = this.mirror.x-this.mirror.width/2-player.width/2-1;
		}
		this.rainingSide = (player.x > this.mirror.x);
		this.raingen.boundTop = this.boundTop + 1;
		this.raingen.boundLeft = this.rainingSide ? this.mirror.x + this.mirror.width/2 : this.boundLeft;
		this.raingen.boundRight = !this.rainingSide ? this.mirror.x - this.mirror.width/2 : this.boundRight;
		this.cage = new Forcecage(!this.rainingSide ? this.mirror.x + this.mirror.width/2 : this.boundLeft,	this.rainingSide ? this.mirror.x - this.mirror.width/2 : this.boundRight, this.boundTop, this.boundBottom)
		var cwidth = 80;
		this.cage.innerLeft = this.cage.outerLeft + Math.random()*(this.cage.outerRight-this.cage.outerLeft-cwidth);
		this.cage.innerRight = this.cage.innerLeft + cwidth;
		this.cage.innerBottom = this.boundBottom - Math.random()*75;
		this.cage.innerTop = this.cage.innerBottom - cwidth;
		gameObjects.push(this.raingen, this.mirror, this.cage, new FadeDrawing(function(){ctx.fillStyle="#0000FF";ctx.fillRect(0,0,canvas.width,canvas.height);}, 1, .25));
	}
	rainTrapReturn() {
		this.hittable = true;
		this.rainTrapping = false;
		this.specialCD = 150;
		this.raingen.dead = true;
		this.mirror.dead = true;
		this.cage.dead = true;
		gameObjects.push(new FadeDrawing(() => {
				ctx.fillStyle="#00FFFF";
				ctx.fillRect(0,0,canvas.width,canvas.height);
			}, 1, .25));
	}
	flood() {
		this.flooding = true; 
		this.hpStarted = this.hp;
		player.y = this.boundBottom;
		player.dy = 0;
		this.x = (this.boundLeft+this.boundRight)/2;
		this.y = this.boundTop + 40;
		var wid = this.boundRight - this.boundLeft;
		this.platforms = [];
		this.platforms[0] = new SinusoidalPlatform(this.boundLeft + wid/6, this.boundBottom - 65, 80, 20+30*Math.random(), .03+.02*Math.random(), 2*Math.PI*Math.random());
		this.platforms[1] = new SinusoidalPlatform(this.boundLeft + wid/2, this.boundBottom - 65, 80, 20+30*Math.random(), .03+.02*Math.random(), 2*Math.PI*Math.random());
		this.platforms[2] = new SinusoidalPlatform(this.boundLeft + wid*5/6, this.boundBottom - 65, 80, 20+30*Math.random(), .03+.02*Math.random(), 2*Math.PI*Math.random());
		this.platforms[3] = new SinusoidalPlatform(this.boundLeft + wid/4, this.boundBottom - 140, 90, 50+30*Math.random(), .03+.02*Math.random(), 2*Math.PI*Math.random());
		this.platforms[4] = new SinusoidalPlatform(this.boundLeft + wid*3/4, this.boundBottom - 140, 90, 50+30*Math.random(), .03+.02*Math.random(), 2*Math.PI*Math.random());
		this.platforms.forEach(function(plat) {
			gameObjects.push(plat);
		});
		gameObjects.push(new FadeDrawing(() => {
				ctx.fillStyle="#000000";
				ctx.fillRect(0,0,canvas.width,canvas.height);
			}, 1, .25));
		/*this.raingen = new RainGenerator(20, 5);
		this.raingen.boundTop = this.boundTop + 1;
		this.raingen.boundLeft = this.rainingSide ? this.mirror.x + this.mirror.width/2 : this.boundLeft;
		this.raingen.boundRight = !this.rainingSide ? this.mirror.x - this.mirror.width/2 : this.boundRight;
		gameObjects.push(this.raingen);*/
	}
	floodReturn() {
		this.flooding = false;
		this.platforms.forEach(function(plat) {
			plat.dead = true;
		});
		gameObjects.push(new FadeDrawing(function(){ctx.fillStyle="#00FFFF";ctx.fillRect(0,0,canvas.width,canvas.height);}, 1, .25));
	}
}
AqrosEvil.prototype.speciesName = "Aqros";
AqrosEvil.prototype.team = "Sqarnos";
AqrosEvil.prototype.sprites = makeSprites("src/Enemies/Aqros.png", {
	standing: {x:0, y:0, width:20, height:40},
}, false);
AqrosEvil.prototype.numVessels = 5;
AqrosEvil.prototype.width = 16;
AqrosEvil.prototype.height = 37;
AqrosEvil.prototype.maxhp = 2400;
AqrosEvil.prototype.doesGravity = true;
