const SHUFFLER_MAX_CARDS = 5;
const SHUFFLER_RADIUS = 50;
const SHUFFLER_DELAY = 50;
const SHUFFLER_ROTATION_SPEED = .08;
function ChansykShuffler(x, y) {
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.cards = new Array(SHUFFLER_MAX_CARDS);
	this.rotation = 0;
	this.spawnDelay = 0;
}
ChansykShuffler.prototype = Object.create(GameObjectBase);
ChansykShuffler.prototype.speciesName = "Chansyk Shuffler";
ChansykShuffler.prototype.team = "Chanos";
ChansykShuffler.prototype.spriteNames = ["Flying"];
ChansykShuffler.prototype.hittable = true;
ChansykShuffler.prototype.damageable = true;
ChansykShuffler.prototype.maxhp = 300;
ChansykShuffler.prototype.update = function() {
	for (var i = 0; i < this.cards.length; i++) {
		if (!!this.cards[i] && this.cards[i].dead)
			this.cards[i] = null;
	}
	this.rotation += SHUFFLER_ROTATION_SPEED;
	for (var i = 0; i < SHUFFLER_MAX_CARDS; i++) {
		if (!!this.cards[i]) {
			var theta = this.rotation + 2*Math.PI*i/SHUFFLER_MAX_CARDS;
			//console.log(this.rotation, 2*Math.PI, i, SHUFFLER_MAX_CARDS)
			var car = this.cards[i];
			car.radius = Math.min(car.radius+5, SHUFFLER_RADIUS); 
			car.x = this.x + car.radius * Math.cos(theta);
			car.y = this.y - this.height/2 + car.height/2 - car.radius * Math.sin(theta);
			car.dx = car.radius * SHUFFLER_ROTATION_SPEED * -Math.sin(theta);
			car.dy = car.radius * SHUFFLER_ROTATION_SPEED * Math.cos(theta);
		}
	}
	this.spawnDelay--;
	if (this.spawnDelay <= 0) {
		for (var i = 0; i < SHUFFLER_MAX_CARDS; i++) {
			if (!this.cards[i]) {
				var newCard = new CardPip(this.x, this.y, Math.floor(2+9*Math.random()), flipCoin());
				this.cards[i] = newCard;
				newCard.y = this.y - this.height/2 + newCard.height/2;
				newCard.radius = 0;
				gameObjects.push(newCard);
				this.spawnDelay = SHUFFLER_DELAY;
				return;
			}
		}
		this.spawnDelay = 10;
	}
}
ChansykShuffler.prototype.draw = function() {
	drawSpriteOnStage(this.sprites["Flying"], this.x, this.y);
}
ChansykShuffler.prototype.die = function() {
	this.dead = true;
	this.cards.forEach(function(oj) {
		if (oj)
			oj.die();
	});
}