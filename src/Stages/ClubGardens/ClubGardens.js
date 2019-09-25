Stages.ClubGardens = {
	displayName : "Club Gardens",
	load : function() {
		playMusic("Sculpture Garden - Eric Matyas");
		let H = {name:"Hedge",solid:true,color:"#228B22",leafy:true};
		let S = {name:"HedgeSecret",solid:false,color:"#2A972A",leafy:true};
		let C = {solid:true,color:"#04AAF0"}
		let _ = AIR;
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,S,H,H,H,H,H,H,H,H,H,S,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,_,_,H,H,H,H,H,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,S,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,_,_,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,_,_,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,_,_,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,H,H,_,_,_,_,_,_,_,_,H,H,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,C,C,_,_,H,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,S,_,_,_,H,H,_,_,_,_,_,_,_,_,H,H,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,_,_,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,_,_,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,_,_,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,_,_,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,H,H,_,_,_,_,_,_,_,_,H,H,_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,_,_,S,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,_,_,H,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,S,_,_,_,_,_,_,S,_,_,_,H,H,_,_,_,_,_,_,_,_,H,H,_,_,_,H,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,S,_,_,_,_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,S,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_],
		 [H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H]];
		zoom = 2;
		player.x = 1910;
		player.y = 580;
		player.facingRight = false;
		gameObjects = [new Vessel("ClubGardensDie", 1360, 398), new Vessel("ClubGardensChanosUpperRight", 1000, 188), new Vessel("ClubGardensChanosUpperLeft", 780, 188), new Vessel("ClubGardensChanosLowerRight", 1000, 528), new Vessel("ClubGardensChanosLowerLeft", 780, 528), new Vessel("ClubGardensUpperLeft", 50, 58), new Vessel("ClubGardensUpperRight", 1810, 38), new Vessel("ClubGardensTalkIncentive", 230, 458), new Goalpost("DiamondHighway", 10, 580, 200), new Rumble(500, 140, 240, 130, true, doNothing, new CardPip(400, 80), new CardPip(600, 80)),
			new NPC("ClubGardensWelcomeNPC", function(){return Teion.prototype.sprites.Standing1}, 1800, 580, true,
				new DialogLine("Local", "Welcome to lovely Club Gardens! Here, you will find an assortment of lovely topiary commissioned by President Chanos. Enjoy your visit!", "#BFBFBF"),
				new DialogLine("Anymos", "Excuse me, I have a few questions. But first might I ask your name?", "#00FFFF"),
				new DialogLine("Local", "...", "#BFBFBF"),
				new DialogLine("Anymos", "Um, if you wouldn't mind, could you please tell me-", "#00FFFF"),
				new DialogLine("Local", "Welcome to lovely Club Gardens! Here, you will find an assortment of lovely topiary commissioned by President Chanos. Enjoy your visit!", "#BFBFBF"),
				new DialogLine("Anymos", "Hmm... This can't be good.", "#00FFFF")),
			new NPC("ClubGardensChanosTopNPC", function(){return Teion.prototype.sprites.Standing1}, 950, 140, true,
				new DialogLine("Local", "Amazing! This decorative hedge in the shape of President Chanos is so great that it is capable of defying gravity, just like President Chanos himself!", "#BFBFBF")),
			new NPC("ClubGardensResistanceNPC", function(){return Teion.prototype.sprites.Standing1}, 210, 460, true,
				new DialogLine("Local", "This place is named the Club Gardens after the suit in cards. President Chanos loves playing cards almost as much as he loves his people and his people love him!", "#BFBFBF"),
				new DialogLine("Anymos", "Okay, but could you please tell me why everyone here is acting so-", "#00FFFF"),
				new DialogLine("Local", "(Psst, hey. The resistance meets in the top floor of the Kontor residential building. See ya there, aight?)", "#BFBFBF"),
				new DialogLine("Anymos", "Wait, what?", "#00FFFF"),
				new DialogLine("Local", "(Oh, and also, I never told you nothing, got that?)", "#BFBFBF"),
				new DialogLine("Local", "*ahem* This place is named the Club Gardens after the suit in cards. President Chanos loves playing cards almost as much as he loves his people and his people love him!", "#BFBFBF"))];
		//dialog.begin(new DialogLine("Anymos", "There are people here. I can talk to them by pressing Interact - [Space] or (L)."));
		return {
			mainBack : "src/Stages/ClubGardens/MainBack.png",
			mainFore : "src/Stages/ClubGardens/MainFore.png",
		};
	},
	vessels : ["ClubGardensDie", "ClubGardensChanosUpperRight", "ClubGardensChanosUpperLeft", "ClubGardensUpperRight", "ClubGardensUpperLeft", "ClubGardensChanosLowerRight", "ClubGardensChanosLowerLeft", "ClubGardensTalkIncentive"],
	selectX : Stages.ClearCanyon.selectX,
	selectY : Stages.ClearCanyon.selectY + LS_Y_SPACING,
	par : 415,
	previous : "ClearCanyon",
	nextDown : "DiamondHighway",
	enemies : ["Teion", "DieWalking", "CardPip"]
}
/*
staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,H,H,S,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,S,S,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,_,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,H,H,H,H,_,_,H,H,_,_,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,_,_,H,_,_,H,_,_,_,_,_,_,H,H,H,H,_,_,_,H,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,_,_,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,_,_,H,H,_,_,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,S,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,_,_,H,H,H,H,H,H,H,H,H,_,_,S,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H]];
		zoom = 2;
		player.x = 1910;
		player.y = 580;
		player.facingRight = false;
		gameObjects = [new Vessel("ClubGardensChanosUpperLeft", 840, 188), new Vessel("ClubGardensChanosLowerRight", 1060, 528), new Vessel("ClubGardensUpperLeft", 50, 58), new Vessel("ClubGardensTalkIncentive", 230, 458), new Walkie("ClubGardensClemens", 1340, 300, true), new Goalpost("DiamondHighway", 10, 580, 200), new Rumble(520, 140, 280, 130, true, doNothing, new Hoverie("ClubGardensChloe", 400, 120, true), new Hoverie("ClubGardensClair", 640, 40, false)),
			new NPC("ClubGardensWelcomeNPC", function(){return Teion.prototype.sprites.Standing1}, 1800, 580, true,
				new DialogLine("???", "Welcome to lovely Club Gardens! Here, you will find an assortment of lovely topiary commissioned by President Chanos. Enjoy your visit!", "#BFBFBF"),
				new DialogLine("Anymos", "Excuse me, I have a few questions. But first might I ask your name?", "#00FFFF"),
				new DialogLine("???", "...", "#BFBFBF"),
				new DialogLine("Anymos", "Um, if you wouldn't mind, could you please tell me-", "#00FFFF"),
				new DialogLine("???", "Welcome to lovely Club Gardens! Here, you will find an assortment of lovely topiary commissioned by President Chanos. Enjoy your visit!", "#BFBFBF"),
				new DialogLine("Anymos", "Hmm... This can't be good.", "#00FFFF")),
			new NPC("ClubGardensWalkieWarningNPC", function(){return Teion.prototype.sprites.Standing1}, 1230, 360, false,
				new DialogLine("???", "If you see one of these Walkies, or other yellow creatures, do not approach and most certainly do not touch! They are very dangerous.", "#BFBFBF"),
				new DialogLine("???", "If you come across one, do not approach. Notify a police officer as soon as possible.", "#BFBFBF"),
				new DialogLine("???", "Except for this one! This one is named Clemens, and he was used by the topiarist as a model then making this shed.", "#BFBFBF")),
			new NPC("ClubGardensChanosTopNPC", function(){return Teion.prototype.sprites.Standing1}, 950, 140, true,
				new DialogLine("???", "Amazing! This decorative hedge in the shape of President Chanos is so great that it is capable of defying gravity, just like President Chanos himself!", "#BFBFBF")),
			new NPC("ClubGardensResistanceNPC", function(){return Teion.prototype.sprites.Standing1}, 210, 460, true,
				new DialogLine("???", "This place is named the Club Gardens after the suit in cards. President Chanos loves playing cards almost as much as he loves his people and his people love him!", "#BFBFBF"),
				new DialogLine("Anymos", "Okay, but could you please tell me why everyone here is acting so-", "#00FFFF"),
				new DialogLine("???", "(Psst, hey. The resistance meets in the cellar underneath the Kontor residential building. See ya there, aight?)", "#BFBFBF"),
				new DialogLine("Anymos", "Wait, what?", "#00FFFF"),
				new DialogLine("???", "(Oh, and also, I never told you nothing, got that?)", "#BFBFBF"),
				new DialogLine("???", "*ahem* This place is named the Club Gardens after the suit in cards. President Chanos loves playing cards almost as much as he loves his people and his people love him!", "#BFBFBF"))];
*/