Stages.ChanosLobby = {
	displayName : "Chanos' Lobby",
	load : function(doStuff) {
		playMusic("Up In My Jam (All Of A Sudden) - Kubbi");
		let C = {name:"Concrete",solid:true,color:"#7F7F7F",leafy:false};
		//let S = {name:"Concrete Secret",solid:false,color:"#878787",leafy:false};
		let G = {name:"Green",solid:true,color:"#009900"};
		let Y = {name:"Yellow",solid:true,color:"#FFD700"};
		let L = {name:"Block",solid:false,blockSlide:true,color:"#BFBFBF",edge:"#404040"};
		let _ = {name:"Background",solid:false,color:"#BFBFBF"};
		staticColl =
		[[Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y],
		 [Y,_,_,Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,L,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,Y,_,_,_,_,_,_,_,_,Y],
		 [Y,_,L,_,_,Y,_,_,_,_,_,_,_,_,_,_,_,_,_,Y],
		 [Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,_,Y,Y],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,_,Y,_],
		 [_,_,_,L,_,_,_,_,_,_,_,_,_,_,_,_,L,_,Y,_],
		 [_,_,_,_,_,_,_,_,_,L,_,_,_,_,_,_,_,_,Y,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,L,_,_,_],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,_,G,G],
		 [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];
		edgesSolid = true;
		if (doStuff) {
			zoom = 3;
			zoomd = 3;
		}
		player.x = 10;
		player.y = 260;
		player.facingRight = true;
		gameObjects = [
			new ChanmotePickup(200, 260, doStuff),
			new SlideBlock(7, 1, 1, 1),
			new Vessel("ChanosLobbyUpperLeft", 30, 38),
			new Vessel("ChanosLobbyUpperRight", 370, 38),
			new Goalpost("Versus52", 390, 260, 95),
		];
	},
	vessels : ["ChanosLobbyUpperLeft", "ChanosLobbyUpperRight"],
	previous : "SpadeDowntown",
	nextDown : "Versus52",
	toLoad : [ChanmotePickup]
}