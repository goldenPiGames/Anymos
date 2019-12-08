const JUKEBOX_ENTRY_HEIGHT = 40;
function doJukebox() {
	emergencyStuff.hidden = true;
	runnee = jukebox;
	cameraFocus = {x:0, y:0, width:0, height:0};
	zoomd = 1;
	zoom = 1;
	maxZoom = 1;
	cameraTopBound = -5;
	cameraBottomBound = MUSIC_LIST.length * JUKEBOX_ENTRY_HEIGHT;
	cameraFocus.y = (jukebox.songIndex+.5) * JUKEBOX_ENTRY_HEIGHT;
	updateZoom();
	snapZoom();
	
}
var jukebox = {
	update : function() {
		if (globalController.cancelClicked) {
			doMainMenu();
			return;
		} else if (globalController.menuUpClicked) {
			this.songIndex--;
			if (this.songIndex < 0)
				this.songIndex += MUSIC_LIST.length;
		} else if (globalController.menuDownClicked) {
			this.songIndex++;
			if (this.songIndex >= MUSIC_LIST.length)
				this.songIndex -= MUSIC_LIST.length;
		}
		if (globalController.selectClicked) {
			if (songName == this.fullSongName()) {
				if (music.paused)
					music.play();
				else
					music.pause();
			} else
				playMusic(MUSIC_LIST[this.songIndex].name + " - " + MUSIC_LIST[this.songIndex].by);
		}
		if (globalController.menu3Clicked) {
			jukeboxVisit.begin(MUSIC_LIST[this.songIndex]);
			//window.open(MUSIC_LIST[this.songIndex].site, "_blank");
			//music.pause();
		}
		cameraFocus.y = (this.songIndex+.5) * JUKEBOX_ENTRY_HEIGHT;
		updateZoom();
	},
	draw : function() {
		ctx.globalAlpha = 1;
		clearCanvases();
		ctx.font = (JUKEBOX_ENTRY_HEIGHT-10)+"px "+getFont();
		ctx.fillStyle = "#FFFFFF";
		for (var i = 0; i < MUSIC_LIST.length; i++) {
			ctx.textAlign = "left";
			ctx.fillText(MUSIC_LIST[i].name, miscSprites.Selector.width + 20, stagey(JUKEBOX_ENTRY_HEIGHT * (i+.5) + 5));
			ctx.textAlign = "right";
			ctx.fillText(MUSIC_LIST[i].by, canvas.width * 2/3, stagey(JUKEBOX_ENTRY_HEIGHT * (i+.5) + 5));
		}
		ctx.drawImage(miscSprites.Selector, 10, stagey(cameraFocus.y) - miscSprites.Selector.height/2);
		ctx.font = (JUKEBOX_ENTRY_HEIGHT-10)+"px "+settings.font;
		ctx.textAlign = "left";
		ctx.fillText(globalController.getBindText("select") + " : "+(songName == this.fullSongName() && !music.paused ? "Pause":"Play"), canvas.width*2/3 + 10, 40);
		ctx.fillText(globalController.getBindText("cancel") + " : Exit", canvas.width*2/3 + 30, canvas.height-40);
		ctx.fillText(globalController.getBindText("menu3") + " : Visit", canvas.width*2/3 + 10, 90);
		//if (MUSIC_LIST[this.songIndex].yt)
			//ctx.fillText((usingGamepad?"Y":"Q") + ": YouTube", canvas.width*2/3 + 10, 140);
	},
	songIndex : 0,
	fullSongName : function(index = -1) {
		if (index == -1)
			index = this.songIndex;
		//console.log(index);
		return MUSIC_LIST[index].name + " - " + MUSIC_LIST[index].by;
	}
}

var jukeboxVisit = {
	begin : function(song) {
		this.song = song;
		runnee = this;
		this.siteIndex = 0;
	},
	update : function() {
		if (globalController.cancelClicked) {
			runnee = jukebox;
			return;
		} else if (globalController.menuUpClicked) {
			this.siteIndex--;
			if (this.siteIndex < 0)
				this.siteIndex += this.song.siteList.length;
		} else if (globalController.menuDownClicked) {
			this.siteIndex++;
			if (this.siteIndex >= this.song.siteList.length)
				this.siteIndex -= this.song.siteList.length;
		}
		if (globalController.selectClicked) {
			window.open(this.song.siteList[this.siteIndex].href, "_blank");
			music.pause();
		}
	},
	draw : function() {
		jukebox.draw();
		ctx.lineWidth = 4;
		ctx.strokeStyle = "#FFFFFF";
		ctx.strokeRect(canvas.width/4, canvas.height/4, canvas.width/2, canvas.height/2);
		ctx.fillStyle = "#000000";
		ctx.fillRect(canvas.width/4, canvas.height/4, canvas.width/2, canvas.height/2);
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		ctx.font = "40px "+getFont();
		this.song.siteList.forEach((info, dex) => ctx.fillText(info.name, canvas.width/4+70, canvas.height/4 + 110 + 50*dex));
		ctx.drawImage(miscSprites.Selector, canvas.width/4+10, canvas.height/4 + 80 + 50*this.siteIndex);
	},
	siteIndex : 0,
}