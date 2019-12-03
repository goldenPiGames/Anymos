//const PLAYER_SPRITE_NAMES = ["Standing0", "Walking0", "Walking1", "Walking2", "Walking3", "Walking4", "Walking5", "Walking6", "Jumping0", "CrouchJumping0", "Falling0", "Crouching0", "Crawling0", "Crawling1", "Crawling2", "Crawling3", "ArmAttacking1", "ArmAttacking2", "ArmAttacking3", "ArmAttacking4", "Beam", "Dying1", "Dying2", "Dying3", "Dying4", "Dying5", "Dying6", "Dying7", "Plane"];
const DEFAULT_JUMP_SPEED = 9;
const PLAYER_MELEE_REACH = 25;
const PLAYER_MELEE_DAMAGE = 60;
const PLAYER_RANGED_DAMAGE = 10;
const PLAYER_BEAM_RANGE = 500;
const PLAYER_NORMAL_HEIGHT = 37;
const PLAYER_CROUCH_HEIGHT = 18;
const PLAYER_DEFAULT_PHYSPRES = .05;
const PLAYER_GROUND_ACCELERATION = 2;
var used;
var player = {};

class AnymosPlayer extends Enemy {
	constructor() {
		super();
	}
	update() {
		if (this.drained)
			this.takeDamage(1);
		this.shooting = false;
		this.grounded = this.isGrounded();
		if (this.attacking >= 4)
			this.attacking = false;
		if (this.attacking) {
			this.crouching = false;
			this.attacking++;
		} else if (this.playerControlled) {
			if (this.controller.attackClicked && !this.crouching)
				this.attacking = 1;
			else if (this.controller.shoot)
				this.shooting = true;
		}
		if (this.special) {
			this.special.update(this);
		}
		if (!this.grounded) {
			this.height = PLAYER_NORMAL_HEIGHT;
			this.crouching = isPixelSolid(this.x - this.width/2 + 1, this.y - this.height) || isPixelSolid(this.x + this.width/2 - 1, this.y - this.height);
		} else {
			this.crouching = (this.controller.down && this.playerControlled || isPixelSolid(this.x - this.width/2, this.y - PIXELS_PER_BLOCK - 1) || isPixelSolid(this.x + this.width/2, this.y - PIXELS_PER_BLOCK - 1) || isPixelSolid(this.x - this.width/2 + 4, this.y - 37) || isPixelSolid(this.x + this.width/2 - 4, this.y - 37)) /*&& (isPixelSolid(this.x-this.width/2, this.y + 1) || isPixelSolid(this.x+this.width/2, this.y + 1)) /*&& !this.controller.jump*/ && !this.attacking;
		}
		this.height = this.crouching ? PLAYER_CROUCH_HEIGHT : PLAYER_NORMAL_HEIGHT;
		this.dx *= this.grounded ? .6 : .85;
		if (Math.abs(this.dx) <= .001) this.dx = 0;
		if (this.playerControlled) {
			if (this.controller.left) {
				if (this.grounded || this.attacking == 1) { //-------------------------Movement
					this.dx = Math.max(this.dx-PLAYER_GROUND_ACCELERATION, this.crouching?-2:-5);
					this.facingRight = false;
				} else
					this.dx = Math.max(this.dx-.75, -7);
			}
			if (this.controller.right) {
				if (this.grounded || this.attacking == 1) {
					this.dx = Math.min(this.dx+PLAYER_GROUND_ACCELERATION, this.crouching?2:5);
					this.facingRight = true;
				} else
					this.dx = Math.min(this.dx+.75, 7);
			}
			if (this.controller.jumpClicked && this.grounded && !isPixelSolid(this.x-this.width/2, this.y-35) && !isPixelSolid(this.x+this.width/2, this.y-35)) { //Jump
				playSFX("Swish4");
				this.crouching = false;
				this.height = PLAYER_NORMAL_HEIGHT;
				this.dy = -Math.abs(this.controller.down ? this.jumpSpeed*Math.SQRT1_2 : this.jumpSpeed);
				if (this.controller.down) {
					if (this.controller.left && this.dx > -6)
						this.dx = -6;
					if (this.controller.right && this.dx < 6)
						this.dx = 6;
				}
				this.lastdy = this.dy //this may? cause problems later
			}
		}
		this.physics();
		if (this.attacking == 3) {
			playSFX("Swish3");
			used += 5;
			var hitbox = {
				isTouching : GameObject.prototype.isTouching,
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
		if (this.dy >= 0 && this.lastdy < -2)
			playSFX("Bump");
		this.checkHazards();
		if (this.special == specialChanmote && !this.playerControlled) {
			this.state = "gaming";
		} else if (this.crouching) {
			if (this.controller.left || this.controller.right) {
				this.state = "crawling";
			} else {
				this.state = "crouching";
			}
		} else if (this.grounded) {
			if (this.controller.left || this.controller.right) {
				this.state = "walking";
			} else {
				this.state = "standing";
			}
		} else {
			if (this.dy < 0) {
				if (this.lastState == "crouching" || this.lastState == "crawling" || this.controller.down && this.lastState != "jumping" && this.lastState != "crouchJumping")
					this.state = "crouchJumping";
				else
					this.state = "jumping";
			} else {
				this.state = "falling";
			}
		}
		if (this.lastState == this.state) {
			this.stateCycle++;
			if (!this.sprites[this.state+this.stateCycle])
				this.stateCycle = 0;
		} else {
			this.stateCycle = 0;
		}
		this.lastState = this.state;
		this.lastdx = this.dx;
		this.lastdy = this.dy;
	}
	draw() {
		//console.log(this.state);
		this.drawSprite(this.state+this.stateCycle);
		//this.lastState = this.state;
		if (this.attacking)
			this.drawSprite("armAttacking"+this.attacking);
	}
	getHit(dmg) {
		playSFX("Oof");
		super.getHit(dmg);
	}
	takeDamage(dmg) {
		if (typeof dmg == "number" && dmg == dmg)
			used += dmg;
		if (used >= anymAvailable)
			this.die();
	}
	die() {
		doDeath();
	}
}
AnymosPlayer.prototype.name = "Anymos";
AnymosPlayer.prototype.team = "Anymos";
AnymosPlayer.prototype.width = 14;
AnymosPlayer.prototype.height = PLAYER_NORMAL_HEIGHT;
AnymosPlayer.prototype.dx = 0;
AnymosPlayer.prototype.dy = 0;
AnymosPlayer.prototype.doesGravity = true;
AnymosPlayer.prototype.physicsPrecision = PLAYER_DEFAULT_PHYSPRES;
AnymosPlayer.prototype.jumpSpeed = DEFAULT_JUMP_SPEED;
AnymosPlayer.prototype.special = null;
AnymosPlayer.prototype.grounded = true;
AnymosPlayer.prototype.crouching = false;
AnymosPlayer.prototype.attacking = false;
AnymosPlayer.prototype.shooting = false;
AnymosPlayer.prototype.drained = true;
AnymosPlayer.prototype.playerControlled = true;
AnymosPlayer.prototype.state = "standing";
AnymosPlayer.prototype.stateCycle = 0;
AnymosPlayer.prototype.lastState = "standing";
AnymosPlayer.prototype.controller = globalController;

AnymosPlayer.prototype.sprites = makeSprites("src/Anymos.png", {
	standing0 : {x:0, y:0, width:20, height:40},
	walking0 : {x:20, y:0, width:20, height:40},
	walking1 : {x:40, y:0, width:20, height:40},
	walking2 : {x:60, y:0, width:20, height:40},
	walking3 : {x:80, y:0, width:20, height:40},
	walking4 : {x:100, y:0, width:20, height:40},
	walking5 : {x:120, y:0, width:20, height:40},
	walking6 : {x:140, y:0, width:20, height:40},
	crouching0 : {x:0, y:40, width:20, height:40},
	crawling0 : {x:20, y:40, width:20, height:40},
	crawling1 : {x:40, y:40, width:20, height:40},
	crawling2 : {x:60, y:40, width:20, height:40},
	crawling3 : {x:80, y:40, width:20, height:40},
	crouchJumping0 : {x:100, y:40, width:20, height:40},
	jumping0 : {x:0, y:80, width:20, height:40},
	falling0 : {x:80, y:80, width:20, height:40},
	armAttacking1 : {x:35, y:120, width:20, height:40},
	armAttacking2 : {x:55, y:120, width:30, height:40},
	armAttacking3 : {x:-31, y:120, width:66, height:40},
	armAttacking4 : {x:85, y:120, width:30, height:40},
	dying1 : {x:0, y:160, width:20, height:40},
	dying2 : {x:20, y:160, width:20, height:40},
	dying3 : {x:40, y:160, width:20, height:40},
	dying4 : {x:60, y:160, width:20, height:40},
	dying5 : {x:80, y:160, width:20, height:40},
	dying6 : {x:100, y:160, width:20, height:40},
	dying7 : {x:120, y:160, width:20, height:40},
	gaming0 : {x:140, y:80, width:20, height:40},
}, true);

class AnymosAfterimage extends AnymosPlayer {
	constructor(nym) {
		super();
		this.x = nym.x;
		this.y = nym.y;
		this.facingRight = nym.facingRight;
		this.attacking = nym.attacking;
		this.state = nym.state;
		this.stateCycle = nym.stateCycle;
	}
	update() {
		
	}
}