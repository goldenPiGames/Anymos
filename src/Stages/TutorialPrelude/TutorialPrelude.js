Stages.TutorialPrelude = {
	name : "TutorialPrelude",
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
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,L,L,L,_,L,L,L,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,H,H,H,W,W,W,W,W,H,H,H,W,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,_,_,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,W,W,W,W,W,_,_,_,_,W,W,_,_,_,_,_,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [W,W,W,W,W,_,_,W,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,W,_,W,_,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,_,_,W,W,W,W,W,_,_,_,_,_,_,_,_,W,W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
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
		zoom = 5;
		player.x = 120;
		player.y = 240;
		player.facingRight = true;
		var bagg = new PunchingBag(1860, 298);
		anymAvailable = Infinity;
		poast = new Goalpost("YellowWood", 2170, 240, 90);
		gameObjects = [
			bagg,
			new MonologueSpot("TutorialMoveMono", 120, 397,
				"I can zoom the camera in and out by pressing [+] and [-], or pushing the (right control stick up and down). I can do this even when I'm in a dialogue or at the start of a stage.",
				"I can walk left and right by pressing left and right on the [arrow keys], (directional pad), or (left stick)."),
			new MonologueSpot("TutorialJumpMono", 320, 397,
				"I can jump by pressing A. Simple enough, right?",
				"I can jump to a height of just over 4 blocks."),
			new MonologueSpot("TutorialJumpAcrossMono", 410, 317,
				"My left-right maneuverability is much better on the ground than in the air, so I'll just a little bit of a running start if I want to jump the maximum horizontal distance.",
				"If I do so, I can clear a nine-block-wide gap like this one.",
				"By the way, up there is just an optional playground, in case I want to get familiar with my physics and whatnot."),
			new MonologueSpot("TutorialCrouchMono", 660, 317,
				"This opening is far too narrow for me to walk through normally.",
				"By pressing Down, I can crouch. But I can't move very fast while doing so."),
			new MonologueSpot("TutorialLowJumpMono", 760, 317,
				"The ceiling here is too low - if I tried to jump across this gap, I would hit my head and fall down.",
				"I can pull off a low jump by jumping while crouching. It also lets me instantly accelerate to my normal speed without a running start, as long as I have left or right held when I jump."),
			new MonologueSpot("TutorialGapMono", 920, 317,
				"I can easily run across one-block gaps like these.",),
			new MonologueSpot("TutorialDropMono", 1140, 317,
				"If I want to fall down a one-block gap intentionally, the easiest way is to crouch to move slower."),
			new MonologueSpot("TutorialMeleeMono", 1230, 397,
				"When a yellow forcefield and some enemies appear, that's called a Rumble.",
				"The forcefield disappears when all of the enemies are defeated.",
				"I can make a melee attack by pressing [S] or (B)."),
			new MonologueSpot("TutorialDoorMono", 1530, 317,
				"Sometimes, I'll come across Doors and Switches.",
				"In order to make a Door appear or disappear, I'll have to find the appropriate color-coded Switch and press [space] or (left bumper) to activate it."),
			new MonologueSpot("TutorialBeamMono", 1360, 160,
				"I need to destroy those targets to move on, but they're out of my reach. Fortunately, I have more than one weapon in my arsenal.",
				"I can fire an energy beam be holding [D] or (X)."),
			new MonologueSpot("TutorialCrouchShootMono", 1220, 117,
				"I can fire the beam while crouching. It's useful for hitting low targets.",),
			new MonologueSpot("TutorialStandShootMono", 1220, 197,
				"If I fire the beam while standing, it comes out at eye level.",),
			new MonologueSpot("TutorialAnymMono", 1620, 297,
				"That should be it for movement and combat. Now, it's about time to talk about... time.",
				"Well, actually, Anym. Anym is my battery, my sword, and my shield.",
				"My goal is to complete each stage with the smallest amount of Anym used as possible.",
				"Now, first off, the main thing that uses up Anym is time. 1 point is drained away every frame, and there are 30 frames per second.",
				"Because of this, I can also measure my Anym in terms of seconds: 30 points = 1 second.",
				"The stuff in this room can demonstrate other things that use up Anym.",
				"Oh, and in this tutorial only, I can press [Shift] or (Right bumper) to reset my Anym used back to zero.",),
			new MonologueSpot("TutorialHazardMono", 1650, 137,
				"There are sometimes parts of the static terrain called Hazards that damage me over time.",),
			new MonologueSpot("TutorialSolidHazardMono", 1710, 97,
				"Right here is a solid with a hazard value of 4.",
				"Every frame I'm touching it, I take 4 damage. This is in addition to the 1 damage I take every frame, so I take a total of 5 damage per frame while standing here.",),
			new MonologueSpot("TutorialClearHazardMono", 1790, 97,
				"Right here is a non-solid with a hazard value of 2.",
				"Every frame I'm at least partially within it, I take 2 damage. This is in addition to the 1 damage I take every frame, so I take a total of 3 damage per frame while standing here.",),
			new MonologueSpot("TutorialMultipleHazardsMono", 1870, 97,
				"If I stand here I'm touching two hazards at once.",
				"However, only the highest hazard value (4) applies, so I'm taking a total of 5 damage per frame while standing here."),
			new MonologueSpot("TutorialShootMono2", 1725, 297,
				"My ranged attack shoots one beam segment every frame. Each beam segment deals 10 damage on a hit and costs me 2 points."),
			new MonologueSpot("TutorialMeleeMono2", 1830, 297,
				"My melee attack deals 60 damage on a hit. However, it costs 5 points (1/6 second) to use and takes a few frames to execute."),
			new MonologueSpot("TutorialPunchingBagMono", 1890, 297,
				"This is a punching bag I thought up just for this tutorial.",
				"I can reset its damage counter using [Shift] or (Right bumper)."),
			new MonologueSpot("TutorialWalkieMono", 2120, 377,
				"These little blobs down here are Walkies. They may look cute, but they're dangerous... for small values of dangerous.",
				"They're just one of the numerous types of enemies created by Sqarnos.",
				"Just touching one is enough to hurt. I use my Anym to protect myself from any physical injury, but it costs me. Touching a Walkie would make me lose 90 points (3 seconds)",
				"However, these Walkies each have only 50 hp - enough to kill in one hit with my melee, or 1/6 of a second with my beam."),
			new MonologueSpot("TutorialExitMono", 2140, 237,
				"The end of a stage is marked by a checkered goalpost. But this tutorial has no exit.",
				"Pause using [P] or (Start), and then exit the stage using [D] or (X).",),
			new Rumble(1200, 1420, 260, 400, true, doNothing, new TrainingTarget(1310, 320), new TrainingTarget(1390, 400)),
			new Rumble(1040, 1560, 20, 240, true, doNothing, new TrainingTarget(1050, 120), new TrainingTarget(1050, 180)),
			new Door(0, 1580, 300, 40, 60),
			new Switch(0, 1470, 220, true, "#808080"),
			new Spawner(function(){return new Walkie(true, 2130, 420, false)}, 60, 3),
			{update:function(){if(!this.dmg)used=0;if(controller.specialClicked){used=0;bagg.damage=0};if(player.x>1600)this.dmg=true},draw:doNothing},
			{update:function(){if(player.isTouching(poast)){used=0;bagg.damage=0}},draw:doNothing},
			poast
		];
		if (doStuff)
			dialog.begin(new DialogLine("Anymos", "For starters. I can advance through text by pressing [A], (A), [space], or (Left bumper). I always give instructions for keyboards in [square brackets] and for gamepads in (parentheses).", "#00FFFF"),
			new DialogLine("Anymos", "Once this dialog closes and the stage starts, nothing actually goes until I press a key. So after this monologue closes, just tap something, like Down, to start falling. This happens at the beginning of every stage.", "#00FFFF"),
			new DialogLine("Anymos", "Then, once I'm down there, I can interact with the ! balloon by pressing [space] or (Left bumper).", "#00FFFF"));
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
	enemies : [Walkie, Switch]
}

function TrainingTarget(x, y) {
	this.hp = this.maxhp;
	this.x = x;
	this.y = y;
}
TrainingTarget.prototype = Object.create(GameObjectBase);
TrainingTarget.prototype.speciesName = "Target";
TrainingTarget.prototype.width = 20;
TrainingTarget.prototype.height = 20;
TrainingTarget.prototype.hittable = true;
TrainingTarget.prototype.damageable = true;
TrainingTarget.prototype.maxhp = 55;
TrainingTarget.prototype.team = "KillMe";
TrainingTarget.prototype.update = function() {
	
}
TrainingTarget.prototype.draw = function() {
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

function PunchingBag(x, y) {
	this.x = x;
	this.y = y;
	this.damage = 0;
}
PunchingBag.prototype = Object.create(GameObjectBase);
PunchingBag.prototype.speciesName = "Target";
PunchingBag.prototype.width = 18;
PunchingBag.prototype.height = 36;
PunchingBag.prototype.hittable = true;
PunchingBag.prototype.damageable = true;
PunchingBag.prototype.team = "KillMe";
PunchingBag.prototype.update = function() {
	
}
PunchingBag.prototype.draw = function() {
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
PunchingBag.prototype.takeDamage = function(amount) {
	this.damage+=amount;
}

function Spawner(spawnFunc, delay, max) {
	this.spawnFunc = spawnFunc;
	this.delay = delay;
	this.max = max;
	this.spawned = [];
	this.cd = 0;
}
Spawner.prototype = Object.create(GameObjectBase);
Spawner.prototype.update = function() {
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
Spawner.prototype.draw = doNothing;