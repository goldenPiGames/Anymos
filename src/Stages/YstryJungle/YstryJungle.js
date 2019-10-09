Stages.YstryJungle = {
	displayName : "Ystry Jungle",
	load : function(doStuff) {
		playMusic("Anomalies Abound - Eric Matyas");
		let B = {solid:true,color:"#20E050",leafy:true};
		let R = {solid:true,color:"#7F7F7F",leafy:false};
		let _ = {solid:false,color:"#70E9D4"};
		let D = DEATH;
		staticColl = 
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,B,B,_,_,_,_,_,_,B,B,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]];
		/*[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
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
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_]];*/
		minZoom = 3;
		if (doStuff) { zoomd = 3; zoom = 3}
		var blankBack = makeImage("src/Stages/YstryJungle/MainBack.png");
		var tmsStarting = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,B,B,_,_,_,_,_,_,B,B,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			blankBack, makeImage("src/Stages/YstryJungle/StartingFore.png"), []);
		tmsStarting.down = tmsStarting;
		var tmsLostWoods1 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			makeImage("src/Stages/YstryJungle/MainBack.png"), makeImage("src/Stages/YstryJungle/LostWoods1Fore.png"), []);
		tmsStarting.right = tmsLostWoods1; tmsLostWoods1.left = tmsStarting;
		tmsLostWoods1.down = tmsStarting;
		var tmsLostWoods2 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,R,_,_,_,_,R,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,R,_,_,_,_,R,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,_,R,R,_,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			makeImage("src/Stages/YstryJungle/LostWoods2Back.png"), makeImage("src/Stages/YstryJungle/LostWoods2Fore.png"), []);
		tmsLostWoods1.up = tmsLostWoods2; tmsLostWoods2.down = tmsLostWoods1;
		tmsLostWoods2.left = tmsStarting;
		tmsLostWoods2.up = tmsStarting;
		var tmsKonamis = [];
		for (var i = 0; i < 8; i++) {
			tmsKonamis[i] = new TeleportMazeSegment(tmsStarting.staticColl, tmsStarting.mainBack, tmsStarting.mainFore, []);
			tmsKonamis[i].left = tmsStarting; tmsKonamis[i].right = tmsStarting; tmsKonamis[i].up = tmsStarting; tmsKonamis[i].down = tmsStarting;
		}
		tmsStarting.up = tmsKonamis[0];
		tmsKonamis[0].up = tmsKonamis[1];
		tmsKonamis[1].down = tmsKonamis[2];
		tmsKonamis[2].down = tmsKonamis[3];
		tmsKonamis[3].left = tmsKonamis[4];
		tmsKonamis[4].right = tmsKonamis[5];
		tmsKonamis[5].left = tmsKonamis[6];
		tmsKonamis[6].right = tmsKonamis[7];
		tmsKonamis[7].objects = [new Vessel("YstryJungleKonami", 300, 200)]
		edgesSolid = false;
		player.x = 280;
		player.y = 280;
		player.facingRight = true;
		//tmsStarting.enter();
		gameObjects = [{update:function(){tmsStarting.enter()},draw:function(){tmsStarting.enter()}}];
	},
	vessels : ["YstryJungleSeeds", "YstryJungleSticks", "YstryJungleNuts", "YstryJungleKonami"],
	par : 360,
	previous : "IgmaBeach",
	//nextDown : "IddelMountain",
	toLoad : [Flipwip]
}


