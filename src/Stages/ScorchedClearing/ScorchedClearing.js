Stages.ScorchedClearing = {
	name : "ScorchedClearing",
	displayName : "Scorched Clearing",
	description : "Boss fight",
	load : function(doStuff) {
		playMusic("Blast - PeriTune");
		let D = {solid:true,color:"#451D12",grassyTop:"#303020"};
		let F = {solid:false,hazard:7,color:"#FF800040",fire:1};
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
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D]];
		zoom=3; zoomd=3;
		minzoom = 3;
		player.x = 360;
		player.y = 280;
		player.facingRight = false;
		var fwegos = new Fwegos(40, 280, true, 0, 400, 0, 280);
		fwegos.die = function() {
			this.dead = false;
			this.hittable = false;
			this.update = doNothing;
			dialog.begin(
				new DialogLine("Fwegos", "Aagh! Uncle!", "#FF8000"),
				function(){player.y=280; player.attacking = false; player.state="Standing"; player.stateCycle=0; gameObjects=[fwegos];},
				new DialogLine("Anymos", "First of all, cancel the forest fire.", "#00FFFF"),
				new DialogLine("Fwegos", "Done.", "#FF8000"),
				new DialogLine("Anymos", "Alright, now I've got a few questions for you.", "#00FFFF"),
				new DialogLine("Fwegos", "Of course. (Please don't kill me.)", "#FF8000"),
				new DialogLine("Anymos", "How did Sqarnos convince you to join him?", "#00FFFF"),
				new DialogLine("Fwegos", "Well, promises of power and freedom, of course.", "#FF8000"),
				new DialogLine("Fwegos", "It's pretty annoying how everybody has stupid rules like \"don't indiscriminately burn everything to the ground just because you feel like it\". If Sqarnos wins, I can do whatever I want!", "#FF8000"),
				new DialogLine("Anymos", "No, what I mean is, Sqarnos escaped his prison only a little while ago. How did he already convince you to join him?", "#00FFFF"),
				new DialogLine("Fwegos", "Oh, um actually, Sqarnos managed to partially escape his prison shortly after you left for the summit. He was able to communicate with his cultists and stuff, but he didn't want to cause a stir too soon...", "#FF8000"),
				new DialogLine("Anymos", "So lemme guess, he commanded all his allies to keep a low profile, and then start rioting the moment he fully broke out?", "#00FFFF"),
				new DialogLine("Fwegos", "Yeah, pretty much.", "#FF8000"),
				new DialogLine("Anymos", "Apart from his cultists, do you know who else joined Sqarnos?", "#00FFFF"),
				new DialogLine("Fwegos", "Um, I think Bolizos did... Other than that, I dunno.", "#FF8000"),
				function(){finishStage("ScorchedClearing")}
			);
			dialog.skipBuffer = 25;
		}
		gameObjects = [
			fwegos,
			new FireDrawer(),
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
		dynamicBackdrop = {
			draw : function() {
				ctx.fillStyle = "#87CEEB"
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
		}
	},
	vessels : [],
	selectX : 0,
	selectY : 0,
	enemies : [Fwegos, FireDrawer]
}