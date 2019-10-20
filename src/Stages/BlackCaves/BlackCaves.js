Stages.BlackCaves = {
	displayName : "Black Caves",
	load : function(doStuff) {
		playMusic("The Darkness Below - Eric Matyas");
		let B = {name:"Stone",solid:true,color:"#101010"};
		let _ = {name:"Air",solid:false,color:"#505050"};
		staticColl =
		[[B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,_,_,B,B,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B],
		 [B,B,B,_,_,B,B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,B,B,_,_,_,B,B,_,B],
		 [B,B,B,_,_,_,B,_,B,B,B,B,B,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,_,B,_,_,_,B,_,_,_,B,_,B,B,B,B,B,_,B,B,B,B,_,B,B,B,_,B],
		 [B,B,B,_,B,B,B,B,B,_,_,_,B,_,B,_,_,B,B,_,B,B,_,B,_,B,B,B,_,B],
		 [B,B,B,_,B,B,B,B,B,_,B,_,_,_,_,_,_,_,_,_,B,B,_,B,_,B,B,_,_,B],
		 [B,B,_,_,_,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,_,B,B],
		 [B,_,_,_,_,_,B,B,_,_,B,B,B,B,B,B,B,B,_,_,B,B,_,B,B,B,B,_,B,B],
		 [B,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,B,B,_,_,B],
		 [B,_,_,_,_,B,B,B,B,B,B,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,_,B],
		 [B,B,_,_,_,B,B,B,B,B,B,_,_,_,_,_,_,_,_,B,B,_,_,B,B,B,B,B,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,_,_,_,_,_,B,B,B,_,_,_,B],
		 [B,B,B,B,B,B,B,_,_,B,B,B,B,_,_,B,B,B,B,B,B,B,_,_,_,_,_,_,B,B],
		 [B,B,_,_,_,_,_,_,_,B,B,B,B,_,_,B,B,B,_,B,B,B,_,B,B,B,B,_,B,B],
		 [B,_,_,B,B,B,B,B,_,B,B,B,B,_,_,_,_,_,_,B,B,_,_,B,B,B,B,_,_,B],
		 [B,_,B,B,_,_,_,B,_,B,B,B,B,_,B,B,B,B,B,B,B,_,_,B,B,B,B,B,B,B],
		 [B,_,B,B,_,_,_,_,_,B,B,B,B,_,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,_,B,B,B,B,B,B,B,_,B,B,_,B,B,B,B,_,B,B,B,B,B,B,B,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,B,_,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,_,_,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,_,B,B,_,_,_,B,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B],
		 [B,_,B,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		if (doStuff) {
			zoom = 2;
			minZoom = 2;
			dialog.begin(new DialogLine("???", "Huh, do I sense someone falling down the cave shaft?", "#FFFFFF"),
				new DialogLine("Anymos", "Who are you?", "#00FFFF"),
				new DialogLine("Naluxos", "*gasp*! It's Anymos! I'm Naluxos, another Uteion like you, but much younger! Please, hurry, I've been captured, and locked in the depths of this cave, help me!", "#FFFFFF"),
				new DialogLine("Naluxos", "I put a bit of my power there so that you could see! You can pick it by pressing Interact - [Space] or (L)!"));
		}
		player.x = 70;
		player.y = 5;
		player.facingRight = false;
		gameObjects = [
			new FlashPickup(70, 240, doStuff),
			new Vessel("BlackCavesBumpAround1", 200, 58),
			new Vessel("BlackCavesBumpAround2", 220, 58),
			new Vessel("BlackCavesBumpAround3", 240, 58),
			new Vessel("BlackCavesUpperRight", 570, 38),
			new Vessel("BlackCavesJump", 450, 118),
			new Vessel("BlackCavesMiddleFallRight", 370, 298),
			new Vessel("BlackCavesBigJump", 330, 378),
			new Walkie("BlackCavesOwaki", 570, 660, false),
			new Hoverie("BlackCavesYoshida", 570, 498, false),
			new Goalpost("BlackPrison", 592, 500, 60)];
	},
	vessels : ["BlackCavesBumpAround1", "BlackCavesBumpAround2", "BlackCavesBumpAround3", "BlackCavesUpperRight", "BlackCavesJump", "BlackCavesMiddleFallRight", "BlackCavesOwaki", "BlackCavesBigJump"],
	previous : "BlackMountain",
	parDown : 2000,
	nextDown : "BlackPrison",
	toLoad : [Naluxos, Walkie, Hoverie]
}