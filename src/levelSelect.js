const LS_CAMYOFF = 20;
const LS_X_SPACING = 50;
const LS_Y_SPACING = 50;
const LS_INFO_WIDTH = 360;
var selector = {x:0, y:0, width:0, height:0};
const ROOT_STAGE = "TutorialPrelude";
const ROOT_STAGE_COOP = "TutorialMultiplayer";

function doLevelSelect(cursorStart) {
	emergencyStuff.hidden = true;
	if (cursorStart)
		currentStageName = cursorStart;
	else if (currentStageName == undefined)
		currentStageName = ROOT_STAGE;
	runnee = levelSelect;
	minZoom = 1;
	maxZoom = 6;
	cameraLeftBound = -Infinity;
	cameraRightBound = Infinity;
	cameraTopBound = -50;
	cameraBottomBound = Infinity;
	cameraFocus = selector;
	cameraFocus.x = Stages[currentStageName].selectX;
	cameraFocus.y = Stages[currentStageName].selectY + LS_CAMYOFF;
	updateZoom();
	zoomd = 2;
	zoom = 1;
	snapZoom();
	zoom = 1;
	if (firstRun) {
		firstRun = false;
		dialog.begin(
			new DialogLine("Anymos", "Where am I? Is this death?", "#00FFFF"),
			new DialogLine("Anymos", "...No, this isn't death. I am... above such things. I have the power to try again. I have the power to do everything.", "#00FFFF"),
			()=>levelSelect.showTutorial(),
		);
		saveGame();
	}
	levelSelect.numVessels = numVesselsCollected();
	levelSelect.refresh();
}
var levelSelect = {
	update : function() {
		if (globalController.selectClicked && isStageAvailable(currentStageName)) {
			if (Stages[currentStageName].devblock && !settings.developer)
				runnee = devblockPopup;
			else if (Stages[currentStageName].available < Stages[currentStageName].parDown)
				runnee = impossibleLevelConfirm;
			else
				loadStage(currentStageName, true);
			return;
		} else if (globalController.menuUpClicked && isStageAvailable(Stages[currentStageName].previous))
			currentStageName = Stages[currentStageName].previous;
		else if (globalController.menuDownClicked && isStageAvailable(Stages[currentStageName].nextDown))
			currentStageName = Stages[currentStageName].nextDown;
		else if (globalController.menuLeftClicked && isStageAvailable(Stages[currentStageName].nextLeft))
			currentStageName = Stages[currentStageName].nextLeft;
		else if (globalController.menuRightClicked && isStageAvailable(Stages[currentStageName].nextRight))
			currentStageName = Stages[currentStageName].nextRight;
		else if (globalController.cancelClicked) {
			doMainMenu();
			return;
		} else if (globalController.restartClicked) {
			this.showTutorial();
		}
		cameraFocus.x = Stages[currentStageName].selectX;
		cameraFocus.y = Stages[currentStageName].selectY + LS_CAMYOFF;
		updateZoom();
	},
	draw : function() {
		cameraFocus.x = Stages[currentStageName].selectX;
		cameraFocus.y = Stages[currentStageName].selectY + LS_CAMYOFF;
		var thisser = this;
		ctx.globalAlpha = 1;
		clearCanvases();
		ctx.font = 12*zoom + "px "+getFont();
		ctx.fillStyle = "#FF0000";
		for (stag in Stages) {
			this.drawNext(stag, Stages[stag].nextDown);
			this.drawNext(stag, Stages[stag].nextLeft);
			this.drawNext(stag, Stages[stag].nextRight);
			var sprite = isEnd(stag) ? (isStageAvailable(stag) ? miscSprites.SelectEnd : miscSprites.SelectEndNo) : (isStageAvailable(stag) ? (isStage100(stag) ? miscSprites.SelectStage100 : miscSprites.SelectStage) : miscSprites.SelectStageNo)
			drawSpriteOnStage(sprite, Stages[stag].selectX, Stages[stag].selectY+sprite.height/2);
		}
		drawSpriteOnStage(miscSprites.SelectCorners, cameraFocus.x, cameraFocus.y - LS_CAMYOFF + miscSprites.SelectCorners.height/2);
		ctx.font = zoom*12+"px "+getFont();
		ctx.lineWidth = 1*zoom;
		ctx.strokeStyle = "#000000";
		ctx.fillStyle = "#FFFFFF";
		//ctx.strokeText(Stages[currentStageName].displayName, stagex(cameraFocus.x) - ctx.measureText(Stages[currentStageName].displayName).width/2, stagey(cameraFocus.y - LS_CAMYOFF - miscSprites.SelectStage.height/2 - 2));
		//ctx.fillText(Stages[currentStageName].displayName, stagex(cameraFocus.x) - ctx.measureText(Stages[currentStageName].displayName).width/2, stagey(cameraFocus.y - LS_CAMYOFF - miscSprites.SelectStage.height/2 - 2));
		
		if (!globalController.menu3 && !dialogActive) {
			var stag = Stages[currentStageName];
			var infox = stag.selectX <= 0 ? 10 : (canvas.width - 10 - LS_INFO_WIDTH);
			ctx.fillStyle = "#000000bf";
			ctx.fillRect(infox, 10, LS_INFO_WIDTH, canvas.height - 20);
			ctx.lineWidth = 2;
			ctx.strokeStyle = "#FFFFFF";
			ctx.strokeRect(infox, 10, LS_INFO_WIDTH, canvas.height - 20);
			ctx.font = "30px "+getFont();
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign = "left";
			ctx.fillText(stag.displayName, infox+10, 45);
			//availAnym();
			if (!stag.end) {
				for (var i = 0; i < stag.vessels.length; i++) {
					ctx.fillStyle = isVesselCollected(stag.vessels[i]) ? "#00FFFF" : "#7F7F7F";
					ctx.fillRect(infox + 10 + 20 * i, 60, 15, 30);
				}
				ctx.font = "30px "+getFont();
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText("Starting", infox+10, 200);
				ctx.fillText("Vessels", infox+10, 240);
				ctx.fillText("Previous", infox+10, 280);
				ctx.fillText("Available", infox+10, 330);
				
				ctx.font = "30px "+getFont();
				ctx.textAlign = "right";
				ctx.fillStyle = "#00FFFF";
				ctx.fillText(displayAnym(STARTING_ANYM), infox+LS_INFO_WIDTH-10, 200);
				ctx.fillText(displayAnym(this.numVessels*VESSEL_VALUE), infox+LS_INFO_WIDTH-10, 240);
				ctx.fillText(displayAnym(stag.available), infox+LS_INFO_WIDTH-10, 330);
				ctx.fillStyle = "#FF0000";
				ctx.fillText(displayAnym(stag.cumUsed), infox+LS_INFO_WIDTH-10, 280);
				
				ctx.fillStyle = "#FFFFFF";
				if (stag.nextDown) {
					ctx.textAlign = "left";
					ctx.fillText("Down Best:", infox+10, 400);
					ctx.fillText("Down Par:", infox+10, 440);
					ctx.textAlign = "right";
					ctx.fillText(displayAnym(stag.bestDown), infox+LS_INFO_WIDTH-10, 400);
					ctx.fillText(displayAnym(stag.parDown), infox+LS_INFO_WIDTH-10, 440);
				}
				
				if (stag.nextLeft) {
					ctx.textAlign = "left";
					ctx.fillText("Left Best:", infox+10, 500);
					ctx.fillText("Left Par:", infox+10, 540);
					ctx.textAlign = "right";
					ctx.fillText(displayAnym(stag.bestLeft), infox+LS_INFO_WIDTH-10, 500);
					ctx.fillText(displayAnym(stag.parLeft), infox+LS_INFO_WIDTH-10, 540);
				}
				if (stag.nextRight) {
					ctx.textAlign = "left";
					ctx.fillText("Right Best:", infox+10, 600);
					ctx.fillText("Right Par:", infox+10, 640);
					ctx.textAlign = "right";
					ctx.fillText(displayAnym(stag.bestRight), infox+LS_INFO_WIDTH-10, 600);
					ctx.fillText(displayAnym(stag.parRight), infox+LS_INFO_WIDTH-10, 640);
				}
			} else {
				
			}
		}
	},
	drawNext : function(prevName, nextName) {
		var prev = Stages[prevName];
		var next = Stages[nextName];
		if (next == undefined)
			return;
		ctx.lineWidth = 2*zoom;
		ctx.strokeStyle = isStageAvailable(nextName) ? "#00FFFF" : "#808080";
		ctx.beginPath();
		ctx.moveTo(stagex(prev.selectX), stagey(prev.selectY));
		ctx.lineTo(stagex(next.selectX), stagey(prev.selectY));
		ctx.lineTo(stagex(next.selectX), stagey(next.selectY));
		ctx.stroke();
		if (isStageAvailable(nextName)) {
			var best = displayAnym(next.bestTo)
			ctx.lineWidth = 1*zoom;
			ctx.strokeStyle = "#FFFFFF";
			ctx.textAlign = "center";
			ctx.strokeText(best, stagex(next.selectX), stagey((prev.selectY + next.selectY) / 2));
			ctx.fillText(best, stagex(next.selectX), stagey((prev.selectY + next.selectY) / 2));
		}
	},
	refresh : function() {
		this.refreshRoot(ROOT_STAGE);
		this.refreshRoot(ROOT_STAGE_COOP);
	},
	refreshRoot : function(stagn) {
		Stages[stagn].cumUsed = 0;
		Stages[stagn].available = STARTING_ANYM + this.numVessels * VESSEL_VALUE;
		this.refreshRec(Stages[stagn].nextDown);
	},
	refreshRec : function(stagn) {
		var stags = Stages[stagn];
		//console.log(stagn);
		stags.cumUsed = Stages[stags.previous].cumUsed + stags.bestTo;
		stags.available = STARTING_ANYM + this.numVessels * VESSEL_VALUE - stags.cumUsed;
		if (stags.nextDown)
			this.refreshRec(stags.nextDown);
		if (stags.nextLeft)
			this.refreshRec(stags.nextLeft);
		if (stags.nextRight)
			this.refreshRec(stags.nextRight);
	},
	showTutorial : function() {
		dialog.begin(
			new DialogLine("Anymos", "This is a visualization of branching timelines", "#00FFFF"),
			new DialogLine("Anymos", "When I start a stage, the amount of time I have is equal to "+displayAnym(STARTING_ANYM)+", plus "+displayAnym(VESSEL_VALUE)+" for each Vessel I've collected, minus my best time from each stage leading up to it.", "#00FFFF"),
			new DialogLine("Anymos", "Whenever I don't have enough time to complete the next stage, there are two things I can do: improve my time on previous stages, or collect more Vessels on any of the stages.", "#00FFFF"),
			new DialogLine("Anymos", "When I try to get a better time on previous stages, only my fastest run counts.", "#00FFFF"),
			new DialogLine("Anymos", "When collecting vessels: As long as I collect a vessel and then reach any goalpost without dying, that vessel is saved permanently, and I can never lose it. I don't need to collect it again on other visits to the stage.", "#00FFFF"),
			new DialogLine("Anymos", "I also don't need to collect all the vessels on a single run. I can come back to collect the ones I missed.", "#00FFFF"),
			new DialogLine("Anymos", "If I've collected all of the vessels in a given stage, that stage shows up as cyan instead of white.", "#00FFFF"),
		);
	},
}

