var zoomd = 2.0;
var zoom = 2.0;
var minZoom = 1;
var maxZoom = 6;
var cameraFocus;
var cameraxd = 0;
var camerayd = 0;
var camerax = 0;
var cameray = 0;
var cameraLeftBound = 0;
var cameraRightBound = 1200;
var cameraTopBound = 0;
var cameraBottomBound = 900;
var oobtopcolor = "#000000";
var oobbottomcolor = "#000000";
var dynamicBackdrop = null;

function drawStageBack() {
	if (dynamicBackdrop)
		dynamicBackdrop.draw();
	if (stagey(0) > 0) {
		//console.log("peng")
		ctx.fillStyle = oobtopcolor;
		ctx.fillRect(0, 0, canvas.width, Math.ceil(stagey(0)));
	}
	if (stagey(stageheight()) < canvas.height) {
		//console.log("peng")
		ctx.fillStyle = oobbottomcolor;
		ctx.fillRect(0, stagey(stageheight()), canvas.width, canvas.height/2);
	}
	drawOnStage(stageImages.mainBack, 0, 0, stageImages.mainBack.width, stageImages.mainBack.height);
}
function drawStageFore() {
	ctx.globalAlpha = 1 - player.flashing;
	drawOnStage(stageImages.mainFore, 0, 0, stageImages.mainFore.width, stageImages.mainFore.height);
	ctx.globalAlpha = 1;
}

function updateZoom() {
	cameraxd = cameraFocus.x;
	camerayd = cameraFocus.y - (cameraFocus==player?PLAYER_NORMAL_HEIGHT:cameraFocus.height)/2;
	if (controller.zoomOutClicked)
		zoomd = Math.max(zoomd-1, minZoom, 1);
	if (controller.zoomInClicked)
		zoomd = Math.min(zoomd+1, maxZoom);
	//if (Math.abs(zoomd*8 - Math.round(zoomd*8)) < .01)
	//	zoomd = Math.round(zoomd * 8) / 8
	if (cameraRightBound - cameraLeftBound < canvas.width / zoomd) {
		cameraxd = (cameraLeftBound + cameraRightBound) / 2;
	} else if (cameraxd - canvas.width/zoomd/2 < cameraLeftBound) {
		cameraxd = cameraLeftBound + canvas.width/zoomd/2;
	} else if (cameraxd + canvas.width/zoomd/2 > cameraRightBound) {
		cameraxd = cameraRightBound - canvas.width/zoomd/2;
	}
	if (cameraBottomBound - cameraTopBound < canvas.height / zoomd) {
		camerayd = (cameraBottomBound + cameraTopBound) / 2;
	} else if (camerayd - canvas.height/zoomd/2 < cameraTopBound) {
		camerayd = cameraTopBound + canvas.height/zoomd/2;
	} else if (camerayd + canvas.height/zoomd/2 > cameraBottomBound) {
		camerayd = cameraBottomBound - canvas.height/zoomd/2;
	}
	zoom = mid(zoom*1.05, zoom*.95, zoomd);
	camerax = mid(camerax+20/zoom, camerax-20/zoom, camerax+(cameraxd-camerax)*.3, cameraxd, camerax+(cameraxd-camerax)*1.3);
	cameray = mid(cameray+20/zoom, cameray-20/zoom, cameray+(camerayd-cameray)*.3, camerayd, cameray+(camerayd-cameray)*1.3);
}

function snapZoom() {
	camerax = cameraxd;
	cameray = camerayd;
	zoom = zoomd;
}

function normalCameraBounds() {
	cameraLeftBound = 0;
	cameraRightBound = stageImages.mainBack.width;
	cameraTopBound = 0;
	cameraBottomBound = stageImages.mainBack.height;
}

function stagex(x) {
	return (x - camerax) * zoom + canvas.width/2;
}
function stagey(y) {
	return (y - cameray) * zoom + canvas.height/2;
}
function stagewidth() {
	return staticColl[0].length * PIXELS_PER_BLOCK;
}
function stageheight() {
	return staticColl.length * PIXELS_PER_BLOCK;
}

function screenleft() {
	return camerax-canvas.width/2*zoom;
}
function screenright() {
	return camerax+canvas.width/2*zoom;
}
function screentop() {
	return cameray-canvas.height/2*zoom;
}
function screenbottom() {
	return camerax+canvas.height/2*zoom;
}

function drawOnStage(img, dx, dy, dWidth, dHeight) {
	if (!img || !(img.loaded)) {
		console.log("Image is undefined or not loaded",dx,dy);
		return false;
	}
	if (!dWidth) dWidth = img.width;
	if (!dHeight) dHeight = img.height;
	ctx.drawImage(img, (dx - camerax) * zoom + canvas.width/2, (dy - cameray) * zoom + canvas.height/2, dWidth * zoom, dHeight * zoom);
}
function drawSpriteOnStage(sprite, dx, dy, right = true, woff = 1/2, hoff = 1) {
	if (!sprite || (sprite instanceof HTMLImageElement && !(sprite.loaded))) {
		console.log(sprite);
		throw "Image is undefined or not loaded "+dx+", "+dy;
		return false;
	}
	var dWidth = sprite.width;
	var dHeight = sprite.height;
	
	if (right) {
		if (sprite instanceof HTMLImageElement)
			ctx.drawImage(sprite, stagex(dx - dWidth*woff), stagey(dy - dHeight*hoff), dWidth * zoom, dHeight * zoom);
		else
			ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height, stagex(dx - dWidth*woff), stagey(dy - dHeight*hoff), dWidth * zoom, dHeight * zoom);
	} else {
		ctx.translate(stagex(dx + dWidth*(1-woff)), stagey(dy - dHeight*hoff));
		ctx.scale(-1, 1);
		if (sprite instanceof HTMLImageElement)
			ctx.drawImage(sprite, 0, 0, dWidth*zoom, dHeight*zoom);
		else
			ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height, 0, 0, dWidth*zoom, dHeight*zoom);
		ctx.setTransform(1, 0, 0, 1, 0, 0);
	}
}

function flipHorizontally(img,x,y,width,height) { //https://stackoverflow.com/a/35973879
	if (!img || !(img.loaded)) {
		console.log("Image is undefined or not loaded",x,y);
		return false;
	}
	if (!width) width = img.width;
	if (!height) height = img.height;
    ctx.translate(x+width,y);
    ctx.scale(-1,1);
    ctx.drawImage(img,0,0,width,height);
    ctx.setTransform(1,0,0,1,0,0);
}