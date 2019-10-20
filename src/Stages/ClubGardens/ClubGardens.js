Stages.ClubGardens = {
	displayName : "Club Gardens",
	load : function(doStuff) {
		playMusic("Sculpture Garden - Eric Matyas");
		let H = {name:"Hedge",solid:true,color:"#228B22",leafy:true};
		let S = {name:"HedgeSecret",solid:false,color:"#3A972A",leafy:true};
		let C = {solid:true,color:"#04AAF0",edge:"#005174"};
		let _ = {solid:false,color:"#00A2E8"};
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
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,_,_,_,_,_,_,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,_,_,C,C,_,_,S,_,_,H,H,H,H,_,_,_,_,_,_,H,H,H,H,_,_,H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
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
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
		}
		player.x = 1910;
		player.y = 580;
		player.facingRight = false;
		gameObjects = [new Vessel("ClubGardensDie", 1360, 398), new Vessel("ClubGardensChanosUpperRight", 1000, 188), new Vessel("ClubGardensChanosUpperLeft", 780, 188), new Vessel("ClubGardensChanosLowerRight", 1000, 528), new Vessel("ClubGardensChanosLowerLeft", 780, 528), new Vessel("ClubGardensUpperLeft", 50, 58), new Vessel("ClubGardensUpperRight", 1810, 38), new Vessel("ClubGardensTalkIncentive", 230, 458), new Goalpost("DiamondHighway", 10, 580, 200), new Rumble(500, 140, 240, 130, true, doNothing, new CardPip(400, 80), new CardPip(600, 80)),
			new NPC("ClubGardensWelcomeNPC", Teion.prototype.sprites.normal, 1800, 580, true,
				new DialogLine("Local", "Welcome to lovely Club Gardens! Here, you will find an assortment of lovely topiary commissioned by President Chanos. Enjoy your visit!", "#BFBFBF"),
				new DialogLine("Anymos", "Excuse me, I have a few questions. But first might I ask your name?", "#00FFFF"),
				new DialogLine("Local", "...", "#BFBFBF"),
				new DialogLine("Anymos", "Um, if you wouldn't mind, could you please tell me-", "#00FFFF"),
				new DialogLine("Local", "Welcome to lovely Club Gardens! Here, you will find an assortment of lovely topiary commissioned by President Chanos. Enjoy your visit!", "#BFBFBF"),
				new DialogLine("Anymos", "Hmm... This can't be good.", "#00FFFF")),
			new NPC("ClubGardensChanosTopNPC", Teion.prototype.sprites.normal, 950, 140, true,
				new DialogLine("Local", "Amazing! This decorative hedge in the shape of President Chanos is so great that it is capable of defying gravity, just like President Chanos himself!", "#BFBFBF")),
			new NPC("ClubGardensResistanceNPC", Teion.prototype.sprites.normal, 210, 460, true,
				new DialogLine("Local", "This place is named the Club Gardens after the suit in cards. President Chanos loves playing cards almost as much as he loves his people and his people love him!", "#BFBFBF"),
				new DialogLine("Anymos", "Okay, but could you please tell me why everyone here is acting so-", "#00FFFF"),
				new DialogLine("Local", "(Psst, hey. The Free meet in the top floor of the Kontor residential building. See ya there, aight?)", "#BFBFBF"),
				new DialogLine("Anymos", "Wait, what?", "#00FFFF"),
				new DialogLine("Local", "(Oh, and also, I never told you nothing, got that?)", "#BFBFBF"),
				new DialogLine("Local", "*ahem* This place is named the Club Gardens after the suit in cards. President Chanos loves playing cards almost as much as he loves his people and his people love him!", "#BFBFBF"))];
		//dialog.begin(new DialogLine("Anymos", "There are people here. I can talk to them by pressing Interact - [Space] or (L)."));
	},
	vessels : ["ClubGardensDie", "ClubGardensChanosUpperRight", "ClubGardensChanosUpperLeft", "ClubGardensUpperRight", "ClubGardensUpperLeft", "ClubGardensChanosLowerRight", "ClubGardensChanosLowerLeft", "ClubGardensTalkIncentive"],
	previous : "ClearCanyon",
	nextDown : "DiamondHighway",
	parDown : 480,
	toLoad : [Teion/*, DieWalking, CardPip*/]
}