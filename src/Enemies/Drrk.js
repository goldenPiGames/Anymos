var DrrkSpriteNames = ["Standing1", "Shadow1", "Middle1"];
const DRRK_NORMAL_HEIGHT = 34;
const DRRK_TEXT_COLOR = "#404040";
class Drrk extends Boss {
	constructor(name, x, y, facingRight, doDialog) {
		super(name);
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = DRRK_NORMAL_HEIGHT;
		this.speed = 5;
		this.dx = 0;
		this.dy = 0;
		this.facingRight = facingRight;
		this.doDialog = doDialog;
		this.turnShadow();
	}//TODO completely redo
	update() {
		if (player.flashing >= 1) {
			this.takeDamage(5);
			this.shadow = Math.max(this.shadow-5, 0);
		}
		this.shadow = Math.max(this.shadow-1, 0);
		if (this.shadow) {
			if (this.shadow % 10 == 5) {
				gameObjects.push(new DarkBall(this.x, this.y-69));
			}
			if (this.dx == 0) {
				this.facingRight = !this.facingRight;
				this.dx = (this.facingRight?1:-1) * this.shadowSpeed;
			}
		} else {
			this.hittable = true;
			this.facingRight = player.x >= this.x;
			this.dx = this.facingRight ? this.speed : -this.speed;
			if (this.sendHurtbox(150) == player)
				this.turnShadow();
		}
		this.physics();
		if (this.doDialog && !this.doneDialog) {
			this.doneDialog = true;
			dialog.begin(
				new DialogLine("???", "Hmm... another Uteion? *sniff sniff* Is that Anymos?... Oh my, it seems I've hit quite the jackpot here, drr drr drr...", DRRK_TEXT_COLOR),
				new DialogLine("Anymos", "Who are you? Where are you? Why did you kidnap Naluxos?", "#00FFFF"),
				new DialogLine("Drrk", "I am Drrk, a being of darkness and shadow... Oh how I hate Naluxos and his brilliant, pure light... I just need to hold him here and make sure he doesn't escape...", DRRK_TEXT_COLOR),
				new DialogLine("Drrk", "Just imagining how proud I'll make Lord Sqarnos gives me a case of the gleeful chortles, drr drr drr...", DRRK_TEXT_COLOR),
				function(){playMusic("Wicked Dreams - Eric Matyas")},
				new DialogLine("Drrk", "But enough of that. Silent and swift as a shadow, I strike.", DRRK_TEXT_COLOR));
		}
	}
	draw() {
		var state;
		if (!this.shadow)
			state = "standing1";
		else if (this.shadow <= 2)
			state = "middle1";
		else if (this.shadow >= 30)
			state = "middle1";
		else if (this.shadow) {
			state = "shadow1";
			ctx.globalAlpha = player.flashing;
		}
		this.drawSprite(state);
		ctx.globalAlpha = 1;
	}
	getHit(dmg) {
		let toret = super.getHit(dmg);
		this.turnShadow();
		return toret;
	}
	onDeath() {
		super.onDeath();
		if (this.doDialog) {
			dialog.begin(
				new DialogLine("Drrk", "Drr drr drr... You may have beaten me, but you'll never get out of this cave...", DRRK_TEXT_COLOR)
			);
		}
	}
	turnShadow() {
		this.shadow = 30;
		this.hittable = false;
		this.shadowSpeed = (4+8*Math.random());
		this.facingRight = (Math.random() >= .5)
		this.dx = (this.facingRight?1:-1) * this.shadowSpeed;
	}
}
Drrk.prototype.speciesName = "Drrk";
Drrk.prototype.team = "Sqarnos";
Drrk.prototype.sprites = makeSprites("src/Enemies/Drrk.png", {
	standing1 : {x:0, y:0, width:20, height:34},
	middle1 : {x:0, y:0, width:20, height:34},
	shadow1 : {x:0, y:0, width:20, height:34},
}, false);
Drrk.prototype.maxhp = 600;
Drrk.prototype.doesGravity = true;
Drrk.prototype.numVessels = 5;

class DarkBall extends GameObject {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.dx = 0;
		this.dy = 1;
	}
	update() {
		this.dy += gravity;
		this.y += this.dy;
		if (this.isTouching(player)) {
			player.getHit(90);
			this.die();
		}
		if (this.dy <= 0 || hazardOfPixel(this.x,this.y) >= 100)
			this.die();
	}
	draw() {
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.arc(stagex(this.x),stagey(this.y-this.height/2),this.width*.6*zoom,0,2*Math.PI);
		ctx.fill();
	}
}
DarkBall.prototype.team = "Sqarnos";
DarkBall.prototype.doesGravity = true;