Stages.TutorialMultiplayer = {
	displayName : "Tutorial",
	load : function(doStuff) {
		playMusic("Decisions - Eric Matyas");
		let W = {solid:true,color:"#00000080",edge:"#FFFFFF"};
		let H = {solid:true,hazard:4,color:"#FF000080",edge:"#FF0000"};
		let L = {solid:false,hazard:2,color:"#FF000080",fore:true};
		let _ = {solid:false,color:"#40404000"};
		edgesSolid = true;
		staticColl =
		[[W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,_,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,_,_,_,_,_,_,_],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W]];
		oobtopcolor = "#00000080";
		oobbottomcolor = "#00000080";
		zoom = 5;
		players[0].x = 120;
		players[0].y = 200;
		players[0].facingRight = true;
		players[1].x = 120;
		players[1].y = 400;
		players[1].facingRight = true;
		var bagg = new PunchingBag(1860, 298);
		anymAvailable = Infinity;
		poast = new GoalpostMulti("YellowParallel", 1110, 280, 150);
		gameObjects = [
			bagg,
			new Switch(0, 280, 340, true, "#B080B0"),
			new Door(0, 330, 160, 20, 80),
			new Switch(1, 280, 140, true, "#80B0B0"),
			new Door(1, 330, 360, 20, 80),
			new Switch(2, 930, 260, true, "#808080"),
			new Door(2, 770, 80, 20, 60),
			new Door(2, 650, 180, 60, 20),
			new Switch(3, 930, 140, true, "#80B080"),
			new Door(3, 990, 280, 20, 260),
			//new Spawner(function(){return new Walkie(true, 2130, 420, false)}, 60, 3),
			
			{update:function(){if(!this.dmg)used=0;if(globalController.specialClicked){used=0;bagg.damage=0};if(players[0].x>1600)this.dmg=true},draw:doNothing},
			{update:function(){if(poast.isTouching(players[0])||poast.isTouching(players[1])){used=0;bagg.damage=0}},draw:doNothing},
			poast
		];
		dynamicBackdrop = {
			draw : function() {
				this.flowY += this.flowSpeed;
				if (this.flowY > canvas.height+this.flowHeight) {
					this.flowY = 0;
					this.flowFirst = false;
				}
				var grad = ctx.createLinearGradient(0,this.flowY,0,this.flowY-this.flowHeight)
				grad.addColorStop(0, "#000000");
				grad.addColorStop(.5, "#004040");
				grad.addColorStop(1, "#000000");
				ctx.fillStyle = grad;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			},
			flowY:0,
			flowHeight:1000,
			flowSpeed:20
		}
	},
	players : 2,
	vessels : [],
	selectX : 1000,
	selectY : 0,
	nextDown : "YellowParallel",
	parDown : 0,
	toLoad : [Walkie, Switch]
}