Stages.InfinityLighthouse = {
	displayName : "Infinity Lighthouse",
	load : function() {
		playMusic("Remote Island - Eric Matyas");
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
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
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
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_],
			 [_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,B,B,_,_],
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
		gameObjects = [
			new SmoothGravityChanger(.358, .5),
			new Goalpost("AdlunamPillar", 300, 120, 118),
			new Vessel("InfinityLighthouseLeft", 40, 838),
			new Vessel("InfinityLighthouseRight", 540, 600)
		];
	},
	vessels : ["InfinityLighthouseLeft", "InfinityLighthouseRight"],
	previous : "IgmaBeach",
	nextDown : "AdlunamPillar",
	parDown : 525,
	toLoad : []
}

class SmoothGravityChanger extends GameObject {
	constructor(top, bottom) {
		super();
		this.top = top;
		this.bottom = bottom;
	}
	update() {
		gravity = this.top + (this.bottom-this.top)*(player.y/stageheight());
	}
	draw() {
		
	}
}