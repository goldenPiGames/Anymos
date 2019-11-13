Stages.GreenMaze = {
	displayName : "Green Maze",
	load : function() {
		playMusic("Fantasy Game Background - Eric Matyas");
		let B = BLOCK;
		let _ = AIR;
		staticColl =
		[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,B,B,B,B,B,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,B,B,_,_,B,B,B,_,_,B,_,_,_,B,_,_,_,B,B,B,B,B,B,B,B,B,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,_,_,B,B,_,_,B,B,B,B,B,B,B,B,B,_,_,_,B,_,_,_,B,B,B,B,B,_,_,_,B],
		 [B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B],
		 [B,_,_,B,B,B,B,B,B,_,_,_,B,B,B,B,B,_,_,_,B,_,_,B,B,_,_,_,B,B,B,B,B],
		 [_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,_],
		 [_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,_],
		 [_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,B,_,_,_,_],
		 [B,_,_,_,B,_,_,_,B,B,B,B,B,_,_,B,B,B,_,_,B,B,_,_,B,B,B,B,B,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,B,B,B,B,B,_,_,B,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B],
		 [B,_,_,_,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,B,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],];
		//gravity = .5;
		zoomd = 3;
		zoom = 3;
		minZoom = 3;
		player.x = 10;
		player.y = 400;
		player.facingRight = true;
		gameObjects = [
			new Vessel("GreenMazeUpperLeft", 50, 58),
			new Vessel("GreenMazeUpperRight", 610, 58),
			new Vessel("GreenMazeLowerLeft", 50, 618),
			new Vessel("GreenMazeLowerRight", 610, 618),
			new Walkie("GreenMazeWulfgar", 50, 640, true),
			new Hoverie("GreenMazeHelen", 300, 220, true),
			new Goalpost("CyanRainforest", 650, 400, 60)];
		dialog.begin(new DialogLine("Anymos", "This is an oddly mazelike, organized forest. My vision is restricted, so I can't zoom out.", "#00FFFF"));
	},
	vessels : ["GreenMazeUpperLeft", "GreenMazeHelen", "GreenMazeUpperRight", "GreenMazeLowerLeft", "GreenMazeLowerRight", "GreenMazeWulfgar"],
	selectX : 1.5*LS_X_SPACING,
	selectY : Stages.YellowWood.selectY + LS_Y_SPACING,
	previous : "YellowWood",
	nextDown : "CyanRainforest",
	parDown : 540,
	toLoad : [Walkie, Hoverie]
}