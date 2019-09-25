var settings = {
	music : localStorage.getItem("music") || "On",
	sfx : localStorage.getItem("sfx") || "On",
	anymDisplay : localStorage.getItem("anymDisplay") || "Sec:Fra",
	onDeath : localStorage.getItem("onDeath") || "Exit",
	profanity : localStorage.getItem("profanity") || "Clean",
	font : localStorage.getItem("font") || "monospace",
	sfxSystem : localStorage.getItem("sfxSystem") || "audio",
}

const SETTINGS_INFO = {
	list : ["music", "sfx", "anymDisplay", "onDeath", "profanity", "font", "sfxSystem"],
	music : {
		name : "Music",
		description : "Whether music will be played.",
		choices : ["On", "Off"],
		descriptions : {
			"On" : "Music is played",
			"Off" : "Music is muted.",
		}
	},
	sfx : {
		name : "SFX",
		description : "Whether sound effects will be played.",
		choices : ["On", "Off"],
		descriptions : {
			"On" : "Sound effects are played",
			"Off" : "Sound effects are muted.",
		}
	},
	anymDisplay : {
		name : "Anym Display",
		description : "How Anym (time) is displayed on the level select and HUD.",
		choices : [/*"Seconds", "Sec.cSec",*/ "Sec:Fra", "Frames"],
		descriptions : {
			"Seconds" : "Seconds only, e.g. 94",
			"Sec.cSec" : "Seconds and centiseconds, e.g. 94.57",
			"Sec:Fra" : "Seconds and frames, e.g. 94:17",
			"Frames" : "Frames, e.g. 2813"
		}
	},
	onDeath : {
		name : "On Death",
		description : "What to do when you die during a stage.",
		choices : ["Exit", "Restart"],
		descriptions : {
			"Exit" : "Exit the stage and return to the level select.", 
			"Restart" : "Immediately restart the level."
		}
	},
	profanity : {
		name : "Profanity",
		description : "Slightly changes some dialog.",
		choices : ["Clean", "Profane"],
		descriptions : {
			"Clean" : "No profanity.",
			"Profane" : "Don't let you kids play it.",
		}
	},
	font : {
		name : "Font",
		description : "The font used to display most text.",
		choices : ["monospace", "serif", "sans-serif", /*"OxygenMono", */"Determination"],
		descriptions : {
			"monospace" : "The default monospace font of your browser.",
			"serif" : "The default serif font of your browser.",
			"sans-serif" : "The default sans-serif font of your browser.",
			"OxygenMono" : "Oxygen Mono, a monospace font. Might not work.",
			"Determination" : "Credit to Haley Wakamatsu. Based off a certain game.", //Haley Wakamatsu, https://www.behance.net/gallery/31268855/Determination-Better-Undertale-Font)
		}
	},
	sfxSystem : {
		name : "SFX System",
		description : "How sound effects are played. Must reload the page to take effect.",
		choices : ["audio", "Pizzicato"],
		descriptions : {
			"audio" : "Using HTML5's <audio> elements.",
			"Pizzicato" : "Using the Web Audio API and the Pizzicato.js library.",
		}
	}
}
const SETTINGS_ENTRY_HEIGHT = 50;

function profane() {
	return settings.profanity == "Profane";
}

function doSettings() {
	runnee = settingsScreen;
}

var settingsScreen = {
	update : function() {
		if (controller.attackClicked) {
			for (set in settings) {
				localStorage.setItem(set, settings[set]);
			}
			doMainMenu();
		} else if (controller.upClicked && this.index > 0)
			this.index --;
		else if (controller.downClicked && this.index < SETTINGS_INFO.list.length-1)
			this.index ++;
		else if (controller.leftClicked || controller.rightClicked) {
			var choices = SETTINGS_INFO[SETTINGS_INFO.list[this.index]].choices;
			var current = settings[SETTINGS_INFO.list[this.index]];
			var cindex = choices.findIndex(function(ping){return ping == current});
			var nindex;
			if (controller.rightClicked) {
				nindex = cindex + 1;
				if (nindex >= choices.length)
					nindex -= choices.length;
			} else {
				nindex = cindex - 1;
				if (nindex < 0)
					nindex += choices.length;
			}
			settings[SETTINGS_INFO.list[this.index]] = choices[nindex];
		}
	},
	draw : function() {
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = (SETTINGS_ENTRY_HEIGHT-10)+"px "+settings.font;
		ctx.fillStyle = "#FFFFFF";
		ctx.drawImage(miscSprites.Selector, 10, 20 + SETTINGS_ENTRY_HEIGHT * (this.index+.5) - miscSprites.Selector.height/2);
		for (var i = 0; i < SETTINGS_INFO.list.length; i++) {
			ctx.fillText(SETTINGS_INFO[SETTINGS_INFO.list[i]].name, 20 + miscSprites.Selector.width, 10 + SETTINGS_ENTRY_HEIGHT * (i+1));
			ctx.fillText(settings[SETTINGS_INFO.list[i]], canvas.width*2/3 - ctx.measureText(settings[SETTINGS_INFO.list[i]]).width/2, 10 + SETTINGS_ENTRY_HEIGHT * (i+1));
		}
		flipHorizontally(miscSprites.Selector, canvas.width*2/3 - ctx.measureText(settings[SETTINGS_INFO.list[this.index]]).width/2 - miscSprites.Selector.width - 10, 20 + SETTINGS_ENTRY_HEIGHT * (this.index+.5) - miscSprites.Selector.height/2);
		ctx.drawImage(miscSprites.Selector, canvas.width*2/3 + ctx.measureText(settings[SETTINGS_INFO.list[this.index]]).width/2 + 10, 20 + SETTINGS_ENTRY_HEIGHT * (this.index+.5) - miscSprites.Selector.height/2);
		ctx.font = "30px "+settings.font;
		ctx.fillText(SETTINGS_INFO[SETTINGS_INFO.list[this.index]].description, 10, canvas.height - 50);
		ctx.fillText(SETTINGS_INFO[SETTINGS_INFO.list[this.index]].descriptions[settings[SETTINGS_INFO.list[this.index]]], 10, canvas.height - 10);
	},
	index : 0
}

function displayAnym(amount) {
	if (amount != amount || amount == undefined)
		return "---";
	if (amount == Infinity)
		return "∞";
	switch (settings.anymDisplay) {
		case "Seconds": return Math.floor(amount/30); break;
		case "Sec.cSec": return (amount/30).toFixed(2); break;
		case "Sec:Fra": return Math.floor(amount/30)+":"+((amount-30*Math.floor(amount/30)) < 10 ?"0":"") + (amount-30*Math.floor(amount/30)); break;
		case "Frames": return amount; break;
	}
}