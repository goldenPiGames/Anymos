function clearIlluminationFore() {
	gameObjects.concat(player).forEach(oj => {
		if (oj.illumination) {
			fctx.save();
			//console.log(oj);
			fctx.beginPath();
			fctx.arc(stagex(oj.x), stagey(oj.y-oj.height/2), oj.illumination*zoom, 0, 2*Math.PI);
			fctx.clip();
			fctx.clearRect(0, 0, fcanvas.width, fcanvas.height);
			//fctx.fillStyle = "#FFFFFF00";
			//fctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
			fctx.restore();
		}
	});
}

/*class DarknessFore {
	constructor() {
		
	}
	draw() {
		fctx.globalAlpha = 1 - specialFlash.active;
		fctx.fillStyle = "#000000";
		fctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
		fctx.globalAlpha = 1;
		clearIlluminationFore();
		//fctx.fillStyle = "#FFFFFF";
		//fctx.globalCompositeOperation = "source-over";
	}
}*/

function ObscurerRect(x, y, width, height, color) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}
ObscurerRect.prototype.update = function() {
	
}
ObscurerRect.prototype.draw = function() {
	if (!player.isTouching(this)) {
		ctx.fillStyle = this.color;
		ctx.fillRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width * zoom, this.height * zoom);
	}
}

const FLASH_REDUCE_RATE = .05;

var specialFlash = {
	name : "Naluxos' Flash",
	update : function(holder) {
		this.active = Math.max(0, this.active - FLASH_REDUCE_RATE);
		if (holder.controller.specialClicked) {
			used += 60;
			this.active = 1;
		}
	},
	isActive : function() {
		return player.special == this && this.active;
	},
	remove : function(holder) {
		this.active = 0;
	},
	a2 : 0,
}

class FlashPickup extends SpecialPickup {
	update() {
		super.update();
		this.illumination = (player.special != this.special) ? this.baseIllumination : 0;
	}
	getDialog() {
		return [
			new DialogLine("Anymos", "So this is... Naluxos' Flash.", "#00FFFF"),
			new DialogLine("Naluxos", "Yeah! It's a Special, so you can use it by pressing [Shift] or (Right trigger).", "#FFFFFF"),
			new DialogLine("Naluxos", "When you use it, it'll dispel the darkness, but only briefly. You can use it as much as you need, but it may take some energy.", "#FFFFFF"),
		];
	}
}
FlashPickup.prototype.special = specialFlash;
FlashPickup.prototype.sprites = Naluxos.prototype.sprites;
FlashPickup.prototype.baseIllumination = 50;
FlashPickup.prototype.illumination = FlashPickup.prototype.baseIllumination;