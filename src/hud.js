var MINIMAP_MULT = 4;
const ENEMY_DISPLAY_Y = 100;
const HUD_HP_WIDTH = 150;
var lastHitEnemy;
hud = {
	draw : function() {
		if (true || used > 0) {
			ctx.lineWidth = 3;
			ctx.font = "80px monospace";
			ctx.strokeStyle = "#000000";
			ctx.fillStyle = "#FF0000";
			if (stagex(player.x)-10 < Math.max(ctx.measureText(displayAnym(used)).width, ctx.measureText(displayAnym(anymAvailable)).width) && stagey(player.y) < 200)
				ctx.globalAlpha = .4
			ctx.strokeText(displayAnym(used), 10, 75);
			ctx.fillText(displayAnym(used), 10, 75)
			ctx.font = "60px monospace"
			ctx.fillStyle = "#00FFFF";
			ctx.strokeText("/"+displayAnym(anymAvailable), 10, 130);
			ctx.fillText("/"+displayAnym(anymAvailable), 10, 130);
		}
		ctx.globalAlpha = 1;
		if (settings.music != "Off") {
			ctx.font = "20px monospace";
			ctx.lineWidth = 2;
			ctx.strokeStyle = "#000000";
			ctx.strokeText(songName, canvas.width - ctx.measureText(songName).width - 10, canvas.height - 5);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(songName, canvas.width - ctx.measureText(songName).width - 10, canvas.height - 5);
		}
		if (controller.minimap) {
			for (var i = 0; i < staticColl[0].length; i++) {
				for (var j = 0; j < staticColl.length; j++) {
					ctx.fillStyle = staticColl[j][i].solid ? "#7F7F7F" : (staticColl[j][i].hazard ? "#BF7F7F" : "#BFBFBF");
					ctx.fillRect(i*MINIMAP_MULT,j*MINIMAP_MULT,MINIMAP_MULT,MINIMAP_MULT)
				}
			}
		}
		if (lastHitEnemy) {
			if (lastHitEnemy.dead) {
				lastHitEnemy = undefined;
				return;
			}
			ctx.font = "40px "+settings.font;
			var wid = Math.max(ctx.measureText(lastHitEnemy.speciesName).width, 100) + 20;
			ctx.fillStyle = "#00000080";
			ctx.fillRect(canvas.width-wid, ENEMY_DISPLAY_Y, wid, 100)
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(lastHitEnemy.speciesName, canvas.width-wid+10, ENEMY_DISPLAY_Y+50);
			ctx.lineWidth = 3;
			ctx.strokeStyle = "#808080";
			ctx.strokeRect(canvas.width-HUD_HP_WIDTH-10, ENEMY_DISPLAY_Y+60, HUD_HP_WIDTH, 30);
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(canvas.width-HUD_HP_WIDTH*lastHitEnemy.hp/lastHitEnemy.maxhp-10, ENEMY_DISPLAY_Y+60, HUD_HP_WIDTH*lastHitEnemy.hp/lastHitEnemy.maxhp, 30);
			if (lastHitEnemy.benchmarks) {
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#FFFFFF";
				lastHitEnemy.benchmarks.forEach(function(mount) {
					var portion = mount / lastHitEnemy.maxhp;
					ctx.beginPath();
					ctx.moveTo(canvas.width-HUD_HP_WIDTH*mount/lastHitEnemy.maxhp-10, ENEMY_DISPLAY_Y+60);
					ctx.lineTo(canvas.width-HUD_HP_WIDTH*mount/lastHitEnemy.maxhp-10, ENEMY_DISPLAY_Y+90);
					ctx.stroke();
				});
			}
		}
	}
}