const STARTING_ANYM = 18000;
function Vessel(x, y) {
	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 16;
	this.name = true;
	this.evalCollected();
}

Vessel.prototype = Object.create(GameObjectBase);
Vessel.prototype.collect = function() {
	used -= 30;
}
Vessel.prototype.onDeath = function() {
	this.collect();
}

function reEvalAnym(innom = null) {
	
}
function availAnym(innom = null) {
	var ave = STARTING_ANYM;
	var nom = innom == null ? currentStageName : innom;
	var dex = Stages[nom].index-1;
	while (dex > 0) {
		ave -= PreludeStages[dex].best;
		dex--;
	}
	anymAvailable = ave;
	return ave;
}