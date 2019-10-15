class FadeDrawing extends GameObject {
	constructor(drawFunction, opacity = 1, fadeSpeed = .2) {
		super();
		this.drawFunction = drawFunction;
		this.opacity = opacity;
		this.fadeSpeed = fadeSpeed;
	}
	update() {
		this.opacity -= this.fadeSpeed;
		if (this.opacity <= 0)
			this.die();
	}
	draw() {
		ctx.globalAlpha = this.opacity;
		this.drawFunction(this.opacity);
		ctx.globalAlpha = 1;
	}
}