var impossibleLevelConfirm = {
	update : function() {
		if (globalController.cancelClicked)
			runnee = levelSelect;
		else if (globalController.selectClicked) {
			loadStage(currentStageName, true);
		}
	},
	draw : function() {
		levelSelect.draw();
		drawPopup(["Your Anym is less than par.", "You most likely cannot finish.", globalController.getBindText("select") + ": Proceed anyway", globalController.getBindText("cancel") + ": Cancel"]);
		/*ctx.lineWidth = 4;
		ctx.strokeStyle = "#FFFFFF";
		ctx.strokeRect(canvas.width/2-400, canvas.height/2-100, 800, 200);
		ctx.fillStyle = "#000000";
		ctx.fillRect(canvas.width/2-400, canvas.height/2-100, 800, 200);
		ctx.fillStyle = "#FF0000";
		ctx.textAlign = "center";
		ctx.font = "40px "+getFont();
		ctx.fillText("Your Anym is less than par.", canvas.width/2, canvas.height/2 - 55);
		ctx.fillText("You most likely cannot finish.", canvas.width/2, canvas.height/2 - 5);
		ctx.fillText(globalController.getBindText("select") + ": Proceed anyway", canvas.width/2, canvas.height/2 + 45);
		ctx.fillText(globalController.getBindText("cancel") + ": Cancel", canvas.width/2, canvas.height/2 + 95);*/
	}
}

var devblockPopup = {
	update : function() {
		if (globalController.selectClicked || globalController.cancelClicked)
			runnee = levelSelect;
	},
	draw : function() {
		levelSelect.draw();
		drawPopup(["This stage is under construction.", "It is not ready to be played.", globalController.getBindText("select") + "/" + globalController.getBindText("cancel") + ": Return"]);
	}
}
