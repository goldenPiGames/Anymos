var pause = {
	begin: function() {
		this.returnTo = runnee;
		runnee = this;
	},
	update : function() {
		if (globalController.menu3Clicked && !firstRun)
			exitStage();
		if (globalController.selectClicked || globalController.pauseClicked)
			runnee = this.returnTo;
	},
	draw : function() {
		fctx.fillStyle = "#00000010";
		fctx.fillRect(0, 0, canvas.width, canvas.height);
		fctx.drawImage(miscSprites.Paused, canvas.width/4, canvas.height/2 - canvas.width / miscSprites.Paused.width * miscSprites.Paused.height / 4, canvas.width / 2, canvas.width / miscSprites.Paused.width * miscSprites.Paused.height / 2);
		fctx.font = "30px monospace";
		fctx.textAlign = "center";
		fctx.fillStyle = "#FFFFFF";
		fctx.fillText("Press Pause " + globalController.getBindText("pause") + " or Select " + globalController.getBindText("select") + " to resume", canvas.width/2, canvas.height*3/4-40);
		if (!firstRun)
			fctx.fillText("Press Menu3 " + globalController.getBindText("menu3") + " to exit the level", canvas.width/2, canvas.height*3/4);
	}
}