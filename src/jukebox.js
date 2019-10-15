const MUSIC_LIST = [
	{name:"Anomalies Abound",               by:"Eric Matyas", site:"https://soundimage.org/drama-2/"},
	{name:"Beatdown City",                  by:"Darren Curtis", yt:"qL4u3u5WKgU", site:"https://www.darrencurtismusic.com/sci-fi-modern"},
	{name:"Blast",                          by:"PeriTune",    site:"https://peritune.com/blast/"},
	{name:"Boat Paint",                     by:"Al Gorgeous", site:"https://soundcloud.com/al-goregous/boat-paint"},
	{name:"Breeze",                         by:"PeriTune",      yt:"RINkM_o-e4I", site:"https://peritune.com/breeze/"},
	{name:"Breeze 2",                       by:"PeriTune",      yt:"fVm5ul0y0kk", site:"https://peritune.com/breeze2/"},
	{name:"Chamber of Jewels",              by:"Eric Matyas", site:"https://soundimage.org/fantasy-5/"},
	{name:"Dark Anthem",                    by:"Darren Curtis", yt:"G-VY51L2AQU", site:"https://www.darrencurtismusic.com/horror-mystery"},
	{name:"Decisions",                      by:"Eric Matyas", site:"https://soundimage.org/introspective/", bpm:95.34},
	{name:"Demise",                         by:"PeriTune",      yt:"Ouj_cwWJdmo", site:"https://peritune.com/demise/"},
	{name:"Dueling With Cyborg Ninjas",     by:"Darren Curtis", yt:"j1TSpz7Itso", site:"https://www.darrencurtismusic.com/sci-fi-modern"},
	{name:"Exotic",                         by:"PeriTune",      yt:"ykiWQdzt4GI", site:"https://peritune.com/exotic/"},
	{name:"Fantasy Game Background",        by:"Eric Matyas", site:"https://soundimage.org/fantasywonder/"},
	{name:"Glory Eternal",                  by:"Darren Curtis", yt:"Qx1ypzkhTy0", site:"https://www.darrencurtismusic.com/horror-mystery"},
	{name:"Gothic Dark",                    by:"PeriTune",      yt:"brZWB8cdBDs", site:"https://peritune.com/gothic_dark/"},
	{name:"Hong Kong Midnight",             by:"Eric Matyas", site:"https://soundimage.org/world/"},
	{name:"Light Years",                    by:"Eric Matyas", site:"https://soundimage.org/naturescience-2/"},
	{name:"Magical Getaway",                by:"Eric Matyas", site:"https://soundimage.org/aerial-drone-2/"},
	{name:"Maleficent Mysticism",           by:"Darren Curtis", yt:"20ZsqH6rb6Y", site:"https://www.darrencurtismusic.com/horror-mystery"},
	{name:"Massacre on Teddy Bear Hill",    by:"Darren Curtis", yt:"qG5e8cmoL_s", site:"https://www.darrencurtismusic.com/hybrid-other"},
	{name:"Mountainside",                   by:"Eric Matyas", site:"https://soundimage.org/quiet-peaceful-mellow/"},
	{name:"Move it Out",                    by:"Eric Matyas", site:"https://soundimage.org/epic-battle/"},
	{name:"Mysterious Deep",                by:"Eric Matyas", site:"https://soundimage.org/nature-science-3/"},
	{name:"Pay The Reaper",                 by:"Darren Curtis", yt:"_fjnQMHrk0k", site:"https://www.darrencurtismusic.com/horror-mystery"},
	{name:"Rapid 2",                        by:"PeriTune",    site:"https://peritune.com/rapid2/"},
	{name:"Reaching Altitude",              by:"Eric Matyas", site:"https://soundimage.org/aerial-drone/"},
	{name:"Remote Island",                  by:"Eric Matyas", site:"https://soundimage.org/naturescience-2/"},
	{name:"Samurai Sake Showdown",          by:"Darren Curtis", yt:"NOGZX7Z4wSI", site:"https://www.darrencurtismusic.com/world-ethnic"},
	{name:"Sculpture Garden",               by:"Eric Matyas", site:"https://soundimage.org/classical-sounding/"},
	{name:"Seahorse Dreams",                by:"Kubbi",         yt:"DLvrDRRaftQ", site:"https://kubbimusic.com/track/seahorse-dreams"},
	{name:"Star Light",                     by:"Eric Matyas", site:"https://soundimage.org/naturescience-2/"},
	{name:"Strategy 3",                     by:"PeriTune",      yt:"tqS-DwicQCo", site:"https://peritune.com/strategy3/"},
	{name:"Surreal Chase",                  by:"Eric Matyas", site:"https://soundimage.org/action/"},
	{name:"Tempest",                        by:"Darren Curtis", yt:"NsSYDbyQteg", site:"https://www.darrencurtismusic.com/fantasy"},
	{name:"The Darkness Below",             by:"Eric Matyas", site:"https://soundimage.org/dark-ominous/"},
	{name:"The Inspector's Epiphany",       by:"Eric Matyas", site:"https://soundimage.org/drama-2/"},
	{name:"The Old Country Farm",           by:"Darren Curtis", yt:"HPt2ngfRQ8I", site:"https://www.darrencurtismusic.com/fantasy"},
	{name:"The Triumph of the Clock Maker", by:"Eric Matyas", site:"https://soundimage.org/fantasy-5/"},
	{name:"Underwater Coolness",            by:"Eric Matyas", site:"https://soundimage.org/nature-science-3/"},
	{name:"Up In My Jam (All Of A Sudden)", by:"Kubbi",         yt:"6DB6hBRPsWc", site:"https://kubbimusic.com/track/up-in-my-jam-all-of-a-sudden"},
	{name:"War of the Pianos",              by:"Darren Curtis", yt:"CP8HoV4ArHw", site:"https://www.darrencurtismusic.com/hybrid-other"},
	{name:"Wicked Dreams",                  by:"Eric Matyas", site:"https://soundimage.org/horrorsurreal/"},
	{name:"Whisper 2",                      by:"PeriTune",      yt:"VT2P3ZEuZWE", site:"https://peritune.com/whisper2/"},
];
var MUSIC_HASH = {};
MUSIC_LIST.forEach(function(sing, dex) {
	sing.description = "\"" + sing.name + "\" by " + sing.by + ". Click to listen.";
	MUSIC_HASH[sing.name + " - " + sing.by] = sing;
	MUSIC_HASH[sing.name] = sing;
	sing.index = dex;
});

