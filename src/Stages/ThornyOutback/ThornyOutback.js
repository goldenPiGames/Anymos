Stages.ThornyOutback = {
	name : "ThornyOutback",
	displayName : "Thorny Outback",
	description : "Precision platforming",
	load : function(doStuff) {
		playMusic("Exotic - PeriTune");
		let G = {solid:true,color:"#492116",grassyTop:"#009734"};
		let W = {solid:true,color:"#624e2c"};
		let T = {solid:true,hazard:5,color:"#40A000",thorns:"#E38101"};
		let L = {solid:true,color:"#00A040",leafy:true};
		let _ = {solid:false,color:"#87CEEB00"};
		edgesSolid = true;
		//oobtopcolor = "#87CEEB";
		//oobbottomcolor = "#492116";
		staticColl =
		[[T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
		 [T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_,_,_,_,_,_,_,T],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,T,_,_,_,_,_,T,_,_,_,_,T],
		 [T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,T,_,_,_,_,_,T,_,_,_,_,T],
		 [T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,T,_,_,_,_,_,T,_,_,_,_,T],
		 [T,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,T,_,_,T,T,T,T,W,_,_,T,W,_,_,_,T],
		 [T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,_,_,T,W,T,T,T,T,_,_,_,T],
		 [T,_,_,_,_,_,_,_,_,_,_,T,T,T,T,T,T,_,_,_,_,_,_,_,_,_,_,T,_,_,_,T],
		 [T,_,_,_,_,_,_,_,_,T,T,T,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,T,_,_,_,T],
		 [T,_,_,_,_,_,_,W,T,T,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_,T,_,_,W,W],
		 [T,_,_,_,_,_,_,T,T,T,_,_,_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,T,_,_,T,T],
		 [T,_,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,T,_,_,_,_,_,_,T,_,_,_,T],
		 [T,_,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,_,_,T,_,_,_,T],
		 [T,W,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,T],
		 [T,T,_,_,_,_,_,_,_,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,T,_,_,T],
		 [T,T,_,_,_,_,_,_,_,T,_,_,T,_,_,_,_,_,_,W,_,_,_,_,_,_,_,T,_,_,_,T],
		 [T,T,_,_,_,_,_,_,_,T,_,_,T,_,_,_,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,T],
		 [T,T,T,T,T,T,W,W,_,T,_,_,T,_,_,_,T,_,_,_,_,_,T,W,_,_,_,T,_,_,W,W],
		 [T,_,_,_,_,T,T,W,_,_,_,_,T,_,_,_,T,_,_,_,_,_,T,W,_,_,_,T,_,_,T,W],
		 [T,_,_,_,_,_,_,_,_,_,_,_,T,_,_,_,T,_,_,_,_,_,T,W,T,T,T,T,_,_,_,_],
		 [T,_,_,_,_,_,_,_,_,_,_,_,T,T,T,T,T,T,T,T,T,T,T,W,T,T,T,T,_,_,_,_],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		if (doStuff){zoom=3; zoomd=3}
		player.x = 630;
		player.y = 480;
		player.facingRight = false;
		
		gameObjects = [
			new Goalpost("ThornyOutback", 10, 120, 80),
			new FireDrawer(),
		];
		if (doStuff)
			dialog.begin(new DialogLine("Anymos", "Hm, so I can either go through the dense, dangerous, and contrived Thorny Outback, or I can take the long way around...", "#00FFFF"),
			new DialogLine("Anymos", "Eh, who am I kidding?", "#00FFFF"),);
		dynamicBackdrop = {
			draw : function() {
				ctx.fillStyle = "#87CEEB"
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
		}
	},
	par : 480,
	enemies : [Hoverie, FireDrawer]
}