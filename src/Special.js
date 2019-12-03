class SpecialPickup extends GameObject {
	constructor(x, y, doDialog = true) {
		super();
		this.x = x;
		this.y = y;
		this.doDialog = doDialog;
	}
	update() {
		allObjects().forEach(oj => {
			if (oj.controller && this.isTouching(oj) && oj.controller.interactClicked) {
				oj.special = this.special;
				if (this.doDialog) {
					this.doDialog = false;
					dialog.begin(this.getDialog());
				}
				if (this.onCollect)
					this.onCollect();
			}
		});
	}
	draw() {
		if (player.special != this.special)
			this.drawSprite("pickup");
	}
}
SpecialPickup.prototype.width = 20;
SpecialPickup.prototype.height = 20;