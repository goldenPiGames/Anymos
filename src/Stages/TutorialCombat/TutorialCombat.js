Stages.TutorialCombat = {
	displayName : "Tutorial: Combat",
	load : function() {
		playMusic("Chamber of Jewels - Eric Matyas");
		let B = BLOCK;
		let _ = AIR;
		staticColl =
		[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,B,_,B,B,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,_,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,B,_,_,_,_],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B,_,B,B,B]];
		gravity = .5;
		zoom = 3;
		player.x = 50;
		player.y = 180;
		player.facingRight = true;
		if (firstRun) {
			dialog.begin(
				new DialogLine("Anymos", "Where am I now? It looks like I'm somewhere else in the same building, if that's what it is.", "#00FFFF"),
				new DialogLine("Anymos", "The amount of time I took in the previous area has been subtracted from the amount of time I have remaining.", "#00FFFF"),
			);
		}
		gameObjects = [new Rumble(140, 180, 140, 140, true, function() {if (firstRun) dialog.begin(
			new DialogLine("Anymos", "When I killed that creature just now, I gained an extra second of life force. I suppose that those creatures are connected to my life energy. I should kill them when possible.", "#00FFFF")
		)}, new Walkie("TutorialCombatBilly", 160, 160, false)), new Rumble(340, 180, 140, 140, true, doNothing, new Walkie("TutorialCombatBob", 380, 160, false)), new Vessel("TutorialCombatOverGoalpost", 490, 178), new Goalpost("BeginningClimb", 470, 180, 85),
			new MonologueSpot("TutorialCombatAttackMono", 100, 177,
				"The barrier that sprung up suddenly seems impenetrable. But I get the feeling that it'll go away if I destroy that creature that appeared at the same time.",
				"That thing may look cute, but I feel deep menace and evil coming from it. I can tell it would attack me if it touched me.",
				"My body's at no real risk directly, since I can use my life force to deflect injuries. Protecting myself from that would use up about three seconds, so I should still try to avoid getting hit.",
				"I should try to attack by pressing [S] or (B)."),
			new MonologueSpot("TutorialCombatShootMono", 300, 177,
				"Here's another one of those things. (What even is it? I'll call it a Walkie.). This one looks pretty far beyond my melee reach.",
				"I could attack at range, shooting energy out in a concentrated beam, by holding the [D] key or (X) button. I shoot a continuous beam as long as I hold the button - there's never any need to mash it.",
				"This drains my energy rather quickly, but would still be greatly preferable to getting hit by the enemy.")]
		return {
			mainBack : "src/Stages/TutorialCombat/MainBack.png",
			mainFore : "src/Stages/TutorialCombat/MainFore.png",
		};
	},
	vessels : ["TutorialCombatBilly", "TutorialCombatBob", "TutorialCombatOverGoalpost"],
	selectX : 0,
	selectY : 50,
	par : 195,
	previous : "TutorialMovement",
	nextDown : "BeginningClimb",
	toLoad : [Walkie]
}