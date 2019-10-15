Stages.Versus52 = {
	displayName : "Versus 52",
	load : function() {
		playMusic("Up In My Jam (All Of A Sudden) - Kubbi");
		let C = {name:"Concrete",solid:true,color:"#7F7F7F",leafy:false};
		//let S = {name:"Concrete Secret",solid:false,color:"#878787",leafy:false};
		let R = {name:"Red",solid:true,color:"#990000",leafy:false};
		let G = {name:"Green",solid:true,color:"#009900",leafy:false};
		let B = {name:"Black",solid:true,color:"#000000",leafy:false};
		let _ = {name:"Background",solid:false,color:"#BFBFBF"};
		staticColl =
		[[G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
		 [G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		zoom = 2;
		zoomd = 2;
		player.x = 10;
		player.y = 220;
		player.facingRight = true;
		var deck = [];
		for (var i = 2; i <= 19; i++) {
			deck.push(new CardPip(30, 30, i, false), new CardPip(30, 30, i, false), new CardPip(30, 30, i, true), new CardPip(30, 30, i, true));
		}
		var shuffled = [];
		
		while (deck.length > 0) {
			var index = Math.random() * deck.length;
			shuffled.push(deck[index]);
			deck.splice(index, 1);
		}
		gameObjects = [
			new QueueRumble(300, 220, 560, 200, true, doNothing, 5, shuffled)
		];
	}, //fucking awesome idea for a special ability: you have a portable video game device with one of those ice slide puzzles. the avatar in the slide puzzle acts as a platform for Anymos, while Anymos acts as a block for the slide puzzle avatar. You press Special to switch between the two.
	vessels : [],
	previous : "ChanosLobby",
	//nextDown : "Versus52",
	toLoad : [CardPip]
}