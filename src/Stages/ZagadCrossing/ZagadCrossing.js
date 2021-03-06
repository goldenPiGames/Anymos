Stages.ZagadCrossing = {
	displayName : "Zagad Crossing",
	load : function(doStuff) {
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
		if (doStuff) {
			zoomd = 3;
			zoom = 3;
			dialog.begin(
				new DialogLine("Anymos", "So... I heard that you recognize me?", "#00FFFF"),
				new DialogLine("Caps", "You are the one and only Anymos, of course! I'll gladly offer my services to you.", "#BFBFBF"),
				new DialogLine("Anymos", "Wait, I have a following? Since when?", "#00FFFF"),
				new DialogLine("Caps", "Since approximately literally forever, considering you're far older than any of us normal Teion.", "#BFBFBF"),
				new DialogLine("Anymos", "Uh... who am I, again?", "#00FFFF"),
				new DialogLine("Caps", "Do you really not remember?", "#BFBFBF"),
				new DialogLine("Anymos", "I recently acquired severe retrograde amnesia. It's probably a long story. What can you tell me about me?", "#00FFFF"),
				new DialogLine("Caps", "You're an Uteion. You know what that means? ...Do you even know what Teion are?", "#BFBFBF"),
				new DialogLine("Anymos", "Maybe...?", "#00FFFF"),
				new DialogLine("Caps", "Where to start... Alright. We live on a planet called Teionis. The normal people, like me, are called Teion. But there are also some very special, powerful Teion called Uteion. Like you.", "#BFBFBF"),
				new DialogLine("Caps", "Uteion range in power. You're one of the more powerful ones. You have your own island, even - it's way to the west.", "#BFBFBF"),
				new DialogLine("Anymos", "Speaking of which, where are we?", "#00FFFF"),
				new DialogLine("Caps", "We've left Aqris (home of Aqros) and we're heading to Longuis (home of Longuos).", "#BFBFBF"),
				new DialogLine("Anymos", "Is there anything else that way?", "#00FFFF"),
				new DialogLine("Caps", "There might be something else past Longuis, but people don't really... go there. Especially not me, by boat.", "#BFBFBF"),
				new DialogLine("Caps", "Wait! Enemies are approaching.", "#BFBFBF"),
				()=>removeDead(gameObjects));
		}
		minZoom = 2;
		player.x = 300;
		player.y = 200;
		player.facingRight = true;
		var rumble1; var rumble2; var rumble3;
		caps = new NPC("ZagadCrossingCaps", Teion.prototype.sprites.Caps, 180, 160, true,
			new DialogLine("Caps", "We're almost to Longuis. Take it easy.", "#7F7F7F"));
		caps.dead = true;
		rumble1 = new Rumble(0, 600, 0, 300, true, ()=>rumble2.enterTrigger = true,
			new Flipwip("ZagadCrossingBootie", 60));
		rumble2 = new Rumble(0, 600, 0, 300, false, ()=>rumble3.enterTrigger = true,
			new Fricchee("ZagadCrossingFricchee", 120, 220, true));
		rumble3 = new Rumble(0, 600, 0, 300, false, ()=>{player.drained = false; caps.dead = false; gameObjects.push(caps, new Goalpost("IgmaBeach", 430, 160, 80))},
			new Flipwip("ZagadCrossingAlgoboo", 30),
			new Flipwip("ZagadCrossingSiboo", 35));
		rumble1.enemies[0].cycle = FLIPWIP_APPEAR_TIME+10;
		rumble3.enemies[0].cycle = FLIPWIP_APPEAR_TIME+15;
		rumble3.enemies[1].cycle = FLIPWIP_APPEAR_TIME+30;
		gameObjects = [
			new Vessel("ZagadCrossingBowsprit", 478, 160),
			rumble1,
			rumble2,
			rumble3,
			caps];
		dynamicForeground = new OceanWaves(80, -10);
	},
	vessels : ["ZagadCrossingBowsprit", "ZagadCrossingBootie", "ZagadCrossingFricchee", "ZagadCrossingAlgoboo", "ZagadCrossingSiboo"],
	previous : "GreyHarbor",
	nextDown : "IgmaBeach",
	parDown : 480,
	toLoad : [Fricchee, Flipwip, Teion]
}

//TODO
class OceanWaves {
	constructor(depth, dx) {
		this.depth = depth;
		this.dx = dx;
	}
	draw() {
		
	}
}