function finishStage(next) {
	//if (!prelude) {
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
	//}
	stageFinishScreen.from = currentStageName;
	var froms = Stages[currentStageName];
	currentStageName = next;
	stageFinishScreen.to = currentStageName;
	var prevBest = Stages[currentStageName].bestTo;
	stageFinishScreen.prevBest = prevBest;
	stageFinishScreen.par = Stages[currentStageName].par;
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
		gameObjects.forEach(obj => obj.draw());
		player.draw();
		drawStageFore();
		ctx.textAlign = "center";
		ctx.strokeStyle = "#FFFFFF";
		ctx.fillStyle = "#202020C0";
		ctx.fillRect  (100, 100, canvas.width-200, canvas.height-200);
		ctx.strokeRect(100, 100, canvas.width-200, canvas.height-200);
		ctx.fillStyle = "#FFFFFF";
		var toptxt = this.from==this.to ? Stages[this.to].displayName : (Stages[this.to].displayName + " - " + Stages[this.to].displayName);
		ctx.font = "40px "+getFont();
		ctx.fillText(toptxt, canvas.width/2, 150);
		//ctx.font = "40px "+getFont();
		var alL = canvas.width/2-10
		var alR = canvas.width/2+10
		ctx.textAlign = "right";
		ctx.fillText("This run: ", alL, 220);
		ctx.fillText("Previous best: ", alL, 270);
		ctx.textAlign = "left";
		ctx.fillText(displayAnym(this.prevBest), alR, 270);
		if (this.par) {
			ctx.textAlign = "right";
			ctx.fillText("Par: ", alL, 320);
			ctx.textAlign = "left";
			ctx.fillText(displayAnym(this.par), alR, 320);
		}
		var better = !(this.prevBest < used);
		ctx.fillStyle = this.solenoid && better ? "#00FFFF" : "#FFFFFF";
		ctx.fillText(displayAnym(used), alR, 220);
		if (!prelude) {
			ctx.textAlign = "right";
			ctx.fillText("Vessels: ", alL, 380);
			for (var i = 0; i < this.collectedNow.length; i++) {
				ctx.fillStyle = this.collectedNow[i] ? (this.collectedBefore[i] ? "#00FFFF" : (this.solenoid ? "#00FF80" : "#00FFFF")) : (this.collectedBefore[i] ? "#BFBFBF" : "#7F7F7F");
				ctx.fillRect(canvas.width/2 + 10 + 30 * i, 350, 25, 40);
			}
		}
	}
}