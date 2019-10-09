Stages.ChanosLobby = {
	displayName : "Chanos' Lobby",
	load : function(doStuff) {
		playMusic("Up In My Jam (All Of A Sudden) - Kubbi");
		let C = {name:"Concrete",solid:true,color:"#7F7F7F",leafy:false};
		//let S = {name:"Concrete Secret",solid:false,color:"#878787",leafy:false};
		let R = {name:"Red",solid:true,color:"#990000",leafy:false};
		let G = {name:"Green",solid:true,color:"#009900",leafy:false};
		let B = {name:"Black",solid:true,color:"#000000",leafy:false};
		let Y = {name:"Yellow",solid:true,color:"#FFD700",leafy:false};
		let _ = {name:"Background",solid:false,color:"#BFBFBF"};
		staticColl =
		[[Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
		}
		player.x = 10;
		player.y = 260;
		player.facingRight = true;
		gameObjects = [
			//new PokerTest(300, 260, 10, function(){new Vessel("ChanosLobbyPoker1").collect();new Vessel("ChanosLobbyPoker2").collect();new Vessel("ChanosLobbyPoker3").collect();}),
			new Goalpost("Versus52", 590, 260, 55),
		];
	},
	vessels : ["ChanosLobbyPoker1", "ChanosLobbyPoker2", "ChanosLobbyPoker3"],
	par : 840,
	previous : "SpadeDowntown",
	nextDown : "Versus52",
	toLoad : [/*PokerTest*/]
}