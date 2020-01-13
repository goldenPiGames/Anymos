var MINIMAP_MULT = 4;
const ENEMY_DISPLAY_Y = 100;
const HUD_HP_WIDTH = 150;
var lastHitEnemy;
hud = {
	draw : function() {
		if (true || used > 0) {
			fctx.lineWidth = 3;
			fctx.font = "80px monospace";
			fctx.textAlign = "left";
			fctx.strokeStyle = "#000000";
			fctx.fillStyle = "#FF0000";
			if (stagex(player.x)-10 < Math.max(fctx.measureText(displayAnym(used)).width, fctx.measureText(displayAnym(anymAvailable)).width) && stagey(player.y) < 200)
				fctx.globalAlpha = .4;
			fctx.strokeText(displayAnym(used), 10, 75);
			fctx.fillText(displayAnym(used), 10, 75)
			fctx.font = "60px monospace"
			fctx.fillStyle = "#00FFFF";
			fctx.strokeText("/"+displayAnym(anymAvailable), 10, 130);
			fctx.fillText("/"+displayAnym(anymAvailable), 10, 130);
		}
		fctx.globalAlpha = 1;
		if (settings.music) {
			fctx.font = "20px monospace";
			fctx.textAlign = "right";
			fctx.lineWidth = 2;
			fctx.strokeStyle = "#000000";
			fctx.strokeText(songName, fcanvas.width - 10, fcanvas.height - 5);
			fctx.fillStyle = "#FFFFFF";
			fctx.fillText(songName, fcanvas.width - 10, fcanvas.height - 5);
		}
		/*if (controller.minimap) {
			for (var i = 0; i < staticColl[0].length; i++) {
				for (var j = 0; j < staticColl.length; j++) {
					fctx.fillStyle = staticColl[j][i].solid ? "#7F7F7F" : (staticColl[j][i].hazard ? "#BF7F7F" : "#BFBFBF");
					fctx.fillRect(i*MINIMAP_MULT,j*MINIMAP_MULT,MINIMAP_MULT,MINIMAP_MULT)
				}
			}
		}*/
		if (lastHitEnemy) {
			if (lastHitEnemy.dead) {
				lastHitEnemy = undefined;
				return;
			}
			fctx.font = "40px "+getFont();
			var wid = Math.max(fctx.measureText(lastHitEnemy.speciesName).width, HUD_HP_WIDTH) + 20;
			fctx.fillStyle = "#00000080";
			fctx.fillRect(fcanvas.width-wid, ENEMY_DISPLAY_Y, wid, HUD_HP_WIDTH);
			fctx.fillStyle = "#FFFFFF";
			fctx.textAlign = "right";
			fctx.fillText(lastHitEnemy.speciesName, fcanvas.width-10, ENEMY_DISPLAY_Y+50);
			fctx.lineWidth = 3;
			fctx.strokeStyle = "#808080";
			fctx.strokeRect(fcanvas.width-HUD_HP_WIDTH-10, ENEMY_DISPLAY_Y+60, HUD_HP_WIDTH, 30);
			fctx.fillStyle = "#FF0000";
			fctx.fillRect(fcanvas.width-HUD_HP_WIDTH*lastHitEnemy.hp/lastHitEnemy.maxhp-10, ENEMY_DISPLAY_Y+60, HUD_HP_WIDTH*lastHitEnemy.hp/lastHitEnemy.maxhp, 30);
			if (lastHitEnemy.benchmarks) {
				fctx.lineWidth = 1;
				fctx.strokeStyle = "#FFFFFF";
				lastHitEnemy.benchmarks.forEach(function(mount) {
					var portion = mount / lastHitEnemy.maxhp;
					fctx.beginPath();
					fctx.moveTo(fcanvas.width-HUD_HP_WIDTH*mount/lastHitEnemy.maxhp-10, ENEMY_DISPLAY_Y+60);
					fctx.lineTo(fcanvas.width-HUD_HP_WIDTH*mount/lastHitEnemy.maxhp-10, ENEMY_DISPLAY_Y+90);
					fctx.stroke();
				});
			}
		}
		if (this.paragraph) {
			var fontSize = 28;
			fctx.textAlign = "left";
			fctx.font = fontSize+"px "+getFont();
			var lines = getLines(fctx, this.paragraph, fcanvas.width - SIDE_MARGINS*2);
			fctx.fillStyle = "#00000080";
			fctx.fillRect(SIDE_MARGINS, 60, fcanvas.width - SIDE_MARGINS*2, 1.2 * fontSize * lines.length);
			fctx.fillStyle = "#FFFFFF";
			for (var i = 0; i < lines.length; i++) { 
				fctx.fillText(lines[i], SIDE_MARGINS, 60 + 1.2 * fontSize * (i+.75));
			}
		}
		this.paragraph = null;
	},
	setParagraph : function(text) {
		this.paragraph = text;
	}
}