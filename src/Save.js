function loadGame() {
	var stuff = localStorage.getItem("AnymosStuff");
	if (!stuff) {
		collectedVessels = {};
		firstRun = true;
		currentStageName = "TutorialPrelude";
	} else {
		stuff = JSON.parse(stuff);
		collectedVessels = stuff.vessels;
		for (nom in Stages) {
			var stagf = stuff.stages[nom] || {};
			var stagt = Stages[nom];
			stagt.bestLeft = stagf.bestLeft;
			stagt.bestDown = stagf.bestDown;
			stagt.bestRight = stagf.bestRight;
			stagt.bestAll = stagf.bestAll;
		}
		for (nom in Stages) {
			var stagt = Stages[nom];
			if (stagt.previous) {
				var froms = Stages[stagt.previous];
				if (froms.nextDown == nom)
					stagt.bestTo = froms.bestDown;
				if (froms.nextLeft == nom)
					stagt.bestTo = froms.bestLeft;
				if (froms.nextRight == nom)
					stagt.bestTo = froms.bestRight;
			}
		}
		firstRun = stuff.firstRun;
		if (firstRun)
			currentStageName = stuff.currentStage;
	}
}

function saveGame() {
	var stuff = {};
	stuff.vessels = collectedVessels;
	stuff.stages = {};
	for (nom in Stages) {
		var stag = Stages[nom]
		stuff.stages[nom] = {
			bestLeft : stag.bestLeft,
			bestDown : stag.bestDown,
			bestRight : stag.bestRight,
			bestAll : stag.bestAll,
		}
	}
	stuff.firstRun = firstRun;
	stuff.currentStage = currentStageName;
	localStorage.setItem("AnymosStuff", JSON.stringify(stuff));
}

function resetSave() {
	localStorage.removeItem("AnymosStuff");
	loadGame();
	//currentStageName = "TutorialMovement";
	//doLevelSelect();
	//loadStage("TutorialMovement");
}