const STARTING_ANYM = 4500;
var anymTotal = STARTING_ANYM;
var anymAvailable = STARTING_ANYM;
var collectedVesselNames = [];
var allVesselNames = [];

function Vessel(name, x, y) {
	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 16;
	this.name = name;
	this.evalCollected();
	this.collected = false;
	//allVessels.push(this);
}

Vessel.prototype = Object.create(GameObjectBase);
Vessel.prototype.evalCollected = function() {
	//this.collected = 
	return localStorage.getItem("Vessel"+this.name) == "true";
}
Vessel.prototype.collect = function() {
	if (prelude) {used -= 30} else
	if (this.name) {
		if (!this.collected && localStorage.getItem("Vessel"+this.name) != "true") {
			anymTotal += 30;
			anymAvailable += 30;
		}
		this.collected = true;
		collectedVesselNames.push(this.name);
	}
}
Vessel.prototype.onDeath = function() {
	this.collect();
}
Vessel.prototype.update = function() {
	if (!this.collected) {
		if (this.isTouching(player))
			this.collect();
	}
}
Vessel.prototype.save = function() {
	if (this.collected)
		localStorage.setItem("Vessel"+this.name, "true")
}
Vessel.prototype.draw = function() {
	if (!this.collected)
		drawSpriteOnStage(miscSprites.Vessel, this.x, this.y);
}

function reEvalAnym() {
	anymTotal = STARTING_ANYM;
	allVesselNames.forEach(function(nom) {
		if (isVesselCollected(nom))
			anymTotal += 30;
	});
	return anymTotal;
}

function isVesselCollected(nom) {
	return localStorage.getItem("Vessel"+nom) == "true";
}

function availAnym(innom = null) {
	reEvalAnym();
	var nom = innom == null ? currentStageName : innom;
	if (Stages[nom].previous == undefined) {
		anymAvailable = anymTotal;
		return anymTotal;
	}
	var ave = availAnym(Stages[nom].previous) - Stages[nom].best;
	if (innom == null)
		anymAvailable = ave;
	return ave;
}

function collectAllVessels() {
	allVesselNames.forEach(function(nom){
		var ves = new Vessel(nom);
		ves.collect();
		ves.save();
	});
}