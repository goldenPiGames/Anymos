var loading = {
	update : function() {
		
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
	}
}
var runnee = loading;
var paused = false;
var gameObjects = [];
const FPS = 30; //30

var engine = {
    frameDelay : 1000 / FPS,
	particles : [],
	run : function() {
		var desiredTime = Date.now() + this.frameDelay;
		controller.fromGamepad();
		if (dialogActive)
			dialog.update();
		else
			runnee.update();
		runnee.draw();
		if (dialogActive)
			dialog.draw();
		controller.unClick();
		setTimeout(()=>this.run(), Math.max(0, desiredTime-Date.now()));
	},
	
}

//const TRUE_SIGHT_RADIUS = 64;

var gameEngine = {
	name : "Game Engine",
	update : function() {
		if (paused) {
			if (controller.shootClicked && !firstRun)
				exitStage();
			if (controller.jumpClicked || controller.pauseClicked)
				paused = false;
			return;
		}
		if (controller.pauseClicked) {
			paused = true;
			return;
		}
		if (controller.restartClicked) {
			reEvalAnym();
			loadStage(currentStageName, false);
			return;
		} else {
			stageTimer ++;
			player.update();
			gameObjects.forEach(oj=>oj.update());
			removeDead(gameObjects);
		}
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
		if (paused) {
			ctx.drawImage(miscSprites.Paused, canvas.width/4, canvas.height/2 - canvas.width / miscSprites.Paused.width * miscSprites.Paused.height / 4, canvas.width / 2, canvas.width / miscSprites.Paused.width * miscSprites.Paused.height / 2);
			ctx.font = "30px monospace";
			ctx.textAlign = "center";
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText("Press Pause [P]/(START) or Jump [A]/(A) to resume", canvas.width/2, canvas.height*3/4-40);
			if (!firstRun)
				ctx.fillText("Press Shoot [D]/(X) to exit the level", canvas.width/2, canvas.height*3/4);
			return;
		}
		updateZoom();
		drawStageBack();
		gameObjects.forEach(obj => obj.draw());
		player.draw();
		drawStageFore();
		/*if (controller.trueSight) {
			for (var i = -TRUE_SIGHT_RADIUS; i <= TRUE_SIGHT_RADIUS; i+=2) {
				for (var j = Math.round(-TRUE_SIGHT_RADIUS*Math.cos(Math.asin(i/TRUE_SIGHT_RADIUS)) - 20); j <= TRUE_SIGHT_RADIUS*Math.cos(Math.asin(i/TRUE_SIGHT_RADIUS)) - 20; j+=2) {
					//console.log (i, j)
					ctx.fillStyle = isPixelSolid(player.x+i, player.y+j) ? "#000000" : "#FFFFFF"
					ctx.fillRect(stagex(player.x+i), stagey(player.y+j), zoom + 0, zoom + .5)
				}
			}
			player.draw();
		}*/
		hud.draw();
	},
	updatesObjects : true
}

//var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var gameReady = {
	name : "Ready",
	next : gameEngine,
	update : function() {
		if (controller.leftClicked || controller.rightClicked || controller.upClicked || controller.downClicked || controller.jumpClicked || controller.attackClicked || controller.shootClicked || controller.pauseClicked) {
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

function playSound(snd) {
	if (settings.sfx != "Off") {
		if (usingPizz) {
			snd.play(0, 0);
		} else {
			snd.currentTime = 0;
			snd.play();
		}
	}
}

function clearCanvases() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	fctx.clearRect(0, 0, fcanvas.width, fcanvas.height);
}