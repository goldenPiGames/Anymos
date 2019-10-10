var specialChanmote = {
	name : "Chanos's Remote",
	update : function() {
		if (runnee != chanosEngine) {
			runnee = chanosEngine;
		}
	},
	updateGame : function() {
		this.active = controller.special;
	},
	active : false,
}

var chanmoteEngine = {
	update: function() {
		specialChanos.updateChanmote();
		if (player.special != specialChanos) {
			runnee = gameEngine;
			specialChanos.active = false;
		} else if (specialChanmote.active) {
			gameObjects.forEach(oj => {
				if (oj.updateChanmote)
					oj.updateChanmote();
			});
		} else {
			gameEngine.update();
		}
	},
	draw : function() {
		gameEngine.draw();
	},
}