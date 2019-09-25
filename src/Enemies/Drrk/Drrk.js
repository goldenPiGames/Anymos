var DrrkSpriteNames = ["Standing1", "Shadow1", "Middle1"];
const DRRK_NORMAL_HEIGHT = 34;
const DRRK_TEXT_COLOR = "#404040";
function Drrk(name, x, y, facingRight, doDialog) {
	this.name = name;
	this.hp = this.maxhp;
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
}
Drrk.prototype = Object.create(Vessel.prototype);
Drrk.prototype.speciesName = "Drrk";
Drrk.prototype.team = "Sqarnos";
Drrk.prototype.hittable = true;
Drrk.prototype.damageable = true;
Drrk.prototype.maxhp = 600;
Drrk.prototype.doesGravity = true;
Drrk.prototype.update = function() {
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
		if (this.sendHurtbox(120) == player)
			this.turnShadow();
	}
	this.physics();
	if (this.doDialog && !this.doneDialog) {
		this.doneDialog = true;
		dialog.begin(
			new DialogLine("???", "Hmm... another Uteion? *sniff sniff* Is that Anymos?... Oh my, it seems I've hit quite the jackpot here, drr drr drr...", DRRK_TEXT_COLOR),
			new DialogLine("Anymos", "Who are you? Where are you? Why did you kidnap Naluxos?", "#00FFFF"),
			new DialogLine("Drrk", "Me? I am Drrk, a being of darkness and shadow... Oh how I hate Naluxos and his brilliant, pure light... but I think I might be able to corrupt him... and if not, I'll just kill him... and I'll do the same to you too, Anymos, drr drr drr...", DRRK_TEXT_COLOR),
			new DialogLine("Anymos", "Is that supposed to be... laughter??", "#00FFFF"),
			new DialogLine("Drrk", "Why, of course... Just imagining how proud I'll make Lord Sqarnos gives me a case of the gleeful chortles, drr drr drr...", DRRK_TEXT_COLOR),
			function(){playMusic("WickedDreams-EricMatyas")},
			new DialogLine("Drrk", "But enough of that. Swift as a shadow, I strike.", DRRK_TEXT_COLOR));
	}
}
Drrk.prototype.draw = function() {
	var state;
	if (!this.shadow)
		state = "Standing1";
	else if (this.shadow <= 2)
		state = "Middle1";
	else if (this.shadow >= 30)
		state = "Middle1";
	else if (this.shadow) {
		state = "Shadow1";
		ctx.globalAlpha = player.flashing;
	}
	drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
	ctx.globalAlpha = 1;
}
Drrk.prototype.getHit = function(dmg) {
	if (!this.hittable)
		return false;
	if (this.damageable && dmg > 0) {
		lastHitEnemy = this;
		this.turnShadow();
		return this.takeDamage(dmg);
	} else 
		return true;
},
Drrk.prototype.onDeath = function() {
	this.collect();
	if (this.doDialog) {
		dialog.begin(
			new DialogLine("Drrk", "Drr drr drr... You may have beaten me, but you'll never get out of this cave...", DRRK_TEXT_COLOR));
	}
}
Drrk.prototype.turnShadow = function() {
	this.shadow = 30;
	this.hittable = false;
	this.shadowSpeed = (4+8*Math.random());
	this.facingRight = (Math.random() >= .5)
	this.dx = (this.facingRight?1:-1) * this.shadowSpeed;
}

function DarkBall(x, y) {
	this.x = x;
	this.y = y;
	this.width = 10;
	this.height = 10;
	this.dx = 0;
	this.dy = 1;
}
DarkBall.prototype = Object.create(GameObjectBase);
DarkBall.prototype.team = "Sqarnos";
DarkBall.prototype.doesGravity = true;
DarkBall.prototype.update = function() {
	this.dy += gravity;
	this.y += this.dy;
	if (this.isTouching(player)) {
		player.getHit(90);
		this.die();
	}
	if (this.dy <= 0 || hazardOfPixel(this.x,this.y) >= 100)
		this.die();
}
DarkBall.prototype.draw = function() {
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.arc(stagex(this.x),stagey(this.y-this.height/2),this.width*.6*zoom,0,2*Math.PI);
	ctx.fill();
}