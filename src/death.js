function doDeath() {
	runnee = death;
	death.timer = 0;
	player.attacking = false;
}
death = {
	update : function() {
		this.timer++;
		if (this.timer > 7) {
			if (settings.onDeath && !firstRun) {
				reEvalAnym();
				loadStage(currentStageName, false);
			} else
				doLevelSelect();
		}
	},
	draw : function() {
		if (this.timer <= 0)
			this.timer = 1;
		drawStageBack();
		gameObjects.forEach(function(obj) {
			obj.draw();
		});
		player.state = "dying";
		player.stateCycle = this.timer;
		player.draw();
		drawStageFore();
	}
}