const CARD_SPRITES_SMALL = makeSprites("src/Enemies/CardsSmall.png", (()=>{
	var data = {};
	for (var i = 1; i <= 13; i++) {
		data[i+"black"] = {x:(i-1)*14, y:0, width:14, height:20};
		data[i+"red"] = {x:(i-1)*14, y:20, width:14, height:20};
	}
	return data;
})(), false);

//var CardPipSpriteNames = ["Hovering2", "Hovering3", "Hovering4", "Hovering5", "Hovering6", "Hovering7", "Hovering8", "Hovering9", "Hovering10"];
class CardPip extends Enemy {
	constructor(x, y, rank = 2, red = .5) {
		super();
		this.hp = this.maxhp;
		this.x = x;
		this.y = y;
		this.width = 14;
		this.height = 20;
		this.rank = rank;
		this.red = PRound(red);
		this.color = this.red ? "#FF0000" : "#000000";
		this.dx = 0;
		this.dy = 0;
		this.pipCD = 10;
	}
	update() {
		this.pipCD--;
		if (this.pipCD <= 0) {
			gameObjects.push(new PipBullet(this.x, this.y-this.height/2, this.red ? this.angleToLeading(this.nearestEnemy(), 5) : this.angleTo(this.nearestEnemy()), 5, this.color));
			//console.log(this.nearestEnemy(), this.angleToLeading(this.nearestEnemy(), 5))
			this.pipCD = 60;
		}
	}
	draw() {
		var state = this.rank+(this.red?"red":"black");
		//console.log(state);
		this.drawSprite(state);
	}
}
CardPip.prototype.speciesName = "Pip Card";
CardPip.prototype.team = "Chanos";
CardPip.prototype.sprites = CARD_SPRITES_SMALL;
CardPip.prototype.maxhp = 30;
CardPip.prototype.doesGravity = false;

class PipBullet extends GameObject {
	constructor(x, y, target = player, speed = 4, color = "#000000") {
		super();
		this.x = x;
		this.y = y+this.height/2;
		var theta;
		if (typeof target == "number")
			theta = target
		else
			theta = this.angleTo(target, speed);//Math.atan2(target.y-target.height/2-this.y+this.height/2, target.x-this.x);
		this.dx = speed * Math.cos(theta);
		this.dy = speed * Math.sin(theta);
		this.color = color;
	}
	update() {
		this.x += this.dx;
		this.y += this.dy;
		if (this.sendHurtbox(this.damage)) {
			this.die();
			return;
		}
		if (isPixelSolid(this.x, this.y-this.height/2) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
			this.die();
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(stagex(this.x),stagey(this.y-this.height/2),this.width*.6*zoom,0,2*Math.PI);
		ctx.fill();
	}
}
PipBullet.prototype.team = "Chanos";
PipBullet.prototype.physicsPrecision = 1;
PipBullet.prototype.damage = 30;
PipBullet.prototype.maxhp = 5;
PipBullet.prototype.width = 4;
PipBullet.prototype.height = 4;