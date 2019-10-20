Stages.ScorchedClearing = {
	name : "ScorchedClearing",
	displayName : "Scorched Clearing",
	description : "Boss fight",
	load : function(doStuff) {
		playMusic("Blast - PeriTune");
		let D = {solid:true,color:"#451D12",grassyTop:"#303020"};
		let F = {solid:false,hazard:0,color:"#FF800040",fire:0};
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
		 [F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F],
		 [D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D]];
		if (doStuff) {
			zoom=3;
			zoomd=3;
			dialog.begin(
				new DialogLine("Anymos", "There you are. I think it's safe to assume that the forest fire is your doing?", "#00FFFF"),
				new DialogLine("Fwegos", "But of course! Who else would it be, but I-", "#FF8000"),
				new DialogLine("Anymos", "I sorta remember you. What's your name again?", "#00FFFF"),
				new DialogLine("Fwegos", "There are some who call me Fwegos. I am the Great-", "#FF8000"),
				new DialogLine("Anymos", "Yeah, yeah, listen, I'll be nice and direct here. There are two ways we can go about this.", "#00FFFF"),
				new DialogLine("Anymos", "Option one: You remove that forest fire and let me pass through unobstructed.", "#00FFFF"),
				new DialogLine("Anymos", "Option two: I I fight you and win and step over your nearly-lifeless body on the way to where I'm going.", "#00FFFF"),
				new DialogLine("Anymos", "I'm in a bit of a hurry, so I'd prefer option one.", "#00FFFF"),
				new DialogLine("Fwegos", "Ah, but the great Sqarnos commanded me to stop you from reaching  him. So how about option three: I incinerate you and take my place at Sqarnos's right hand?", "#FF8000"),
				new DialogLine("Anymos", "Option two it is, then.", "#00FFFF"),
			);
		}
		minzoom = 2;
		player.x = 360;
		player.y = 280;
		player.facingRight = false;
		var fwegos = new Fwegos("ScorchedClearingFwegos", 40, 280, true, 0, 400, 0, 280, F);
		/*fwegos.onDeath = function() {
			this.dead = false;
			this.hittable = false;
			this.update = doNothing;
			dialog.begin(
				new DialogLine("Fwegos", "Aagh! Uncle!", "#FF8000"),
				()=>{player.y=280; player.attacking = false; player.state="Standing"; player.stateCycle=0; gameObjects=[fwegos];},
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
		}*/
		gameObjects = [
			fwegos,
			new FireDrawer(),
			new CustomObject(function() {
				if (fwegos.dead) {
					gameObjects.push(new Goalpost("MesaCliff", 10, 280, 100));
					player.drained = false;
				}
			}),
		];
		dynamicBackdrop = {
			draw : function() {
				ctx.fillStyle = "#87CEEB";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
		}
	},
	vessels : ["ScorchedClearingFwegos1", "ScorchedClearingFwegos2", "ScorchedClearingFwegos3", "ScorchedClearingFwegos4", "ScorchedClearingFwegos5"],
	previous : "BurningForest",
	nextDown : "MesaCliff",
	toLoad : [Fwegos, FireDrawer, Bettie]
}