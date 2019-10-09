var canvas;
var ctx;
var stage;
const MISC_SPRITE_NAMES = ["MainMenuLogo", "Selector", "Paused", "SelectStage", "SelectStageNo", "SelectStage100", "SelectEnd", "SelectEndNo", "SelectCorners", "Gamepad"]
var miscSprites;
const MISC_SFX_NAMES = ["Bump", "Thunder1", //NSMB Wii
	"Swish3", "Swish4", "Oof", "SPM_Smash", "WindShort", "Wrong"] //zapsplat.com
var miscSprites = {};
var miscSFX = {};
var firstRun = false;
var forReal = true;
const SYKLOS_COLOR = "#00A2E8";
var usingPizz = (settings.sfxSystem);

//var stageBackground;

function begin() {
	eventCatcherDiv = document.getElementById("EventCatcher");
    // eventCatcherDiv events go here
	
	canvas = document.getElementById("GraphicsBox");
	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
//	ctx.mozImageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;
	initMusic();
	engine.run();
	loadGame();
	loadReturn = begin2;
	resetLoading();
	MISC_SPRITE_NAMES.forEach(function(nom) {
		miscSprites[nom] = makeImage("src/MiscSprites/"+nom+".png");
	});
	//TODO make spritesheet for misc sprites
	//miscSprites = makeSprites("src/MiscSprites.png")
	MISC_SFX_NAMES.forEach(function(nom) {
		miscSFX[nom] = makeSound("src/MiscSFX/"+nom+".mp3");
	});
	applySettings();
	//begin2();
}
function begin2() {
	doMainMenu();
	//loadStage("TutorialMovement");
}

var loadingTotal = 0;
var loadedYet = 0;
var loadReturn = function(){};
function resetLoading() {
	loadingTotal = 0;
	loadedYet = 0;
}
function makeImage(src) {
	var img = new Image();
	loadingTotal++;
	img.loaded = false;
	img.onload = function() {
		loadedYet++;
		//img.crossOrigin = "anonymous";
		img.loaded = true;
		if (loadedYet >= loadingTotal) {
			resetLoading();
			loadReturn();
		}
	};
	img.src = src;
	return img;
}

function makeSprites(sauce, sec, prel = true) {
	var image;
	if (typeof sauce == "string") {
		if (prel)
			image = makeImage(sauce);
	} else {
		image = sauce;
		sauce = image.src;
	}
	var sheetData = {image:image, src:sauce};
	if (Array.isArray(sec)) {
		var subs = Array.prototype.slice.call(arguments, 1);
		subs.forEach(function(oj) {
			oj.image = sauce;
			sheetData[oj.name] = oj;
			oj.parent = sheetData;
		});
	} else {
		for (var sub in sec) {
			sheetData[sub] = sec[sub];
			sheetData[sub].image = image;
			sheetData[sub].parent = sheetData;
		}
	}
	return sheetData;
}

function loadSprites(data) {
	//console.log(data);
	var image = makeImage(data.src);
	//console.log(image);
	data.image = image;
	for (var sub in data) {
		data[sub].image = image;
	}
}

function makeSound(src) {
	//loadingTotal++;
	var snd;
	if (usingPizz) {
		snd = new Pizzicato.Sound(src);
		snd.attack = 0;
	} else {
		snd = document.createElement("audio");
		snd.src = src;
		snd.setAttribute("preload", "auto");
		snd.setAttribute("controls", "none");
		snd.style.display = "none";
		document.body.appendChild(snd);
    }
	return snd;
}

function doNothing() {};

function PRound(num, seed) {
	var whole = Math.floor(num);
	var partial = num-whole;
	if (seed == undefined)
		return whole + ((Math.random() < partial) ? 1 : 0);
	return whole + ((seed < partial) ? 1 : 0);
}

function flipCoin() {
	return (Math.random() >= .5);
}

function greater(t, f) {
	if (t > f)
		return true;
	if (t < f)
		return false;
	return Math.random() <= 1/2;
}

function mid() {
	var args = Array.prototype.slice.call(arguments);
	args.sort(function(a, b){return a - b});
	return args[Math.floor(args.length/2)];
};

function Pmax() {
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		if (!args[i])
			args[i] = 0;
	}
	return Math.max.apply(this, args);
}