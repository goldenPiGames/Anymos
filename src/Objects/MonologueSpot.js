class MonologueSpot extends NPC {
	constructor(name, x, y, ...dialog) {
		super(name, MonologueSpot.prototype.sprites.bubble, x, y, true, ...dialog.map(gar => typeof gar == "string" ? new DialogLine("Anymos", gar, "#00FFFF") : gar));
	}
	update() {
		super.update();
		this.facingRight = true;
	}
}
MonologueSpot.prototype.sprites = makeSprites("src/Objects/MonologueSpot.png", {
	bubble: {x:0, y:0, width:20, height:26},
}, true);