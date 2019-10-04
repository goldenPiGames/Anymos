Stages.AqrosSanctum = {
	displayName : "Aqros' Sanctum",
	load : function() {
		if (songName != "War of the Pianos - Darren Curtis")
			playMusic("Underwater Coolness - Eric Matyas");
		let B = {solid:true,color:"#000080"}
		let _ = {solid:false,color:"#8080FF",rain:true};
		staticColl =
		[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		zoom = 2;
		zoomd = 2;
		maxZoom = 2;
		player.x = 50;
		player.y = 300;
		player.facingRight = true;
		player.special = specialReflector;
		dialog.begin(new DialogLine("Aqros", "So, you finally made it. I was getting tired of waiting.", "#0000FF"),
			new DialogLine("Anymos", "You know, I just recently got retrograde amnesia, and yet, I can tell this isn't really you.", "#00FFFF"),
			new DialogLine("Aqros", "Oh don't feed me this cliche tripe!", "#0000FF"),
			new DialogLine("Anymos", "I'm beginning to remember you. I recall that you admired me and wisely protected your people", "#00FFFF"),
			new DialogLine("Aqros", "Everything changes, Anymos. Even Uteion. And to be frank, I'm tired of fighting for those ungrateful Teion. And I'm especially tired of dealing with you!", "#0000FF"), //KIU reference
			new DialogLine("Anymos", "Really? You were pretty famous for your modesty and compassion. You never expected anything in return.", "#00FFFF"),
			new DialogLine("Aqros", "I don't care. You'll never be able to talk me out of this.", "#0000FF"),
			new DialogLine("Anymos", "Yeah, I can see that. You've been magically corrupted haven't you?", "#00FFFF"),
			function(){playMusic("War of the Pianos - Darren Curtis")},
			new DialogLine("Aqros", "Enough. It's time for you to die!", "#0000FF"),);
		var boss = new AqrosEvil(550, 300, false);
		boss.onDeath = function() { this.dead = true; new Vessel("AqrosSanctumVictory1").collect(); new Vessel("AqrosSanctumVictory2").collect(); new Vessel("AqrosSanctumVictory3").collect();
			gameObjects.push(new EndLight("EndAqros", 425, 300));
			dialog.begin(
				new DialogLine("Aqros", "Ugh...", "#0000FF"),
				new DialogLine("Anymos", "Have you come to your senses now?", "#00FFFF"),
				new DialogLine("Aqros", "Wh... Who are you?", "#0000FF"),
				new DialogLine("Anymos", "I'm Anymos. I believ we've met before?", "#00FFFF"),
				new DialogLine("Aqros", "Who am I?", "#0000FF"),
				new DialogLine("Anymos", "Oh, no, don't tell me...", "#00FFFF"),
				new DialogLine("Aqros", "I'm sorry, I can't really seem to remember much...", "#0000FF"),
				new DialogLine("Anymos", "And here I was, hoping I could actually get some answers.", "#00FFFF"),
				
			)
		}
		gameObjects = [boss];
		return {
			mainBack : "src/Stages/AqrosFlight/MainBack.png",
			mainFore : "src/Stages/AqrosFlight/MainFore.png",
		};
	},
	vessels : ["AqrosSanctumVictory1", "AqrosSanctumVictory2", "AqrosSanctumVictory3"],
	par : 700,
	//devBest : 175,
	previous : "AqrosCorridor",
	nextDown : "EndAqros",
	enemies : [Mirror, AqrosEvil, SinusoidalPlatform]
}

Stages.EndAqros = {
	displayName : "End: Aqros",
	end : true,
	previous : "AqrosSanctum",
}