const ___CHANCE = 1;
function ___(big) {
	if (Math.random() > ___CHANCE)
		return;
	this.width = 20;
	this.height = 20;
	this.counter = 0;
	gameObjects.push(this);
}
___.prototype = Object.create(GameObjectBase)
___.update = function() {
	if (this.touching(player)
		this.counter++;
	else 
		this.counter = 0;
	if (this.counter) > 300)
		console.log(this.message);
}