var switches = [];
var switchColors = [];

class Switch extends GameObject {
	constructor(index, x, y, defaultState, color) {
		super();
		this.index = index;
		this.x = x;
		this.y = y;
		switches[this.index] = defaultState;
		switchColors[this.index] = color;
	}
	update() {//TODO change so that players broadcast interact instead of each object checking
		this.touched = null;
		allObjects().forEach(oj => {
			if (oj.controller && this.isTouching(oj)) {
				this.touched = oj;
				if (oj.controller.interactClicked)
					switches[this.index] = !switches[this.index];
			}
		});
	}
	draw() {
		ctx.fillStyle = switchColors[this.index];
		ctx.fillRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width*zoom, this.height*zoom);
		this.drawSprite(switches[this.index] ? "switchOn" : "switchOff");
		if (this.touched) {
			ctx.textAlign = "center";
			//ctx.fillStyle = "#00FFFF";
			fillTextOnStage(this.touched.controller.getBindText("interact"), this.x, this.y - this.height - 10, 15);
		}
	}
}
Switch.prototype.speciesName = "Switch";
Switch.prototype.sprites = makeSprites("src/Objects/SwitchDoor.png", {
	switchOn : {x:0, y:0, width:20, height:20},
	switchOff : {x:0, y:20, width:20, height:20},
}, false);
Switch.prototype.width = 20;
Switch.prototype.height = 20;

class Door extends GameObject {
	constructor(index, x, y, width, height) {
		super();
		this.index = index;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		
	}
	draw() {
		if (switches[this.index]) {
			ctx.fillStyle = switchColors[this.index];
			ctx.fillRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width*zoom, this.height*zoom);
		}
	}
	isSolid(x, y) {
		if (switches[this.index]) {
			return (x >= this.x-this.width/2 && x <= this.x+this.width/2 && y <= this.y && y > this.y-this.height);
		}
	}
}
Door.prototype.speciesName = "Door";
Door.prototype.sprites = Switch.prototype.sprites;