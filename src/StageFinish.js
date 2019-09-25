function finishStage(next) {
	if (!prelude) {
		var vesses = Stages[currentStageName].vessels;
		stageFinishScreen.collectedBefore = [];
		for (var i = 0; i < vesses.length; i++) {
			stageFinishScreen.collectedBefore[i] = isVesselCollected(vesses[i]);
		}
		collectedVesselNames.forEach(function(vess){
			localStorage.setItem("Vessel"+vess, "true");
		});
		stageFinishScreen.collectedNow = [];
		for (var i = 0; i < vesses.length; i++) {
			stageFinishScreen.collectedNow[i] = false;
			for (var j = 0; j < collectedVesselNames.length; j++) {
				if (vesses[i] == collectedVesselNames[j])
					stageFinishScreen.collectedNow[i] = true;
			}
		}
		var prevSuper = Stages[currentStageName].superrun;
		//console.log(prevSuper, (used < prevSuper || typeof prevSuper != "number" || prevSuper != prevSuper))
		if (collectedVesselNames.length >= Stages[currentStageName].vessels.length && (used < prevSuper || typeof prevSuper != "number" || prevSuper != prevSuper)) {
			Stages[currentStageName].superrun = used;
			localStorage.setItem(currentStageName+"Superrun", used);
		}
		collectedVesselNames = [];
	}
	stageFinishScreen.from = currentStageName;
	currentStageName = next;
	stageFinishScreen.to = currentStageName;
	var prevBest = Stages[currentStageName].best;
	stageFinishScreen.prevBest = prevBest;
	stageFinishScreen.par = Stages[currentStageName].par;
	if (used < prevBest || typeof prevBest != "number" || prevBest != prevBest) {
		Stages[currentStageName].best = used;
		localStorage.setItem(currentStageName+"Best", used);
	}
	if (firstRun) {
		loadStage(next, true);
		return;
	}
	runnee = stageFinishScreen;
	//doLevelSelect();
}

var stageFinishScreen = {
	solenoidCt : 0,
	update : function() {
		if (controller.jumpClicked) {
			doLevelSelect();
		}
	},
	draw : function() {
		this.solenoidCt++;
		if (this.solenoidCt >= 12) {
			this.solenoidCt = 0;
			this.solenoid = !this.solenoid;
		}
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//this.context2D.fillStyle = BG_COLOR;
		//this.context2D.fillRect(0, 0, 800, 600);
		updateZoom();
		drawStageBack();
		gameObjects.forEach(function(obj) {
			//console.log(obj)
			obj.draw();
		});
		player.draw();
		drawStageFore();
		ctx.strokeStyle = "#FFFFFF";
		ctx.fillStyle = "#202020C0";
		ctx.fillRect  (100, 100, canvas.width-200, canvas.height-200);
		ctx.strokeRect(100, 100, canvas.width-200, canvas.height-200);
		ctx.fillStyle = "#FFFFFF";
		var toptxt = this.from==this.to ? Stages[this.from].displayName : (Stages[this.from].displayName + " - " + Stages[this.to].displayName);
		ctx.font = "40px "+settings.font;
		ctx.fillText(toptxt, canvas.width/2 - ctx.measureText(toptxt).width/2, 150);
		ctx.font = "40px "+settings.font;
		ctx.fillText("This run: ", canvas.width/2 - ctx.measureText("This run: ").width, 220);
		ctx.fillText("Previous best: ", canvas.width/2 - ctx.measureText("Previous best: ").width, 270);
		ctx.fillText(displayAnym(this.prevBest), canvas.width/2, 270);
		if (this.par) {
			ctx.fillText("Par: ", canvas.width/2 - ctx.measureText("Par: ").width, 320);
			ctx.fillText(displayAnym(this.par), canvas.width/2, 320);
		}
		var better = !(this.prevBest < used)
		ctx.fillStyle = this.solenoid && better ? "#00FFFF" : "#FFFFFF";
		ctx.fillText(displayAnym(used), canvas.width/2, 220);
		if (!prelude) {
			ctx.fillText("Vessels: ", canvas.width/2 - ctx.measureText("Vessels: ").width, 380);
			for (var i = 0; i < this.collectedNow.length; i++) {
				ctx.fillStyle = this.collectedNow[i] ? (this.collectedBefore[i] ? "#00FFFF" : (this.solenoid ? "#00FF80" : "#00FFFF")) : (this.collectedBefore[i] ? "#BFBFBF" : "#7F7F7F");
				ctx.fillRect(canvas.width/2 + 10 + 30 * i, 350, 25, 40);
			}
		}
	}
}