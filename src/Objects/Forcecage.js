class Forcecage extends GameObject {
	constructor(outerLeft, outerRight, outerTop, outerBottom, innerLeft, innerRight, innerTop, innerBottom) {
		super();
		this.outerLeft = outerLeft;
		this.outerRight = outerRight;
		this.outerTop = outerTop;
		this.outerBottom = outerBottom;
		this.innerLeft = innerLeft;
		this.innerRight = innerRight;
		this.innerTop = innerTop;
		this.innerBottom = innerBottom;
	}
	update() {
		
	}
	draw() {
		ctx.lineWidth = 4*zoom;
		ctx.strokeStyle = "#7F7F7F";
		ctx.strokeRect(stagex(this.outerLeft+2), stagey(this.outerTop+2), (this.outerRight-this.outerLeft-4)*zoom, (this.outerBottom-this.outerTop-4)*zoom);
		ctx.strokeRect(stagex(this.innerLeft-2), stagey(this.innerTop-2), (this.innerRight-this.innerLeft+4)*zoom, (this.innerBottom-this.innerTop+4)*zoom);
	}
	isSolid(x, y) {
		return (x > this.outerLeft && x < this.outerRight && y > this.outerTop && y < this.outerBottom && !(x > this.innerLeft && x < this.innerRight && y > this.innerTop && y < this.innerBottom));
	}
}