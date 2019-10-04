var FlipwipSpriteNames = ["Hovering", "Attacking", "Attacking-1", "Attacking-2", "Flipping1", "Flipping2", "Flipping3", "Flipping4"];
const FLIPWIP_REACH = 30;
const FLIPWIP_ATTACK_TIME = 20;
const FLIPWIP_APPEAR_TIME = 40;
const FLIPWIP_FLIPPING_FRAMES = 4;

class Flipwip extends Enemy {
	constructor(avgdelay) {
		super();
		this.cycle = -1;
		this.avgdelay = Math.max(avgdelay, 6);
		this.x = NaN;
		this.y = NaN;
		this.height = 20;
		this.width = 20;
		this.hp = this.maxhp;
	}
	update() {
		this.cycle--;
		if (this.cycle == FLIPWIP_APPEAR_TIME) {
			this.facingRight = player.facingRight;
			this.x = player.x + (this.facingRight?-30:30);
			this.y = player.y-player.height/2+Math.random()*this.height;
		} else if (this.cycle == FLIPWIP_ATTACK_TIME) {
			playSound(miscSFX.SPM_Smash);
			this.sendHurtbox(90, this.x + (this.facingRight?1:-1) * (this.width/4 + FLIPWIP_REACH/2), this.y, this.width + FLIPWIP_REACH, this.height);
		} else if (this.cycle > FLIPWIP_APPEAR_TIME) {
			this.x = NaN;
			this.y = NaN;
		} else if (this.cycle > FLIPWIP_ATTACK_TIME) {
			
		} else if (this.cycle > 0) {
			
		} else {
			this.cycle = FLIPWIP_APPEAR_TIME + Math.floor((Math.random()+.5) * this.avgdelay);
		}
	}
	draw() {
		var state = "hovering";
		if (this.cycle == FLIPWIP_ATTACK_TIME) {
			state = "attacking0";
		} else if (this.cycle > FLIPWIP_APPEAR_TIME) {
			return;
		} else if (this.cycle == FLIPWIP_ATTACK_TIME + 1 || this.cycle == FLIPWIP_ATTACK_TIME - 1) {
			state = "attacking1";
		} else if (this.cycle == FLIPWIP_ATTACK_TIME + 2 || this.cycle == FLIPWIP_ATTACK_TIME - 2) {
			state = "attacking2";
		} else if (this.cycle < 0) {
			return;
		} else if (this.cycle > FLIPWIP_APPEAR_TIME-FLIPWIP_FLIPPING_FRAMES) {
			state = "flipping"+(this.cycle-FLIPWIP_APPEAR_TIME+FLIPWIP_FLIPPING_FRAMES);
		} else if (this.cycle <= FLIPWIP_FLIPPING_FRAMES) {
			state = "flipping"+(FLIPWIP_FLIPPING_FRAMES-this.cycle+1);
		} else
			state = "hovering";
		this.drawSprite(state);
		//drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
	}
}
Flipwip.prototype.speciesName = "Flipwip";
Flipwip.prototype.team = "Longuos";
Flipwip.prototype.sprites = makeSprites("src/Enemies/Flipwip.png", {
	hovering: {x:0, y:0, width:20, height:20},
	flipping1: {x:20, y:0, width:15, height:20},
	flipping2: {x:35, y:0, width:10, height:20},
	flipping3: {x:45, y:0, width:5, height:20},
	flipping4: {x:49, y:20, width:1, height:20},
	attacking2: {x:-8, y:20, width:36, height:20},
	attacking1: {x:-15, y:40, width:50, height:20},
	attacking0: {x:-30, y:60, width:80, height:20},
}, false);
Flipwip.prototype.maxhp = 50;