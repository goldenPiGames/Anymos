Stages.AnymisLanding = {
	displayName : "Anymis Landing",
	load : function(doStuff) {
		playMusic("Breeze 2 - PeriTune");
		let G = {name:"Ground",solid:true,color:"#492116",grassyTop:"#009734"};
		let _ = {name:"Walls",solid:false,color:"#87CEEB"};
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
			dialog.begin(
				new DialogLine("Chanos", "You've arrived safe and sound.", CHANOS_COLOR),
				new DialogLine("Anymos", "Ah... It feels great to get out of that cramped plane.", "#00FFFF"),
				new DialogLine("Chanos", "Once you leave the landing, I won't be able to contact you.", CHANOS_COLOR),
				new DialogLine("Anymos", "Oh no. What a shame.", "#00FFFF"),
				new DialogLine("Chanos", "Differences aside, I wish you all the best on your battle against Sqarnos.", CHANOS_COLOR),
				new DialogLine("Anymos", "(The memories are starting to come back. This place...)", "#00FFFF"),
				new DialogLine("Anymos", "(This used to be my kingdom.)", "#00FFFF"),
				new DialogLine("Anymos", "Well, at least it looks peaceful around here. Maybe Sqarnos hasn't gotten around to rennovating yet?", "#00FFFF"),
			);
		}
		player.x = 870;
		player.y = 260;
		player.facingRight = false;
		gameObjects = [
			//new BombTrap(260, 260, doStuff),
			new Bettie("AnymisLandingClement", 500, 260),
			new Goalpost("BurningForest", 10, 260, 100),
		];
		//TODO refurbish, maybe even completely redo
	},
	vessels : ["AnymisLandingClement"],
	//par : 515,
	previous : "FlightToAnymis",
	nextDown : "BurningForest",
	toLoad : [Bettie]
}

/*class BombTrap extends GameObject {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.width = 100;
		this.height = 60;
		this.trigger = {x:this.x, y:this.y, width:this.width/2, height:this.height/2};
	}
	update() {
		if (player.isTouching(this.trigger)) {
			this.exploding = 1;
		} else if (this.exploding) {
			if (this.exploding == 4) {
				this.succ = this.sendHurtbox(this.damage);
			}
			this.exploding++;
			if (this.exploding > 10) {
				this.exploding = false;
				this.die();
			}
		}
	}
	draw() {
		//TODO draw explosion
	}
}
BombTrap.prototype.team = "Sqarnos";
BombTrap.prototype.damage = 450;*/