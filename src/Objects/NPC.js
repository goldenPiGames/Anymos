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
	update() {//TODO change so that players broadcast interact instead of each object checking
		this.checkInteracted();
		if (this.interacted) {
			this.facingRight = (this.x < player.x);
			player.facingRight = !this.facingRight;
			dialog.begin(this.dialog);
		}
	}
	draw() {
		this.drawSprite(this.sprite);
		if (this.touched) {
			ctx.fillStyle = this.touched.color;
			ctx.textAlign = "center";
			fillTextOnStage(this.touched.controller.getBindText("interact"), this.x, this.y - this.height - 10, 15);
		}
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