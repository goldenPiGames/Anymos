Stages.MagentaTown = {
	displayName : "Magenta Town",
	load : function(doStuff) {
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
		if (doStuff) {
			zoomd = 2;
			zoom = 2;
		}
		player.x = 10; //TODO make fighting optional for throughway
		player.y = 540;
		player.facingRight = true;
		switches = [true];
		switchColors = ["#8040B0"];
		gameObjects = [new Vessel("MagentaTownByRightTower", 772, 260), new RainGenerator(20, 15),
			new Walkie("MagentaTownMcCoy", 250, 460, false),
			new Walkie("MagentaTownPopoca", 310, 380, false),
			new Hoverie("MagentaTownElla", 250, 280, true),
			new Walkie("MagentaTownHatfield", 720, 540, false),
			new Walkie("MagentaTownJack", 630, 460, false),
			new Walkie("MagentaTownDumbbell", 630, 380, false),
			new Hoverie("MagentaTownMalana", 640, 360, false),
			new Goalpost("WhitePlains", 810, 540, 120),
			new Door(0, 470, 560, 20, 20),
			{update:()=>{
					if (!gameObjects.reduce((acc, cur) => acc || (cur.team == "Sqarnos" && cur instanceof Enemy && !cur.dead), false)) {
						switches[0] = false;
						this.dead = true;
					}
				}, draw:doNothing},
			new Goalpost("MagentaDefense", 610, 620, 55),
			new NPC("MagentaTownRefugee1", Teion.prototype.sprites.normal, 513, 620, false,
				new DialogLine("Villager", "*Gasp* Anymos?", "#BFBFBF"),
				new DialogLine("Anymos", "Uh, yeah. That's me. (I think.)", "#00FFFF"),
				new DialogLine("Villager", "Yes! We're saved! Anymos is here!", "#BFBFBF"),
				new DialogLine("Anymos", "So would you mind explaining...", "#00FFFF"),
				new DialogLine("Villager", "Anyways, could you please keep helping us? There'll probably be more enemies on the way soon!", "#BFBFBF")),
			new NPC("MagentaTownRefugee1", Teion.prototype.sprites.normal, 571, 620, false,
				new DialogLine("Villager", "Please, we need your help. Those things... they're not normal.", "#BFBFBF"),
				new DialogLine("Anymos", "They're easy enough for me.", "#00FFFF"),
				new DialogLine("Villager", "Well, sure, but you're the almghty Anymos.", "#BFBFBF"),
				new DialogLine("Villager", "It's been a long time since these enemies managed to get here.", "#BFBFBF"),
				new DialogLine("Anymos", "What do you mean?", "#00FFFF"),
				new DialogLine("Villager", "You know, Sqarnos escaping? Happens on a semi-regular basis. But you're always there to make things right. You've never failed yet.", "#BFBFBF"),
				new DialogLine("Villager", "Except this time, you're late. Also, there's been a rainstorm of death coming down on us, and the magical barrier Aqros gave us is probably going to give out soon.", "#BFBFBF"),
				new DialogLine("Anymos", "I'm not in great shape right now, I have to admit.", "#00FFFF"),
				new DialogLine("Villager", "I'm just relieved you're finally here.", "#BFBFBF"),
				new DialogLine("Anymos", "Alright. I won't let you down.", "#00FFFF"))];
	},
	vessels : ["MagentaTownMcCoy", "MagentaTownPopoca", "MagentaTownElla", "MagentaTownHatfield", "MagentaTownJack", "MagentaTownDumbbell", "MagentaTownMalana", "MagentaTownByRightTower"],
	previous : "BlueLake",
	nextDown : "WhitePlains",
	parDown : 210,
	nextRight : "MagentaDefense",
	parRight : 525,
	toLoad : [Walkie, Hoverie, Teion, Switch]
}