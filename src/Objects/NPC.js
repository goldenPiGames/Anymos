class NPC extends GameObject {
	constructor(name, sprite, x, y, facingRight, ...dialog) {
		super();
		this.name = name;
		this.sprite = sprite;
		this.x = x;
		this.y = y;
		this.facingRight = facingRight;
		this.width = sprite.width+6;
		this.height = sprite.height;
		this.dialog = dialog;
		//this.lines = Array.prototype.slice.call(arguments, 5);
	}
	update() {
		/*if (!this.inited) {
			this.init();
		}*/
		if (this.isTouching(player) && controller.interactClicked) {
			this.facingRight = (this.x < player.x);
			player.facingRight = !this.facingRight;
			
			dialog.begin(this.dialog);
			//if (this.name)
			//	this.collect();
		}
	}
	draw() {
		this.drawSprite(this.sprite);
	}
	/*NPC.prototype.init = function() {
		if (this.imageGetFunction)
			this.image = this.imageGetFunction();
		this.width = this.image.width+6;
		this.height = this.image.height;
	}*/
}
NPC.prototype.width = 0;
NPC.prototype.hittable = false;

//function(){return Teion.prototype.sprites.Normal}