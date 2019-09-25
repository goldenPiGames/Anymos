Stages.MagentaTown = {
	displayName : "Magenta Town",
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
		player.x = 10;
		player.y = 540;
		player.facingRight = true;
		gameObjects = [new Vessel("MagentaTownByRightTower", 772, 260), new RainGenerator(20, 15), new Rumble(410, 540, 700, 430, true, doNothing, new Walkie("MagentaTownMcCoy", 270, 460, true), new Walkie("MagentaTownPopoca", 310, 380, false), new Hoverie("MagentaTownElla", 250, 280, true), new Walkie("MagentaTownHatfield", 720, 540, false), new Walkie("MagentaTownJack", 630, 460, false), new Walkie("MagentaTownDumbbell", 630, 380, false), new Hoverie("MagentaTownMalana", 640, 360, false)), new Goalpost("WhitePlains", 810, 540, 120), new Goalpost("MagentaDefense", 610, 620, 55),
			new NPC("MagentaTownRefugee1", function(){return Teion.prototype.sprites.Standing1}, 513, 620, false,
				new DialogLine("Villager", "Did you just kill every single monster that was attacking us?", "#BFBFBF"),
				new DialogLine("Anymos", "Yes, I did, but I wouldn't exactly call it an amazing feat...", "#00FFFF"),
				new DialogLine("Villager", "Wow, you make it sound like it was so easy!", "#BFBFBF"),
				new DialogLine("Anymos", "...it was...", "#00FFFF"),
				new DialogLine("Villager", "Anyways, could you please keep helping us? More enemies like those are on their way, they'll be here any minute!", "#BFBFBF")),
			new NPC("MagentaTownRefugee1", function(){return Teion.prototype.sprites.Standing1}, 571, 620, false,
				new DialogLine("Villager", "Please, we need your help. Those things... they're not normal.", "#BFBFBF"),
				new DialogLine("Anymos", "Really? I can dispatch one with just a single slash or less than a second of beam.", "#00FFFF"),
				new DialogLine("Villager", "Well, then, that's why we need you. You may not know this, but those things are very resistant to normal weaponry.", "#BFBFBF"),
				new DialogLine("Villager", "We rallied our hunters together. It took one a minute to take out just one enemy, and even then, another fell from the sky not long after. Eventually, the hunters retreated as well.", "#BFBFBF"),
				new DialogLine("Anymos", "Speaking of retreating, where are all the people? Are you two in this cellar the only ones left?", "#00FFFF"),
				new DialogLine("Villager", "There are actually like a dozen villagers in this cellar, you just can't see them because they're irrelevant. And there are plenty of other people in the houses and such.", "#BFBFBF"),
				new DialogLine("Anymos", "Makes sense, I guess?", "#00FFFF"))];
		return {
			mainBack : "src/Stages/MagentaTown/MainBack.png",
			mainFore : "src/Stages/MagentaTown/MainFore.png",
		};
	},
	vessels : ["MagentaTownMcCoy", "MagentaTownPopoca", "MagentaTownElla", "MagentaTownHatfield", "MagentaTownJack", "MagentaTownDumbbell", "MagentaTownMalana", "MagentaTownByRightTower"],
	selectX : Stages.BlueLake.selectX,
	selectY : Stages.BlueLake.selectY + LS_Y_SPACING,
	par : 430,
	previous : "BlueLake",
	nextRight : "MagentaDefense",
	nextDown : "WhitePlains",
	enemies : ["Walkie", "Hoverie", "Teion"]
}