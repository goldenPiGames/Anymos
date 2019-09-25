TeionSpriteNames = ["Standing1", "Normal", "Caps"]
function Teion(x, y) {
	this.x = x;
	this.y = y;
}
Teion.prototype = Object.create(GameObjectBase);