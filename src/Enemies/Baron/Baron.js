var BaronSpriteNames = ["Walking1", "ChargingUp1", "Attacking1"];
function Baron(name, x, y, facingRight, doDialog) {
	this.name = name;
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 40;
	this.height = 58;
	this.dx = 0;
	this.dy = 0;
	this.speed = 1.0;
	this.facingRight = facingRight;
	this.doDialog = doDialog;
	this.doneDialog = false;
	this.collCD = 0;
	this.atkbox = {
		__proto__ : Object.create(GameObjectBase),
		width : 48,
		height : 38
	}
}
Baron.prototype = Object.create(Vessel.prototype);
Baron.prototype.speciesName = "Baron";
Baron.prototype.team = "Sqarnos";
Baron.prototype.hittable = true;
Baron.prototype.damageable = true;
Baron.prototype.maxhp = 1000;
Baron.prototype.doesGravity = true;
Baron.prototype.update = function() {
	if (this.doDialog && !this.doneDialog) {
		this.doneDialog = true;
		dialog.begin(
			new DialogLine("???", "Looks like the boss was right to have me check around heah.", "#FF0000"),
			new DialogLine("Anymos", "Hmm? Who are you?", "#00FFFF"),
			function(){playMusic("Move it Out - Eric Matyas")},
			new DialogLine("Baron", "I am the Great Sah Baron Brix von Death Muhdah, Lahd of Feah and Despayah!", "#FF0000"),
			new DialogLine("Anymos", "Do you mean that you're the ruler of two places called \"Feah\" and \"Despayah\", or that you have an accent and an extremely exaggerated opinion of how frightening you are?", "#00FFFF"),
			new DialogLine("Baron", "You'll pay fah that little remahk!", "#FF0000"),
			new DialogLine("Anymos", "I apologize, I didn't mean to upset you. Now if you'll excuse me, I must pass through this valley. I'm looking for something rather important. (I think).", "#00FFFF"),
			new DialogLine("Baron", "And what makes you think I'll just let you waltz on through heah as you please?", "#FF0000"),
			new DialogLine("Anymos", "Umm... because I have places to be and we have no--", "#00FFFF"),
			new DialogLine("Baron", "Nope. Not gonna happen. I happen to be a faithful servant of Sqahnos, the only being of greatah dahk powah then yahs truly. So I'll kill you, right here and now, befah you manage to slip away again.", "#FF0000"),
			new DialogLine("Baron", "Now, prepayah yahself to feel the mighty wrath of my Mega Destruction Dahk Spikes of Dahkness and Destruction!", "#FF0000"),
			new DialogLine("Anymos", "\"Dark spikes\"? Are you referring to the spikes on your shoulders that are very clearly a bright, not dark, red?", "#00FFFF"),
			new DialogLine("Baron", "DIE!", "#FF0000", DIALOG_HEIGHT*2/3));
		return;
	}
	this.atkbox.x = this.x + (this.facingRight?1:-1) * this.atkbox.width/2;
	this.atkbox.y = this.y-20;
	if (this.attacking > 32)
		this.attacking = false;
	if (this.attacking) {
		this.attacking ++;
		if (this.attacking == 30) {
			this.sendHurtbox(240, this.atkbox);
		}
	} else if (this.atkbox.isTouching(player)) {
		this.attacking = 1;
		this.dx = 0;
	} else {
		this.facingRight = player.x >= this.x;
		this.dx = this.facingRight ? this.speed : -this.speed;
	}
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(120) == player)
			this.collCD = 60;
	}
	this.physics();
}
Baron.prototype.draw = function() {
	var state;
	if (this.attacking) {
		if (this.attacking >= 30)
			state = "Attacking1";
		else
			state = "ChargingUp1";
	} else
		state = "Walking1";
	drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
}
Baron.prototype.onDeath = function() {
	this.collect();
	if (this.doDialog) {
		dialog.begin(
			new DialogLine("Baron", "Oh, you scratchy little-! Do you really think this is the last you'll see of me?", "#FF0000"),
			new DialogLine("Anymos", "Yes. Am I wrong?", "#00FFFF"),
			new DialogLine("Baron", "...No.", "#FF0000"));
			dialog.skipBuffer = 25;
	}
}