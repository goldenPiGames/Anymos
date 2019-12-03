class ExternalMobileController extends Controller {
	constructor() {
		super();
	}
}

window.addEventListener("message", function(e) {
	console.log(e.data)
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
		
	}
}