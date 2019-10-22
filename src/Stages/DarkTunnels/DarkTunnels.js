Stages.DarkTunnels = {
	displayName : "Dark Tunnels",
	load : function(doStuff) {
		playMusic("The Darkness Below - Eric Matyas");
		let B = {name:"Stone",solid:true,color:"#101010"};
		let _ = {name:"Air",solid:false,color:"#808080"};
		staticColl =
		[[B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,B,B,_,_,B,B,_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,B],
		 [B,B,B,_,_,B,B,_,_,_,_,_,_,_,B,B,B,B,_,_,_,B,B,_,_,_,B,B,_,B],
		 [B,B,B,_,_,_,B,_,B,B,B,B,B,_,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,B,B,_,B,_,_,_,B,_,_,_,B,_,B,_,_,B,B,_,B,B,B,B,_,B,B,B,_,B],
		 [B,B,B,_,B,B,B,B,B,_,_,_,B,_,B,_,_,B,B,_,B,B,_,B,_,B,B,B,_,B],
		 [B,B,B,_,B,B,B,B,B,_,B,_,_,_,_,_,_,_,_,_,B,B,_,B,_,B,B,_,_,B],
		 [B,B,_,_,_,B,B,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,_,B,B,B,B,_,B,B],
		 [B,_,_,_,_,_,B,B,_,_,B,B,B,B,B,B,B,B,_,_,B,B,_,B,B,B,B,_,B,B],
		 [B,_,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,B,B,_,_,B],
		 [B,_,_,_,_,B,B,B,B,B,B,_,_,_,_,_,_,_,_,B,B,B,B,B,B,B,B,B,_,B],
		 [B,B,_,_,_,B,B,B,_,_,B,_,_,_,_,_,_,_,_,B,B,_,_,B,B,B,B,B,_,B],
		 [B,B,B,B,B,B,B,B,_,_,B,B,B,_,B,B,B,B,_,_,_,_,_,B,B,B,_,_,_,B],
		 [B,B,B,B,B,B,B,B,_,_,B,B,B,_,_,B,B,B,B,B,B,B,_,_,_,_,_,_,B,B],
		 [B,B,_,_,_,_,_,_,_,_,B,B,B,_,_,B,B,B,_,B,B,B,_,B,B,B,B,_,B,B],
		 [B,_,_,B,B,B,B,B,B,_,B,B,B,_,_,_,_,_,_,B,B,_,_,B,B,B,B,_,_,B],
		 [B,_,B,B,_,_,_,_,B,_,B,B,B,_,B,B,B,B,B,B,B,_,_,B,B,B,B,B,B,B],
		 [B,_,B,_,_,_,_,_,_,_,B,B,B,_,B,B,B,B,B,B,B,_,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,_,_,B,B,B,B,B,B,_,B,B,_,B,B,B,B,_,B,B,B,B,B,B,B,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,B,_,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,_,_,_,_,_,_,_,_,_,_,_,B,B,_,B,B,B,B,B,B,B,B,B,B,B,B,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,B],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
		 [B,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]];
		if (doStuff) {
			zoom = 2;
			zoomd = 2;
			dialog.begin(new DialogLine("???", "Huh, do I sense someone falling down the cave shaft?", "#FFFFFF"),
				new DialogLine("Anymos", "Who are you?", "#00FFFF"),
				new DialogLine("Naluxos", "*gasp*! It's Anymos! I'm Naluxos, another Uteion like you, but much younger! Please, hurry, I've been captured, and locked in the depths of this cave, help me!", "#FFFFFF"),
				new DialogLine("Naluxos", "I put a bit of my power there so that you could see! You can pick it by pressing Interact - [Space] or (L)!"));
		}
		minZoom = 2;
		player.x = 70;
		player.y = 5;
		player.facingRight = false;
		gameObjects = [
			new FlashPickup(70, 240, doStuff),
			new Vessel("DarkTunnelsBumpAround1", 200, 58),
			new Vessel("DarkTunnelsBumpAround2", 220, 58),
			new Vessel("DarkTunnelsBumpAround3", 240, 58),
			new Vessel("DarkTunnelsUpperRight", 570, 38),
			new Vessel("DarkTunnelsJump", 450, 118),
			new Vessel("DarkTunnelsMiddleFallRight", 370, 298),
			new Vessel("DarkTunnelAfterJumpLeft", 70, 358),
			//new Vessel("DarkTunnelsBigJump", 330, 378),
			new Goalpost("DarkCaverns", 30, 480, 60)];
		dynamicForeground = new DarknessFore();
	},
	vessels : ["DarkTunnelsBumpAround1", "DarkTunnelsBumpAround2", "DarkTunnelsBumpAround3", "DarkTunnelsUpperRight", "DarkTunnelsJump", "DarkTunnelsMiddleFallRight", "DarkTunnelAfterJumpLeft"],
	previous : "BlackMountain",
	parDown : 2000,
	nextDown : "DarkCaverns",
	toLoad : [Naluxos, Walkie, Hoverie]
}

class DarknessFore {
	constructor(lightsource) {
		this.lightsource = lightsource;
	}
	draw() {
		ctx.globalAlpha = 1 - specialFlash.active;
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		if (this.lightsource && player.special != specialFlash) {
			ctx.globalAlpha = Math.max(0, 1 - (player.distanceTo(this.lightsource) / 100));
			this.lightsource.draw();
			player.draw();
		}
	}
}