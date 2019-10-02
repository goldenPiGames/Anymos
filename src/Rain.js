var RainGenerator = function(dy, frequency, color = "#00008080") {
	this.dy = dy;
	this.frequency = frequency;
	this.color = color;
	this.drops = [];
	for (var i = 0; i < stageheight() / this.dy; i++) {
		this.draw();
	}
}
RainGenerator.prototype = Object.create(GameObjectBase);

RainGenerator.prototype.update = function() {
	
}

RainGenerator.prototype.draw = function() {
	if (this.boundLeft == undefined)
		this.boundLeft = 0;
	if (this.boundRight == undefined)
		this.boundRight = stagewidth();
	if (this.boundTop == undefined)
		this.boundTop = .1;
	var makeDrops = PRound(this.frequency);
	var newDrop;
	for (var i = 0; i < makeDrops; i++) {
		newDrop = {x : this.boundLeft + Math.random() * (this.boundRight-this.boundLeft), y : this.boundTop};
		this.drops.push(newDrop);
	}
	this.drops = this.drops.filter(drip => {
		ctx.lineWidth = zoom;
		ctx.strokeStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(stagex(drip.x), stagey(drip.y), zoom);
		drip.y += this.dy;
		ctx.lineTo(stagex(drip.x), stagey(drip.y), zoom);
		ctx.stroke();
		return (drip.y <= stageheight() && !isPixelSolid(drip.x, drip.y) && blockOfPixel(drip.x, drip.y).rain);
	});
	/*while (i < this.drops.length) {
		drip = this.drops[i];
		ctx.lineWidth = zoom;
		ctx.strokeStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(stagex(drip.x), stagey(drip.y), zoom);
		drip.y += this.dy;
		ctx.lineTo(stagex(drip.x), stagey(drip.y), zoom);
		ctx.stroke();
		if (drip.y > stageheight() || isPixelSolid(drip.x, drip.y) || !blockOfPixel(drip.x, drip.y).rain) {
			//console.log(drip.y)
			this.drops.splice(i, 1);
		} else {
			i++;
		}
	}*/
}