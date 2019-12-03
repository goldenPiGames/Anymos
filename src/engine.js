var loading = {
	update : function() {
		
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
	}
}
var runnee = loading;
var gameObjects = [];
const FPS = 30; //30

var engine = {
    frameDelay : 1000 / FPS,
	particles : [],
	run : function() {
		var desiredTime = Date.now() + this.frameDelay;
		//controller.fromGamepad();
		updateControllersBefore();
		if (dialogActive)
			dialog.update();
		else
			runnee.update();
		runnee.draw();
		if (dialogActive)
			dialog.draw();
		updateControllersAfter();
		//controller.unClick();
		setTimeout(()=>this.run(), Math.max(0, desiredTime-Date.now()));
	},
	
}

//const TRUE_SIGHT_RADIUS = 64;

var gameEngine = {
	name : "Game Engine",
	update : function() {
		if (globalController.pauseClicked) {
			pause.begin();
			return;
		}
		if (globalController.restartClicked) {
			reEvalAnym();
			loadStage(currentStageName, false);
			return;
		}
		stageTimer ++;
		player.update();
		gameObjects.forEach(oj=>oj.update());
		removeDead(gameObjects);
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
		updateZoom();
		drawStageBack();
		gameObjects.forEach(oj => oj.draw());
		player.draw();
		drawStageFore();
		hud.draw();
	},
	updatesObjects : true
}

function allObjects() {
	if (runnee == multiplayerEngine)
		return [...players, ...gameObjects]
	else
		return [player, ...gameObjects];
}

//var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var gameReady = {
	name : "Ready",
	next : gameEngine,
	update : function() {
		if (player.controller.leftClicked || player.controller.rightClicked || player.controller.upClicked || player.controller.downClicked || player.controller.jumpClicked || player.controller.attackClicked || player.controller.shootClicked || player.controller.pauseClicked) {
			runnee = this.next;
			this.next.update();
		}
	},
	draw : function() {
		this.next.draw();
	}
}

function removeDead(ray) {
	var i = 0;
	while (i < ray.length) {
		if (ray[i].dead)
			ray.splice(i, 1);
		else
			i++;
	}
}

function clearCanvases() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	fctx.clearRect(0, 0, fcanvas.width, fcanvas.height);
}