const JUKEBOX_ENTRY_HEIGHT = 40;
function doJukebox() {
	cameraFocus = {x:0, y:0}
	runnee = jukebox;
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
		if (controller.attackClicked) {
			doMainMenu();
			return;
		} else if (controller.upClicked) {
			this.songIndex--;
			if (this.songIndex < 0)
				this.songIndex += MUSIC_LIST.length;
		} else if (controller.downClicked) {
			this.songIndex++;
			if (this.songIndex >= MUSIC_LIST.length)
				this.songIndex -= MUSIC_LIST.length;
		}
		if (controller.jumpClicked) {
			if (songName == this.fullSongName()) {
				if (music.paused)
					music.play();
				else
					music.pause();
			} else
				playMusic(MUSIC_LIST[this.songIndex].name + " - " + MUSIC_LIST[this.songIndex].by);
		}
		if (controller.switchClicked) {
			window.open("https://www.youtube.com/watch?v="+MUSIC_LIST[this.songIndex].yt+"&list=PLZ6OranCcmGrWLVqKyRKL9KQXFjcRXaOk", "_blank");
			music.pause();
		}
		if (controller.shootClicked) {
			window.open(MUSIC_LIST[this.songIndex].site, "_blank");
			music.pause();
		}
		cameraFocus.y = (this.songIndex+.5) * JUKEBOX_ENTRY_HEIGHT;
		updateZoom();
	},
	draw : function() {
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = (JUKEBOX_ENTRY_HEIGHT-10)+"px "+settings.font;
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
		ctx.fillText("A: "+(songName == this.fullSongName() && !music.paused ? "Pause":"Play"), canvas.width*2/3 + 10, 40);
		ctx.fillText((usingGamepad?"B":"S") + ": Exit", canvas.width*2/3 + 30, canvas.height-40);
		ctx.fillText((usingGamepad?"X":"D") + ": Artist's site", canvas.width*2/3 + 10, 90);
		if (MUSIC_LIST[this.songIndex].yt)
			ctx.fillText((usingGamepad?"Y":"Q") + ": YouTube", canvas.width*2/3 + 10, 140);
	},
	songIndex : 0,
	fullSongName : function(index = -1) {
		if (index == -1)
			index = this.songIndex;
		//console.log(index);
		return MUSIC_LIST[index].name + " - " + MUSIC_LIST[index].by;
	}
}

var music = document.createElement("audio");
var songName;
var song;

function initMusic() {
	music.preload = "auto";
	music.controls = "none";
	music.style.display = "none";
	music.loop = true;
	document.body.appendChild(music);
}

function playMusic(sin) {
	if (sin == null) {
		music.pause();
		return;
	}
	if (typeof sin == "string") {
		sin = MUSIC_HASH[sin];
	}
	if (sin == song) {
		music.play();
		return;
	}
	song = sin;
	musicIsAlt = false;
	songName = song.name + " - " + song.by;
	var unsce = songName.replace(/\s/g, "");
	var end = "mp3"//(canPlayOgg && song.ogg) ? "ogg" : "mp3";
	music.src = "src/Music/"+unsce+"."+end;
	music.currentTime = 0;
	music.play();
}

function musicUpbeat() {
	return !(Math.floor(music.currentTime / (song.bpm || 120) * 60) % 2);
}