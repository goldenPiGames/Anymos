Stages.BlackPrison = {
	displayName : "Black Prison",
	load : function(doStuff) {
		playMusic("The Darkness Below - Eric Matyas");
		let B = {name:"Stone",solid:true,color:"#101010"};
		let _ = {name:"Air",solid:false,color:"#505050"};
		staticColl =
		[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		gravity = .5;
		zoom = 2;
		minZoom = 2;
		player.x = 10;
		player.y = 80;
		player.facingRight = true;
		player.special = "Naluxos' Flash";
		gameObjects = [new Rumble(300, 100, 480, 80, true, function(){player.drained = false}, new Drrk("BlackPrisonDrrk", 300, 100, false, true)),
			new NPC("BlackPrisonNaluxos", function(){return Naluxos.prototype.sprites.Standing1}, 580, 80, false,
				new DialogLine("Naluxos", "Thank you so much for saving me! And also, what an honor it is to meet, and be savd by, the great Anymos in person!", "#FFFFFF"),
				new DialogLine("Anymos", "You're welcome, but... I'm sorry but I'm afraid I don't know who you are. Or who I am, for that matter.", "#00FFFF"),
				new DialogLine("Naluxos", "Okay, so you're my parent.", "#FFFFFF"),
				new DialogLine("Anymos", "Back up.", "#00FFFF"),
				new DialogLine("Naluxos", "So I'm an Uteion. We're both Uteion. Uteion are, like, spirits, or deities, or special people, or weird entities, sort of. It's hard to explain, and it depends.", "#FFFFFF"),
				new DialogLine("Naluxos", "They also each have their own shtick, or \"portfolio\", I think it's called. My thing is Light. Yours is Life, and you have a couple of other things too, because you're awesome. You have, like, Life and Time.", "#FFFFFF"),
				new DialogLine("Naluxos", "You're actually one of the most powerful Uteion. The most powerful is Teianos, she doesn't really actually do much. The other important one is Sqarnos, who's like, your super evil enemy.", "#FFFFFF"),
				new DialogLine("Naluxos", "Speaking of which, you just recently had a battle against Sqarnos directly, and...", "#FFFFFF"),
				new DialogLine("Anymos", "I lost.", "#00FFFF"),
				new DialogLine("Naluxos", "So is that why you have amnesia and are on the verge of death?", "#FFFFFF"),
				new DialogLine("Anymos", "It would seem so, yes.", "#00FFFF"),
				new DialogLine("Naluxos", "If there's anything I can do to help, just ask, alright?", "#FFFFFF"),
				new DialogLine("Anymos", "Well, a way out of this cave would be nice.", "#00FFFF"),
				new DialogLine("Naluxos", "Hmm, well, if we-", "#FFFFFF"),
				new DialogLine("???", MERGE_TEXT1, "#00FFFF"),
				new DialogLine("Naluxos", "Wait, what was that?", "#FFFFFF"),
				new DialogLine("???", MERGE_TEXT2, "#00FFFF"),
				new DialogLine("Naluxos", "Isn't that your voice, Anymos? But it's not coming from you...", "#FFFFFF"),
				function(){gameObjects.push(new EndLight("EndNaluxosSavior", 300, 100))},
				new DialogLine("???", MERGE_TEXT3, "#00FFFF"),
				new DialogLine("Anymos", "...I understand now. It's time to go, Naluxos.", "#00FFFF"))];
		if (doStuff)
			dialog.begin(new DialogLine("Naluxos", "I'm right back here in this cage, but watch out! The thing that captured me is still around here somewhere...", "#FFFFFF"),
				new DialogLine("Naluxos", "But on the bright side, I can illuminate the cave here.", "#FFFFFF"));
	},
	vessels : ["BlackPrisonDrrk"],
	par : 1890,
	previous : "BlackCaves",
	nextDown : "EndNaluxosSavior",
	enemies : ["Drrk", "Naluxos", "Flash"]
}

Stages.EndNaluxosSavior = {
	displayName : "End: Naluxos' Savior",
	end : true,
	//par : 855,
	selectX : Stages.BlackPrison.selectX,
	selectY : Stages.BlackPrison.selectY + LS_Y_SPACING,
	previous : "BlackPrison",
}