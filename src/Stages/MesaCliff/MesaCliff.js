Stages.MesaCliff = {
	name : "MesaCliff",
	displayName : "Mesa Cliff",
	description : "Memory",
	load : function(doStuff) {
		playMusic("Tempest - Darren Curtis");
		let R = {solid:true,color:"#7F7F7F"};
		let r = {solid:false,color:"#7F7F7F90"};
		let s = {solid:false,color:"#7F7F7F"};
		let _ = {solid:false,color:"#87CEEB00",rain:true};
		edgesSolid = true;
		//oobtopcolor = "#87CEEB";
		oobbottomcolor = "#7F7F7F";
		staticColl =
		[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R],
		 [R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R]];
		if (doStuff){zoom=2; zoomd=2}
		player.x = 500;
		player.y = 240;
		player.facingRight = false;
		player.drained = false;
		gameObjects = [
			new Goalpost("MesaCliff", 10, 240, 160),
			{update:function(){player.takeDamage(player.exposureToSky()*5)},draw:doNothing},
		];
		if (doStuff)
			dialog.begin(new DialogLine("Anymos", "This rain has an evil electrical charge. But oddly enough, having shelter over my head feels... nice and relaxing.", "#00FFFF"));
		dynamicBackdrop = new StormBackdrop();
	},
	enemies : [MovingPlatform]
}
function StormBackdrop() {
	this.foreCloudsX = 0;
	this.midCloudsX = 0;
	this.timeSinceBolt = 50;
}
StormBackdrop.prototype.draw = function() {
	ctx.fillStyle = "#203246";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#3E5157";
	this.midCloudsX+=1.5;
	if (this.midCloudsX > 10)
		this.midCloudsX -= 40;
	for (var i = this.midCloudsX; i < canvas.width+40; i += 40) {
		ctx.beginPath();
		ctx.arc(i, 38, 27, 0, Math.PI*2);
		ctx.fill();
	}
	ctx.fillStyle = "#586973";
	this.foreCloudsX+=2.5;
	if (this.foreCloudsX > 10)
		this.foreCloudsX -= 50;
	for (var i = this.foreCloudsX; i < canvas.width+50; i += 50) {
		ctx.beginPath();
		ctx.arc(i, 17, 32, 0, Math.PI*2);
		ctx.fill();
	}
	this.timeSinceBolt++;
	if (this.timeSinceBolt < 10) {
		ctx.globalAlpha = 1-this.timeSinceBolt/10;
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 1;
	}
	if (this.timeSinceBolt == 15) {
		playSound(miscSFX.Thunder1);
	}
	if (this.timeSinceBolt > 120 && Math.random() < .01) 
		this.timeSinceBolt = 0;
}