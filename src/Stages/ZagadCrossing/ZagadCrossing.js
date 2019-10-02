Stages.ZagadCrossing = {
	displayName : "Zagad Crossing",
	load : function() {
		playMusic("Anomalies Abound - Eric Matyas");
		let B = {name:"Ship",solid:true,color:"#967F69"};
		let W = {name:"Water",solid:false,hazard:1,color:"#4040BF"};
		let _ = AIR;
		let D = DEATH;
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B,B,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,B,B,B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,W,W,W,W,B,B,B,B,B,B,B,B,B,B,B,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,B,B,B,B,B,B,B,B,B,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D]];
		zoom = 3;
		minZoom = 2;
		player.x = 300;
		player.y = 200;
		player.facingRight = true;
		var rumble1; var rumble2; var rumble3;
		caps = new NPC("ZagadCrossingCaps", Teion.prototype.sprites.Caps, 180, 160, true,
			new DialogLine("Caps", "We're almost to Longuis. Take it easy.", "#7F7F7F"));
		caps.dead = true;
		rumble1 = new Rumble(0, 600, 0, 300, true, ()=>rumble2.enterTrigger = true, new Flipwip(60));
		rumble2 = new Rumble(0, 600, 0, 300, false, ()=>rumble3.enterTrigger = true, new Fricchee("ZagadCrossingFricchee", 120, 220, true));
		rumble3 = new Rumble(0, 600, 0, 300, false, ()=>{player.drained = false; caps.dead = false; gameObjects.push(caps, new Goalpost("IgmaBeach", 430, 160, 80))}, new Flipwip(30), new Flipwip(35));
		rumble1.enemies[0].cycle = FLIPWIP_APPEAR_TIME+10;
		rumble3.enemies[0].cycle = FLIPWIP_APPEAR_TIME+15;
		rumble3.enemies[1].cycle = FLIPWIP_APPEAR_TIME+30;
		gameObjects = [new Vessel("ZagadCrossingBowsprit", 478, 160), rumble1, rumble2, rumble3, new OceanWaves(80, -10), caps];
		dialog.begin(new DialogLine("Anymos", "So... I heard that you recognize me?", "#00FFFF"),
			new DialogLine("Caps", "You are the one and only Anymos, and I used to be one of your followers!", "#BFBFBF"),
			new DialogLine("Anymos", "Wait, I have followers? Since when?", "#00FFFF"),
			new DialogLine("Caps", "Since approximately literally forever, since you're basically a deity, and-", "#BFBFBF"),
			new DialogLine("Anymos", "Whoa, whoa, slow down there... I'm a deity?", "#00FFFF"),
			new DialogLine("Caps", "Do you really not remember?", "#BFBFBF"),
			new DialogLine("Anymos", "I recently acquired severe retrograde amnesia. It's probably a long story.What can you tell me about me.", "#00FFFF"),
			new DialogLine("Caps", "So, you're an Uteion. You know what that means? ...Do you even know what Teion are?", "#BFBFBF"),
			new DialogLine("Anymos", isStageAvailable("EndNaluxosSavior") ? "I have the feeling I already know in another timeline... but sure, tell me." : "No.", "#00FFFF"),
			new DialogLine("Caps", "Where to start... Alright. We live on a planet called Teionis. The normal people, like me, are called Teion. But there are also some very special, powerful Teion called Uteion.", "#BFBFBF"),
			new DialogLine("Caps", "Uteion range in power. There only a few more powerful than you, actually, but since they're either aloof or evil, you're the one that everyone likes.", "#BFBFBF"),
			new DialogLine("Caps", "While you, like most Uteion, don't desire worship, most Teion still respect you, and you have some followers, like me.", "#BFBFBF"),
			function(){removeDead(gameObjects); console.log("blarple")});
		return {
			mainBack : "src/Stages/ZagadCrossing/MainBack.png",
			mainFore : "src/Stages/ZagadCrossing/MainFore.png",
		};
	},
	vessels : ["ZagadCrossingBowsprit", "ZagadCrossingFricchee"],
	par : 510,
	previous : "GreyHarbor",
	nextDown : "IgmaBeach",
	enemies : [Fricchee, Flipwip, Teion/*, OceanWaves*/]
}

//TODO
function OceanWaves(depth, dx) {
	this.depth = depth;
	this.dx = dx;
}
OceanWaves.prototype.update = function() {
	
}
OceanWaves.prototype.draw = function() {
	
}
OceanWaves.prototype.init = function() {
	this.segmentsList = [];
}