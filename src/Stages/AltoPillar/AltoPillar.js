const BOLIZOS_COLOR = "#C0FF45";

Stages.AltoPillar = {
	name : "AltoPillar",
	displayName : "Alto Pillar",
	description : "Boss fight",
	load : function(doStuff) {
		playMusic("Demise - PeriTune");
		let R = {solid:true,color:"#7F7F7F"};
		let _ = {solid:false,color:"#87CEEB00"};
		edgesSolid = true;
		//oobtopcolor = "#87CEEB";
		//oobbottomcolor = "#492116";
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,_,_],
		 [_,_,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,_,_]];
		zoom=3; zoomd=3;
		minzoom = 3;
		player.x = 340;
		player.y = 260;
		player.facingRight = false;
		var bolizos = new Bolizos(60, 260, true, 40, 360, 0, 260);
		bolizos.die = function() {
			this.dead = false;
			this.hittable = false;
			this.update = doNothing;
			dialog.begin(
				new DialogLine("Bolizos", "I surrender.", BOLIZOS_COLOR),
				function(){player.y=280; player.attacking = false; player.state="Standing"; player.stateCycle=0; gameObjects=[fwegos];},
				function(){finishStage("AltoPillar")}
			);
			dialog.skipBuffer = 25;
		}
		gameObjects = [
			bolizos,
			new RainGenerator(20, 30, "#C0FF4580"),
		];
		if (doStuff)
			dialog.begin(new DialogLine("Anymos", "There you are, Fwegos. I think it's safe to assume that the forest fire is your doing?", "#00FFFF"),
			new DialogLine("Fwegos", "But of course! Who else would it be, but I, Fwegos, Lord of-", "#FF8000"),
			new DialogLine("Anymos", "Yeah, yeah, listen, I'll be nice and direct here. There are two ways we can go about this.", "#00FFFF"),
			new DialogLine("Anymos", "Option one: You remove that forest fire and let me pass through unobstructed.", "#00FFFF"),
			new DialogLine("Anymos", "Option two: I beat the crap out of you, force you to remove the fire, and step over your cold, nearly-lifeless body on the way to Sqarnos.", "#00FFFF"),
			new DialogLine("Anymos", "I'm in a bit of a hurry, but I'm also in a bad mood, so I could really go either way.", "#00FFFF"),
			new DialogLine("Fwegos", "How about option three: I incinerate you and take my place at Sqarnos's right hand?", "#FF8000"),
			new DialogLine("Anymos", "Option two it is, then.", "#00FFFF"),);
		dynamicBackdrop = new StormBackdrop();
	},
	vessels : [],
	selectX : 0,
	selectY : 0,
	toLoad : [Fwegos, FireDrawer]
}