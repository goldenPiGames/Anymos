var shooterEngine = {
	begin : function() {
		runnee = gameReady;
		gameReady.next = this;
		player.dx = 0;
		player.dy = 0;
		player.pipCD = 0;
		edgesSolid = false;
		this.currentWave = [];
	},
	update : function() {
		if (globalController.pauseClicked) {
			pause.begin();
			return;
		}
		if (globalController.restartClicked) {
			reEvalAnym();
			loadStage(currentStageName, false);
			return;
		}
		stageTimer++;
		gameObjects.forEach(oj=>oj.update());
		player.update();
		removeDead(gameObjects);
		removeDead(this.currentWave);
		if (this.currentWave.length <= 0) {
			this.nextWave();
		}
	},
	draw : function() {
		//playerPlane.draw();
		gameEngine.draw();
	},
	nextWave : function() {
		this.currentWave = this.waves.shift();
		if (Array.isArray(this.currentWave)) {
			gameObjects.push(...this.currentWave);
		} else if (typeof this.currentWave == "function") {
			this.currentWave();
			if (runnee == this)
				this.nextWave();
		}
	}
}

const FLYING_ACCELERATION = 1.5;
const BOOST_ACCELERATION = 2.5;
const FLYING_DAMPENING = .8;
const FLYING_EDGE_SHUNT = 3.5;

class PlanePlayer extends AnymosPlayer {
	constructor() {
		super();
	}
	update() {
		if (stageTimer%2)
			used++;
		var ath = 0;
		var acc = this.controller.jump ? BOOST_ACCELERATION : FLYING_ACCELERATION;
		this.dx *= FLYING_DAMPENING;
		this.dy *= FLYING_DAMPENING;
		if (this.controller.up)
			if (this.controller.left)
				ath = -Math.PI*3/4;
			else if (this.controller.right)
				ath = -Math.PI*1/4;
			else
				ath = -Math.PI*1/2
		else if (this.controller.down)
			if (this.controller.left)
				ath = Math.PI*3/4;
			else if (this.controller.right)
				ath = Math.PI*1/4;
			else
				ath = Math.PI*1/2
		else if (this.controller.left)
			ath = Math.PI;
		else if (this.controller.right)
			ath = 0;
		else
			acc = 0;
		this.dx += acc*Math.cos(ath);
		this.dy += acc*Math.sin(ath);
		if (this.x < 0)
			this.dx += FLYING_EDGE_SHUNT;
		if (this.x > stagewidth())
			this.dx -= FLYING_EDGE_SHUNT;
		if (this.y < 0)
			this.dy += FLYING_EDGE_SHUNT;
		if (this.y > stageheight())
			this.dy -= FLYING_EDGE_SHUNT;
		this.x += this.dx;
		this.y += this.dy;
		if (this.controller.jump) {
			
		} else if (this.controller.shoot) {
			used += 1;
			gameObjects.push(new HorizonBeam(this.x+(this.facingRight?1:-1)*this.width/3, this.y-this.height/2, (this.facingRight?1:-1)*40, "Anymos", 15));
		} else if (this.controller.attack) {
			if (this.pipCD < 0) {
				used += 2;
				var tangle = this.angleToLeading(this.nearestEnemy(), 15, 2);
				var pipip = new PipBullet(this.x, Math.sin(tangle) < 0 ? this.y-this.height : this.y, tangle, 15, "#00FFFF");
				pipip.team = "Anymos";
				pipip.damage = 60;
				gameObjects.push(pipip);
				this.pipCD = 5;
				//console.log(this.angleTo(this.nearestEnemy()), this.angleToLeading(this.nearestEnemy(), 15, 2));
			}
			this.pipCD--;
		} else
			this.pipCD = 0;
	}
	draw() {
		this.drawSprite("flying");
	}
}
PlanePlayer.prototype.width = 60;
PlanePlayer.prototype.height = 34;
PlanePlayer.prototype.sprites = makeSprites("src/Plane.png", {
	flying: {x:0, y:0, width:60, height:36},
}, true);
PlanePlayer.prototype.controller = AnymosPlayer.prototype.controller;