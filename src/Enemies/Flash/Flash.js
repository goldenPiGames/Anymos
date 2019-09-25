const FLASH_REDUCE_RATE = .05
var FlashSpriteNames = ["Pickup"];
function Flash() {
	
}

function FlashPickup(x, y, doDialog = true) {
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.doDialog = doDialog;
}
FlashPickup.prototype = Object.create(GameObjectBase)
FlashPickup.prototype.update = function () {
	if (this.isTouching(player) && controller.interactClicked && player.special != "Aqros' Reflector") {
		player.special = "Naluxos' Flash";
		if (this.doDialog) {
			this.doDialog = false;
			dialog.begin(new DialogLine("Anymos", "So this is... Naluxos' Flash.", "#00FFFF"),
				new DialogLine("Naluxos", "Yeah! It's a Special, so you can use it by pressing [Shift] or (R).", "#FFFFFF"),
				new DialogLine("Naluxos", "When you use it, it'll dispel the darkness, but only briefly. You can use it as much as you need, but it may take some energy.", "#FFFFFF"));
		}
	}
}
FlashPickup.prototype.draw = function () {
	if (player.special != "Naluxos' Flash")
		drawSpriteOnStage(Flash.prototype.sprites.Pickup, this.x, this.y);
}

function resolveFlash() {
	used += 30;
	player.flashing = 1;
}