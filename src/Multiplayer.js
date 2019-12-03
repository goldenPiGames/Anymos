var players = [];

var multiplayerEngine = {
	name : "Game Engine",
	update : function() {
		if (globalController.pauseClicked) {
			pause.begin();
			return;
		}
		stageTimer ++;
		players.forEach(oj => oj.update());
		gameObjects.forEach(oj=>oj.update());
		removeDead(gameObjects);
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
		updateZoom();
		drawStageBack();
		gameObjects.forEach(oj => oj.draw());
		players.forEach(oj => oj.draw());
		drawStageFore();
		hud.draw();
	},
	updatesObjects : true
}

var multiplayerCountdown = {
	name : "Countdown",
	maxTimer : 30,
	next : multiplayerEngine,
	begin : function() {
		runnee = this;
		this.timer = this.maxTimer;
	},
	update : function() {
		this.timer--;
		if (this.timer <= 0) {
			runnee = this.next;
			this.next.update();
		}
	},
	draw : function() {
		this.next.draw();
		fctx.fillStyle = "#00FFFF";
		fctx.beginPath();
		fctx.moveTo(canvas.width/2, canvas.width/2);
		fctx.arc(canvas.width/2, canvas.width/2, canvas.height/5, 2*Math.PI*(-this.timer/this.maxTimer+.75), -Math.PI/2);
		fctx.lineTo(canvas.width/2, canvas.width/2);
		fctx.fill();
	}
}