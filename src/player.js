const PLAYER_SPRITE_NAMES = ["Standing0", "Walking0", "Walking1", "Walking2", "Walking3", "Walking4", "Walking5", "Walking6", "Jumping0", "CrouchJumping0", "Falling0", "Crouching0", "Crawling0", "Crawling1", "Crawling2", "Crawling3", "ArmAttacking1", "ArmAttacking2", "ArmAttacking3", "ArmAttacking4", "Beam", "Dying1", "Dying2", "Dying3", "Dying4", "Dying5", "Dying6", "Dying7", "Plane"];
const DEFAULT_JUMP_SPEED = 9;
const PLAYER_MELEE_REACH = 25;
const PLAYER_MELEE_DAMAGE = 60;
const PLAYER_RANGED_DAMAGE = 10;
const PLAYER_BEAM_RANGE = 500;
const PLAYER_NORMAL_HEIGHT = 37;
const PLAYER_CROUCH_HEIGHT = 18;
const PLAYER_DEFAULT_PHYSPRES = .05;
var PLAYER_GROUND_ACCELERATION = 2;
var collisionDiagnostics = false;
var used;
var player = {};

var anymos = {
	__proto__ : Object.create(GameObjectBase),
	name : "Anymos",
	team : "Anymos",
	state : "Standing",
	stateCycle : 0,
	lastState : "Standing",
	crouching : false,
	attacking : false,
	shooting : false,
	x : 20,
	y : 20,
	dx : 0,
	dy : 0,
	drained : true,
	width : 14,
	height : PLAYER_NORMAL_HEIGHT,
	hittable : true,
	damageable : true,
	facingRight : true,
	doesGravity : true,
	update : function() {
		if (this.drained)
			this.takeDamage(1);
		this.shooting = false;
		this.grounded = this.isGrounded();
		if (this.attacking >= 4)
			this.attacking = false;
		if (this.attacking) {
			this.crouching = false;
			this.attacking++;
		} else {
			if (controller.attackClicked && !this.crouching)
				this.attacking = 1;
			else if (controller.shoot)
				this.shooting = true;
		}
		if (this.flashing) this.flashing = Math.max(this.flashing - FLASH_REDUCE_RATE, 0);
		if (this.special == "Syklos' Double Jump" && this.grounded) this.doubleJump = true;
		if (controller.specialClicked) {
			if (this.special == "Aqros' Reflector")
				resolveReflector();
			if (this.special == "Naluxos' Flash")
				resolveFlash();
		}
		if (!this.grounded) {
			this.height = PLAYER_NORMAL_HEIGHT;
			this.crouching = isPixelSolid(this.x - this.width/2 + 1, this.y - this.height) || isPixelSolid(this.x + this.width/2 - 1, this.y - this.height);
			if (this.special == "Syklos' Double Jump" && (controller.jumpClicked || controller.specialClicked))
				resolveDoubleJump();
		} else {
			this.crouching = (controller.down || isPixelSolid(this.x - this.width/2, this.y - PIXELS_PER_BLOCK - 1) || isPixelSolid(this.x + this.width/2, this.y - PIXELS_PER_BLOCK - 1) || controller.down || isPixelSolid(this.x - this.width/2 + 4, this.y - 37) || isPixelSolid(this.x + this.width/2 - 4, this.y - 37)) /*&& (isPixelSolid(this.x-this.width/2, this.y + 1) || isPixelSolid(this.x+this.width/2, this.y + 1)) /*&& !controller.jump*/ && !this.attacking;
		}
		this.height = this.crouching ? PLAYER_CROUCH_HEIGHT : PLAYER_NORMAL_HEIGHT;
		this.dx *= this.grounded ? .6 : .85;
		if (Math.abs(this.dx) <= .001) this.dx = 0;
		if (controller.left) {
			if (this.grounded || this.attacking == 1) { //-------------------------Movement
				this.dx = Math.max(this.dx-PLAYER_GROUND_ACCELERATION, this.crouching?-2:-5);
				this.facingRight = false;
			} else
				this.dx = Math.max(this.dx-.75, -7);
		}
		if (controller.right) {
			if (this.grounded || this.attacking == 1) {
				this.dx = Math.min(this.dx+PLAYER_GROUND_ACCELERATION, this.crouching?2:5);
				this.facingRight = true;
			} else
				this.dx = Math.min(this.dx+.75, 7);
		}
		if (controller.jumpClicked && this.grounded && !isPixelSolid(this.x-this.width/2, this.y-35) && !isPixelSolid(this.x+this.width/2, this.y-35)) { //Jump
			playSound(miscSFX.Swish4);
			this.crouching = false;
			this.height = PLAYER_NORMAL_HEIGHT;
			this.dy = -Math.abs(controller.down ? this.jumpSpeed*Math.SQRT1_2 : this.jumpSpeed);
			if (controller.down) {
				if (controller.left && this.dx > -6)
					this.dx = -6;
				if (controller.right && this.dx < 6)
					this.dx = 6;
			}
			this.lastdy = this.dy //this may? cause problems later
		}
		this.physics();
		if (this.attacking == 3) {
			playSound(miscSFX.Swish3);
			used += 5;
			var hitbox = {
				__proto__ : GameObjectBase,
				x : this.x + (this.facingRight?1:-1) * (this.width/4 + PLAYER_MELEE_REACH/2 + 0.5), //hitbox
				y : this.y - this.height/4,
				width : PLAYER_MELEE_REACH + this.width/2,
				height : this.height/2,
			}
			gameObjects.forEach(function(oj) {
				if (oj.hittable && oj.isTouching(hitbox)) {
					oj.getHit(PLAYER_MELEE_DAMAGE);
				}
			});
		} else if (this.shooting) {
			used += 2;
			gameObjects.push(new HorizonBeam(this.x, this.y-(!this.crouching?34:15), this.facingRight?15:-15, "Anymos", PLAYER_RANGED_DAMAGE));
		}
		if (this.dy >= 0 && this.lastdy <= -gravity*2)
			playSound(miscSFX.Bump);
		this.checkHazards();
		if (this.crouching) {
			if (controller.left || controller.right) {
				this.state = "Crawling";
			} else {
				this.state = "Crouching";
			}
		} else {
			if (this.grounded) {
				if (controller.left || controller.right) {
					this.state = "Walking";
				} else {
					this.state = "Standing";
				}
			} else {
				if (this.dy < 0) {
					if (this.lastState.indexOf("Crouching") >= 0 || this.lastState.indexOf("Crawling") >= 0)
						this.state = "CrouchJumping";
					else
						this.state = "Jumping";
				} else {
					this.state = "Falling";
				}
			}
		}
		if (this.lastState == this.state) {
			this.stateCycle++;
			if (!playerSprites[this.state+this.stateCycle])
				this.stateCycle = 0;
		} else {
			this.stateCycle = 0;
		}
		this.lastState = this.state;
		this.lastdx = this.dx;
		this.lastdy = this.dy;
	},
	draw : function() {
		//console.log(this.state);
		drawSpriteOnStage(playerSprites[this.state+this.stateCycle], this.x, this.y, this.facingRight);
		//this.lastState = this.state;
		if (this.attacking)
			drawSpriteOnStage(playerSprites["ArmAttacking"+this.attacking], this.x, this.y, this.facingRight);
	},
	getHit : function(dmg) {
		if (!this.hittable)
			return false;
		if (this.damageable && dmg > 0) {
			playSound(miscSFX.Oof);
			if (this != player) lastHitEnemy = this;
			return this.takeDamage(dmg);
		} else 
			return true;
	},
	takeDamage : function(dmg) {
		if (dmg != undefined && dmg == dmg)
			used += dmg;
		if (used >= anymAvailable)
			this.die();
	},
	die : function() {
		doDeath();
	}
}

var playerSprites = {
	
}

function HorizonBeam(x, y, dx, team, damage) {
	this.x = x;
	this.y = y;
	this.facingRight = dx >= 0;
	this.dx = dx;
	this.dy = 0;
	this.width = Math.abs(dx);
	this.height = .1;
	this.team = team;
	this.damage = damage;
	switch (team) {
		case "Anymos" : this.color = "#00FFFF"; break;
		case "Sqarnos" : this.color = "#FF0000"; break;
		default : this.color = "#FF0000"; break;
	}
}
HorizonBeam.prototype = Object.create(GameObjectBase);
HorizonBeam.prototype.physicsPrecision = .5;
HorizonBeam.prototype.update = function() {
	this.x += this.dx;
	if (this.sendHurtbox(this.damage))
		this.die();
	if (isPixelSolid(this.x, this.y) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
		this.die();
}
HorizonBeam.prototype.draw = function() {
	ctx.strokeStyle = this.color;
	ctx.lineWidth = zoom*2;
	ctx.beginPath();
	ctx.moveTo(stagex(this.x-this.width/2), stagey(this.y));
	ctx.lineTo(stagex(this.x+this.width/2), stagey(this.y));
	ctx.stroke();
}