var PreludeStages = [Stages.TutorialPrelude, Stages.PeacefulField, Stages.BurningForest, Stages.ScorchedClearing, Stages.ThornyOutback, Stages.MesaCliff, Stages.StormyMesa, Stages.AltoPillar];
for (var i = 0; i < PreludeStages.length; i++) {
	PreludeStages[i].index = i;
}

function doMainMenu() {
	//mainMenu.buttonIndex = 0;
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
		//console.log(miscSprites["MainMenuLogo"], 0, 0, canvas.width, canvas.height);
		
		
		ctx.font = "40px "+settings.font;
		ctx.fillStyle = "#FFFFFF";
		for (var i = 0; i < this.buttons.length; i++) {
			ctx.fillText(this.buttons[i].text, canvas.width/2 - (ctx.measureText(this.buttons[i].text).width / 2), MAIN_BUTTON_START + MAIN_BUTTON_SPACING * i);
		}
		ctx.fillStyle = "#00FFFF";
		ctx.drawImage(miscSprites.Selector, canvas.width/2 - ctx.measureText(this.buttons[this.buttonIndex].text).width/2 - miscSprites.Selector.width - 10, MAIN_BUTTON_START-40 + MAIN_BUTTON_SPACING * (this.buttonIndex+.5) - miscSprites.Selector.height/2);
		flipHorizontally(miscSprites.Selector, canvas.width/2 + ctx.measureText(this.buttons[this.buttonIndex].text).width/2 + 10, MAIN_BUTTON_START-40 + MAIN_BUTTON_SPACING * (this.buttonIndex+.5) - miscSprites.Selector.height/2);
		ctx.font = "30px "+settings.font;
		ctx.fillStyle = "#BFBFBF";
		ctx.fillText("A: Select", canvas.width/2-ctx.measureText("A: Select").width/2, canvas.height-50);
	},
	buttonIndex : 0,
	buttons : [
		{
			text : "Play",
			func : function(){
				if (firstRun)
					loadStage(PreludeStages[0].name, true);
				else
					doLevelSelect();
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

function doLevelSelect() {
	if (currentStageName == undefined)
		currentStageName = "TutorialMovement";
	levelSelectActive = true;
	runnee = levelSelect;
	if (firstRun) {
		firstRun = false;
		dialog.begin(
			new DialogLine("Anymos", "Oh, no. It seems I've died. Guess that's it.", "#00FFFF"),
			new DialogLine("Anymos", "Just kidding. I can rewind time and try again.", "#00FFFF"),
		);
	}
}

var levelSelect = {
	stageIndex : 0,
	update : function() {
		if (controller.jumpClicked) {
			loadStage(PreludeStages[this.stageIndex].name, true);
			return;
		} else if (controller.upClicked && this.stageIndex > 0)
			this.stageIndex--;
		else if (controller.downClicked && this.stageIndex < PreludeStages.length-1)
			this.stageIndex++;
		else if (controller.attackClicked) {
			doMainMenu();
			return;
		}
	},
	draw : function() {
		var thisser = this;
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = 40+"px "+settings.font;
		for (var i = 0; i < PreludeStages.length; i++) {
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(PreludeStages[i].displayName, 50, (i+1)*50);
			var tim = displayAnym(PreludeStages[i].best) || "-----";
			ctx.fillStyle = "#FF0000";
			ctx.fillText(tim, canvas.width-20-ctx.measureText(tim).width, (i+1)*50);
		}
		ctx.drawImage(miscSprites.Selector, 5, 50*(this.stageIndex+.5))
	}
}