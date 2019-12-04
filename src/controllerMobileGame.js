class ExternalMobileController extends Controller {
	constructor() {
		super();
	}
}

window.addEventListener("message", function(e) {
	//console.log(e.data);
	if (e.data.what == EXTERNAL_MOBILE_CONTROLLER) {
		var cont = controllers.find(oj => oj instanceof MobileControllerReceiver);
		if (!cont) {
			cont = new MobileControllerReceiver();
			controllers.push(cont);
		}
		cont.apply(e.data);
	} else if (e.data.what == "size") {
		backgroundBox.style.width = e.data.width;
		backgroundBox.style.height = e.data.height;
	}
});

class MobileControllerReceiver extends Controller {
	constructor() {
		super();
	}
	updateBefore() {
		
	}
	apply(data) {
		if (data.whathap == "click") {
			data.commands.forEach(com => {
				this[com+"Clicked"] = true;
				this[com] = true;
			});
		} else if (data.whathap == "change") {
			COMMAND_LIST.forEach(com => this[com] = data.commands[com]);
		}
	}
	getBindText(command) {
		return this.bindTexts[command];
	}
}
MobileControllerReceiver.prototype.bindTexts = {
	up : "[↑]",
	down : "[↓]",
	left : "[←]",
	right : "[→]",
	menuUp : "[↑]",
	menuDown : "[↓]",
	menuLeft : "[←]",
	menuRight : "[→]",
	crouch : "[↓]",
	zoomIn : "(+)",
	zoomOut : "(-)",
	jump : "(A)",
	select : "(A)",
	attack : "(B)",
	cancel : "(B)",
	shoot : "(C)",
	interact : "(!)",
	special : "(S)",
	pause : "(||)",
	restart : "(R)",
}