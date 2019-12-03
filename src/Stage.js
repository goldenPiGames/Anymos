var staticColl;
var Stages = {};
var stageImages;
var gravity;
var currentStageName;
var currentStage;
var stageActive= false;
var zoomSteps = [1/2, 1, 2, 3, 4, 6, 8];
var stageTimer;
var edgesSolid = true;

const BLOCK = {name:"Block",solid:true,hazard:0};
const AIR = {name:"Air",solid:false,cursed:true,hazard:0}
const DEATH = {name:"Death",solid:false,cursed:true,hazard:Infinity}

function loadStage(stageName, doStuff=true) {
	if (isEnd(stageName))
		return false;
	runnee = loading;
	paused = false;
	currentStageName = stageName;
	currentStage = Stages[stageName];
	reEvalAnym();
	availAnym();
	if (currentStage.players > 1) {
		players[0] = new AnymosPlayer();
		players[0].controller = controllers[0];
		players[1] = new AnymosPlayer();
		players[1].controller = controllers[1];
		cameraFocus = new MultiFocus(players);
	} else {
		player = (currentStage.startFlying) ? new PlanePlayer() : new AnymosPlayer();
		cameraFocus = player;
	}
	used = 0;
	maxZoom = 6;
	minZoom = 1;
	gravity = .5;
	lastHitEnemy = null;
	oobtopcolor = "#00000000";
	oobbottomcolor = "#00000000";
	dynamicBackdrop = null;
	dynamicForeground = null;
	illuminateFore = false;
	switches = [];
	edgesSolid = true;
	resetLoading();
	loadReturn = ()=>beginStage(doStuff);
	stageImages = {
		mainBack : makeImage("src/Stages/"+(currentStage.reuseBack||currentStageName)+"/MainBack.png"),
		mainFore : makeImage("src/Stages/"+(currentStage.reuseFore||currentStageName)+"/MainFore.png"),
	}
	currentStage.load(doStuff); //loading specific stage
	Stages[stageName].toLoad.forEach(function(nem) {
		loadEnemy(nem);
	});
	return true;
}
function beginStage(doStuff) {
	normalCameraBounds();
	updateZoom();
	snapZoom();
	stageTimer = 0;
	if (currentStage.players > 1) {
		multiplayerCountdown.begin();
	} else {
		runnee = gameReady;
		if (Stages[currentStageName].startFlying)
			shooterEngine.begin();
		else
			gameReady.next = gameEngine;
	}
}

function exitStage() {
	stageActive = false;
	reEvalAnym();
	doLevelSelect();
}

function isStageAvailable(nom) {
	if (Stages[nom] == undefined)
		return false;
	if (Stages[nom].previous == undefined)
		return true;
	var prevBest = Stages[nom].bestTo;
	return (typeof prevBest == "number" && prevBest == prevBest)
}


function isStage100(nom) {
	return Stages[nom].vessels.reduce((acc, cur) => acc && isVesselCollected(cur), true);
	/*var yeh = true;
	Stages[nom].vessels.forEach(function(vesnom) {
		if (localStorage.getItem("Vessel"+vesnom) != "true")
			yeh = false;
	});
	return yeh;*/
}

function isEnd(nom) {
	if (Stages[nom] == undefined)
		return false;
	return Stages[nom].end
}