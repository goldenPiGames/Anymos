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
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],+
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		zoom = 2;
		player.x = 610;
		player.y = 620;
		player.facingRight = false;//TODO add some remote bomb power
		var rumble2 = new Rumble(60, 760, 110, 540, false, ()=>gameObjects.push(new Goalpost("MagentaDuel", 610, 620, 55)),
			new Wallie("MagentaDefenseToby", 150, 300, true, true),
			new Wallie("MagentaDefenseArthur", 670, 300, false, true),
			new Spinnie("MagentaDefenseViolet", 80, 135, true, true),
			new Spinnie("MagentaDefenseLilac", 100, 135, true, true),
			new Spinnie("MagentaDefenseWisteria", 120, 135, true, true),
		);
		var rumble1 = new Rumble(60, 760, 110, 540, true, ()=>rumble2.enterTrigger=true,
			new Bouncie("MagentaDefenseMack", 80, 130, true),
			new Bouncie("MagentaDefenseShy", 100, 130, true),
			new Bouncie("MagentaDefenseSter", 120, 130, true),
		);
		gameObjects = [new RainGenerator(20, 15), rumble1, rumble2,
			new NPC("MagentaDefenseRefugee1", Teion.prototype.sprites.normal, 513, 620, false,
				new DialogLine("Villager", "Please, be careful! More are on their way!", "#BFBFBF")),
			new NPC("MagentaDefenseRefugee2", Teion.prototype.sprites.normal, 571, 620, false,
				new DialogLine("Villager", "Keep it up.", "#BFBFBF"))];
	},
	vessels : ["MagentaDefenseMack", "MagentaDefenseShy", "MagentaDefenseSter", "MagentaDefenseViolet", "MagentaDefenseLilac", "MagentaDefenseWisteria", "MagentaDefenseToby", "MagentaDefenseArthur"],
	par : 465,
	previous : "MagentaTown",
	nextDown : "MagentaDuel",
	toLoad : [Bouncie, Spinnie, Wallie, Teion],
	reuseBack : "MagentaTown",
	reuseFore : "MagentaTown",
}