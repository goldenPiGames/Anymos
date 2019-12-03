const EXTERNAL_MOBILE_CONTROLLER = "External Mobile Controller";

class MobileControllerCanvas {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.draw();
		this.canvas.addEventListener("touchstart", e => this.handleStart(e));
		this.canvas.addEventListener("touchmove", e => this.handleMove(e));
		this.canvas.addEventListener("touchend", e => this.handleEnd(e));
		this.setSize();
	}
	setSize(width, height) {
		if (width) {
			canvas.width = width;
			canvas.height = height;
		}
	}
	handleStart(e) {
		console.log(e);
		e.preventDefault();
		sendControl({
			event : e,
		});
	}
	handleMove(e) {
		e.preventDefault();
	}
	handleEnd(e) {
		e.preventDefault();
	}
	draw() {
		
	}
}