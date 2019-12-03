function doMultiplayerControllers() {
	//players
	if (controllers.length < 2)
		return;
		/*controllers = [
			new KeyboardController(DEFAULT_BINDS_KEYBOARD_LEFT),
			new KeyboardController(DEFAULT_BINDS_KEYBOARD_RIGHT),
		]*/
	runnee = new MultiplayerControllerSetup();
}

class MultiplayerControllerSetup {
	constructor() {
		
	}
	update() {
		doMultiplayerMenu();
	}
	draw() {
		
	}
}

function doMultiplayerMenu() {
	runnee = multiplayerMenu;
	mainMenu.flowY = 0;
	mainMenu.flowFirst = true;
}

var multiplayerMenu = {
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
		clearCanvases();
		
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
			text : "Co-op Story",
			func : function() {
				doLevelSelect(ROOT_STAGE_COOP);
			}
		},
		/*{
			text : "Jukebox",
			func : function(){doJukebox()}
		},
		{
			text : "Settings",
			func : function(){doSettings()}
		}*/
	]
}