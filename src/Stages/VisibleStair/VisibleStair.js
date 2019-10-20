Stages.VisibleStair = {
	displayName : "Visible Stair",
	load : function(doStuff) {
		playMusic("Underwater Coolness - Eric Matyas");
		let B = {solid:true,color:"#000080"}
		let W = {name:"Water",solid:false,hazard:14,color:"#276383"};
		let i = {solid:true,color:"#8080F8",stripe:"#BFBFBF"}//{name:"darkness",solid:false,color:"#000000",leafy:true};
		let S = {solid:false,color:"#000091"}
		let _ = {solid:false,color:"#8080FF"};
		let I = {solid:true,color:"#8080FF"};
		let M = _;
		staticColl =
		[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,B,B,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,I,I,_,_,_],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,i,i,i,i,i,B,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_],
		 [B,i,i,B,B,B,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,B,I,I,_,_,_],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,B,B,i,i,i,_,_,_,I,I,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,B,i,i,i,i,i,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,i,i,i,i,B,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,B,_,_,_,B,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,B,i,i,i,_,_,_,B,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,B,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,I,B,B,B],
		 [B,i,B,i,i,i,i,i,i,i,i,i,B,i,i,_,_,B,_,_,_,_,_,_,_,_,_,B,_,B],
		 [B,i,B,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,B,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,B,i,i,i,B,B,i,i,i,B,B,_,_,_,I,I,_,_,_,B,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,B,B,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,B,B,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,B,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,B,_,B],
		 [B,i,B,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,B,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,i,B,i,i,i,B,i,B,i,B,i,i,i,_,_,_,B,_,B,_,I,_,B,_,I,_,B,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,B,B,i,i,i,i,i,i,_,_,_,_,_,_,I,I,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,i,i,B,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,I,_,_,_],
		 [B,i,i,i,i,i,i,i,i,B,B,B,B,i,i,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,i,i,i,i,i,i,i,i,i,i,i,i,i,i,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		maxZoom = 2;
		player.x = 590;
		player.y = 1080;
		player.facingRight = false;
		//player.special = "Aqros' Reflector";
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
			dialog.begin(
				new DialogLine("Aqros", "So you've arrived.", "#0000FF"),
				new DialogLine("Anymos", "Of course. That cursed rainstorm up above, it's your doing, isn't it?", "#00FFFF"),
				new DialogLine("Aqros", "Yes, it is.", "#0000FF"),
				new DialogLine("Anymos", "Why?", "#00FFFF"),
				new DialogLine("Aqros", "Wouldn't you like to know?", "#0000FF"));
		}
		gameObjects = [
			new Mirror(300, 1100, 1080),
			new Goalpost(this.nextDown, 590, 140, 90),
			//new Vessel("VisibleStairFlipAlcoveLeft", 30, 458),
			new Vessel("VisibleStairFlipAlcoveRight", 570, 458),
			//new Vessel("VisibleStairCaseLeft", 220, 208),
			new Vessel("VisibleStairCaseRight", 380, 208),
			//new Vessel("VisibleStairGlassCrawl", 30, 78)
		];
	},
	vessels : ["VisibleStairFlipAlcoveRight", "VisibleStairCaseRight"],
	previous : "BlueLakebed",
	nextDown : "AqrosAntechamber",
	parDown : 615,
	toLoad : [Mirror]
}