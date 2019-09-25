var CardPipSpriteNames = ["Hovering2", "Hovering3", "Hovering4", "Hovering5", "Hovering6", "Hovering7", "Hovering8", "Hovering9", "Hovering10"];
function CardPip(x, y, num = 2, red = .5) {
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
	this.width = 14;
	this.height = 20;
	this.num = num;
	this.red = PRound(red);
	this.color = this.red ? "#FF0000" : "#000000";
	this.dx = 0;
	this.dy = 0;
	this.pipCD = 10;
}
CardPip.prototype = Object.create(GameObjectBase);
CardPip.prototype.speciesName = "Pip Card";
CardPip.prototype.team = "Chanos";
CardPip.prototype.folderName = "CardPip";
CardPip.prototype.spriteNames = ["Hovering2", "Hovering3", "Hovering4", "Hovering5", "Hovering6", "Hovering7", "Hovering8", "Hovering9", "Hovering10"];
CardPip.prototype.hittable = true;
CardPip.prototype.damageable = true;
CardPip.prototype.maxhp = 30;
CardPip.prototype.doesGravity = false;
CardPip.prototype.update = function() {
	this.pipCD--;
	if (this.pipCD <= 0) {
		gameObjects.push(new PipBullet(this.x, this.y-this.height/2, this.angleToLeading(this.nearestEnemy(), 5), 5, this.color));
		//console.log(this.nearestEnemy(), this.angleToLeading(this.nearestEnemy(), 5))
		this.pipCD = 60;
	}
}
CardPip.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.fillRect(stagex(this.x-this.width/2+2), stagey(this.y-this.height+2), (this.width-4)*zoom, (this.height-4)*zoom);
	//console.log("Hovering"+this.num)
	drawSpriteOnStage(this.sprites["Hovering"+this.num], this.x, this.y);
}

function PipBullet(x, y, target = player, speed = 4, color = "#000000") {
	this.width = 4;
	this.height = 4;
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
PipBullet.prototype = Object.create(GameObjectBase);
PipBullet.prototype.team = "Chanos";
PipBullet.prototype.physicsPrecision = 1;
PipBullet.prototype.damage = 30;
PipBullet.prototype.update = function() {
	this.x += this.dx;
	this.y += this.dy;
	if (this.sendHurtbox(this.damage)) {
		this.die();
		return;
	}
	if (isPixelSolid(this.x, this.y-this.height/2) || this.x < 0 || this.x > stagewidth() || this.y < 0 || this.y > stageheight())
		this.die();
}
PipBullet.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(stagex(this.x),stagey(this.y-this.height/2),this.width*.6*zoom,0,2*Math.PI);
	ctx.fill();
}