class Rumble extends GameObject {
	constructor(left, right, top, bottom, enterTrigger, clearFunction, enemies) {
		super();
		this.left = left;
		this.right = right;
		this.top = top;
		this.bottom = bottom;
		this.thickness = 10;
		this.enterTrigger = enterTrigger;
		this.clearFunction = clearFunction;
		this.enemies = Array.isArray(enemies) ? enemies : Array.prototype.slice.call(arguments, 6);
		this.active = false;
	}
	update() {
		if (!this.active) {
			if (this.enterTrigger) {
				if (player.x - player.width/2 >= this.left && player.x + player.width/2 <= this.right && player.y - player.height >= this.top && player.y <= this.bottom)
					this.begin();
			}
		} else {
			if (this.isClear()) {
				this.clearFunction();
				normalCameraBounds();
				this.active = false;
				this.die();
			}
		}
	}
	draw() {
		if (this.active) {
			ctx.strokeStyle = "#FFFF00";
			ctx.lineWidth = this.thickness*zoom;
			ctx.strokeRect(stagex(this.left-this.thickness/2), stagey(this.top-this.thickness/2), (this.right-this.left+this.thickness)*zoom, (this.bottom-this.top+this.thickness)*zoom);
		}
	}
	begin() {
		this.active = true;
		this.enemies.forEach(function(nem) {
			gameObjects.push(nem);
		});
		cameraLeftBound = this.left - this.thickness;
		cameraRightBound = this.right + this.thickness;
		cameraTopBound = this.top - this.thickness;
		cameraBottomBound = this.bottom + this.thickness;
	}
	isSolid(x, y) {
		if (!this.active)
			return false;
		if (x < this.left-this.thickness || x > this.right+this.thickness || y < this.top-this.thickness || y > this.bottom+this.thickness)
			return false;
		return (x < this.left || x > this.right || y < this.top || y > this.bottom);
			
	}
	isClear() {
		var yeh = true;
		this.enemies.forEach(function(nem) {
			if (nem.damageable && !nem.dead)
				yeh = false;
		});
		return yeh;
	}
}
//------------------------------------------------------------------------------------------------- Queue ----------------------------------------------------------------------------------------

//i haven't finished updating this, but i don't think i actually use it anymore either
class QueueRumble extends Rumble {
	constructor(x, y, width, height, enterTrigger, clearFunction, atATime, enemies) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.thickness = 10;
		this.enterTrigger = enterTrigger;
		this.clearFunction = clearFunction;
		this.enemies = [];
		this.waiting = Array.isArray(enemies) ? enemies : Array.prototype.slice.call(arguments, 7);
		this.active = false;
	}
	begin() {
		this.active = true;
		this.fillUp();
		cameraLeftBound = this.x - this.width/2 - this.thickness;
		cameraRightBound = this.x + this.width/2 + this.thickness;
		cameraTopBound = this.y - this.height - this.thickness;
		cameraBottomBound = this.y + this.thickness;
	}
	isClear() {
		this.fillUp();
		return this.enemies.length > 0;
	}
	fillUp() {
		var i = 0;
		while (i < this.enemies.length) {
			if (this.enemies[i].dead)
				this.enemies.splice(i, 1);
			else
				i++;
		}
		while (this.enemies.length < this.atATime && this.waiting.length > 0) {
			this.enemies.push(this.waiting.pop);
		}
	}
}