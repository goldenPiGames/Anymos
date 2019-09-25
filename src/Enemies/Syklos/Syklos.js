SyklosSpriteNames = ["Pickup", "Puff1", "Puff2", "Puff3", "Puff4"]
function Syklos(x, y) {
	this.x = x;
	this.y = y;
}
Syklos.prototype = Object.create(GameObjectBase);