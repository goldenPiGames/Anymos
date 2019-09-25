var FlipwipSpriteNames = ["Hovering", "Attacking", "Attacking-1", "Attacking-2", "Flipping1", "Flipping2", "Flipping3", "Flipping4"];
const FLIPWIP_REACH = 30;
const FLIPWIP_ATTACK_TIME = 20;
const FLIPWIP_APPEAR_TIME = 40;
const FLIPWIP_FLIPPING_FRAMES = 4;

function Flipwip(avgdelay) {
	this.cycle = -1;
	this.avgdelay = Math.max(avgdelay, 6);
	this.x = NaN;
	this.y = NaN;
	this.height = 20;
	this.width = 20;
	this.hp = this.maxhp;
}
Flipwip.prototype = Object.create(GameObjectBase);
Flipwip.prototype.speciesName = "Flipwip";
Flipwip.prototype.team = "Longuos";
Flipwip.prototype.hittable = true;
Flipwip.prototype.damageable = true;
Flipwip.prototype.maxhp = 50;
Flipwip.prototype.update = function() {
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
Flipwip.prototype.draw = function() {
	var state = "Hovering";
	if (this.cycle == FLIPWIP_ATTACK_TIME) {
		state = "Attacking";
	} else if (this.cycle > FLIPWIP_APPEAR_TIME) {
		return;
	} else if (this.cycle == FLIPWIP_ATTACK_TIME + 1 || this.cycle == FLIPWIP_ATTACK_TIME - 1) {
		state = "Attacking-1";
	} else if (this.cycle == FLIPWIP_ATTACK_TIME + 2 || this.cycle == FLIPWIP_ATTACK_TIME - 2) {
		state = "Attacking-2";
	} else if (this.cycle < 0) {
		return;
	} else if (this.cycle > FLIPWIP_APPEAR_TIME-FLIPWIP_FLIPPING_FRAMES) {
		state = "Flipping"+(this.cycle-FLIPWIP_APPEAR_TIME+FLIPWIP_FLIPPING_FRAMES);
	} else if (this.cycle <= FLIPWIP_FLIPPING_FRAMES) {
		state = "Flipping"+(FLIPWIP_FLIPPING_FRAMES-this.cycle+1);
	} else
		state = "Hovering";
	drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
}