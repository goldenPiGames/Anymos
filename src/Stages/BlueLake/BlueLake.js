Stages.BlueLake = {
	displayName : "Blue Lake",
	load : function() {
		playMusic("Tempest - Darren Curtis");
		let B = BLOCK;
		let l = {name:"Rain",solid:false,hazard:1,rain:true};
		let W = {name:"Water",solid:false,hazard:9};
		let _ = AIR;
		staticColl =
		[[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,B,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,B,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,B,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,B,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,_,_,_,B,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,_,_,_,B,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,B,_,B,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,B,_,B,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,B,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,B,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,B,B,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,B,_,B,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,B,_,_,B,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,B,_,B,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,B,_,B,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,B,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,_,B,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,_,B,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,B,_,_,_,B,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,_,B,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,B,_,_,B,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,B,_,_,_,_,B,B,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,_,B,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,B,B,_,_,_,_,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,_,_,_,B,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,B,_,B,_,_,_,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,B,_,_,_,B,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,B,_,_,B,_,_,_,_,_,B,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B,_,_,_,_,_,_,_,_,B,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,_,_,_,_,_,_,_,_,_,_,l,l,l,l,l,l,l,l,l,_,_,_,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,_,_,_,_,_,_,_,_,_,_,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,_,_,_,_,_,_,_,_,_,_,l,l,l,l,l,l,l,l,l,_,_,_,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,_,_,_,_,_,_,_,_,_,_,l,l,l,l,l],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,W,W,W,W,W,W,W,B,B,B,W,W,W,_,_,W,W,W,W,B,B,W,W,W,W,W,W,W,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,W,W,B,B,W,_,_,W,B,B,B,W,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,_,_,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		gravity = .5;
		zoom = 2;
		player.x = 20;
		player.y = 560;
		player.facingRight = true;
		gameObjects = [new Door("Blue", 680, 580, 40, 20), new Door("Grey", 680, 600, 80, 20), new Vessel("BlueLakeLeftTowerCupboard", 230, 298), new Vessel("BlueLakeAboveLeftTower", 260, 18), new Vessel("BlueLakeRightTowerCrawl", 1150, 418), new Vessel("BlueLakeAboveRightTower", 1100, 18), new Vessel("BlueLakeIntoHole", 680, 628), new Switch("Blue", 270, 210, true), new Switch("Grey", 1090, 210, true), new RainGenerator(20, 15), new Goalpost("MagentaTown", 1280, 560, 100), new Goalpost("BlueLakebed", 680, 760, 100)];
		dialog.begin(new DialogLine("Anymos", "So this is where that accursed rain has been coming from.", "#00FFFF"),
			new DialogLine("Anymos", "And speaking of cursed... Wow, that lake water is so heavily cursed, I didn't know that amount of cursedness is even physically possible.", "#00FFFF"),
			new DialogLine("Anymos", "Last I remember, the water of this lake was not only clean and pure, but was a place where something good was venerated...", "#00FFFF"),
			new DialogLine("Anymos", "Wait, I remember? I remember? I don't remember much as far as details... but there's definitely something very wrong about the state of the lake.", "#00FFFF"));
		return {
			mainBack : "src/Stages/BlueLake/MainBack.png",
			mainFore : "src/Stages/BlueLake/MainFore.png",
		};
	},
	vessels : ["BlueLakeLeftTowerCupboard", "BlueLakeAboveLeftTower", "BlueLakeRightTowerCrawl", "BlueLakeAboveRightTower", "BlueLakeIntoHole"],
	selectX : Stages.CyanRainforest.selectX,
	selectY : Stages.CyanRainforest.selectY + LS_Y_SPACING,
	par : 1040,
	previous : "CyanRainforest",
	nextLeft : "BlueLakebed",
	nextDown : "MagentaTown",
	enemies : []
}