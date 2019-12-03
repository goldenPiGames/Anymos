 var ctx;

function begin() {
	//igame.contentWindow.postMessage(EXTERNAL_MOBILE_CONTROLLER, "*");
	ctx = canvas.getContext("2d");
	setSize();
	controller = new MobileControllerCanvas(canvas);
}

var controller;

function setSize(e) {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var constrainedByHeight = width / height > 4/3;
	//console.log(e);
	fullBox.style.width = width+"px";
	fullBox.style.height = height+"px";
	//canvas.style.width = width+"px";
	//canvas.style.height = height+"px";
	if (controller)
		controller.setSize(width, height);
	if (constrainedByHeight) {
		gameBox.style.width = (height*4/3)+"px";
		gameBox.style.height = height+"px";
		gameBox.style.left = ((width-height*4/3)/2)+"px";
		//console.log("H");
	} else {
		gameBox.style.width = width+"px";
		gameBox.style.height = (width*3/4)+"px";
		gameBox.style.left = "0";
		//console.log("W");
	}
	igame.contentWindow.postMessage({
			what : "size",
			width : gameBox.style.width,
			height : gameBox.style.height,
		}, "*");
}

window.addEventListener("resize", setSize);


function receiveMessage(e) {
	//console.log(e.data);
	if (e.data.what == "ready") {
		begin();
	}
}
window.addEventListener("message", receiveMessage, false);

function sendControl(data) {
	data.what = EXTERNAL_MOBILE_CONTROLLER;
	igame.contentWindow.postMessage(data, "*");
}