Stages.PreludeEnd = {
	name : "PreludeEnd",
	displayName : "End of the Beginning",
	load : function(doStuff) {
		playMusic("Meleficent Mysticism - Darren Curtis");
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
		gameObjects = [
			
		];
		if (doStuff)
			dialog.begin(
			new DialogLine("Sqarnos", "Don't you remember when we used to be brothers?", "#FF0000"),
			new DialogLine("Anymos", "Of course I remember. How could I forget?", "#00FFFF"),
			new DialogLine("Anymos", "I still don't know what happened to you. I don't know why you changed the way you did.", "#00FFFF"),
			new DialogLine("Anymos", "At first, I was reluctant to confront you. But after the majority of the world's population was gone, I realized I had no choice.", "#00FFFF"),
			new DialogLine("Anymos", "I was unwilling to finish you off (although even if I tried, I wouldn't have been able to). So instead, I imprisoned you in the place between dimensions.", "#00FFFF"),
			new DialogLine("Anymos", "But I took pity on you and decided to give you another chance.", "#00FFFF"),
			new DialogLine("Anymos", "Who knows? I thought. Perhaps what happened was a moment of inexplicable madness that would not repeat itself.", "#00FFFF"),
			new DialogLine("Anymos", "Well, it did repeat itself. It was still inexplicable, though. A huge number dead, a heartbreaking fight, and you locked up again.", "#00FFFF"),
			new DialogLine("Anymos", "A long time passed, and I went to check in on you. You swore that whatever happened would not happen again. That you had come to your senses during your long sentence. You convinced me to set you free a second time.", "#00FFFF"),
			new DialogLine("Anymos", "You know what happened next, right?", "#00FFFF"),
			new DialogLine("Anymos", "And the third time I released you... I really should have known better by then. Their ends were as much on my hands as yours.", "#00FFFF"),
			new DialogLine("Anymos", "So I resolved that I would never set you free, ever again. The old you, was a thing of the past. Might as well have been a dream.", "#00FFFF"),
			new DialogLine("Anymos", "Of course, you still managed to escape on your own from time to time. But I was always there to put you back down.", "#00FFFF"),
			new DialogLine("Anymos", "How many times have you escaped? How many times have you tried to beat me? How many times have I put you back?.", "#00FFFF"),
			new DialogLine("Anymos", "I've lost count. Maybe because the outcome is always the same every time.", "#00FFFF"),
			new DialogLine("Anymos", "Don't you see? You will never win. Just give up, and it'll be so much easier for everybody.", "#00FFFF"),
			new DialogLine("Sqarnos", "...It'll be different this time.", "#FF0000"),
			new DialogLine("Anymos", "Oh, really? Because it wasn't any different the last umpteen times you said that.", "#00FFFF"),);
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