Stages.CyanRainforest = {
	displayName : "Cyan Rainforest",
	load : function(doStuff) {
		playMusic("Tempest - Darren Curtis");
		let B = BLOCK;
		let W = {name:"Leaves",solid:true,leafy:true}
		let l = {name:"Rain",solid:false,hazard:1,rain:true};
		let _ = AIR;
		staticColl =
		[[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,W,W],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,W,W,l,W,W,W,l,l,l,l,l,l,l,l,l,l,l,l,_,_],
		 [l,l,l,l,l,W,W,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,_,_,l,_,_,_,l,l,l,l,l,l,l,l,l,l,l,l,_,_],
		 [l,l,l,l,l,_,_,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,_,_,l,_,_,_,l,l,l,l,l,l,l,l,l,W,W,l,_,_],
		 [l,l,l,l,l,_,_,l,l,l,l,l,l,l,l,l,W,W,l,l,l,l,W,W,_,W,W,_,W,W,l,l,l,l,l,l,l,l,_,_,l,_,_],
		 [W,W,W,l,l,_,_,l,l,l,l,l,l,l,l,l,_,_,l,l,l,l,_,_,_,_,_,_,_,_,l,l,l,l,l,l,l,l,_,_,l,_,_],
		 [_,_,_,l,l,_,_,l,l,l,l,l,l,l,l,l,_,_,l,l,l,l,_,_,_,_,_,_,_,_,l,l,l,l,l,l,l,l,_,_,l,_,_],
		 [_,_,_,l,l,_,_,l,l,l,l,l,l,l,l,l,_,_,l,l,l,l,_,_,_,_,_,_,_,_,l,l,l,l,l,l,l,l,_,_,l,_,_],
		 [_,_,_,l,l,_,_,l,l,l,l,l,l,l,l,l,_,_,l,l,l,l,_,_,_,_,_,_,_,_,l,l,l,l,l,l,l,l,_,_,l,_,_],
		 [_,_,_,l,W,W,_,l,l,l,l,l,l,W,W,l,_,_,W,W,l,l,_,_,_,_,_,_,_,_,l,l,l,W,W,l,l,l,_,_,l,_,_],
		 [_,_,_,l,_,_,_,l,l,l,l,l,l,_,_,l,_,_,_,_,l,l,_,W,W,_,_,W,W,_,l,l,l,_,_,l,l,l,_,W,W,_,_],
		 [_,_,_,l,_,_,_,l,l,l,l,l,l,_,_,l,_,_,_,_,l,l,_,_,_,_,_,_,_,_,l,l,l,_,_,l,l,l,_,_,_,_,_],
		 [_,_,_,l,_,_,_,l,l,l,l,l,l,_,_,l,_,_,_,_,l,l,_,_,_,_,_,_,_,_,l,l,l,_,_,l,l,l,_,_,_,_,_],
		 [_,_,_,l,_,_,_,l,l,l,l,l,l,_,_,l,_,_,_,_,l,l,_,_,_,_,_,_,_,_,l,l,l,_,_,l,l,l,_,_,_,_,_],
		 [_,_,_,l,_,_,_,l,l,l,l,l,l,_,_,l,_,_,_,_,l,l,_,_,_,_,_,_,_,_,l,l,l,_,_,l,l,l,_,_,_,B,_],
		 [_,_,_,l,_,_,_,l,l,l,l,l,l,_,_,B,_,_,_,_,l,l,_,_,_,_,_,_,_,_,B,l,l,_,_,l,l,l,_,_,_,B,_],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		gravity = .5;
		player.x = 10;
		player.y = 420;
		player.facingRight = true;
		if (doStuff) {
			zoom = 2;
			dialog.begin(new DialogLine("Anymos", "There's a rainstorm here. I suppose it's called the Cyan Rainforest for a reason.", "#00FFFF"),
				new DialogLine("Anymos", "...Wait, how do I know it's called the Cyan Rainforest? I mean, that's a pretty intuitive name, but still...", "#00FFFF"),
				new DialogLine("Anymos", "Anyway, something feels off about this rain. I should especially try to minimize my time spent in the rain.", "#00FFFF"));
		}
		gameObjects = [
			new Vessel("CyanRainforestLowerRight", 850, 418),
			new Vessel("CyanRainforestFruit", 527, 212), new Vessel("CyanRainforestUpperLeft", 11, 19), new Walkie("CyanRainforestCosmo", 580, 420, true), new Walkie("CyanRainforestDon", 110, 140, true),
			new Hoverie("CyanRainforestKathy", 100, 120, true), new Goalpost("BlueLake", 840, 100, 95), new RainGenerator(20, 10),
			new MonologueSpot("CyanRainforestShortJumpMono", 680, 280,
				"It looks like I'll need to use short jumps to get through here. I can do a short jump by jumping while holding Down. This jump can only clear two blocks high",
				"I'll need to quickly judge when to use a regular and short jumps.")];
		
		return {
			mainBack : "src/Stages/CyanRainforest/MainBack.png",
			mainFore : "src/Stages/CyanRainforest/MainFore.png",
		};
	},
	vessels : ["CyanRainforestCosmo", "CyanRainforestLowerRight", "CyanRainforestFruit", "CyanRainforestDon", "CyanRainforestUpperLeft", "CyanRainforestKathy"],
	par : 495,
	previous : "GreenMaze",
	nextDown : "BlueLake",
	toLoad : [Walkie, Hoverie]
}