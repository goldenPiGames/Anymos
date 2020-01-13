Stages.AdlunamPillar = {
	displayName : "Adlunam Pillar",
	load : function() {
		playMusic("Star Light - Eric Matyas");
		let B = {name:"Block",solid:true,color:"#EFEFEF"};
		let _ = {solid:false};
		staticColl = 
			[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,B,B,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,B,B,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_]];
		zoom = 2;
		zoomd = 2;
		//minZoom = 2;
		edgesSolid = false;
		player.x = 300;
		player.y = (staticColl.length-1)*20;
		player.facingRight = true;
		gameObjects = [new SmoothGravityChanger(.358, .5)];
	},
	vessels : [],
	par : 360,
	previous : "InfinityLighthouse",
	//nextDown : "SUltraVeritas",
	toLoad : [],
	devblock : true,
}