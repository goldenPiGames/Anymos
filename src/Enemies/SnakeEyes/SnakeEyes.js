var SnakeEyesSpriteNames = ["Indicator", "Rising", "Closing1", "Closing2", "Closing3", "Shooting", "Tipping", "Falling"];
const SNAKEEYES_CYCLE_LENGTH = 120;
function SnakeEyes(x, y, minx, maxx, facingRight, doDialog) {
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.groundy = y;
	this.width = 14;
	this.height = 120;
	this.dx = 0;
	this.dy = 0;
	this.minx = minx;
	this.maxx = maxx;
	this.facingRight = facingRight;
	this.doDialog = doDialog;
	this.doneDialog = false;
	this.collCD = 0;
	this.cycle = 40;
	this.mouthbox = { //Unused
		__proto__ : Object.create(GameObjectBase),
		width : 48,
		height : 38
	}
}
SnakeEyes.prototype = Object.create(GameObjectBase);
SnakeEyes.prototype.speciesName = "Snake Eyes";
SnakeEyes.prototype.team = "Chanos";
SnakeEyes.prototype.hittable = true;
SnakeEyes.prototype.damageable = true;
SnakeEyes.prototype.maxhp = 1250;
SnakeEyes.prototype.update = function() {
	if (this.doDialog && !this.doneDialog) {
		this.doneDialog = true;
		dialog.begin(new DialogLine("???", "IN ORDER TO PROCEED TO SPADE CITY, PLEASE PRESENT IDENTIFICATION AND CREDENTIALS.", "#00FF00"),
			new DialogLine("Anymos", "Umm, what?", "#00FFFF"),
			new DialogLine("Snake Eyes", "I AM A SONAR NAVIGATED AUTONOMOUS KEEPER ENTITY MARK I, ALSO KNOWN AS 'SNAKE-EYES'. PLEASE PRESENT IDENTIFICATION AND CREDENTIALS.", "#00FF00"),
			new DialogLine("Anymos", "Wait, identification and credentials? What are you talking about?", "#00FFFF"),
			new DialogLine("Snake Eyes", "CITIZENSHIP CARD OF SPADE CITY AND EITHER HEART FARMS WORK PERMIT OR CLUB GARDENS TRAVEL PASSPORT.", "#00FF00"),
			new DialogLine("Anymos", "I'm sorry, I don't have any of those. I actually just recently-", "#00FFFF"),
			new DialogLine("Snake Eyes", "INITIATING FUNCTION forgotMyDocumentation(). PLEASE SPELL YOUR NAME.", "#00FF00"),
			new DialogLine("Anymos", "A-N-Y-M-O-S.", "#00FFFF"),
			new DialogLine("Snake Eyes", ["Uncaught ReferenceError: Cannot read property 'travelRecords' of undefined.", "  at <anonymous>:1:6                   citizenRecords.js:24", "  at forgotMyDocumentaition:1:14       forgotDocs.js:35"], "#FF0000"),
			new DialogLine("Anymos", "...I don't think you're speaking the right language for that sort of thing.", "#00FFFF"),
			function(){playMusic("Beatdown City - Darren Curtis")},
			new DialogLine("Snake Eyes", "IN THE NAME OF PRESIDENT CHANOS, I PLACE YOU UNDER ARREST FOR ILLEGAL IMMIGRATION. PREPARE TO DIE.", "#00FF00"),
			new DialogLine("Anymos", "Well, that escalated quickly.", "#00FFFF"));
		return;
	}
	this.cycle ++;
	if (this.cycle >= SNAKEEYES_CYCLE_LENGTH) {
		this.cycle = 0;
		this.x = this.minx + Math.random() * (this.maxx-this.minx);
		this.y = this.groundy + this.height + 20;
	}
	if (this.cycle > 30) {
		if (this.cycle <= 35) {
			this.facingRight = player.x > this.x;
			this.y = this.groundy + (1 - (this.cycle-30)/5) * this.height;
		} else if (this.cycle < SNAKEEYES_CYCLE_LENGTH - 9 && this.cycle % 20 == 0) {
			gameObjects.push(new PipBullet(this.x-5.5, this.y-116.5, player, 4, flipCoin()?"#FF0000":"#000000"));
			gameObjects.push(new PipBullet(this.x+5.5, this.y-116.5, player, 4, flipCoin()?"#FF0000":"#000000"));
		} else if (this.cycle >= SNAKEEYES_CYCLE_LENGTH-5) {
			this.y = this.groundy + (this.cycle+5-SNAKEEYES_CYCLE_LENGTH)/5 * this.height;
		}
	}
	this.collCD--;
	if (this.collCD <= 0) {
		if (this.sendHurtbox(90) == player)
			this.collCD = 60;
	}
}
SnakeEyes.prototype.draw = function() {
	var state;
	if (this.cycle < 30) {
		state = "Indicator";
	} else if (this.cycle < 35) {
		state = "Rising";
	} else if (this.cycle < 38) {
		state = "Closing"+(this.cycle-34);
	} else if (this.cycle == SNAKEEYES_CYCLE_LENGTH-6) {
		state = "Tipping";
	} else if (this.cycle >= SNAKEEYES_CYCLE_LENGTH-5) {
		state = "Falling";
	} else
		state = "Shooting";
	drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
}