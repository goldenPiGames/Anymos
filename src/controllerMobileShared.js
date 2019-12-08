const EXTERNAL_MOBILE_CONTROLLER = "External Mobile Controller";

class MobileControllerCanvas {
	constructor(canvas, catcher) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.catcher = catcher;
		this.draw();
		console.log("bup")
		//this.canvas.addEventListener("touchstart", function(e){console.log(e)}, true);
		this.catcher.addEventListener("touchstart", e => this.handleStart(e));
		this.canvas.addEventListener("touchmove", e => this.handleMove(e));
		this.canvas.addEventListener("touchend", e => this.handleEnd(e));
		this.dpad = new MobileDPad();
		this.buttonA = new MobileButtonCircle(["select", "jump"], "A", "#00FF00");
		this.buttonB = new MobileButtonCircle(["cancel", "attack"], "B", "#FF0000");
		this.buttonC = new MobileButtonCircle(["menu3", "shoot"], "C", "#0000FF");
		this.buttonI = new MobileButtonCircle(["interact"], "!", "#808080");
		this.buttonS = new MobileButtonCircle(["special"], "S", "#808080");
		this.buttonZI = new MobileButtonCircle(["zoomIn"], "+", "#808080");
		this.buttonZO = new MobileButtonCircle(["zoomOut"], "-", "#808080");
		this.buttonP = new MobileButtonCircle(["pause"], "||", "#808080");
		this.buttonR = new MobileButtonCircle(["restart"], "R", "#808080");
		this.buttons = [this.dpad, this.buttonA, this.buttonB, this.buttonC, this.buttonI, this.buttonS, this.buttonZI, this.buttonZO, this.buttonP, this.buttonR];
		//this.setSize();
	}
	setSize(width, height) {
		if (width) {
			this.canvas.width = width;
			this.canvas.height = height;
			this.canvas.style.width = width+"px";
			this.canvas.style.height = height+"px";
			this.ctx.clearRect(0, 0, width, height);
			console.log(this.canvas)
		} else {
			width = this.canvas.width;
			height = this.canvas.height;
		}
		var abcR = Math.min(200, canvas.width/9, canvas.height/8)
		var abcRight = width - 20;
		var abcBottom = height - 20;
		var top = (height >= width*3/4) ? width*3/4 : 0;
		if (height - top < 6 * abcR)
			top = 0;
		this.buttonA.setLoc(abcRight - 2.1*abcR, abcBottom - 1*abcR, abcR);
		this.buttonB.setLoc(abcRight - 1.0*abcR, abcBottom - 3*abcR, abcR);
		this.buttonC.setLoc(abcRight - 3.2*abcR, abcBottom - 3*abcR, abcR);
		this.buttonS.setLoc(abcRight - 2.1*abcR, abcBottom - 5*abcR, abcR);
		this.dpad.setLoc(20 + 2*abcR, height - 20 - 2*abcR, 2*abcR);
		this.buttonI.setLoc(20 + 2*abcR, abcBottom - 5*abcR, abcR);
		this.buttonZI.setLoc(20 + 0.5*abcR, top + 5 + 0.5*abcR, abcR/2);
		this.buttonZO.setLoc(20 + 0.5*abcR, top + 5 + 1.5*abcR, abcR/2);
		this.buttonR.setLoc(width/2 - 1.0*abcR, top + 5 + abcR/2, abcR/2);
		this.buttonP.setLoc(width/2 + 1.0*abcR, top + 5 + abcR/2, abcR/2);
		this.draw();
	}
	commandsAt(x, y) {
		return this.buttons.reduce((acc, butt) => acc.concat(butt.commandsAt(x, y)), []);
	}
	handleStart(e) {
		//console.log(e);
		e.preventDefault();
		var x = e.changedTouches[0].clientX;
		var y = e.changedTouches[0].clientY;
		var clicked = this.commandsAt(x, y);
		console.log(clicked);
		sendControl({
			whathap : "click",
			commands : clicked,
		});
	}
	handleMove(e) {
		console.log(e);
		e.preventDefault();
		var over = {};
		for (var i = 0; i < e.touches.length; i++) //why does it even use TouchList instead of an array
			this.commandsAt(e.touches[i].clientX, e.touches[i].clientY).forEach(com => over[com] = true);
		sendControl({
			whathap : "change",
			commands : over,
		});
	}
	handleEnd(e) {
		this.handleMove(e);
	}
	draw() {
		if (!this.buttons)
			return;
		this.buttons.forEach(oj=>oj.draw(this.ctx));
	}
}

class MobileButton {
	constructor(binds) {
		this.binds = binds;
	}
	commandsAt(x, y) {
		return this.intersects(x, y) ? this.binds : [];
	}
}

class MobileButtonCircle extends MobileButton {
	constructor(binds, letter, color) {
		super(binds);
		this.letter = letter;
		this.color = color;
	}
	setLoc(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	intersects(x, y) {
		return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.r;
	}
	draw(ctx) {
		ctx.globalAlpha = .5;
		ctx.strokeStyle = this.color;
		ctx.lineWidth = 8;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r - ctx.lineWidth/2, 0, 2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.font = this.r + "px monospace";
		ctx.fillText(this.letter, this.x, this.y);
		//ctx.
	}
}

class MobileDPad {
	constructor() {
		
	}
	setLoc(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.ir = r/3;
	}
	commandsAt(x, y) {
		var dx = x - this.x;
		var dy = y - this.y;
		//var dr = Math.sqrt(dx*dx + dy*dy) < this.r;
		if (dx > this.r || dx < -this.r || dy > this.r || dy < -this.r)
			return [];
		var toret = [];
		if (dx < 0 && dx < dy && dx < -dy)
			toret = ["menuLeft"];
		else if (dx > 0 && dx > dy && dx > -dy)
			toret = ["menuRight"];
		else if (dy < 0)
			toret = ["menuUp"];
		else
			toret = ["menuDown"];
		if (dx < -this.ir)
			toret.push("left");
		else if (dx > this.ir)
			toret.push("right");
		if (dy < -this.ir)
			toret.push("up");
		else if (dy > this.ir)
			toret.push("down", "crouch");
		return toret;
	}
	draw(ctx) {
		ctx.globalAlpha = .5;
		ctx.strokeStyle = this.color;
		var w = 8;
		ctx.lineWidth = w;
		ctx.strokeRect(this.x - this.r  + w/2, this.y - this.r  + w/2, 2*this.r -w, 2*this.r -w);
		ctx.strokeRect(this.x - this.ir - w/2, this.y - this.ir - w/2, 2*this.ir+w, 2*this.ir+w);
	}
}
MobileDPad.prototype.color = "#808080";
MobileDPad.prototype.irrat = 1/4;