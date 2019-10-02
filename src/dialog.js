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
	update : function(ctx) {
		this.skipping = controller.attack && !this.skipBuffer;
		this.skipBuffer = controller.attack && this.skipBuffer;
		if (controller.jumpClicked || controller.interactClicked || this.skipping)
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
		var currentLine = this.list[this.index];
		ctx.globalAlpha = 0.8;
		ctx.textAlign = "left";
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, canvas.height - DIALOG_HEIGHT, canvas.width, DIALOG_HEIGHT);
		ctx.fillRect(0, canvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT, SPEAKER_BOX_WIDTH, SPEAKER_BOX_HEIGHT);
		ctx.globalAlpha = 1.0;
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#FFFFFF";
		ctx.beginPath();
		ctx.moveTo(canvas.width, canvas.height - DIALOG_HEIGHT);
		ctx.lineTo(1, canvas.height - DIALOG_HEIGHT);
		ctx.lineTo(1, canvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT);
		ctx.lineTo(SPEAKER_BOX_WIDTH, canvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT);
		ctx.lineTo(SPEAKER_BOX_WIDTH, canvas.height - DIALOG_HEIGHT);
		ctx.stroke();
		var fontSize = currentLine.size;
		ctx.font = fontSize+"px "+getFont();
		ctx.fillStyle = currentLine.color;
		var lines = getLines(ctx, currentLine.text, canvas.width - (SIDE_MARGINS * 2));
		for (i = 0; i < lines.length; i++) { 
			ctx.fillText(lines[i], SIDE_MARGINS, canvas.height - DIALOG_HEIGHT + SIDE_MARGINS + 1.2 * fontSize * (i+.75));
		}
		ctx.font = "28px "+getFont();
		ctx.fillText(currentLine.speaker, SIDE_MARGINS, canvas.height - DIALOG_HEIGHT - SPEAKER_BOX_HEIGHT/2 + 10);
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
function getLines(ctx, text, maxWidth) {
	if (text === undefined)
		return [""]//["Something was passed undefined text.", "Nice coding there, boyo."];
	if (Array.isArray(text))
		return text;
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
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