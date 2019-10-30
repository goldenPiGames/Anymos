Stages.YstryJungle = {
	displayName : "Ystry Jungle",
	load : function(doStuff) {
		playMusic("Exotic - PeriTune");
		//playMusic("Night 2 - PeriTune");
		let B = {solid:true,color:"#10A030",leafy:true};
		let F = {solid:false,color:"#11A131",leafy:true};
		let W = {solid:true,color:"#634D2D",leafy:false};
		let R = B//{solid:true,color:"#7F7F7F",leafy:false};
		let _ = {solid:false,color:"#20E060"};
		staticColl = 
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [F,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [F,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,R,R,R,_,_,_,_,B,B,_,_,_,_,_,_,_,_,B],
			 [B,_,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,B,B,_,_,_,_,_,_,_,_,B,B,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
		
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
		if (doStuff) {
			zoomd = 3;
			zoom = 3;
		}
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
		tmsStarting.left = tmsStarting;
		var tmsLostWoods1 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,B,B,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B],
			 [_,_,_,_,_,B,B,_,_,_,_,_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,B,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]],
			makeImage("src/Stages/YstryJungle/LostWoods1Back.png"), makeImage("src/Stages/YstryJungle/LostWoods1Fore.png"), [
					new Vessel("YstryJungleSeeds", 620, 148),
				]);
		tmsStarting.right = tmsLostWoods1; tmsLostWoods1.left = tmsStarting;
		tmsLostWoods1.down = tmsStarting;
		var tmsLostWoods2 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,_,_,B,B,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,R,R,R,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			blankBack/*makeImage("src/Stages/YstryJungle/LostWoods2Back.png")*/, makeImage("src/Stages/YstryJungle/LostWoods2Fore.png"), [
					new Vessel("YstryJungleBoulderCornerDrop", 370, 58),
				]);
		tmsLostWoods1.up = tmsLostWoods2; tmsLostWoods2.down = tmsLostWoods1;
		tmsLostWoods2.left = tmsStarting;
		tmsLostWoods2.up = tmsStarting;
		var tmsLostWoods3 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B],
			 [B,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,F,B]],
			blankBack, makeImage("src/Stages/YstryJungle/LostWoods3Fore.png"), []);
		tmsLostWoods2.right = tmsLostWoods3; tmsLostWoods3.left = tmsLostWoods2;
		tmsLostWoods3.down = tmsLostWoods2;
		tmsLostWoods3.right = tmsStarting;
		var tmsLostWoods4 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,B,B,_,_,_,_,_,_,B,B,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			blankBack, makeImage("src/Stages/YstryJungle/LostWoods4Fore.png"), []);
		tmsLostWoods3.up = tmsLostWoods4; tmsLostWoods4.down = tmsLostWoods3;
		tmsLostWoods4.left = tmsStarting;
		tmsLostWoods4.right = tmsLostWoods1;
		var tmsLostWoods5 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,F],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,F],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,B,B,_,_,_,_,_,R,R,R,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,R,R,R,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,B,B,_,_,_,_,_,_,_,_,_,_,B,B,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			blankBack, makeImage("src/Stages/YstryJungle/LostWoods5Fore.png"), [
					new Vessel("YstryJungleBoulderCornerWalk", 340, 48),
				]);
		tmsLostWoods4.up = tmsLostWoods5; tmsLostWoods5.down = tmsLostWoods4;
		tmsLostWoods5.up = tmsLostWoods3;
		tmsLostWoods5.right = tmsLostWoods4;
		var tmsLostWoods6 = new TeleportMazeSegment(
			[[B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B],
			 [F,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [F,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,R,R,R,_,_,_,_,B,B,_,_,_,_,_,_,_,_,B],
			 [B,_,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,B,B,_,_,_,_,_,_,_,_,B,B,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [B,_,_,_,_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
			 [B,B,B,B,B,B,B,B,_,_,_,_,B,B,B,B,B,B,B,B]],
			blankBack, makeImage("src/Stages/YstryJungle/LostWoods6Fore.png"), []);
		tmsLostWoods5.left = tmsLostWoods6; tmsLostWoods6.right = tmsLostWoods5;
		tmsLostWoods6.left = tmsLostWoods5;
		tmsLostWoods6.down = tmsStarting;
		var tmsKonamis = [];
		for (var i = 0; i < 8; i++) {
			tmsKonamis[i] = new TeleportMazeSegment(tmsStarting.staticColl, tmsStarting.mainBack, tmsStarting.mainFore, []);
			tmsKonamis[i].left = tmsStarting.left; tmsKonamis[i].right = tmsStarting.right; tmsKonamis[i].up = tmsStarting.up; tmsKonamis[i].down = tmsStarting.down;
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
		tmsStarting.enter();
		player.x = 280;
		player.y = 280;
		player.facingRight = true;
	},
	vessels : ["YstryJungleSeeds", "YstryJungleBoulderCornerDrop", "YstryJungleBoulderCornerWalk", "YstryJungleKonami"],
	previous : "IgmaBeach",
	//nextDown : "IddelMountain",
	toLoad : [Flipwip]
}


