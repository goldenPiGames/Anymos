const PIXELS_PER_BLOCK = 20;

function blockOfPixel(x, y) {
	var a = Math.floor((y-.1)/PIXELS_PER_BLOCK)
	var b = Math.floor(x/PIXELS_PER_BLOCK)
	if (a - 2 >= staticColl.length)
		return DEATH;
	if (a >= staticColl.length)
		return AIR;
	if (b < 0 || b >= (staticColl[a] || staticColl[0]).length)
		return edgesSolid ? BLOCK : AIR;
	if (a < 0)
		return AIR;
	return staticColl[a][b];
}
function isPixelSolid(x, y) {
	var blox = blockOfPixel(x, y)
	if (blox == undefined)
		return true;
	if (blox.solid)
		return true;
	var ojcol = false;
	gameObjects.forEach(function(oj) {
		if (oj.isSolid) {
			if (oj.isSolid(x,y)) {
				ojcol = true;
			}
		}
	});
	return ojcol;
}
function solidDistance(x, y, direction) {
	for (var i = 0; i < 200; i++) {
		if (!isPixelSolid(x, y))
			return i;
		x += directiondx(direction);
		y += directiondy(direction);
	}
	return i;
}

function clearToSky(x, y) {
	while (!isPixelSolid(x, y) && y > 0) {
		y -= 5;
	}
	return (y <= 0)
}

function hazardOfPixel(x, y, solidOnly = false) {
	var blox = blockOfPixel(x, y);
	return blox.solid || !solidOnly ? blox.hazard : 0;
}

function directiondx(dir) {
	switch (dir) {
		case 1: return 1;
		case 3: return -1;
		default: return 0;
	}
}
function directiondy(dir) {
	switch (dir) {
		case 0: return -1;
		case 2: return 1;
		default: return 0;
	}
}