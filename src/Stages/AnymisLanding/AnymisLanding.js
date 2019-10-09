Stages.AnymisLanding = {
	displayName : "Anymis Landing",
	load : function() {
		playMusic("Magical Getaway - Eric Matyas");
		let C = {name:"Concrete",solid:true,color:"#7F7F7F",leafy:false};
		let S = {name:"Concrete Secret",solid:false,color:"#878787",leafy:false};
		let _ = {name:"Walls",solid:false,color:"#BFBFBF"};
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,C,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,C,_,_,_,_,C,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,C,_,_,_,_,_,C,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,_,_,_,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C]];
		zoom = 3;
		zoomd = 3;
		player.x = 1190;
		player.y = 300;
		player.facingRight = false;
		gameObjects = [];
		dialog.begin(
			new DialogLine("Plane", "You have arrived at your destination.", "#7F7F7F"),
			new DialogLine("Anymos", "Ah... It feels great to get out of that cramped plane.", "#00FFFF"),
			new DialogLine("???", "And it feels great to see you again.", "#FF0000"),
			new DialogLine("Anymos", "Ah, of course, it's nice to see you, too. Who are you?", "#00FFFF"),
			new DialogLine("???", "Do not speak to me like that. You know perfectly well who I am.", "#FF0000"),
			new DialogLine("Anymos", "Sorry, bud. I just woke up on the wrong side of the bed this morning and my memory's been in a bit of fuzz. By which I mean I have almost complete retrograde amnesia.", "#00FFFF"),
			new DialogLine("???", "Cease this foolery, Anymos. Try to face your doom with at least a shred of dignity.", "#FF0000"),
			new DialogLine("Anymos", "Dang, I don't remember you acting this high and mighty and dark and ominous before. What's up with you?", "#00FFFF"),
			new DialogLine("???", "\"Don't remember\"? You literally just said you had amnesia.", "#FF0000"),
			new DialogLine("Anymos", "Did I?", "#00FFFF"),
			new DialogLine("???", "Yes, you...", "#FF0000"),
			new DialogLine("???", "...", "#FF0000"),
			new DialogLine("???", "I will not rise to such silly jests. I shall see you soon.", "#FF0000"),
			new DialogLine("Anymos", "Can't wait.", "#00FFFF"),
			new DialogLine("Anymos", "...", "#00FFFF"),
			new DialogLine("Anymos", "(Heh. He's as easy to troll as always.)", "#00FFFF"),
			new DialogLine("Anymos", "(But, man, the memories are starting to come back. This place...)", "#00FFFF"),
			new DialogLine("Anymos", "(This used to be my kingdom.)", "#00FFFF"),
			new DialogLine("Anymos", "(If I remember correctly, I'm in the Landing right now. I should go left if I want to see my castle, but there should also be a shrine somewhere not far from here.)", "#00FFFF"),
		);
	},
	vessels : [],
	//par : 515,
	previous : "FlightToAnymis",
	//nextDown : "FlightToAnymis",
	toLoad : [Walkie, Hoverie]
}