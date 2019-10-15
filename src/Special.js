class SpecialPickup extends GameObject {
	constructor(x, y, doDialog = true) {
		super();
		this.x = x;
		this.y = y;
		this.doDialog = doDialog;
	}
	update() {
		if (this.isTouching(player) && controller.interactClicked && player.special != this.special) {
			player.special = this.special;
			if (this.doDialog) {
				this.doDialog = false;
				dialog.begin(this.getDialog());
			}
		}
	}
	draw() {
		if (player.special != this.special)
			this.drawSprite("pickup");
	}
}
SpecialPickup.prototype.width = 20;
SpecialPickup.prototype.height = 20;