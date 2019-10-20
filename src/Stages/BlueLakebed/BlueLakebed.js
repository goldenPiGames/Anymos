Stages.BlueLakebed = {
	displayName : "Blue Lakebed",
	load : function(doStuff) {
		playMusic("Underwater Coolness - Eric Matyas");
		let B = {name:"Bottom",solid:true,color:"#EFE4B0"};
		let W = {name:"Water",solid:false,hazard:9,color:"#276383"};
		let _ = {name:"Air",solid:false,color:"#A2CADD"};
		staticColl =
		[[W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		if (doStuff)
			zoom = 2;
		player.x = 300;
		player.y = 40;
		player.facingRight = false;
		gameObjects = [
			new Vessel("BlueLakebedLowerRight", 590, 1100),
			//new BeamTurret(10, 400, true, 30, 60),
			//new BeamTurret(10, 380, true, 0, 30),
			//new BeamTurret(10, 360, true, 0, 60),
			//new BeamTurret(10, 340, true, 0, 60),
			//new BeamTurret(10, 320, true, 0, 60),
			new Goalpost("VisibleStair", 30, 1100, 95),
			new CustomObject(()=>{
				if (player.dy > 10)
					player.dy = 10;
				if (player.y == (stageheight()-20))
					player.drained = false;
			}),
		];
	},
	vessels : ["BlueLakebedLowerRight"],
	previous : "BlueLake",
	nextDown : "VisibleStair",
	parDown : 150,
	toLoad : []
}