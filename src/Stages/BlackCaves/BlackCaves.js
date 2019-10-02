Stages.BlackCaves = {
	displayName : "Black Caves",
	load : function() {
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
		gravity = .5;
		zoom = 2;
		minZoom = 2;
		player.x = 70;
		player.y = 5;
		player.facingRight = false;
		gameObjects = [new FlashPickup(70, 240, true), new Vessel("BlackCavesRightAtStart", 210, 58), new Vessel("BlackCavesUpperRight", 570, 38), new Vessel("BlackCavesJump", 450, 118), new Vessel("BlackCavesMiddleFallRight", 370, 298), new Vessel("BlackCavesBigJump", 330, 378), new Walkie("BlackCavesOwaki", 570, 660, false), new Hoverie("BlackCavesYoshida", 570, 498, false), new Goalpost("BlackPrison", 592, 500, 60)];
		dialog.begin(new DialogLine("???", "Huh, do I sense someone falling down the cave shaft?", "#FFFFFF"),
			new DialogLine("Anymos", "Who are you?", "#00FFFF"),
			new DialogLine("Naluxos", "*gasp*! It's Anymos! I'm Naluxos, another Uteion like you, but much younger! Please, hurry, I've been captured, and locked in the depths of this cave, help me!", "#FFFFFF"),
			new DialogLine("Naluxos", "I put a bit of my power there so that you could see! You can pick it by pressing Interact - [Space] or (L)!"));
		return {
			mainBack : "src/Stages/BlackCaves/MainBack.png",
			mainFore : "src/Stages/BlackCaves/MainFore.png",
		};
	},
	vessels : ["BlackCavesRightAtStart", "BlackCavesUpperRight", "BlackCavesJump", "BlackCavesMiddleFallRight", "BlackCavesOwaki", "BlackCavesBigJump"],
	par : 525,
	previous : "BlackMountain",
	nextDown : "BlackPrison",
	enemies : [Naluxos, Walkie, Hoverie]
}