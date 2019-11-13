Stages.MagentaDuel = {
	displayName : "Magenta Duel",
	load : function(doStuff) {
		playMusic(doStuff ? "Tempest - Darren Curtis" : "Massacre on Teddy Bear Hill - Darren Curtis");
		let B = {solid:true};
		let l = {name:"Rain",solid:false,hazard:1,rain:true};
		let _ = {solid:false};
		staticColl =
		[[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l,l],
		 [l,l,B,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B,l,l],
		 [l,l,B,B,B,_,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,_,B,B,B,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,B,B,_,B,B,B,_,_,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,_,_,B,B,B,_,B,B,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,B,_,B,_,_,_,B,B,B,B,B,B,_,_,_,_,B,B,_,_,_,_,B,B,B,B,B,_,_,_,B,_,B,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,B,_,B,B,_,_,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,B,B,B,B,B,B,B,B,_,_,B,B,_,B,_,l,l],
		 [l,l,_,B,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,B,_,l,l],
		 [l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l],
		 [l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
			dialog.begin(
				new DialogLine("???", "Oh, come on. The town is still standing! Can't you stupid little things get anything done?", "#FF00FF"),
				new DialogLine("???", "Hey, you over there. Do you know where all of my minions went?", "#FF00FF"),
				new DialogLine("Anymos", "Minions?", "#00FFFF"),
				new DialogLine("???", "Small, pathetic little things with yellow eyes and red auras?", "#FF00FF"),
				new DialogLine("Anymos", "Oh, those. Yeah, I killed them all.", "#00FFFF"),
				new DialogLine("???", "You WHAT?!", "#FF00FF"),
				new DialogLine("Anymos", "They were rampaging around the town and threatening the villagers. I was just protecting the innocents.", "#00FFFF"),
				new DialogLine("???", "You idiot! The whole REASON I sent those monsters here was to destroy the town and kill people!", "#FF00FF"),
				new DialogLine("???", "*sigh* If you want something done right, do it yourself, I suppose. Outta my way, little light-blue-eyes dude. I've got some havoc to wreak.", "#FF00FF"),
				new DialogLine("Anymos", "If you want to lay a single spike on these innocent people, you'll have to go through me first. And by the way, my eyes are cyan, not light blue.", "#00FFFF"),
				()=>playMusic("Massacre on Teddy Bear Hill - Darren Curtis"),
				new DialogLine("Fadour", "Prepare to feel the awesome creative and destructive wrath of the great Fadour, servant of the even greater Sqarnos!", "#FF00FF"));
		}
		player.x = 420;
		player.y = 380;
		player.facingRight = true;
		//console.log("eat my ass");
		if (isVesselCollected("MagentaDefenseBomb"))
			player.special = specialBomb;
		var fadour = new Fadour("MagentaDuelFadour", 500, 286, false, 0, 820, [206, 286, 366, 446, 526]);
		gameObjects = [new RainGenerator(20, 15),
			fadour,
			new CustomObject(function() {
				if (fadour.dead) {
					this.die();
					player.drained = false;
					dialog.begin(
						new DialogLine("Fadour", "Ugh... All I wanted was to follow Sqarnos' wishes to destroy all innocent life... Was that really too much to ask?", "#FF00FF"),
						new DialogLine("Anymos", "Uh... yeh.", "#00FFFF"),
						new DialogLine("Villagers", "You've saved us! Please, allow us to offer you our most heartfelt thanks.", "#BFBFBF"),
						new DialogLine("Anymos", "I may have defeated this boss, but you won't be safe for long.", "#00FFFF"),
						new DialogLine("Anymos", "Did you hear what Fadour just said? Something about following another entity called Sqarnos?", "#00FFFF"),
						new DialogLine("Anymos", "Whoever this \"Sqarnos\" is, they'll be back. I may fight them off, but my time is limited.", "#00FFFF"),
						new DialogLine("???", MERGE_TEXT1, "#00FFFF"),
						new DialogLine("Anymos", "Wait, what was that?", "#00FFFF"),
						new DialogLine("???", MERGE_TEXT2, "#00FFFF"),
						new DialogLine("Villagers", "That sounds like you...", "#FFFFFF"),
						()=>gameObjects.push(new EndLight("EndMagentaDefender", 420, 520)),
						new DialogLine("???", MERGE_TEXT3, "#00FFFF"),
						new DialogLine("Anymos", "...I understand. Nevermind the doom and gloom. It's time for me to go. Wish me luck.", "#00FFFF"));
				}
			}),
			new NPC("MagentaDuelRefugee1", Teion.prototype.sprites.normal, 513, 620, false,
				new DialogLine("Villager", "Please, be careful!", "#BFBFBF")),
			new NPC("MagentaDuelRefugee2", Teion.prototype.sprites.normal, 571, 620, false,
				new DialogLine("Villager", "This is the final push.", "#BFBFBF"))];
	},
	vessels : ["MagentaDuelFadour1", "MagentaDuelFadour2", "MagentaDuelFadour3", "MagentaDuelFadour4", "MagentaDuelFadour5"],
	previous : "MagentaDefense",
	nextDown : "EndMagentaDefender",
	parDown : 900,
	toLoad : [Fadour, Walkie, Hoverie, Bouncie, Spinnie, Teion, AnymBomb],
	reuseBack : "MagentaTown",
	reuseFore : "MagentaTown",
}
Stages.EndMagentaDefender = {
	displayName : "End: Magenta Defender",
	end : true,
	selectX : Stages.MagentaDuel.selectX,
	selectY : Stages.MagentaDuel.selectY + LS_Y_SPACING,
	previous : "MagentaDuel",
}