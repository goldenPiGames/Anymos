const SETTINGS_INFO = {
	list : ["music", "sfx", "anymDisplay", "onDeath", "profanity", "font", "sfxSystem"],
	music : {
		name : "Music",
		description : "Whether music will be played.",
		choices : [
			{name:"Off", description:"Music is muted."},
			{name:"On", description:"Music is played."},
		],
		default:1,
	},
	sfx : {
		name : "SFX",
		description : "Whether sound effects will be played.",
		choices : [
			{name:"Off", description:"Music is muted."},
			{name:"On", description:"Music is played."},
		],
		default:1,
	},
	anymDisplay : {
		name : "Anym Display",
		description : "How Anym (time) is displayed on the level select and HUD.",
		choices : [
			{name:"Sec.cSec", description:"Seconds and centiseconds, e.g. 24.53"},
			{name:"Sec:Fra", description:"Seconds and frames, e.g. 24:16"},
			{name:"Frames", description:"Frames, e.g. 736"},
		],
		default:1,
	},
	onDeath : {
		name : "On Death",
		description : "What to do when you die during a stage.",
		choices : [
			{name:"Exit", description:"Exit the stage and return to the level select."},
			{name:"Restart", description:"Immediately restart the level."},
		],
		default:0,
	},
	profanity : {
		name : "Profanity",
		description : "Slightly changes some dialog.",
		choices : [
			{name:"Off", description:"Safe for your ears."},
			{name:"On", description:"Not so much."},
		],
		default:0,
	},
	font : {
		name : "Font",
		description : "The font used to display most text.",
		choices : [
			{name:"monospace", description:"The default monospace font of your browser."},
			{name:"serif", description:"The default serif font of your browser."},
			{name:"sans-serif", description:"The default sans-serif font of your browser."},
			//"OxygenMono" : "Oxygen Mono, a monospace font. Might not work.",
			{name:"Determination", description:"Credit to Haley Wakamatsu. Based off a certain game."}, //Haley Wakamatsu, https://www.behance.net/gallery/31268855/Determination-Better-Undertale-Font)
		],
		default:0,
	},
	sfxSystem : {
		name : "SFX System",
		description : "How sound effects are played (must reload the page to take effect)",
		choices : [
			{name:"audio", description:"Using HTML5's <audio> elements."},
			{name:"Pizzicato", description:"Using the Web Audio API and the Pizzicato.js library."},
		],
		default:0,
	}
}

var settings;
if (localStorage.getItem("AnymosSettings"))
	settings = JSON.parse(localStorage.getItem("AnymosSettings"));
else {
	settings = {};
	SETTINGS_INFO.list.forEach(oj=>{
		settings[oj] = SETTINGS_INFO[oj].default;
	});
}

const SETTINGS_ENTRY_HEIGHT = 50;

/*function profane() {
	return settings.profanity == "Profane";
}*/

function getFont() {
	return SETTINGS_INFO.font.choices[settings.font].name;
}

function doSettings() {
	runnee = settingsScreen;
}

function applySettings() {
	music.volume = settings.music;
}

function saveSettings() {
	localStorage.setItem("AnymosSettings", JSON.stringify(settings));
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
			var cname = SETTINGS_INFO.list[this.index];
			if (controller.rightClicked) {
				settings[cname] ++;
				if (settings[cname] >= SETTINGS_INFO[cname].choices.length)
					settings[cname] = 0;
			} else {
				settings[cname] --;
				if (settings[cname] < 0)
					settings[cname] = SETTINGS_INFO[cname].choices.length - 1;
			}
			applySettings();
			saveSettings();
			/*var choices = SETTINGS_INFO[SETTINGS_INFO.list[this.index]].choices;
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
			settings[SETTINGS_INFO.list[this.index]] = choices[nindex];*/
		}
	},
	draw : function() {
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = (SETTINGS_ENTRY_HEIGHT-10)+"px "+getFont();
		ctx.fillStyle = "#FFFFFF";
		ctx.drawImage(miscSprites.Selector, 10, 20 + SETTINGS_ENTRY_HEIGHT * (this.index+.5) - miscSprites.Selector.height/2);
		for (var i = 0; i < SETTINGS_INFO.list.length; i++) {
			var set = SETTINGS_INFO.list[i];
			ctx.textAlign = "left";
			ctx.fillText(SETTINGS_INFO[set].name, 20 + miscSprites.Selector.width, 10 + SETTINGS_ENTRY_HEIGHT * (i+1));
			ctx.textAlign = "center";
			ctx.fillText(SETTINGS_INFO[set].choices[settings[set]].name, canvas.width*2/3, 10 + SETTINGS_ENTRY_HEIGHT * (i+1));
		}
		var text = SETTINGS_INFO[SETTINGS_INFO.list[this.index]].choices[settings[SETTINGS_INFO.list[this.index]]].name;
		flipHorizontally(miscSprites.Selector, canvas.width*2/3 - ctx.measureText(text).width/2 - miscSprites.Selector.width - 10, 20 + SETTINGS_ENTRY_HEIGHT * (this.index+.5) - miscSprites.Selector.height/2);
		ctx.drawImage(miscSprites.Selector, canvas.width*2/3 + ctx.measureText(text).width/2 + 10, 20 + SETTINGS_ENTRY_HEIGHT * (this.index+.5) - miscSprites.Selector.height/2);
		ctx.font = "30px "+getFont();
		ctx.textAlign = "left";
		ctx.fillText(SETTINGS_INFO[SETTINGS_INFO.list[this.index]].description, 10, canvas.height - 50);
		ctx.fillText(SETTINGS_INFO[SETTINGS_INFO.list[this.index]].choices[settings[SETTINGS_INFO.list[this.index]]].description, 10, canvas.height - 10);
	},
	index : 0
}

function displayAnym(amount) {
	if (amount != amount || amount == undefined)
		return "---";
	if (amount == Infinity)
		return "∞";
	switch (settings.anymDisplay) {
		//case "Seconds": return Math.floor(amount/30); break;
		case 0: return (amount/30).toFixed(2); break;
		case 1: return Math.floor(amount/30)+":"+((amount-30*Math.floor(amount/30)) < 10 ?"0":"") + (amount-30*Math.floor(amount/30)); break;
		case 2: return amount; break;
	}
}

//applySettings();