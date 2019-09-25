var FireDrawer = function() {
	this.cycle = 0;
}
FireDrawer.prototype.folderName = "FireDrawer";
FireDrawer.prototype.update = doNothing;
FireDrawer.prototype.spriteNames = ["Fire0", "Fire1", "Fire2", "Fire3"];
FireDrawer.prototype.draw = function() {
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
				drawOnStage(this.sprites["Fire"+Math.floor(this.cycle/2)], i*PIXELS_PER_BLOCK, j*PIXELS_PER_BLOCK);
			}
		}
	}
}