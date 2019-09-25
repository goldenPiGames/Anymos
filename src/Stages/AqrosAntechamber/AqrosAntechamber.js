Stages.AqrosAntechamber = {
	displayName : "Aqros' Antechamber",
	load : function() {
		playMusic("Underwater Coolness - Eric Matyas");
		let B = BLOCK;
		let l = {name:"Rain",solid:false,hazard:1,rain:true};
		let W = {name:"Water",solid:false,hazard:9};
		let _ = AIR;
		staticColl =
		[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B],
		 [B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B],
		 [B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B],
		 [B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B],
		 [B,_,_,B,B,B,_,B,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,_,_,B],
		 [B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		zoom = 2;
		player.x = 550;
		player.y = 120;
		player.facingRight = false;
		gameObjects = [new ReflectorPickup(340, 230, true), new Mirror(280, 240, 220), new Vessel("AqrosAntechamberLowerRight", 520, 228), new Goalpost("AqrosAtrium", 10, 120, 95)];
		dialog.begin(new DialogLine("???", "So you've found your way into my temple.", "#0000FF"),
			new DialogLine("Anymos", "Hmm? That voice feels familiar...", "#00FFFF"),
			new DialogLine("Aqros", "Oh, don't tell me you've forgotten your dear Aqros already?", "#0000FF"),
			new DialogLine("Anymos", "The name really rings a bell...", "#0000FF"),
			new DialogLine("Aqros", "Remember? I reside in Blue Lake? I have power over water and mirrors?", "#0000FF"),
			new DialogLine("Anymos", "Ah, yes... You are revered by the people of a nearby town, correct?", "#00FFFF"),
			new DialogLine("Aqros", "Very good, Anymos! So you do remember me! But no, they don't worship me anymore... They don't do much of anything anymore, you could say...", "#0000FF"),
			new DialogLine("Anymos", "What do you mean, Aqros?", "#00FFFF"),
			new DialogLine("Aqros", "*Yawn* I'm in the inner sanctum of the temple. Come and find me if you think you're smart enough. See you.", "#0000FF"),
			new DialogLine("Anymos", "Hmmm... I should start by checking out that thing down there using [Space] or (L).", "#00FFFF"));
		return {
			mainBack : "src/Stages/AqrosAntechamber/MainBack.png",
			mainFore : "src/Stages/AqrosAntechamber/MainFore.png",
		};
	},
	vessels : ["AqrosAntechamberLowerRight"],
	par : 190,
	previous : "BlueLakebed",
	nextDown : "AqrosAtrium",
	enemies : ["Mirror"]
}