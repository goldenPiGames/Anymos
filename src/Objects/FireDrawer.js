class FireDrawer extends GameObject {
	constructor() {
		super();
		this.cycle = 0;
	}
	update() {
		
	}
	draw() {
		this.cycle ++;
		if (this.cycle > 7)
			this.cycle = 0;
		var left = Math.max(0, Math.floor(screenleft()/PIXELS_PER_BLOCK));
		var top = Math.max(0, Math.floor(screentop()/PIXELS_PER_BLOCK));
		var right = Math.min(staticColl[0].length-1, Math.ceil(screenright()/PIXELS_PER_BLOCK));
		var bottom = Math.min(staticColl.length-1, Math.ceil(screenbottom()/PIXELS_PER_BLOCK));
		for (var i = left; i <= right; i++) {
			for (var j = top; j <= bottom; j++) {
				if (staticColl[j][i].fire) {
					drawSpriteOnStage(this.sprites["fire"+Math.floor(this.cycle/2)], (i+.5)*PIXELS_PER_BLOCK, (j+1)*PIXELS_PER_BLOCK);
				}
			}
		}
	}
}
FireDrawer.prototype.sprites = makeSprites("src/Objects/Fire.png", {
	fire0: {x:0, y:0, width:20, height:20},
	fire1: {x:20, y:0, width:20, height:20},
	fire2: {x:40, y:0, width:20, height:20},
	fire3: {x:60, y:0, width:20, height:20},
}, false);