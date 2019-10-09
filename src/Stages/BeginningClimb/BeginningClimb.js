Stages.BeginningClimb = {
	displayName : "Beginning Climb",
	load : function() {
		playMusic("Chamber of Jewels - Eric Matyas");
		let B = BLOCK;
		let _ = AIR;
		staticColl =
		[[_,_,_,_,_,B,B,B,B,B,B,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [_,_,_,_,_,B,_,_,_,_,_,B,_,_,_],
		 [B,B,B,B,B,B,_,_,_,B,B,B,B,B,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,B,_,_,_,B,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,B,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,B,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,B,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,B,B,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,B,_,_],
		 [B,_,_,_,_,_,_,_,_,_,B,B,B,_,_],
		 [B,_,_,_,_,_,_,_,_,_,B,_,_,_,_],
		 [B,B,B,B,B,B,B,B,B,B,B,_,_,_,_]];
		gravity = .5;
		zoom = 2;
		player.x = 50;
		player.y = 1000;
		player.facingRight = true;
		gameObjects = [new MovingPlatformSpawner(150, 490, 60, 1, 150,160), new Walkie("BeginningClimbEsteban", 220, 960, false), new Hoverie("BeginningClimbFlannery", 150, 300, false), new BeamTurret(10, 380, true), new Vessel("BeginningClimbUnderLift1", 130, 518), new Vessel("BeginningClimbUnderLift2", 170, 518), new Vessel("BeginningClimbHigh", 130, 38), new Goalpost("YellowWood", 210, 180, 75), 
			new MonologueSpot("BeginningClimbSecretMono", 90, 517, 
				"Things are not always as they seem. I should keep my eyes peeled especially for indents, holes, or discoloration in the walls.",
				"If I see something in a seemingly inaccessible area, it might help to zoom in while looking for a way in."),
			//new MonologueSpot("BeginningClimbJumpMono", 150, 837,
			//	"Under normal gravity conditions, I can jump a little more than 4 blocks high, and just barely jump over a 10-block gap on level ground. The above jump across is only 9 blocks.")
		];
		return {
			mainBack : "src/Stages/BeginningClimb/MainBack.png",
			mainFore : "src/Stages/BeginningClimb/MainFore.png",
		};
	},
	vessels : ["BeginningClimbEsteban", "BeginningClimbUnderLift1", "BeginningClimbUnderLift2", "BeginningClimbFlannery", "BeginningClimbHigh"],
	selectX : 0,
	selectY : 100,
	par : 180,
	previous : "TutorialCombat",
	nextDown : "YellowWood",
	toLoad : [Walkie, Hoverie, "BeamTurret", "MovingPlatform"]
}