Stages.IddelMountain = {
	displayName : "Iddel Mountain",
	load : function(doStuff) {
		playMusic("Exotic - PeriTune");
		//playMusic("Night 2 - PeriTune");
		let B = {solid:true,back:"#010101",fore:"#404040"};
		let _ = {solid:false,color:"#2082E8"};
		let s = {solid:false,back:"#808080",fore:"#404040"};
		let o = {solid:false,back:"#404040",fore:"#808080"};
		staticColl = 
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,B,B,B,B,B,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,s,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,s,s,s,s,B,B,B,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,s,B,B,B,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,s,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,s,s,s,s,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,B,B,B,B,B,B,B,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,s,s,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,s,s,s,s,s,s,s,s,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,s,B,B,B,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,_,_,_,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,_,B,B,B,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [_,_,_,_,_,B,B,B,B,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		if (doStuff) {
			zoomd = 1;
			zoom = 1;
		}
		player.x = 30;
		player.y = 840;
		player.facingRight = true;
		player.illumination = 60;
		gameObjects = [];
		illuminateFore = true;
	},
	vessels : [],
	previous : "YstryJungle",
	//nextDown : "Denuo Descent",
	//nextRight : "Why",
	toLoad : [Flipwip]
}