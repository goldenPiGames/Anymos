var waves;
var currentWave;

var shooterEngine = {
	begin : function() {
		runnee = gameReady;
		gameReady.next = this;
		player = playerPlane;
		player.dx = 0;
		player.dy = 0;
		player.pipCD = 0;
		edgesSolid = false;
		currentWave = [];
	},
	update : function() {
		if (paused) {
			if (controller.shootClicked && !firstRun)
				exitStage();
			if (controller.jumpClicked || controller.pauseClicked)
				paused = false;
			return;
		}
		if (controller.pauseClicked) {
			paused = true;
			return;
		}
		if (controller.restartClicked) {
			reEvalAnym();
			loadStage(currentStageName, false);
			return;
		}
		stageTimer++;
		gameObjects.forEach(function(obj) {
			obj.update();
		});
		playerPlane.update();
		removeDead(gameObjects);
		removeDead(currentWave);
		if (currentWave.length <= 0) {
			this.nextWave();
		}
	},
	draw : function() {
		//playerPlane.draw();
		gameEngine.draw();
	},
	nextWave : function() {
		currentWave = waves.shift();
		if (Array.isArray(currentWave)) {
			Array.prototype.push.apply(gameObjects, currentWave);
		} else if (typeof currentWave == "function") {
			currentWave();
			if (runnee == this)
				this.nextWave();
		}
	}
}

const FLYING_ACCELERATION = 1.5;
const BOOST_ACCELERATION = 2.5;
const FLYING_DAMPENING = .8;
const FLYING_EDGE_SHUNT = 3.5;

var playerPlane = {
	__proto__ : Object.create(GameObjectBase),
	width : 60,
	height : 34,
	team : "Anymos",
	hittable : true,
	damageable : true,
	state: "Standing0",
	update : function() {
		if (stageTimer%2)
			used++;
		var ath = 0;
		var acc = controller.jump ? BOOST_ACCELERATION : FLYING_ACCELERATION;
		this.dx *= FLYING_DAMPENING;
		this.dy *= FLYING_DAMPENING;
		if (controller.up)
			if (controller.left)
				ath = -Math.PI*3/4;
			else if (controller.right)
				ath = -Math.PI*1/4;
			else
				ath = -Math.PI*1/2
		else if (controller.down)
			if (controller.left)
				ath = Math.PI*3/4;
			else if (controller.right)
				ath = Math.PI*1/4;
			else
				ath = Math.PI*1/2
		else if (controller.left)
			ath = Math.PI;
		else if (controller.right)
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
		if (controller.jump) {
			
		} else if (controller.shoot) {
			used += 1;
			gameObjects.push(new HorizonBeam(this.x+(this.facingRight?1:-1)*this.width/3, this.y-this.height/2, (this.facingRight?1:-1)*40, "Anymos", 15));
		} else if (controller.attack) {
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
	},
	draw : function() {
		drawSpriteOnStage(playerSprites.Plane, this.x, this.y+1, this.facingRight);
	},
	getHit : anymos.getHit,
	takeDamage : anymos.takeDamage,
	die : function() {
		exitStage();
	},
	//sprites : anymos.sprites,
}