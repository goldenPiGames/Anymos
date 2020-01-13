function doMainMenu() {
	emergencyStuff.hidden = false;
	runnee = mainMenu;
	mainMenu.flowY = 0;
	mainMenu.flowFirst = true;
}
const MAIN_BUTTON_START = 450;
const MAIN_BUTTON_SPACING = 50;
const MAIN_FLOW_HEIGHT = 300;
const MAIN_FLOW_SPEED = 15;
var mainMenu = {
	update : function() {
		if (globalController.selectClicked) {
			this.buttons[this.buttonIndex].func();
			return;
		} else if (globalController.menuUpClicked && this.buttonIndex > 0)
			this.buttonIndex--;
		else if (globalController.menuDownClicked && this.buttonIndex < this.buttons.length-1)
			this.buttonIndex++;
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
		this.flowY += MAIN_FLOW_SPEED;
		if (this.flowY > canvas.height+MAIN_FLOW_HEIGHT) {
			this.flowY = 0;
			this.flowFirst = false;
		}
		ctx.fillStyle = this.flowFirst?"#000000":"#FFFFFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		var grad = ctx.createLinearGradient(0,this.flowY,0,this.flowY-MAIN_FLOW_HEIGHT)
		grad.addColorStop(0, "#00FFFF");
		grad.addColorStop(1, "#FFFFFF");
		ctx.fillStyle = grad;
		ctx.fillRect(0, 0, canvas.width, this.flowY);
		ctx.drawImage(miscSprites["MainMenuLogo"], 0, 0, canvas.width, canvas.height);
		
		ctx.font = "40px "+getFont();
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "center";
		for (var i = 0; i < this.buttons.length; i++) {
			ctx.fillText(this.buttons[i].text, canvas.width/2, MAIN_BUTTON_START + MAIN_BUTTON_SPACING * i);
		}
		ctx.fillStyle = "#00FFFF";
		ctx.drawImage(miscSprites.Selector, canvas.width/2 - ctx.measureText(this.buttons[this.buttonIndex].text).width/2 - miscSprites.Selector.width - 10, MAIN_BUTTON_START-40 + MAIN_BUTTON_SPACING * (this.buttonIndex+.5) - miscSprites.Selector.height/2);
		flipHorizontally(miscSprites.Selector, canvas.width/2 + ctx.measureText(this.buttons[this.buttonIndex].text).width/2 + 10, MAIN_BUTTON_START-40 + MAIN_BUTTON_SPACING * (this.buttonIndex+.5) - miscSprites.Selector.height/2);
		ctx.font = "30px "+getFont();
		ctx.fillStyle = "#BFBFBF";
		ctx.fillText("A: Select", canvas.width/2, canvas.height-50);
	},
	buttonIndex : 0,
	buttons : [
		{
			text : "Story Mode",
			func : function() {
				if (!firstRun) {
					doLevelSelect(ROOT_STAGE);
				} else if (Stages.TutorialPrelude.bestDown != undefined) {
					loadStage(currentStageName);
				} else {
					resetSave();
					firstRun = true;
					loadStage("TutorialPrelude");
				}
			}
		},
		{
			text : "Multiplayer",
			func : function() {
				doMultiplayerControllers();
			}
		},
		{
			text : "Jukebox",
			func : function(){doJukebox()}
		},
		{
			text : "Settings",
			func : function(){doSettings()}
		},
		{
			text : "Controls",
			func : function(){doControls()}
		},
	]
}

var newGameConfirm = {
	update : function() {
		if (globalController.cancelClicked)
			runnee = mainMenu;
		else if (globalController.menuUp && globalController.restart && globalController.selectClicked) {
			resetSave();
			firstRun = true;
			loadStage(ROOT_STAGE, true);
		}
	},
	draw : function() {
		mainMenu.draw();
		drawPopup(["Your previous file will be deleted.", globalController.getBindText("menuUp") + " + " + globalController.getBindText("restart") + " + " + globalController.getBindText("select") + ": Confirm.", globalController.getBindText("cancel") + ": Cancel"]);
		/*ctx.lineWidth = 4;
		ctx.strokeStyle = "#FFFFFF";
		ctx.strokeRect(canvas.width/2-400, canvas.height/2-75, 800, 150);
		ctx.fillStyle = "#000000";
		ctx.fillRect(canvas.width/2-400, canvas.height/2-75, 800, 150);
		ctx.fillStyle = "#FF0000";
		ctx.textAlign = "center";
		ctx.font = "40px "+getFont();
		ctx.fillText("Your previous file will be deleted.", canvas.width/2, canvas.height/2 - 35);
		ctx.fillText(globalController.getBindText("menuUp") + " + " + globalController.getBindText("restart") + " + " + globalController.getBindText("select") + ": Confirm.", canvas.width/2, canvas.height/2 + 15);
		ctx.fillText(globalController.getBindText("cancel") + ": Cancel", canvas.width/2, canvas.height/2 + 65);*/
	}
}

const POPUP_LINE_HEIGHT = 50;

function drawPopup(lines) {
	var length = lines.length;
	
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#FFFFFF";
	ctx.strokeRect(canvas.width/2-400, canvas.height/2 - length*POPUP_LINE_HEIGHT/2, 800, length*POPUP_LINE_HEIGHT);
	ctx.fillStyle = "#000000F0";
	ctx.fillRect(canvas.width/2-400, canvas.height/2 - length*POPUP_LINE_HEIGHT/2, 800, length*POPUP_LINE_HEIGHT);
	ctx.fillStyle = "#FF0000";
	ctx.textAlign = "center";
	ctx.font = "40px "+getFont();
	let top = canvas.height/2 - (length-2)*POPUP_LINE_HEIGHT/2 - 10;
	for (var i = 0; i < length; i++) {
		ctx.fillText(lines[i], canvas.width/2, top + i*POPUP_LINE_HEIGHT);
	}
	/*ctx.fillText("Your Anym is less than par.", canvas.width/2, canvas.height/2 - 55);
	ctx.fillText("You most likely cannot finish.", canvas.width/2, canvas.height/2 - 5);
	ctx.fillText(globalController.getBindText("select") + ": Proceed anyway", canvas.width/2, canvas.height/2 + 45);
	ctx.fillText(globalController.getBindText("cancel") + ": Cancel", canvas.width/2, canvas.height/2 + 95);*/
}