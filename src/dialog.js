var dialogActive = false;
const DIALOG_HEIGHT = 200;
const SPEAKER_BOX_WIDTH = 200;
const SPEAKER_BOX_HEIGHT = 50;
const SIDE_MARGINS = 5;

var dialog = {
	begin : function() {
		var arrayguments = Array.prototype.slice.call(arguments);
		this.list = Array.isArray(arguments[0]) ? (Array.isArray(arguments[0][0]) ?  arguments[0][0]: arguments[0]) : arguments;
		this.index = 0;
		this.skipping = false;
		this.skipBuffer = 1;
		dialogActive = true;
	},
	update : function() {
		this.skipping = globalController.cancel && !this.skipBuffer;
		this.skipBuffer = globalController.cancel && this.skipBuffer;
		if (globalController.selectClicked || this.skipping)
			this.index ++;
		if (typeof this.list[this.index] == "function") {
			this.list[this.index]();
			this.index++;
		}
		if (this.index >= this.list.length) {
			dialogActive = false;
			return;
		}
	},
	draw : function() {
		if (globalController.menu3)
			return false;
		var currentLine = this.list[this.index];
		fctx.globalAlpha = 0.8;
		fctx.textAlign = "left";
		fctx.fillStyle = "#000000";
		fctx.fillRect(0, fcanvas.height - DIALOG_HEIGHT, fcanvas.width, DIALOG_HEIGHT);
		fctx.fillRect(0, fcanvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT, SPEAKER_BOX_WIDTH, SPEAKER_BOX_HEIGHT);
		fctx.globalAlpha = 1.0;
		fctx.lineWidth = 2;
		fctx.strokeStyle = "#FFFFFF";
		fctx.beginPath();
		fctx.moveTo(fcanvas.width, fcanvas.height - DIALOG_HEIGHT);
		fctx.lineTo(1, fcanvas.height - DIALOG_HEIGHT);
		fctx.lineTo(1, fcanvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT);
		fctx.lineTo(SPEAKER_BOX_WIDTH, fcanvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT);
		fctx.lineTo(SPEAKER_BOX_WIDTH, fcanvas.height - DIALOG_HEIGHT);
		fctx.stroke();
		var fontSize = currentLine.size;
		fctx.font = fontSize+"px "+getFont();
		fctx.fillStyle = currentLine.color;
		var lines = getLines(fctx, currentLine.text, fcanvas.width - (SIDE_MARGINS * 2));
		for (i = 0; i < lines.length; i++) { 
			fctx.fillText(lines[i], SIDE_MARGINS, fcanvas.height - DIALOG_HEIGHT + SIDE_MARGINS + 1.2 * fontSize * (i+.75));
		}
		fctx.font = "28px "+getFont();
		fctx.fillText(currentLine.speaker, SIDE_MARGINS, fcanvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT/2 + 10);
	}
}

const MERGE_TEXT1 = "Attention, myself!";
const MERGE_TEXT2 = "I have finally realized our - no, my - true power! The time has come to bring it all together!";
const MERGE_TEXT3 = "Step into the light! Reunite with yourself, and together as one we will brighten the world!";

//---------------------------------------- Dialog Line -----------------------------

var DialogLine = function(speaker, text, color = "#FFFFFF", size = 24, style = "monospace") {
	this.speaker = speaker;
	this.text = text;
	this.color = color;
	this.size = size;
	this.style = style;
}

/**
 * @author @crazy2b from StackOverflow
 */
function getLines(fctx, text, maxWidth) {
	if (text === undefined)
		return [""]//["Something was passed undefined text.", "Nice coding there, boyo."];
	if (Array.isArray(text))
		return text;
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = fctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}