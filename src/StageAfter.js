for (nom in Stages) {
	//console.log(nom)
	var stag = Stages[nom];
	if (stag.nextDown && Stages[stag.nextDown]) {
		Stages[stag.nextDown].selectX = Stages[stag.nextDown].selectX || stag.selectX;
		Stages[stag.nextDown].selectY = Stages[stag.nextDown].selectY || stag.selectY + LS_Y_SPACING;
		Stages[stag.nextDown].parTo = stag.parDown;
	}
	if (stag.nextLeft && Stages[stag.nextLeft]) {
		Stages[stag.nextLeft].selectX = Stages[stag.nextLeft].selectX || stag.selectX - LS_X_SPACING;
		Stages[stag.nextLeft].selectY = Stages[stag.nextLeft].selectY || stag.selectY + LS_Y_SPACING;
		Stages[stag.nextLeft].parTo = stag.parLeft;
	}
	if (stag.nextRight && Stages[stag.nextRight]) {
		Stages[stag.nextRight].selectX = Stages[stag.nextRight].selectX || stag.selectX + LS_X_SPACING;
		Stages[stag.nextRight].selectY = Stages[stag.nextRight].selectY || stag.selectY + LS_Y_SPACING;
		Stages[stag.nextRight].parTo = stag.parRight;
	}
	if (stag.vessels)
		allVesselNames.push(...stag.vessels);
}