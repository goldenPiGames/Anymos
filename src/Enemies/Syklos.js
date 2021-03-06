class Syklos extends Enemy {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
Syklos.prototype.team = "Anymos";
Syklos.prototype.sprites = makeSprites("src/Enemies/Syklos.png", {
	pickup: {x:0, y:0, width:20, height:20},
}, false);

var specialDoubleJump = {
	name : "Syklos' Double Jump",
	update : function(holder) {
		if (holder.grounded)
			holder.doubleJump = true;
		if ((holder.controller.specialClicked || holder.controller.jumpClicked) && !holder.grounded && holder.doubleJump) {
			playSFX("WindShort");
			holder.dy = -Math.abs(holder.controller.crouch ? DEFAULT_JUMP_SPEED*Math.SQRT1_2 : DEFAULT_JUMP_SPEED);
			holder.doubleJump = false;
			used += 10;
			if (holder.controller.left && holder.dx > -5) {
				holder.dx = -5;
				holder.facingRight = false;
			} else if (holder.controller.right && holder.dx < 5) {
				holder.dx = 5;
				holder.facingRight = true;
			}
			//gameObjects.push(new DoubleJumpPuff(holder.x, holder.y));
		}
	}
}

class DoubleJumpPickup extends SpecialPickup {
	getDialog() {
		return [
			new DialogLine("Syklos", "That will allow you to create a platform of air, much like the ones that I have been creating in order to aid you on your travel.", SYKLOS_COLOR),
			new DialogLine("Syklos", "However, it lasts for only a an instant, and pushes you in the direction you want, effectively allowing you to make a second jump in midair.", SYKLOS_COLOR),
			new DialogLine("Syklos", "You can use it by pressing either Jump [A]/(A) or Special [Shift]/(R) in midair.", SYKLOS_COLOR),
			new DialogLine("Syklos", "Doing so will cost you only about one third of a second per use, and you cannot use it again until you land on a more permanent platform.", SYKLOS_COLOR),
		];
	}
}
DoubleJumpPickup.prototype.special = specialDoubleJump;
DoubleJumpPickup.prototype.sprites = Syklos.prototype.sprites;
/*function DoubleJumpPuff(x, y) {
	this.x = x;
	this.y = y;
	this.timer = 0;
}
DoubleJumpPuff.prototype = Object.create(GameObjectBase);
DoubleJumpPuff.prototype.update = function() {
	
}
DoubleJumpPuff.prototype.draw = function() {
	this.timer++;
	var fanta = Syklos.prototype.sprites["Puff"+this.timer];
	drawSpriteOnStage(fanta, this.x, this.y+fanta.height);
	if (this.timer >= 4)
		this.die();
}*/