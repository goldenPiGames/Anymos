Stages.TutorialPrelude = {	name : "TutorialPrelude",
	displayName : "Tutorial",
	load : function(doStuff) {
		playMusic("Decisions - Eric Matyas");
		let W = {solid:true,color:"#00000080",edge:"#FFFFFF"};
		let H = {solid:true,hazard:4,color:"#FF000080",edge:"#FF0000"};
		let L = {solid:false,hazard:2,color:"#FF000080",fore:true};
		let _ = {solid:false,color:"#40404000"};
		edgesSolid = true;
		staticColl =
		[[W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,L,L,L,_,L,L,L,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,H,H,H,W,W,W,W,W,H,H,H,W,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,W,_,W,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,W,W],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,W,_,W,_,W,_,W,W,_,W,W,W,W,_,_,_,W,W,W,W,W,_,_,_,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,W,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,W,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W]];
		oobtopcolor = "#00000080";
		oobbottomcolor = "#00000080";
		if (doStuff) {
			/*dialog.begin(new DialogLine("Anymos", "For starters. I can advance through text by pressing [A], (A), [space], or (Left bumper). I always give instructions for keyboards in [square brackets] and for gamepads in (parentheses).", "#00FFFF"),
				new DialogLine("Anymos", "Once this dialog closes and the stage starts, nothing actually goes until I press a key. So after this monologue closes, just tap something, like Down, to start falling. This happens at the beginning of every stage.", "#00FFFF"),
				new DialogLine("Anymos", "Then, once I'm down there, I can interact with the ! balloon by pressing [space] or (Left bumper).", "#00FFFF"));*/
			zoom = 5;
			zoomd = 5;
		}
		player.x = 120;
		player.y = 240;
		player.facingRight = true;
		var bagg = new PunchingBag(1860, 298);
		anymAvailable = Infinity;
		poast = new Goalpost("YellowWood", 2170, 240, 90);
		gameObjects = [
			bagg,
			new ControlsReminder("zoomIn", 50, 210),
			new ControlsReminder("zoomOut", 50, 250),
			new ControlsReminder("left", 80, 390),
			new ControlsReminder("right", 160, 390),
			new ControlsReminder("jump", 410, 335),
			new ControlsReminder("crouch", 710, 335),
			new ControlsReminder("crouch", 840, 260),
			new ControlsReminder("jump", 840, 280),
			new ControlsReminder("right", 1010, 310),
			new ControlsReminder("attack", 1310, 370),
			new ControlsReminder("shoot", 1120, 140),
			new HoverInfoSpot(120, 240, "Maybe I should start by zooming out using <control:zoomOut> to get a better look. The stage doesn't actually start until any control other than zoomIn or zoomOut is input."),
			new HoverInfoSpot(120, 397, "I can walk left with <control:left> and right with <control:right>. My maximum speed is 5 px/f (pixels per frame)."),
			new HoverInfoSpot(336, 397, "I can jump with <control:jump>, propelling myself upwards at 9 px/f. In standard gravity of 0.5 px/f², I can jump up to 86 px high, enough to clear 4 blocks."),
			new HoverInfoSpot(410, 317, "I accelerate better on the ground than in the air. If I get even a small running start, I can clear gaps of up to 194 px, or over 9 blocks, such as this one."),
			new HoverInfoSpot(660, 317, "This gap is too low for me to walk through, but I can crouch by holding <control:crouch>. I can also crawl sideways while doing so, though this is much slower than walking at only 2 px/f."),
			new HoverInfoSpot(760, 317, "If I jump while crouching, I jump lower. If I jump low while also crawling, I instantly accelerate to 6 px/f (although much of this additional speed is lost in the air). I can use this to clear jumps with low ceilings, such as here."),
			new HoverInfoSpot(950, 317, "I can simply run over one-block gaps like this."),
			new HoverInfoSpot(1120, 317, "I can intentionally fall down one-block gaps like this by crouching in order to move slower. Or I can just stop at the right time, if my timing's good enough. Or just inch myself forward awkwardly. Whatever works."),
			new HoverInfoSpot(1230, 397, "In certain places, a barrier will appear around me and enemies will spawn. This is called a Rumble. The barrier will dissappear when all enemies are defeated. I can make a melee attack by pressing <control:attack>."),
			new HoverInfoSpot(1530, 317, "I can turn all doors of the same color on or off by pressing the appropriate switch."),
			new HoverInfoSpot(1350, 157, "I can shoot a continuous energy beam by holding <control:shoot>. (I should also zoom out with <control:zoomOut> if I haven't already.)"),
			new HoverInfoSpot(1220, 117, "I can shoot while crouching."),
			new HoverInfoSpot(1620, 297, "Now, it's about time to talk about... time. Well, actually, Anym. Anym is my battery, my sword, and my shield. My goal is to complete each stage with the smallest amount of Anym used as possible. (Except in this tutorial - this is just for demonstration. I can take as long as I like.) The amount used is shown in the HUD in the upper-left corner. This goes upwards from 0 for reasons that'll make sense later."),
			new HoverInfoSpot(1660, 297, "The main thing that uses up Anym is time. 1 point is drained away every frame, and there are 30 frames per second. Because of this, I can also measure my Anym in terms of seconds: 30 points = 1 second. (How Anym is displayed can be changed in Settings.)",),
			new HoverInfoSpot(1650, 137, "There are sometimes parts of the static terrain called Hazards that damage me over time.",),
			new HoverInfoSpot(1710, 97, "Right here is a solid with a hazard value of 4. Every frame I'm touching it, I take 4 damage. This is in addition to the 1 damage I take every frame, so I take a total of 5 damage per frame while standing here.",),
			new HoverInfoSpot(1790, 97, "Right here is a non-solid with a hazard value of 2. Every frame I'm at least partially within it, I take 2 damage. This is in addition to the 1 damage I take every frame, so I take a total of 3 damage per frame while standing here.",),
			new HoverInfoSpot(1870, 97, "If I stand here I'm touching two hazards at once. However, only the highest hazard value (4) applies, so I'm taking a total of 5 damage per frame while standing here."),
			new HoverInfoSpot(1725, 297, "My ranged attack shoots one beam segment every frame. Each beam segment deals 10 damage on a hit and costs me 2 points."),
			new HoverInfoSpot(1830, 297, "My melee attack deals 60 damage on a hit. However, it costs 5 points (1/6 second) to use and takes a few frames to execute."),
			new HoverInfoSpot(1890, 297, "This is a punching bag I thought up just for this tutorial. I can reset its damage counter (and mine) using <control:special>."),
			new HoverInfoSpot(2120, 377, "These little things are Walkies. They may look cute, but they're dangerous... for small values of dangerous. They're one if the many minions created by my enemy. Just touching one is enough to hurt. Touching a Walkie would make me lose 90 points (3 seconds). However, these Walkies each have only 50 hp - enough to kill in one hit with my melee, or 1/6 of a second with my beam."),
			new HoverInfoSpot(2140, 237, "The end of a stage is marked by a checkered goalpost. The stage ends immediately when I touch it."),
			new Rumble(1200, 1420, 260, 400, true, doNothing, new TrainingTarget(1310, 320), new TrainingTarget(1390, 400)),
			new Rumble(1040, 1560, 20, 240, true, doNothing, new TrainingTarget(1050, 120), new TrainingTarget(1050, 180)),
			new Door(0, 1580, 300, 40, 60),
			new Switch(0, 1470, 220, true, "#808080"),
			new Spawner(()=>new Walkie(true, 2130, 420, false), 60, 3),
			new CustomObject(
				function() {
					if (!this.dmg)
						used=0;
					if (globalController.specialClicked) {
						used=0;
						bagg.damage=0
					}
					if (player.x>1600)
						this.dmg=true
				}),
			new CustomObject(
				function() {
					if (player.isTouching(poast)) {
						used=0;
					}
				}),
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
	vessels : [],
	selectX : 0,
	selectY : 0,
	nextDown : "YellowWood",
	parDown : 0,
	toLoad : [Walkie, Switch]
}

class TrainingTarget extends Enemy {
	constructor(x, y) {
		super();
		this.hp = this.maxhp;
		this.x = x;
		this.y = y;
	}
	update() {
		
	}
	draw() {
		ctx.lineWidth = zoom;
		ctx.strokeStyle = "#FFFFFF";
		ctx.beginPath();
		ctx.arc(stagex(this.x), stagey(this.y-this.height/2), this.width/2*zoom,0,2*Math.PI);
		ctx.stroke();
		ctx.strokeStyle = "#FF0000";
		ctx.beginPath();
		ctx.arc(stagex(this.x), stagey(this.y-this.height/2), this.width/4*zoom,0,2*Math.PI);
		ctx.stroke();
	}
}
TrainingTarget.prototype.speciesName = "Target";
TrainingTarget.prototype.width = 20;
TrainingTarget.prototype.height = 20;
TrainingTarget.prototype.maxhp = 55;
TrainingTarget.prototype.team = "KillMe";

class PunchingBag extends Enemy {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.damage = 0;
	}
	update() {
		
	}
	draw() {
		ctx.lineWidth = zoom;
		ctx.strokeStyle = "#FFFFFF";
		ctx.strokeRect(stagex(this.x-this.width/2), stagey(this.y-this.height), this.width*zoom, this.height*zoom);
		ctx.strokeStyle = "#FF0000";
		ctx.strokeRect(stagex(this.x-this.width/4), stagey(this.y-this.height*3/4), this.width/2*zoom, this.height/2*zoom);
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "center";
		ctx.font = (12*zoom)+"px monospace";
		ctx.fillText(this.damage, stagex(this.x), stagey(this.y+14));
	}
	takeDamage(amount) {
		this.damage+=amount;
	}
}
PunchingBag.prototype.speciesName = "Target";
PunchingBag.prototype.width = 18;
PunchingBag.prototype.height = 36;
PunchingBag.prototype.maxhp = 9001;
PunchingBag.prototype.team = "KillMe";


class Spawner extends GameObject {
	constructor(spawnFunc, delay, max) {
		super();
		this.spawnFunc = spawnFunc;
		this.delay = delay;
		this.max = max;
		this.spawned = [];
		this.cd = 0;
	}
	update() {
		removeDead(this.spawned);
		if (this.spawned.length < this.max) {
			this.cd--;
			if (this.cd <= 0) {
				var noop = this.spawnFunc();
				gameObjects.push(noop);
				this.spawned.push(noop);
				this.cd = this.delay;
			}
		}
	}
	draw() {
		
	}
}