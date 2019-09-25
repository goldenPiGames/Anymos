Stages.PeacefulField = {
	name : "PeacefulField",
	displayName : "Peaceful Field",
	description : "Combat",
	load : function(doStuff) {
		playMusic(doStuff ? "The Old Country Farm - Darren Curtis" : "Maleficent Mysticism - Darren Curtis");
		let W = {solid:true,color:"#492116",grassyTop:"#009734"};
		let _ = {solid:false,color:"#87CEEB"};
		edgesSolid = true;
		//oobtopcolor = "#87CEEB";
		//oobbottomcolor = "#492116";
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W]];
		if (doStuff){zoom=5; zoomd=5}
		player.x = 2000;
		player.y = 200;
		player.facingRight = false;
		var aide = {
			x : player.x+50,
			y : player.y,
			facingRight : false,
			sprite : makeImage("src/Enemies/Teion/Aide.png"),
			update : function() {
				this.facingRight = true;
				this.x+=4;
				if (this.x > stagewidth()+10)
					this.dead = true;
			},
			draw : function() {
				drawSpriteOnStage(this.sprite, this.x, this.y, this.facingRight);
			}
		}
		var baron = new Baron(false, 200, 200, true);
		baron.die=function(){
			dialog.begin(
				new DialogLine("Baron", "Ugh... It seems... that you've beaten me aftah all...", "#FF0000"),
				new DialogLine("Baron", "But, at least, I was able to waste a bit of yah time, right?", "#FF0000"),
				function(){baron.dead=true}
			);
		}
		gameObjects = [
			aide,
			new Rumble(1500, 1800, 60, 200, true, doNothing, new Walkie(true, 1530, 200, true)),
			new Rumble(1150, 1450, 60, 200, true, doNothing, new Hoverie(true, 1180, 100, true)),
			new Rumble(800, 1100, 60, 200, true, doNothing, new Bouncie(true, 830, 120, true)),
			new Rumble(450, 750, 60, 200, true, doNothing, new Walkie(true, 480, 200, true), new Hoverie(true, 480, 100, true), new Bouncie(true, 480, 120, true)),
			new Goalpost("PeacefulField", 10, 200, 100),
			{update:function(){if(player.x<1900){dialog.begin(
				new DialogLine("???", "Bwahaha! A real teahrifying speech by Sqahnos that was, huh?", "#FF0000"),
				new DialogLine("???", "But theah will be no need fah Sqahnos to get his hands dahty when I can end you befah you even get to him!", "#FF0000"),
				new DialogLine("Baron", "Because I am the Great Sah Baron Brix von Death Muhdah!", "#FF0000"),
				new DialogLine("Baron", "But theah will be no need fah me to get my hands dahty when my troops can end you befah you even get to me!", "#FF0000"),
				function(){playMusic("Move it Out - Eric Matyas")},
				new DialogLine("Baron", "Now, troops... READY TO AMBUSH!", "#FF0000"),
				);this.dead=true}},draw:doNothing},
			{update:function(){if(player.x<300){dialog.begin(
				new DialogLine("Baron", "So you managed to fight your way through my extra tough elite special fahces? Impressive.", "#FF0000"),
				new DialogLine("Anymos", "Elite Forces? Must've missed them. The only things I fought on the way here were a couple of puny little lumps.", "#00FFFF"),
				new DialogLine("Baron", "What? But I saw you fighting my extra tough elite special fahces with my own two eyes!", "#FF0000"),
				new DialogLine("Anymos", "You know, I'd love to stick around and troll you a little longer, I really have more important things to be doing.", "#00FFFF"),
				new DialogLine("Baron", "Wha? Don't go - um, I mean...", "#FF0000"),
				new DialogLine("Baron", "HALT, WAHM! You may have bested my undahlings, but you will nevah, NEVAH get through me!", "#FF0000"),
				);gameObjects.push(baron);this.dead=true}},draw:doNothing},
			{update:function(){if(player.x<35&&!baron.dead){dialog.begin(
				new DialogLine("Anymos", "Do you realize that you didn't actually put up the Rumble barrier?", "#00FFFF"),
				new DialogLine("Baron", "....", "#FF0000"),
				new DialogLine("Anymos", "Sorry, bud, gotta dash.", "#00FFFF"),
				new DialogLine("Baron", "COME BACK HEAH AND FIGHT ME, YOU COWAHD!", "#FF0000"),
				new DialogLine("Anymos", "lol nope", "#00FFFF"),
				);this.dead=true}},draw:doNothing},
		];
		if (doStuff)
			dialog.begin(new DialogLine("Anymos", "Ah, it sure is nice to be back in my own kingdom.", "#00FFFF"),
			new DialogLine("Anymos", "...Honestly, it's also just nice to be anywhere except in the company of Chanos preaching at an international summit.", "#00FFFF"),
			new DialogLine("Aide", "The way he talks, it's like he thinks everybody eagerly wishes to become a mindless drone.", "#BFBFBF"),
			new DialogLine("Aide", "It's kinda scary, to be honest. Are you sure you don't want to do anything about it?", "#BFBFBF"),
			new DialogLine("Anymos", "Eh, don't worry about it. I can always intervene later if it gets too bad.", "#00FFFF"),
			new DialogLine("Anymos", "And it's best not to make important decisions while angry.", "#00FFFF"),
			new DialogLine("Anymos", "For now, I'd rather just make my way leisurely back to the palace and-", "#00FFFF"),
			function(){playMusic("Maleficent Mysticism - Darren Curtis")},
			new DialogLine("???", "I HAVE AWAKENED AT LAST!", "#FF0000"),
			new DialogLine("Anymos", profane() ? "Oh, for fuck's sake-" : "Oh, for-", "#00FFFF"),
			new DialogLine("Sqarnos", "IT IS I! SQARNOS! BRINGER OF THE APOCALYPSE AND DEVOURER OF ALL LIFE AND INNOCENCE!", "#FF0000"),
			new DialogLine("Anymos", "Sorry, but, but could we please, like, not do this right now? I just got back from a really exhausting business trip and-", "#00FFFF"),
			new DialogLine("Sqarnos", "THE BRINGER OF THE APOCALYPSE WAITS FOR NO ONE!", "#FF0000"),
			new DialogLine("Anymos", "*sigh* Fine. Hold tight, I'll be there to fight you again in like ten minutes.", "#00FFFF"),
			new DialogLine("Aide", "Wh-wh-wh-wh- *incoherent frightened babbling*", "#BFBFBF"),
			function(){player.facingRight=true;},
			new DialogLine("Anymos", "Oh, that was just Sqarnos. My evil opposite and eternal archnemesis. I sealed him away between dimensions but he still manages to break free every now and then.", "#00FFFF"),
			new DialogLine("Anymos", "By the way, I recommend you get away from here. He'll probably start teleporting his personal army of dark creatures everywhere pretty soon.", "#00FFFF"),
			new DialogLine("Anymos", "Maybe even escape to Chanis, it's actually pretty well protected there.", "#00FFFF"),
			function(){player.facingRight=false; zoomd=3},
			new DialogLine("Anymos", "Now if you'll excuse me, I gotta go.", "#00FFFF"),);
		
	},
	vessels : [],
	par : 360,
	enemies : [Walkie, Hoverie, "Bouncie", "Baron"]
}