const STARTING_ANYM = 4500//3600;
const VESSEL_VALUE = 30;
var anymTotal = STARTING_ANYM;
var anymAvailable = STARTING_ANYM;
var collectedThisRun = [];
var allVesselNames = [];
var collectedVessels = {};
//var vesselsCollected = {};

class Vessel extends GameObject {
	constructor(name, x, y) {
		super();
		this.x = x;
		this.y = y;
		this.width = 16;
		this.height = 16;
		this.name = name;
		this.evalCollected();
		this.collected = false;
		//allVessels.push(this);
	}
	evalCollected() {
		//this.collected = 
		return isVesselCollected(this.name);
	}
	collect() {
		//if (prelude) {used -= 30} else
		if (this.name) {
			if (!this.collected && !this.evalCollected()) {
				anymTotal += VESSEL_VALUE;
				anymAvailable += VESSEL_VALUE;
			}
			this.collected = true;
			collectedThisRun.push(this.name);
			this.dead = true;
		}
	}
	onDeath() {
		this.collect();
	}
	update() {
		if (!this.collected) {
			if (this.isTouching(player))
				this.collect();
		}
	}
	draw() {
		if (!this.collected)
			this.drawSprite("floating");
	}
}
Vessel.prototype.sprites = makeSprites("src/Objects/Vessel.png", {
	floating: {x:0, y:0, width:16, height:16},
}, true);

function numVesselsCollected() {
	//return allVesselNames.reduce((acc, cur) => acc + isVesselCollected(cur), 0);
	return allVesselNames.reduce((acc, cur) => {
		//console.log(cur, isVesselCollected(cur));
		return acc + isVesselCollected(cur);
	}, 0);
}

function reEvalAnym() {
	anymTotal = STARTING_ANYM + numVesselsCollected() * VESSEL_VALUE;
	return anymTotal;
}

function isVesselCollected(nom) {
	return !!collectedVessels[nom];
}

function availAnym(innom = null) {
	reEvalAnym();
	var nom = innom == null ? currentStageName : innom;
	if (Stages[nom].previous == undefined) {
		anymAvailable = anymTotal;
		return anymTotal;
	}
	var ave = availAnym(Stages[nom].previous) - Stages[nom].bestTo;
	if (innom == null)
		anymAvailable = ave;
	return ave;
}

/*function collectAllVessels() {
	allVesselNames.forEach(function(nom){
		var ves = new Vessel(nom);
		ves.collect();
		ves.save();
	});
}*/