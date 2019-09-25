Stages.SPDAirport = {
	displayName : "SPD Airport",
	load : function(doStuff) {
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
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,C,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C],
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
		player.x = 1180;
		player.y = 300;
		player.facingRight = false;
		var phone = new NPC("SPDAirportPhoneChanos", makeImage("src/Stages/SPDAirport/Phone.png"), 600, 84, false,
			new DialogLine("Anymos", "I was told to come here, I think?...", "#00FFFF"),
			new DialogLine("Chanos", "Yes, it is. I never thought I'd say this, but I'm glad that you're alive. I have for you... shall we say... a business proposition.", CHANOS_COLOR),
			new DialogLine("Anymos", "First of all, who are you?", "#00FFFF"),
			new DialogLine("Chanos", "Do you really not know who I am?", CHANOS_COLOR),
			new DialogLine("Anymos", "Sorry, I guess I just got out on the wrong side of bed this morning. Who are you?", "#00FFFF"),
			new DialogLine("Chanos", "I am Chanos, President of the nation of Chanis, Mayor of its capitol Spade City, president and CEO of Chanos Casino, and proprietor of Chanos Tower. I am also a full-fledged Uteion whose domains include society, technology, law, order, luck, gambling", CHANOS_COLOR),
			new DialogLine("Anymos", "Yeah, yeah, I get it, you're a really big deal, especially for a small green rectangle in a small room in an airport.", "#00FFFF"),
			new DialogLine("Chanos", "You idiot, that's just a telephone device! You're not actually talking to me in person. I'm currently in the top floor of my tower, calling you from a distance.", CHANOS_COLOR),
			new DialogLine("Anymos", "That's neat. So, anyways, about your deal?", "#00FFFF"),
			new DialogLine("Chanos", "Yes. *ahem* I understand that we may have some bad history between us, but that's no reason why we can't put aside our differences and work together against a common enemy.", CHANOS_COLOR),
			new DialogLine("Anymos", "Bad history? I didn't even know you until just now. Actually I still don't. What's your name again?.", "#00FFFF"),
			new DialogLine("Chanos", "...You are Anymos, correct?", CHANOS_COLOR),
			new DialogLine("Anymos", "Yep, that's me.", "#00FFFF"),
			new DialogLine("Chanos", "(How did I manage to get defeated so many times by this guy?) You've been fighting Sqarnos, right?", CHANOS_COLOR),
			new DialogLine("Anymos", "Sqarnos... That's the guy the Baron mentioned.", "#00FFFF"),
			new DialogLine("Chanos", "Oh don't tell me you even forgot about Sqarnos, your eternal archnemesis?", CHANOS_COLOR),
			new DialogLine("Chanos", "Of all of us Uteion, Sqarnos is quite possibly the second most powerful, dwarfed only by Uteionos. And unlike Uteionos, he's very aggressive and malicious", CHANOS_COLOR),
			new DialogLine("Chanos", "A long time ago, you defeated him and imprisoned him underneath your palace. Unfortunately, he recently managed to escape, and immediately went after you.", CHANOS_COLOR),
			new DialogLine("Anymos", "I have a palace?", "#00FFFF"),
			new DialogLine("Chanos", "To make a long story short, he won. I thought it likely that you died, but you evidently were able to survive. It looks like you lost most of your memory, though.", CHANOS_COLOR),
			new DialogLine("Chanos", "Now, Sqarnos is a severe threat to my country, and the rest of the world too, so it's in my best interests to help you defeat Sqarnos once again.", CHANOS_COLOR),
			new DialogLine("Chanos", "I have a plane ready and waiting to transport you to Anymis, where the dark cloud of Sqarnos' influence is spreading.", CHANOS_COLOR),
			function(){Switches["#808080"] = false;},
			new DialogLine("Chanos", "The plane is outside that gate down there. I've opened it for you.", CHANOS_COLOR),
			function(){phone.dialog = [];},
		);
		gameObjects = [new Goalpost("FlightToAnymis", 340, 300, 100), phone, new Door("#808080", 410, 300, 20, 60)];
		Switches["#808080"] = true;
		if (doStuff)
			dialog.begin(new DialogLine("Attendant", "Attention, Anymos. Please come to the second room on the third floor.", "#7F7F7F"));
	},
	vessels : [],
	par : 515,
	previous : "SpadeCity",
	nextDown : "FlightToAnymis",
	enemies : ["MovingPlatform", "Teion"]
}