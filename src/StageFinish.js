function finishStage(next) {
	stageFinishScreen.prevRunnee = runnee;
	//console.log(next)
	var vesses = Stages[currentStageName].vessels;
	stageFinishScreen.collectedBefore = [];
	for (var i = 0; i < vesses.length; i++) {
		stageFinishScreen.collectedBefore[i] = isVesselCollected(vesses[i]);
	}
	collectedThisRun.forEach(vess => collectedVessels[vess] = true);
	stageFinishScreen.collectedNow = [];
	for (var i = 0; i < vesses.length; i++) {
		stageFinishScreen.collectedNow[i] = false;
		for (var j = 0; j < collectedThisRun.length; j++) {
			if (vesses[i] == collectedThisRun[j])
				stageFinishScreen.collectedNow[i] = true;
		}
	}
	var prevAll = Stages[currentStageName].bestAll;
	//console.log(prevSuper, (used < prevSuper || typeof prevSuper != "number" || prevSuper != prevSuper))
	if (collectedThisRun.length >= Stages[currentStageName].vessels.length && !(prevAll >= used)) {
		Stages[currentStageName].bestAll = used;
	}
	collectedThisRun = [];
	stageFinishScreen.from = currentStageName;
	var froms = Stages[currentStageName];
	currentStageName = next;
	stageFinishScreen.to = currentStageName;
	var prevBest = Stages[currentStageName].bestTo;
	stageFinishScreen.prevBest = prevBest;
	stageFinishScreen.par = Stages[currentStageName].parTo;
	if (!(used >= prevBest)) {
		Stages[next].bestTo = used;
		if (froms.nextDown == next)
			froms.bestDown = used;
		if (froms.nextLeft == next)
			froms.bestLeft = used;
		if (froms.nextRight == next)
			froms.bestRight = used;
		//localStorage.setItem(currentStageName+"Best", used);
	}
	saveGame();
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
		if (globalController.restartClicked) {
			loadStage(this.from, false);
		} else if (globalController.jumpClicked) {
			doLevelSelect();
		}
	},
	draw : function() {
		this.solenoidCt++;
		if (this.solenoidCt >= 12) {
			this.solenoidCt = 0;
			this.solenoid = !this.solenoid;
		}
		fctx.globalAlpha = 1;
		clearCanvases();
		//this.context2D.fillStyle = BG_COLOR;
		//this.context2D.fillRect(0, 0, 800, 600);
		updateZoom();
		this.prevRunnee.draw();
		/*drawStageBack();
		gameObjects.forEach(obj => obj.draw());
		player.draw();
		drawStageFore();*/
		fctx.textAlign = "center";
		fctx.strokeStyle = "#FFFFFF";
		fctx.fillStyle = "#202020C0";
		fctx.fillRect  (100, 100, canvas.width-200, canvas.height-200);
		fctx.strokeRect(100, 100, canvas.width-200, canvas.height-200);
		fctx.fillStyle = "#FFFFFF";
		var toptxt = this.from==this.to ? Stages[this.to].displayName : (Stages[this.from].displayName + " - " + Stages[this.to].displayName);
		fctx.font = "40px "+getFont();
		fctx.fillText(toptxt, canvas.width/2, 150);
		//fctx.font = "40px "+getFont();
		var alL = canvas.width/2-10
		var alR = canvas.width/2+10
		fctx.textAlign = "right";
		fctx.fillText("This run: ", alL, 220);
		fctx.fillText("Previous best: ", alL, 270);
		fctx.textAlign = "left";
		fctx.fillText(displayAnym(this.prevBest), alR, 270);
		if (this.par) {
			fctx.textAlign = "right";
			fctx.fillText("Par: ", alL, 320);
			fctx.textAlign = "left";
			fctx.fillText(displayAnym(this.par), alR, 320);
		}
		var better = !(this.prevBest < used);
		fctx.fillStyle = this.solenoid && better ? "#00FFFF" : "#FFFFFF";
		fctx.fillText(displayAnym(used), alR, 220);
		fctx.textAlign = "right";
		fctx.fillText("Vessels: ", alL, 380);
		for (var i = 0; i < this.collectedNow.length; i++) {
			fctx.fillStyle = this.collectedNow[i] ? (this.collectedBefore[i] ? "#00FFFF" : (this.solenoid ? "#00FF80" : "#00FFFF")) : (this.collectedBefore[i] ? "#BFBFBF" : "#7F7F7F");
			fctx.fillRect(canvas.width/2 + 10 + 30 * i, 350, 25, 40);
		}
	}
}