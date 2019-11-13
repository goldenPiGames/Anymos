class StormBackdrop {
	constructor() {
		this.foreCloudsX = 0;
		this.midCloudsX = 0;
		this.timeSinceBolt = 50;
	}
	draw() {
		ctx.fillStyle = "#203246";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#3E5157";
		this.midCloudsX+=1.5;
		if (this.midCloudsX > 10)
			this.midCloudsX -= 40;
		for (var i = this.midCloudsX; i < canvas.width+40; i += 40) {
			ctx.beginPath();
			ctx.arc(i, 38, 27, 0, Math.PI*2);
			ctx.fill();
		}
		ctx.fillStyle = "#586973";
		this.foreCloudsX+=2.5;
		if (this.foreCloudsX > 10)
			this.foreCloudsX -= 50;
		for (var i = this.foreCloudsX; i < canvas.width+50; i += 50) {
			ctx.beginPath();
			ctx.arc(i, 17, 32, 0, Math.PI*2);
			ctx.fill();
		}
		this.timeSinceBolt++;
		if (this.timeSinceBolt < 10) {
			ctx.globalAlpha = 1-this.timeSinceBolt/10;
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.globalAlpha = 1;
		}
		if (this.timeSinceBolt == 15) {
			playSFX("Thunder1");
		}
		if (this.timeSinceBolt > 120 && Math.random() < .01) 
			this.timeSinceBolt = 0;
	}
}
StormBackdrop.prototype.sfxNames = ["Thunder1"];