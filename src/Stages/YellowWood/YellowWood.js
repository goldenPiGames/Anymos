Stages.YellowWood = {
	displayName : "Yellow Wood",
	load : function(doStuff) {
		//playMusic("Mountainside - Eric Matyas");
		playMusic("Breeze - PeriTune");
		let G = {solid:true,color:"#672F0A",grassyTop:"#FFF200"};
		let D = {solid:true,color:"#672F0A"};
		let L = {solid:true,color:"#FFF200",leafy:true};
		let S = {solid:false,color:"#73350D"};
		let _ = {solid:false,color:"#00A2E8"};//TODO draw trees
		oobtopcolor = "#00A2E8";
		oobbottomcolor = "#672F0A";
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,L,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,L,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,S,G,_,_,_,_,_,_,_,L,L,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,_,_,L,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,_,_,_,_,_,L,_,_,_,_,_,_,_,_,_,G,S,S,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,L,_,_,_,_,G,S,S,S,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,S,S,S,S,G,_,_,_,_,_,_,_,_,_,_,_,L,L,_,_,_,_,_,_,_,_,_,_,G,G],
		 [_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,S,S,S,S,S,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,L,L,_,G,G,G,G,G,_,_,_,_,_,_,_,_,_,L,_,_,_,_,_,_,_,G,S,D,S,S,S,S,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [_,_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,S,S,S,S,S,S,S,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [_,_,_,_,_,_,_,_,G,G,G,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,S,S,S,S,S,S,S,S,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [_,_,_,_,_,_,_,G,G,G,G,G,G,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,G,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G,S,S,S,S,S,S,S,S,S,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,D,D,D,D,D,D,D,D,D,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,D,D,D,D,D,D,D,D,D,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
			dialog.begin(
				new DialogLine("Anymos", "Where am I?...", "#00FFFF"),
				new DialogLine("Anymos", "I don't remember anything. But I can feel I'm slowly dying for some reason. Oh, well, better get going. Hanging around isn't going to do anything for me.", "#00FFFF"),
			);
		}
		player.x = 770;
		player.y = 400;
		player.facingRight = true;
		gameObjects = [
			new Vessel("YellowWoodTreetop", 960, 19),
			new Vessel("YellowWoodHillCave", 1130, 239),
			new Vessel("YellowWoodUnderBranch", 1440, 199),
			new Vessel("YellowWoodUnderLedge", 1690, 319),
			new Walkie("YellowWoodNathan", 500, 400, false),
			new Hoverie("YellowWoodKaren", 475, 260, true),
			new Goalpost("RedValley", 20, 400, 120),
			new Goalpost("GreenMaze", 1700, 280, 100),
			new MonologueSpot("YellowWoodTreetopViewMono", 960, 58,
				()=>player.facingRight = false,
				"When I look to the left, I get a strange feeling of both dread and familiarity. Yet I also feel oddly drawn toward it, and speculating about what lies beyond makes me feel... anger? I don't know how to explain it.",
				()=>player.facingRight = true,
				"To the right, I also can't see much. But I get a feeling of... wonderment.",
				"Which way to go? I should pick one way or the other. But I needn't worry too much, because I'm sure I can come back eventually for the road not taken."),
		];
	},
	vessels : ["YellowWoodTreetop", "YellowWoodHillCave", "YellowWoodUnderBranch", "YellowWoodUnderLedge", "YellowWoodNathan", "YellowWoodKaren"],
	//selectX : 0,
	//selectY : 150,
	previous : "TutorialPrelude",
	nextLeft : "RedValley",
	parLeft : 315,
	nextRight : "GreenMaze",
	parRight : 225,
	toLoad : [Walkie, Hoverie],
}