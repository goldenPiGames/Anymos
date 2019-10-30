Stages.DarkCaverns = {
	displayName : "Dark Caverns",
	load : function(doStuff) {
		playMusic("The Darkness Below - Eric Matyas");
		let B = {name:"Stone",solid:true,color:"#101010"};
		let _ = {name:"Air",solid:false,color:"#808080"};
		staticColl =
		[[B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
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
			zoomd = 2;
		}
		minZoom = 2;
		player.x = 30;
		player.y = 5;
		player.facingRight = false;
		player.special = specialFlash;
		gameObjects = [
			new Vessel("DarkCavernsLeft", 50, 158),
			new Vessel("DarkCavernsBigJump", 330, 38),
			new Walkie("DarkCavernsOwaki", 570, 320, false),
			new Hoverie("DarkCavernsYoshida", 570, 158, false),
			new Goalpost("DarkPrison", 592, 160, 60)];
		//dynamicForeground = new DarknessFore();
		illuminateFore = true;
	},
	vessels : ["DarkCavernsLeft", "DarkCavernsBigJump", "DarkCavernsOwaki", "DarkCavernsYoshida"],
	previous : "DarkTunnels",
	parDown : 1000,
	nextDown : "DarkPrison",
	toLoad : [Naluxos, Walkie, Hoverie]
}