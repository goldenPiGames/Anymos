Stages.GreyHarbor = {
	displayName : "Grey Harbor",
	load : function() {
		playMusic("Tempest - Darren Curtis");
		let B = BLOCK;
		let W = {name:"Water",solid:false,hazard:1,color:"#4040BF"};
		let U = {name:"Underwater Pier",solid:true,hazard:1,color:"#4040BF"};
		let _ = AIR;
		let D = {name:"Death",solid:false,hazard:Infinity,color:"#4040BF"};
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,B,B,B,_,_,_,_,B,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,W,W,W,U,W,W,W,W,U,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,W,W,W,U,W,W,W,W,U,U,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,W,W,W,U,W,W,W,W,U,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,W,W,W,U,W,W,W,W,U,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,D,D,D,D,U,D,D,D,D,U,D,D,D,D,D,D,D,D,D,D,D,D,D,D]];
		zoom = 2;
		player.x = 30;
		player.y = 220;
		player.facingRight = true;
		gameObjects = [
			new Rumble(490, 910, 30, 360, true, ()=>gameObjects.push(new Goalpost("ZagadCrossing", 410, 200, 100)),
				new Fricchee("GreyHarborFricchee", 820, 240, false)),
			new Vessel("GreyHarborOut", 740, 120),
			new NPC("GreyHarborCapes", Teion.prototype.sprites.Caps, 140, 220, true,
				new DialogLine("Anymos", "Hello there. I was wondering if I could borrow a boat. I feel the need to travel across the sea to the next continent.", "#00FFFF"),
				new DialogLine("Caps", "Oh, my- Anymos?! What an honor it is to meet you! And even greater, to provide a service to you. The name's Caps, by the way.", "#BFBFBF"),
				new DialogLine("Caps", "Well, you see... I'd love to help you, but unfortunately, I have a bit of an issue with a giant spherical shark with a frickin' laser beam on its head, so trying to launch a ship would be risky, to say the least.", "#BFBFBF"),
				new DialogLine("Anymos", "I'm on it.", "#00FFFF"),
				new DialogLine("Caps", "I'll start getting a boat ready. Let's have a nice chat on the boat once we launch, eh?", "#BFBFBF"))
			];
		return {
			mainBack : "src/Stages/GreyHarbor/MainBack.png",
			mainFore : "src/Stages/GreyHarbor/MainFore.png",
		};
	},
	vessels : ["GreyHarborOut", "GreyHarborFricchee"],
	par : 480,
	previous : "WhitePlains",
	nextDown : "ZagadCrossing",
	toLoad : [Fricchee, Teion]
}