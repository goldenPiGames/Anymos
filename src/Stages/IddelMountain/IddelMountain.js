Stages.IddelMountain = {
	displayName : "Iddel Mountain",
	load : function(doStuff) {
		playMusic("Exotic - PeriTune");
		//playMusic("Night 2 - PeriTune");
		let B = {solid:true,color:"#10A030",leafy:true};
		let F = {solid:false,color:"#11A131",leafy:true};
		let W = {solid:true,color:"#634D2D",leafy:false};
		let R = B//{solid:true,color:"#7F7F7F",leafy:false};
		let M = {solid:true,color:"#F0F0F0",leafy:false};
		let _ = {solid:false,color:"#20E060"};
		staticColl = 
				[[B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
				 [B,_,_,_,M,_,_,_,_,_,_,M,_,_,_,_,_,_,_,B],
				 [_,_,_,_,M,_,_,_,_,_,_,M,_,_,_,_,_,_,_,B],
				 [_,_,_,_,M,_,_,_,_,_,_,M,_,_,_,_,_,_,_,B],
				 [_,_,_,_,M,_,_,_,_,_,_,M,_,_,_,_,M,M,M,B],
				 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,M,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,M,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,M,M,M,M,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,M,_,_,M,_,_,B],
				 [B,_,_,_,_,_,_,_,_,_,_,_,_,M,_,_,M,_,_,B],
				 [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]],
		minZoom = 3;
		if (doStuff) {
			zoomd = 3;
			zoom = 3;
		}
		player.x = 280;
		player.y = 280;
		player.facingRight = true;
		gameObjects = [];
	},
	vessels : [],
	previous : "YstryJungle",
	//nextDown : "IddelMountain",
	toLoad : [Flipwip]
}