Stages.MagentaDefense = {
	displayName : "Magenta Defense",
	load : function() {
		playMusic("Tempest - Darren Curtis");
		let B = BLOCK;
		let l = {name:"Rain",solid:false,hazard:1,rain:true};
		let _ = AIR;
		staticColl =
		[[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,B,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B,l,l],
		 [l,l,B,B,B,_,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,_,B,B,B,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,B,B,_,B,B,B,_,_,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,_,_,B,B,B,_,B,B,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,B,_,B,_,_,_,B,B,B,B,B,B,_,_,_,_,B,B,_,_,_,_,B,B,B,B,B,_,_,_,B,_,B,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,B,B,_,_,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,B,B,B,B,B,B,B,B,_,_,B,B,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l],
		 [l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		zoom = 2;
		player.x = 610;
		player.y = 620;
		player.facingRight = false;
		var rumble2 = new Rumble(410, 540, 700, 430, false, function(){gameObjects.push(new Goalpost("MagentaDuel", 610, 620, 55))}, new Wallie("MagentaDefenseToby", 150, 300, true, true), new Wallie("MagentaDefenseArthur", 670, 300, false, true));
		var rumble1 = new Rumble(410, 540, 700, 430, true, function(){rumble2.enterTrigger = true});
		var randleft = rumble1.x-rumble1.width/2+20;
		var randwidth = rumble1.width-40;
		for(var i = 0; i < this.bouncies.length; i++) {
			rumble1.enemies.push(new Bouncie(this.bouncies[i], randleft+Math.random()*randwidth, 130, flipCoin()));
		}
		for(var i = 0; i < this.spinnies.length; i++) {
			rumble2.enemies.push(new Spinnie(this.spinnies[i], randleft+Math.random()*randwidth, 135, flipCoin(), true));
		}
		gameObjects = [new RainGenerator(20, 15), rumble1, rumble2,
			new NPC("MagentaDefenseRefugee1", function(){return Teion.prototype.sprites.Standing1}, 513, 620, false,
				new DialogLine("Villager", "Please, be careful! More are on their way!", "#BFBFBF")),
			new NPC("MagentaDefenseRefugee1", function(){return Teion.prototype.sprites.Standing1}, 571, 620, false,
				new DialogLine("Villager", "Keep it up.", "#BFBFBF"))];
		return {
			mainBack : "src/Stages/MagentaTown/MainBack.png",
			mainFore : "src/Stages/MagentaTown/MainFore.png",
		};
	},
	bouncies : ["MagentaDefenseMack", "MagentaDefenseShy", "MagentaDefenseSter"],
	spinnies : ["MagentaDefenseViolet", "MagentaDefenseLilac", "MagentaDefenseWisteria"],
	vessels : ["MagentaDefenseMack", "MagentaDefenseShy", "MagentaDefenseSter", "MagentaDefenseViolet", "MagentaDefenseLilac", "MagentaDefenseWisteria", "MagentaDefenseToby", "MagentaDefenseArthur"],
	par : 465,
	previous : "MagentaTown",
	nextDown : "MagentaDuel",
	enemies : ["Bouncie", "Spinnie", "Wallie", "Teion"]
}