

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