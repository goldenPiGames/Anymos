TeionSpriteNames = ["Standing1", "Normal", "Caps"]
class Teion extends GameObject {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
Teion.prototype.sprites = makeSprites("src/Enemies/Teion.png", {
	normal : {x:0, y:2, width:11, height:40},
	Caps : {x:11, y:0, width:13, height:42},
});