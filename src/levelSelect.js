const LS_CAMYOFF = 20;
const LS_X_SPACING = 50;
const LS_Y_SPACING = 50;
const LS_INFO_WIDTH = 360;
var selector = {x:0, y:0, width:0, height:0};

function doLevelSelect() {
	if (currentStageName == undefined)
		currentStageName = "TutorialPrelude";
	levelSelectActive = true;
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
			function(){zoom = 1},
			new DialogLine("Anymos", "This is a visualization of branching timelines", "#00FFFF"),
			new DialogLine("Anymos", "When I start a stage, the amount of time I have is equal to "+displayAnym(STARTING_ANYM)+", plus "+displayAnym(30)+" for each Vessel I've collected, minus my best time from each stage leading up to it.", "#00FFFF"),
			new DialogLine("Anymos", "Whenever I don't have enough time to complete the next stage, there are two things I can do: improve my time on previous stages, or collect more Vessels on any of the stages.", "#00FFFF"),
			new DialogLine("Anymos", "When I try to get a better time on previous stages, only my fastest run counts.", "#00FFFF"),
			new DialogLine("Anymos", "As long as I collect a vessel and then reach any goalpost without dying, that vessel is saved permanently and I don't need to collect it again on other visits to the stage.", "#00FFFF"),
			new DialogLine("Anymos", "If I've collected all of the vessels in a given stage, that stage shows up as cyan instead of white.", "#00FFFF"),
		);
	}
}
var levelSelect = {
	update : function() {
		if (controller.jumpClicked && isStageAvailable(currentStageName)) {
			loadStage(currentStageName, true);
			return;
		} else if (controller.upClicked && isStageAvailable(Stages[currentStageName].previous))
			currentStageName = Stages[currentStageName].previous;
		else if (controller.downClicked && isStageAvailable(Stages[currentStageName].nextDown))
			currentStageName = Stages[currentStageName].nextDown;
		else if (controller.leftClicked && isStageAvailable(Stages[currentStageName].nextLeft))
			currentStageName = Stages[currentStageName].nextLeft;
		else if (controller.rightClicked && isStageAvailable(Stages[currentStageName].nextRight))
			currentStageName = Stages[currentStageName].nextRight;
		else if (controller.attackClicked) {
			doMainMenu();
			return;
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
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = 12*zoom + "px "+getFont();
		ctx.fillStyle = "#FF0000";
		for (stag in Stages) {
			this.drawNext(stag, Stages[stag].nextDown);
			this.drawNext(stag, Stages[stag].nextLeft);
			this.drawNext(stag, Stages[stag].nextRight);
			var sprite = isEnd(stag) ? (isStageAvailable(stag) ? miscSprites.SelectEnd : miscSprites.SelectEndNo) : (isStageAvailable(stag) ? (stage100(stag) ? miscSprites.SelectStage100 : miscSprites.SelectStage) : miscSprites.SelectStageNo)
			drawSpriteOnStage(sprite, Stages[stag].selectX, Stages[stag].selectY+sprite.height/2);
		}
		drawSpriteOnStage(miscSprites.SelectCorners, cameraFocus.x, cameraFocus.y - LS_CAMYOFF + miscSprites.SelectCorners.height/2);
		ctx.font = zoom*12+"px "+getFont();
		ctx.lineWidth = 1*zoom;
		ctx.strokeStyle = "#000000";
		ctx.fillStyle = "#FFFFFF";
		//ctx.strokeText(Stages[currentStageName].displayName, stagex(cameraFocus.x) - ctx.measureText(Stages[currentStageName].displayName).width/2, stagey(cameraFocus.y - LS_CAMYOFF - miscSprites.SelectStage.height/2 - 2));
		//ctx.fillText(Stages[currentStageName].displayName, stagex(cameraFocus.x) - ctx.measureText(Stages[currentStageName].displayName).width/2, stagey(cameraFocus.y - LS_CAMYOFF - miscSprites.SelectStage.height/2 - 2));
		
		if (!controller.shoot && !dialogActive) {
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
			availAnym();
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
				ctx.fillText(displayAnym(anymTotal-STARTING_ANYM), infox+LS_INFO_WIDTH-10, 240);
				ctx.fillText(displayAnym(anymAvailable), infox+LS_INFO_WIDTH-10, 330);
				ctx.fillStyle = "#FF0000";
				ctx.fillText(displayAnym(anymTotal-anymAvailable), infox+LS_INFO_WIDTH-10, 280);
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
			var best = displayAnym(next.best)
			ctx.lineWidth = 1*zoom;
			ctx.strokeStyle = "#FFFFFF";
			ctx.textAlign = "center";
			ctx.strokeText(best, stagex(next.selectX), stagey((prev.selectY + next.selectY) / 2));
			ctx.fillText(best, stagex(next.selectX), stagey((prev.selectY + next.selectY) / 2));
		}
	}
}