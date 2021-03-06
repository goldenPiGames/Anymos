Stages.BurningForest = {
	name : "BurningForest",
	displayName : "Burning Forest",
	description : "Precision platforming",
	load : function(doStuff) {
		playMusic("Strategy 3 - PeriTune");
		let G = {solid:true,color:"#492116",grassyTop:"#009734"};
		let D = {solid:true,color:"#451D12",grassyTop:"#303020"};
		let T = {solid:true,color:"#624e2c"};
		let t = {solid:false,color:"#624e2c80"};
		let L = {solid:true,color:"#00A040",leafy:true};
		let B = {solid:true,hazard:9,color:"#624e2c",fire:1};
		let F = {solid:false,hazard:9,color:"#FF800040",fire:1};
		let _ = {solid:false,color:"#87CEEB00"};
		edgesSolid = true;
		//oobtopcolor = "#87CEEB";
		oobbottomcolor = "#492116";
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,L,L,L,L,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,L,L,L,L,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,L,L,L,L,L,L,L,L,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,L,L,L,L,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,L,L,L,L,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,B,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,B,B,_,_,_,_,L,L,L,L,_,_,_,_,_,T,B,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,B,B,B,_,_,_,_,_,_,L,L,L,_,_,_,_,T,B,B,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,B,B,B,_,_,_,_,_,_,T,T,_,_,_,_,_,B,B,B,B,_,_,_,T,T,T,L,L,L,_,_,_,_,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,_,_,_,_,_,T,T,_,_,_,_,_,B,B,B,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,L,L,T,T,L,L,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,T,T,_,_,_,_,_,B,B,B,_,_,_,_,B,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,_,_,_,_,_,_,T,T,L,_,_,_,_,B,B,_,_,_,_,_,B,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,L,T,T,_,_,_,_,_,B,B,_,_,_,_,_,B,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,T,T,_,_,_,_,_,B,B,_,_,_,_,B,B,T,T,_,_,_,_,_,B,T,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,L,L,L,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,T,T,_,_,_,_,_,t,t,_,_,_,B,B,B,T,t,_,_,_,_,_,B,B,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,t,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,T,T,L,_,_,_,_,t,t,_,_,_,_,B,B,T,t,_,_,_,_,_,B,B,_,_,_,_,_,_,t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,_,t,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,L,T,T,_,_,_,_,_,t,t,_,_,_,_,_,B,T,T,T,_,_,_,_,B,B,_,_,_,_,_,L,T,T,L,L,_,_,_,_,_,_,_,_,_,_,_,_,B,T,T,_,_,_,L,L,L,L,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,T,B,_,_,_,_,_,t,t,_,_,_,_,_,B,T,B,_,_,_,_,_,B,B,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,T,T,_,_,_,_,_,t,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,B,B,_,_,_,_,_,B,B,_,_,_,_,_,B,B,B,_,_,_,_,_,B,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,T,T,_,_,_,_,_,t,_,_,_,_,_,_,_,_,_],
		 [_,_,_,F,F,F,F,B,F,F,F,F,G,G,F,F,F,F,B,B,B,B,F,F,F,F,F,F,B,B,F,F,F,G,G,G,G,G,G,F,F,F,B,B,B,F,F,F,F,F,B,B,F,F,F,F,F,F,B,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,B,T,_,_,_,_,_,t,_,_,_,_,_,_,_,_,_],
		 [D,D,D,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [D,D,D,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [D,D,D,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		if (doStuff) {
			zoom=2;
			zoomd=2;
			dialog.begin(
				new DialogLine("Anymos", "Aw. I think I liked this forest.", "#00FFFF"),
				new DialogLine("Anymos", "And I think that this isn't the first time some idiot burned it down.", "#00FFFF"),
				new DialogLine("Anymos", "I should try to not touch the fire and just get through here..", "#00FFFF"),);
		}
		player.x = 1800;
		player.y = 400;
		player.facingRight = false;
		
		gameObjects = [
			new Vessel("BurningForestHollow", 890, 308),
			new Vessel("BurningForestOverBack1", 1120, 48),
			new Vessel("BurningForestOverBack2", 1240, 48),
			new Vessel("BurningForestAboveGoalpost", 10, 238),
			new Goalpost("ScorchedClearing", 10, 400, 160),
			new FireDrawer(),
		];
		dynamicBackdrop = {
			draw : function() {
				ctx.fillStyle = "#87CEEB";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
		}
	},
	vessels : ["BurningForestHollow", "BurningForestOverBack1", "BurningForestOverBack2", "BurningForestAboveGoalpost"],
	previous : "AnymisLanding",
	nextDown : "ScorchedClearing",
	parDown : 585,
	toLoad : [Hoverie, FireDrawer]
}