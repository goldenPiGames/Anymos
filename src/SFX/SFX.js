var SFX = {};

const DEFAULT_SFX_NAMES = ["Bump", //"Thunder1", //NSMB Wii
	"Swish3", "Swish4", "Oof",
	//"SPM_Smash",
	"WindShort"] //zapsplat.com

function loadDefaultSFX() {
	DEFAULT_SFX_NAMES.forEach(function(nom) {
		loadSFX(nom);
	});
}

function playSFX(snd) {
	
	if (settings.sfx) {
		if (usingPizz) {
			SFX[snd].play(0, 0);
		} else {
			//snd.currentTime = 0;
			SFX[snd].play();
		}
	}
}

function loadSFX(name) {
	//console.log(name);
	if (!SFX[name])
		SFX[name] = makeSFX("src/SFX/"+name+".mp3");
}

function makeSFX(src) {
	//loadingTotal++;
	var snd;
	if (usingPizz) {
		snd = new Pizzicato.Sound(src);
		snd.attack = 0;
	} else {
		snd = document.createElement("audio");
		snd.src = src;
		snd.onended = ()=>snd.currentTime = 0;
		snd.setAttribute("preload", "auto");
		snd.setAttribute("controls", "none");
		snd.style.display = "none";
		document.body.appendChild(snd);
    }
	return snd;
}