Stages.TutorialMovement = {
	displayName : "Tutorial: Movement",
	load : function(doStuff) {
		playMusic("Chamber of Jewels - Eric Matyas");
		let W = {solid:true,color:"#7F7F7F"};
		let B = {solid:true,color:"#000000"};
		let _ = {solid:false,color:"#BFBFBF"};
		staticColl =
		[[W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,B,W,W,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,B,W,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,B,W,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,W,W,W,W,W,W,_,_,_,_,_,_,W,W,W,W,W,W,W,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,W,W,W,W,W],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,B,B,B,B],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,B,B,B,B],
		 [W,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,W,B,B,B,B],
		 [W,_,_,_,_,_,_,_,_,_,W,W,W,W,_,_,_,_,_,_,W,B,B,B,B],
		 [W,_,_,_,_,_,_,_,_,_,W,B,B,W,_,_,_,_,_,_,W,B,B,B,B],
		 [W,_,_,_,_,_,_,_,_,_,W,B,B,W,_,_,_,_,_,_,W,B,B,B,B],
		 [W,_,_,_,_,_,_,_,_,_,W,B,B,W,_,_,_,_,_,_,W,B,B,B,B],
		 [W,W,W,W,W,W,W,W,W,W,W,B,B,W,W,W,W,W,W,W,W,B,B,B,B]];
		gravity = .5;
		zoom = 5;
		player.x = 50;
		player.y = 340;
		player.facingRight = true;
		gameObjects = [new Goalpost("TutorialCombat", 50, 100, 75), 
			new Vessel("TutorialMovementJump", 100, 200), 
			new MonologueSpot("TutorialMovementZoomJumpMono", 170, 337,
				"I should get a better view of this place. I can adjust the zoom by pressing the [+] and [-] keys, or by pushing the right control stick up and down, even when I'm in a monologue like this.",
				"What is this place? It's all just two tones of grey as far as I can see. Then again, so am I.",
				"I need to get a move on. Where? Over this hurdle, for a start. I can jump by pressing A."),
			new MonologueSpot("TutorialMovementHurdleTopMono", 240, 257,
				"There's a ledge up to the right. I should be able to jump to it easily if I get a bit of a running start.",
				"But also, up to the left, there's a floating blue orb. As I look at it, I can feel life energy radiating off of it. In fact, its energy is exactly like my own. Wait, how can I sense that?",
				"It looks like it's strong enough to let me survive for one more second. But it would probably take me more that a second to jump off, grab it, and jump back up onto this hurdle.",
				"Hm, what to do...",
				"Well, whatever I do, I'd better choose quickly."),
			/*new MonologueSpot("TutorialMovementRestartMono", 340, 357,
				"This pit is just barely too deep... I don't think I can get back up.",
				"So that's how it is. I literally just woke up and I'm already stuck.",
				"But there's no need to worry. I can reset time by pressing [R] or (Select).",
				"Also, I should mention that I can fast-forward through dialog by holding [S] or (B)."),*/
			new MonologueSpot("TutorialMovementCrouchMono", 380, 97,
				"This opening is far too narrow for me to walk through normally.",
				"By pressing Down, I can compress my volume into a shorter shape to fit through gaps like this. But my body prefers staying in its current shape, so I can't move very fast or jump as high while crouching."),
			new MonologueSpot("TutorialMovementLowJumpMono", 280, 97,
				"The ceiling here is too low - if I tried to jump across this gap, I would hit my head and fall down.",
				"I can pull off a low jump by jumping while crouching. This is helpful when a low ceiling would block the trajectory, such as right here. It also lets me instantly accelerate to my normal speed without a running start, as long as I have left or right pressed when I jump."),
			new MonologueSpot("TutorialMovementGoalpostMono", 80, 97,
				"What is that? A pole with a checkered flag on top? It looks oddly unreal. Is it just in my imagination?",
				"Well, there's nowhere else to go from here. Might as well walk into it and see what happens.")]
		if (doStuff)
			dialog.begin(new DialogLine("Anymos", "I can advance through text by pressing [A], (A), [left Shift], or (L). I always give instructions for keyboards in [brackets] and for gamepads in (parentheses).", "#00FFFF"),
				new DialogLine("Anymos", "Where... where am I? Why am I here? Who am I? ...What am I?", "#00FFFF"),
				new DialogLine("Anymos", "The only thing I can remember is my name, Anymos.", "#00FFFF"),
				new DialogLine("Anymos", "Let's see... My whole body is made out of semi-amorphous, dark grey flesh. I have a head with two glowing cyan eyes, and I'm wearing a grey cloak.", "#00FFFF"),
				new DialogLine("Anymos", "But enough about that. I have a rather pressing concern at the moment.", "#00FFFF"),
				new DialogLine("Anymos", "I feel... weak. Injured. But not my body. My life force. It's slipping away at an alarming rate, somehow... I don't think I could last any more than about two and a half minutes like this.", "#00FFFF"),
				new DialogLine("Anymos", "I ought to get moving. I can move using the [arrow keys] or the (D-pad). I should gather my thoughts again at that ? balloon by pressing [Space] or (L).", "#00FFFF"));
	},
	vessels : ["TutorialMovementJump"],
	selectX : 0,
	selectY : 0,
	nextDown : "TutorialCombat",
	enemies : []
}