Stages.SpadeCity = {
	displayName : "Spade City",
	load : function(doStuff) {
		playMusic("Beatdown City - Darren Curtis");
		let C = {name:"Concrete",solid:true,color:"#7F7F7F",leafy:false};
		let S = {name:"Concrete Secret",solid:false,color:"#878787",leafy:false};//TODO make Skydz opening more obvious
		let B = {name:"Beam",solid:true,color:"#BF7F7F",leafy:false};
		let _ = AIR;
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,S,C,C,C,C,_,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,C,S,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,_,C,S,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,B,B,_,_,_,_,_,C,S,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,B,_,_,_,_,S,S,S,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,B,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,B,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,B,B,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,B,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,B,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,B,B,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,B,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,B,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,B,B,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [C,C,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,B,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,B,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,B,B,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,C,_,_,_,C,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,_,_,_,C,C,C,_,_,_,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,C,_,C,C,C,C,C,_,C,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,C,_,C,_,_,_,_,_,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,_,_,_,_,C,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,_,_,_,_,_,_,_,C,C,_,S,_,_,_,_,_,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,_,_,_,_,C,_,_,C,C,C,C,C,C,C,C,C,_,_,_,_,_,_,_,C,C,C,C,C,_,_,_,_,_,_,_,_,_],
		 [C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C]]; //Kontor
		if (doStuff) {
			zoomd = 1;
			zoom = 1;
			dialog.begin(new DialogLine("Anymos", "...", "#00FFFF"),
				new DialogLine("Anymos", "Wow.", "#00FFFF"))
		}
		player.x = 2140;
		player.y = 960;
		player.facingRight = false;
		gameObjects = [
			new MovingPlatformSpawner(2010,970, 20, 7, 2010,990, 2010,600, 1990,600),
			new MovingPlatformSpawner(1890,970, 20, 7, 1890,990, 1890,600, 1910,600),
			new MovingPlatformSpawner(1290,970, 20, 7, 1290,990, 1290,580, 1310,580),
			new Vessel("SpadeCityEtra", 1880, 948),
			new Vessel("SpadeCityVivent", 1690, 730),
			new Vessel("SpadeCityAlley2", 1570, 958),
			new Vessel("SpadeCityConstructionTop", 840, 538),
			new Vessel("SpadeCityConstructionBottom", 870, 938),
			new Vessel("SpadeCitySkydz", 526, 600),
			new Goalpost("SPDAirport", 10, 960, 90),
			new NPC("SpadeCityViventCitizen", Teion.prototype.sprites.normal, 1658, 780, false,
				new DialogLine("Citizen", "What are you doing in my apartment?", "#BFBFBF"),
				new DialogLine("Anymos", "Searching for oddly-placed floating blue orbs so that I can extend my tragically short lifespan.", "#00FFFF"),
				new DialogLine("Citizen", "Understandable, have a nice day.", "#BFBFBF"),
			),
			new NPC("SpadeCityMuus", Teion.prototype.sprites.normal, 1342, 580, false,
				new DialogLine("Muus", "Ah! Are you here to join our cause?", "#BFBFBF"),
			),
			new NPC("SpadeCityDeija", Teion.prototype.sprites.normal, 1410, 580, false,
				new DialogLine("Deija", "So you are the foreigner who recently came from Aqris, are you not?", "#BFBFBF"),
				new DialogLine("Anymos", "Yes, but why does that matter?", "#00FFFF"),
				new DialogLine("Deija", "Because you are something special, my friend. A greeter reported seeing a Teion with cyan eyes jump across Clear Canyon using the power of the very wind itself!", "#BFBFBF"),
				new DialogLine("Deija", "And if you have that sort of power, then you just might be able to help us out of our predicament.", "#BFBFBF"),
				new DialogLine("Deija", "Tell me, do you know about President Chanos?", "#BFBFBF"),
				new DialogLine("Anymos", "I think so. There was a hedge shaped like him in Club Gardens, and some people were fawning over him, right?", "#00FFFF"),
				new DialogLine("Deija", "That's right. Chanos rose to power a long time ago, but he recently changed things significantly. Most importantly, he outlawed any disapproval of his regime, and is using psychological tricks to make the citizens adore him.", "#BFBFBF"),
				new DialogLine("Deija", "A few of us tried to form a resistance group, but there's really nothing we can do besides gather intelligence.", "#BFBFBF"),
				new DialogLine("Deija", "We know that Chanos is directly exerting his powers in order to keep the entire plateau running smoothly and under his control in various ways, and is also doing a couple of other things that we're not even sure of.", "#BFBFBF"),
				new DialogLine("Deija", "The only way to end his regime and bring freedom would be to defeat Chanos himself, but that's far beyond the reach of ordinary Teion such as us.", "#BFBFBF"),
				new DialogLine("Anymos", "I'd prefer not to kill anyone until I've heard their side of the story, and I just got here...", "#00FFFF"),
				new DialogLine("Deija", "Oh, you wouldn't have to kill him. Just... knock him off his high horse, y'know?", "#BFBFBF"),
				new DialogLine("Deija", "I've heard that the reason why Chanos didn't put a ton of control over us before recently was because there were a few Uteion that would come and stop him when he tried...", "#BFBFBF"),
				function(){gameObjects.push(new Goalpost("SpadeDowntown", 1200, 960, 60))},
				new DialogLine("Deija", "But anyways. Chanos resides in a tower downtown. If you exit this building and follow the street south, you can't miss it. It's huge and golden.", "#BFBFBF"),
			),
			new ObscurerRect(2010, 980, 40, 379, "#7F7F7F"),
			new ObscurerRect(1890, 980, 40, 379, "#7F7F7F"),
			new ObscurerRect(1670, 780, 160, 80, "#7F7F7F"),
			new ObscurerRect(1350, 970, 160, 450, "#7F7F7F"),
			new ObscurerRect(490, 970, 160, 470, "#7F7F7F"),
		];
	},
	vessels : ["SpadeCityEtra", "SpadeCityVivent", "SpadeCityAlley2", "SpadeCityConstructionTop", "SpadeCityConstructionBottom", "SpadeCitySkydz"],
	previous : "HeartFarms",
	nextDown : "SPDAirport",
	parDown : 510,
	nextRight : "SpadeDowntown",
	parRight : 465,
	toLoad : [MovingPlatform, Teion]
}