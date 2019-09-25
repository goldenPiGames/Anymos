var canvas;
var ctx;
var stage;
const MISC_SPRITE_NAMES = ["MainMenuLogo", "Selector", "Paused", "SelectStage", "SelectStageNo", "SelectStage100", "SelectEnd", "SelectEndNo", "SelectCorners", "Vessel", "MonologueSpot", "GoalpostBottom", "GoalpostSegment", "GoalpostTop", "EndLight", "Beam", "SwitchOn", "SwitchOff", "Gamepad"]
const MISC_SFX_NAMES = ["Bump", "Thunder1", //NSMB Wii
	"Swish3", "Swish4", "Oof", "SPM_Smash", "WindShort", "Wrong"] //zapsplat.com
var miscSprites = {};
var miscSFX = {};
var firstRun = false;
var forReal = true;
const SYKLOS_COLOR = "#00A2E8";
var usingPizz = (localStorage.getItem("sfxSystem") == "Pizzicato");

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
	for (stag in Stages) {
		Stages[stag].best = parseInt(localStorage.getItem(stag+"Best"));
		Stages[stag].superrun = parseInt(localStorage.getItem(stag+"Superrun"));
	}
	loadReturn = begin2;
	resetLoading();
	PLAYER_SPRITE_NAMES.forEach(function(nom) {
		playerSprites[nom] = makeImage("src/PlayerSprites/"+nom+".png");
	});
	MISC_SPRITE_NAMES.forEach(function(nom) {
		miscSprites[nom] = makeImage("src/MiscSprites/"+nom+".png");
	});
	MISC_SFX_NAMES.forEach(function(nom) {
		miscSFX[nom] = makeSound("src/MiscSFX/"+nom+".mp3");
	});
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

function resetSave() {
	allVesselNames.forEach(function(vess) {
		localStorage.removeItem("Vessel"+vess)
	});
	reEvalAnym();
	for (stag in Stages) {
		localStorage.removeItem(stag+"Best");
		localStorage.removeItem(stag+"Superrun");
		Stages[stag].best = false;
	}
	//currentStageName = "TutorialMovement";
	//doLevelSelect();
	//loadStage("TutorialMovement");
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