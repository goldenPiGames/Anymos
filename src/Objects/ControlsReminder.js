class FloatingText extends GameObject {
	constructor(text, x, y) {
		super();
		this.command = command;
		this.x = x;
		this.y = y;
	}
	update() {
		
	}
	draw() {
		var text = globalController.getBindText(this.command);
		ctx.textAlign = "center";
		ctx.fillStyle = this.color;
		fillTextOnStage(text, this.x, this.y);
	}
}
//ControlsReminder.prototype.color = "#00FFFF";

class ControlsReminder extends GameObject {
	constructor(command, x, y) {
		super();
		this.command = command;
		this.x = x;
		this.y = y;
	}
	update() {
		
	}
	draw() {
		var text = globalController.getBindText(this.command);
		ctx.textAlign = "center";
		ctx.fillStyle = this.color;
		fillTextOnStage(text, this.x, this.y, 15);
	}
}
ControlsReminder.prototype.color = "#00FFFF";