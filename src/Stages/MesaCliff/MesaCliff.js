//middle, right, left, left, right, middle, right, left, right, right, middle, right, right, left, middle, middle, left, left, left, right, left, left, left, middle, middle
const CRAG_COMBO = [1, 2, 0, 0, 2, 1, 2, 0, 2, 2, 1, 2, 2, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1];

Stages.MesaCliff = {
	displayName : "Mesa Cliff",
	description : "Memory",
	load : function(doStuff) {
		playMusic("Tempest - Darren Curtis");
		let R = {solid:true,color:"#7F7F7F"};
		let s = {solid:false,back:"#7F7F7FD0",fore:"#7F7F7FD0"};
		let _ = {solid:false,color:"#87CEEB00",rain:true};
		edgesSolid = true;
		//oobtopcolor = "#87CEEB";
		oobbottomcolor = "#7F7F7F";
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,s,s,s,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,s,s,s,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,s,s,s,s,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,s,s,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,s,s,s,R,_,_,_,_,_,_,_,_,_,_,_,_,R,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,s,s,s,s,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R]];
		if (doStuff)  {
			zoom=2;
			zoomd=2;
			//dialog.begin(new DialogLine("Anymos", "This rain has an evil electrical charge. But oddly enough, having shelter over my head feels... nice and relaxing.", "#00FFFF"));
		}
		player.x = 500;
		player.y = 980;
		player.facingRight = false;
		player.drained = false;
		let lx = 220;
		let mx = 300;
		let rx = 380;
		let by = 800;
		let ty = 150;
		let iy = 70;
		let bw = 80-AnymosPlayer.prototype.width;
		gameObjects = [
			new Vessel("MesaCliffBottomCave", 130, 898),
			new BoltRisingPlatformSpawner(300, 950, 240, 2, 150, ()=>{
					var bolts = [];
					for (var i = 0; by-iy*i > ty + 50; i++) {
						if (CRAG_COMBO[i] != 0)
							bolts.push(new BolizBolt(lx, by-iy*i, bw));
						if (CRAG_COMBO[i] != 1)
							bolts.push(new BolizBolt(mx, by-iy*i, bw));
						if (CRAG_COMBO[i] != 2)
							bolts.push(new BolizBolt(rx, by-iy*i, bw));
					}
					return bolts;
				}),
			new CustomObject(function() {
					if (player.y < 200)
						this.die();
					else if (this.ready) {
						if (player.x >= 420 && player.y <= 750) {
							dialog.begin(new DialogLine("Bolizos", "Nice try.", BOLIZOS_COLOR));
							player.dx = 15;
							player.dy = -4;
							this.ready = false;
						}
					} else if (player.grounded) {
						this.ready = true;
					}
				}),
			new Goalpost("StormyMesa", 10, 140, 134),
		];
		dynamicBackdrop = new StormBackdrop();
	},
	vessels : ["MesaCliffBottomCave"],
	previous : "ScorchedClearing",
	nextDown : "StormyMesa",
	parDown : 0,
	toLoad : [MovingPlatform, StormBackdrop, BolizBolt]
}

class BoltRisingPlatformSpawner extends MovingPlatformSpawner {
	constructor(x, y, width, speed, desty, genbolts) {
		super(x, y, width, speed, x, desty);
		this.genbolts = genbolts;
	}
	getPlatform() {
		return new BoltMovingPlatform(this.x, this.y, this.width, this.speed, this.xdests, this.ydests, this.genbolts());
	}
}

class BoltMovingPlatform extends MovingPlatform {
	constructor(x, y, width, speed, xdests, ydests, bolts) {
		super(x, y, width, speed, xdests, ydests);
		this.bolts = bolts;
	}
	update() {
		super.update();
		while (this.bolts.length > 0 && this.y-this.height <= this.bolts[0].y) {
			gameObjects.push(this.bolts.shift());
		}
		if (player.y > this.y + 100)
			this.die();
	}
}