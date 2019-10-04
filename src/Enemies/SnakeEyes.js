const SNAKEEYES_CYCLE_LENGTH = 120;
class SnakeEyes extends Enemy {
	constructor(x, y, minx, maxx, facingRight, doDialog) {
		super();
		this.x = x;
		this.y = y;
		this.groundy = y;
		this.dx = 0;
		this.dy = 0;
		this.minx = minx;
		this.maxx = maxx;
		this.facingRight = facingRight;
		this.doDialog = doDialog;
		this.doneDialog = false;
		this.collCD = 0;
		this.cycle = 40;
		this.mouthbox = {
			__proto__ : Object.create(GameObjectBase),
			width : 48,
			height : 38
		}
	}
	update() {//TODO make not random
		if (this.doDialog && !this.doneDialog) {
			this.doneDialog = true;
			dialog.begin(new DialogLine("???", "INDIVIDUAL WITHOUT WIRELESS SECURITY MARK DETECTED. PLEASE PRESENT IDENTIFICATION AND CREDENTIALS.", "#00FF00"),
				new DialogLine("Anymos", "Umm, what?", "#00FFFF"),
				new DialogLine("Snake Eyes", "I AM A SONAR NAVIGATED AUTONOMOUS KEEPER ENTITY MARK I, ALSO KNOWN AS 'SNAKE-EYES'. PLEASE PRESENT IDENTIFICATION AND CREDENTIALS.", "#00FF00"),
				new DialogLine("Anymos", "Wait, identification and credentials? What are you talking about?", "#00FFFF"),
				new DialogLine("Snake Eyes", "UNDER NEW SAFETY REGULATIONS, EVERY INDIVIDUAL MUST POSSESS A WIRELESSLY TRANSMITTED SECURITY MARK.", "#00FF00"),
				new DialogLine("Snake Eyes", "IF YOU DO NOT CURRENTLY HAVE ONE, PLEASE PRESENT ALTERNATE DOCUMENTATION IMMEDIATELY.", "#00FF00"),
				new DialogLine("Anymos", "I'm sorry, I don't have any of those. I actually just recently-", "#00FFFF"),
				new DialogLine("Snake Eyes", "INITIATING \"FORGOT DOCUMENTATION\" PROTOCOL. PLEASE SPELL YOUR NAME.", "#00FF00"),
				new DialogLine("Anymos", "Uh... A N Y M O S.", "#00FFFF"),
				new DialogLine("Snake Eyes", "ERROR. RECORD FOR \"UANYMOS\" COULD NOT BE FOUND.", "#00FF00"),
				//new DialogLine("Snake Eyes", ["Uncaught ReferenceError: Cannot read property 'travelRecords' of undefined.", "  at <anonymous>:1:6                   citizenRecords.js:24", "  at forgotMyDocumentaition:1:14       forgotDocs.js:35"], "#FF0000"),
				//new DialogLine("Anymos", "...I don't think you're speaking the right language for that sort of thing.", "#00FFFF"),
				function(){playMusic("Beatdown City - Darren Curtis")},
				new DialogLine("Snake Eyes", "SECURITY THREAT DETECTED. PREPARE TO BE ELIMINATED.", "#00FF00"),
				new DialogLine("Anymos", "Well, that escalated quickly.", "#00FFFF"));
			return;
		}
		this.cycle ++;
		if (this.cycle >= SNAKEEYES_CYCLE_LENGTH) {
			this.cycle = 0;
			this.x = this.minx + Math.random() * (this.maxx-this.minx);
			this.y = this.groundy + this.height + 20;
			this.collRising = false;
		}
		if (this.cycle > 30) {
			if (this.cycle <= 35) {
				this.facingRight = player.x > this.x;
				this.y = this.groundy + (1 - (this.cycle-30)/5) * this.height;
				if (!this.collRising && this.sendHurtbox(180))
					this.collRising = true;
			} else if (this.cycle < SNAKEEYES_CYCLE_LENGTH - 9 && this.cycle % 20 == 0) {
				gameObjects.push(new PipBullet(this.x-5.5, this.y-116.5, player, 4, flipCoin()?"#FF0000":"#000000"));
				gameObjects.push(new PipBullet(this.x+5.5, this.y-116.5, player, 4, flipCoin()?"#FF0000":"#000000"));
			} else if (this.cycle >= SNAKEEYES_CYCLE_LENGTH-5) {
				this.y = this.groundy + (this.cycle+5-SNAKEEYES_CYCLE_LENGTH)/5 * this.height;
			}
		}
		/*this.collCD--;
		if (this.collCD <= 0) {
			if (this.sendHurtbox(90) == player)
				this.collCD = 60;
		}*/
	}
	draw() {
		var state;
		if (this.cycle < 30) {
			if (!(this.cycle%3))
				gameObjects.push(new DigIndicator(this.x, this.groundy));
			return;
		} else if (this.cycle < 35) {
			state = "rising";
		} else if (this.cycle < 38) {
			state = "closing"+(this.cycle-34);
		} else if (this.cycle == SNAKEEYES_CYCLE_LENGTH-6) {
			state = "tipping";
		} else if (this.cycle >= SNAKEEYES_CYCLE_LENGTH-5) {
			state = "falling";
		} else
			state = "shooting";
		this.drawSprite(state);
		//drawSpriteOnStage(this.sprites[state], this.x, this.y, this.facingRight);
	}
}
SnakeEyes.prototype.speciesName = "Snake Eyes";
SnakeEyes.prototype.team = "Chanos";
SnakeEyes.prototype.sprites = makeSprites("src/Enemies/SnakeEyes.png", {
	rising : {x:0, y:0, width:50, height:133},
	closing1 : {x:50, y:0, width:50, height:133},
	closing2 : {x:100, y:0, width:50, height:133},
	closing3 : {x:150, y:0, width:50, height:133},
	shooting : {x:200, y:0, width:50, height:133},
	tipping : {x:250, y:0, width:50, height:133},
	falling : {x:300, y:0, width:50, height:133},
	indicator : {x:350, y:0, width:1, height:152},
}, false);
SnakeEyes.prototype.width = 14;
SnakeEyes.prototype.height = 120;
SnakeEyes.prototype.maxhp = 1250;

class DigIndicator extends GameObject {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.groundy = y;
		this.dx = Math.random()*8 - 4;
		this.dy = -4 - Math.random()*6;
	}
	update() {
		//this.physics();
		this.x += this.dx;
		this.y += this.dy;
		this.dy += gravity;
		if (this.y >= this.groundy+2) {
			this.die()
		}
	}
	draw() {
		ctx.fillStyle = "#672F0A";
		ctx.fillRect(stagex(this.x-1), stagey(this.y), 2*zoom, 2*zoom);
	}
}
DigIndicator.prototype.width = 2;
DigIndicator.prototype.height = 2;
DigIndicator.prototype.doesGravity = true;