Stages.YellowWood = {
	displayName : "Yellow Wood",
	load : function() {
		playMusic("Mountainside - Eric Matyas");
		let B = BLOCK;
		let _ = AIR;
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,B,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,B,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		gravity = .5;
		zoom = 1;
		player.x = 770;
		player.y = 400;
		player.facingRight = true;
		gameObjects = [new Vessel("YellowWoodTreetop", 960, 19), new Vessel("YellowWoodHillCave", 1130, 239), new Vessel("YellowWoodUnderBranch", 1440, 199), new Vessel("YellowWoodUnderLedge", 1690, 319), new Goalpost("GreenMaze", 1700, 280, 100), new Walkie("YellowWoodNathan", 500, 400, false), new Hoverie("YellowWoodKaren", 490, 260, true), new Goalpost("RedValley", 20, 400, 120),
			new MonologueSpot("YellowWoodTreetopViewMono", 960, 58,
				"Even from the top of this tree, I can't see far. I think I may be a bit nearsighted.",
				"But still, when I look to the left, I get a strange feeling of both dread and familiarity. Yet I also feel oddly drawn toward it, and speculating about what lies beyond makes me feel... anger? I don't know how to explain it.",
				"To the right, I also can't see much. But I get a feeling of... wonderment.",
				"Which way to go? I should pick one way or the other. But I needn't worry too much, because I'm sure I can come back eventually for the road not taken."),
			];
		dialog.begin(new DialogLine("Anymos", "Well, I'm finally outside of that place. Now I'm in some kind of yellow forest. Unfamiliar, of course, just like everything.", "#00FFFF"),
			new DialogLine("Anymos", "Perhaps if I climb to the top of this tree, I can get a better view of my surroundings.", "#00FFFF"));
		return {
			mainBack : "src/Stages/YellowWood/MainBack.png",
			mainFore : "src/Stages/YellowWood/MainFore.png",
		};
	},
	vessels : ["YellowWoodTreetop", "YellowWoodHillCave", "YellowWoodUnderBranch", "YellowWoodUnderLedge", "YellowWoodNathan", "YellowWoodKaren"],
	selectX : 0,
	selectY : 150,
	par : 530,
	previous : "BeginningClimb",
	nextRight : "GreenMaze",
	nextLeft : "RedValley",
	enemies : ["Walkie", "Hoverie"]
}