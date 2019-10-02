const DICE_SPRITES = makeSprites("src/Enemies/Dice.png", (()=>{
	var data = {};
	for (var i = 1; i <= 6; i++) {
		let bl = i*28;
		data[i+"-0"] = {x:0, y:bl-20, width:20, height:20}
		data[i+"-1"] = {x:20, y:bl-27, width:27, height:27}
		data[i+"-2"] = {x:47, y:bl-28, width:28, height:28}
		data[i+"-3"] = {x:75, y:bl-27, width:27, height:27}
		data[i+"-4"] = {x:102, y:bl-20, width:20, height:20}
		data[i+"-5"] = {x:122, y:bl-27, width:27, height:27}
		data[i+"-6"] = {x:149, y:bl-28, width:28, height:28}
		data[i+"-7"] = {x:177, y:bl-27, width:27, height:27}
	}
	return data;
})(), false);

class DieWalking extends Enemy {
	constructor(x, y, facing, cycleLength, shooting) {
		super();
		this.hp = this.maxhp;
		this.x = x;
		this.y = y;
		this.facingRight = facing;
		this.cycleLength = cycleLength;
		this.cycle = 5;
		this.dx = 0;
		this.dy = 0;
		this.num = 4;
		this.collCD = 0;
	}
	update() {
		this.grounded = this.isGrounded();
		if (this.grounded) {
			this.cycle ++;
			if (this.cycle <= 4)
				this.x += (this.facingRight?1:-1) * 5;
			else if (this.cycle > this.cycleLength) {
				this.cycle = 0;
				var facentx = this.x + (this.facingRight?20:-20)
				if (isPixelSolid(facentx - this.width/4, this.y - this.height/2) || isPixelSolid(facentx + this.width/4, this.y - this.height/2)) {
					this.facingRight = !this.facingRight;
					this.diag = !this.diag;
				}
			}
		} else {
			this.cycle = 5;
			this.physics();
		}
		this.collCD--;
		if (this.collCD <= 0) {
			if (this.sendHurtbox(90))
				this.collCD = 60;
		}
	}
	draw() {
		var state;
		if	(this.cycle >= 1 && this.cycle <= 3)
			state = this.num+"-"+(this.cycle + (this.diag?4:0));
		else 
			state = this.num+"-"+(this.diag?4:0);
		drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
	}
}
DieWalking.prototype.speciesName = "Walking Die";
DieWalking.prototype.team = "Chanos";
DieWalking.prototype.sprites = DICE_SPRITES;
DieWalking.prototype.width = 19;
DieWalking.prototype.height = 19;
DieWalking.prototype.maxhp = 60;
DieWalking.prototype.doesGravity = true;