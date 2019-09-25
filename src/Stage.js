var staticColl;
var Stages = {};
var stageImages;
var gravity;
var currentStageName = "TutorialMovement";
var stageActive= false;
var zoomSteps = [1/2, 1, 2, 3, 4, 6, 8];
var stageTimer;
var edgesSolid = true;

const BLOCK = {name:"Block",solid:true,hazard:0};
const AIR = {name:"Air",solid:false,cursed:true,hazard:0}
const DEATH = {name:"Death",solid:false,cursed:true,hazard:Infinity}

function loadStage(stageName, doStuff) {
	if (isEnd(stageName))
		return false;
	runnee = loading;
	paused = false;
	controller.jumpClicked = false;
	currentStageName = stageName;
	reEvalAnym();
	availAnym();
	player = anymos;
	cameraFocus = player;
	player.physicsPrecision = PLAYER_DEFAULT_PHYSPRES;
	player.dx = 0;
	player.dy = 0;
	used = 0;
	maxZoom = 6;
	minZoom = 1;
	gravity = .5;
	lastHitEnemy = null;
	player.grounded = true;
	player.state = "Standing";
	player.stateCycle = 0;
	player.special = null;
	player.flashing = 0;
	player.jumpSpeed = DEFAULT_JUMP_SPEED;
	player.drained = true;
	oobtopcolor = "#00000000";
	oobbottomcolor = "#00000000";
	dynamicBackdrop = null;
	Switches = {};
	edgesSolid = true;
	resetLoading();
	loadReturn = function(){beginStage(doStuff)};
	Stages[stageName].load(doStuff); //loading specific stage
	stageImages = {
		mainBack : makeImage("src/Stages/"+currentStageName+"/MainBack.png"),//stageSrcs.mainBack),
		mainFore : makeImage("src/Stages/"+currentStageName+"/MainFore.png")//stageSrcs.mainFore),
	}
	Stages[stageName].enemies.forEach(function(nem) {
		loadEnemy(nem);
	});
	return true;
}
function beginStage(doStuff) {
	if (!doStuff)
		dialogActive = false;
	normalCameraBounds();
	runnee = gameReady;
	gameReady.next = gameEngine;
	zoomd = zoom; //maybe not
	updateZoom();
	snapZoom();
	stageTimer = 0;
	if (Stages[currentStageName].startFlying)
		shooterEngine.begin();	
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
	var prevBest = Stages[nom].best;
	return (typeof prevBest == "number" && prevBest == prevBest)
}


function stage100(nom) {
	var yeh = true;
	Stages[nom].vessels.forEach(function(vesnom) {
		if (localStorage.getItem("Vessel"+vesnom) != "true")
			yeh = false;
	});
	return yeh;
}

function isEnd(nom) {
	if (Stages[nom] == undefined)
		return false;
	return Stages[nom].end
}

function get100() {
	collectAllVessels();
	for (stag in Stages) {
		Stages[stag].best = Stages[stag].par;
		localStorage.setItem(stag+"Best", Stages[stag].par);
	}
}