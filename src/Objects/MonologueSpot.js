class MonologueSpot extends NPC {
	constructor(name, x, y, ...dialog) {
		super(name, MonologueSpot.prototype.sprites.bubble, x, y, true, ...dialog.map(gar => typeof gar == "string" ? new DialogLine("Anymos", gar, "#00FFFF") : gar));
	}
	update() {
		super.update();
		this.facingRight = true;
	}
}
MonologueSpot.prototype.sprites = makeSprites("src/Objects/MonologueSpot.png", {
	bubble: {x:0, y:0, width:20, height:26},
}, true);

class HoverInfoSpot extends GameObject {
	constructor(x, y, text) {
		super();
		this.x = x;
		this.y = y;
		this.text = text;
	}
	update() {
		//this.checkInteracted();
	}
	draw() {
		this.checkInteracted();
		this.drawSprite("bubble");
		if (this.touched) {
			hud.setParagraph(this.text);
			/*ctx.textAlign = "center";
			var fontSize = 28;
			fctx.font = fontSize+"px "+getFont();
			fctx.fillStyle = this.color;
			var lines = getLines(fctx, this.text, fcanvas.width - (SIDE_MARGINS * 2));
			for (var i = 0; i < lines.length; i++) { 
				fctx.fillText(lines[i], SIDE_MARGINS, 60 + 1.2 * fontSize * (i+.75));
			}*/
		}
	}
}
HoverInfoSpot.prototype.sprites = MonologueSpot.prototype.sprites;
HoverInfoSpot.prototype.width = 32;
HoverInfoSpot.prototype.height = 36;
HoverInfoSpot.prototype.color = "#00FFFF";