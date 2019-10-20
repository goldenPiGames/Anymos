function doMainMenu() {
	if (mainMenu.buttonIndex < 1 && !firstRun)
		mainMenu.buttonIndex = 1;
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
		if (controller.jumpClicked) {
			this.buttons[this.buttonIndex].func();
			return;
		} else if (controller.upClicked && this.buttonIndex > 0)
			this.buttonIndex--;
		else if (controller.downClicked && this.buttonIndex < this.buttons.length-1)
			this.buttonIndex++;
	},
	draw : function() {
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
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
		ctx.fillText("A: Select", canvas.width/2-ctx.measureText("A: Select").width/2, canvas.height-50);
	},
	buttonIndex : 0,
	buttons : [
		{
			text : "New Game",
			func : function() {
				if (firstRun) {
					resetSave();
					firstRun = true;
					loadStage("TutorialPrelude");
				} else
					runnee = newGameConfirm;
			}
		},
		{
			text : "Continue",
			func : function(){
				if (!firstRun) {
					doLevelSelect();
				} else if (Stages.TutorialPrelude.bestDown != undefined) {
					loadStage(currentStageName);
				}
			}
		},
		{
			text : "Jukebox",
			func : function(){doJukebox()}
		},
		{
			text : "Settings",
			func : function(){doSettings()}
		}
	]
}

var newGameConfirm = {
	update : function() {
		if (controller.attack)
			runnee = mainMenu;
		else if (controller.up && controller.restart && controller.jump) {
			resetSave();
			firstRun = true;
			loadStage("TutorialMovement", true);
		}
	},
	draw : function() {
		mainMenu.draw();
		ctx.lineWidth = 4;
		ctx.strokeStyle = "#FFFFFF";
		ctx.strokeRect(canvas.width/2-400, canvas.height/2-75, 800, 150);
		ctx.fillStyle = "#000000";
		ctx.fillRect(canvas.width/2-400, canvas.height/2-75, 800, 150);
		ctx.fillStyle = "#FF0000";
		ctx.textAlign = "center";
		ctx.font = "40px "+getFont();
		ctx.fillText("Your previous file will be deleted.", canvas.width/2, canvas.height/2 - 35);
		let deltxt = usingGamepad ? "Press Up + Select + A to confirm." : "Press Up + R + A to confirm.";
		ctx.fillText(deltxt, canvas.width/2, canvas.height/2 + 15);
		let cantxt = usingGamepad ? "Press B to cancel." : "Press S to cancel.";
		ctx.fillText(cantxt, canvas.width/2, canvas.height/2 + 65);
	}
}
