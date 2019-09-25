var PokerTestSpriteNames = ["Terminal", "Spade", "Heart", "Diamond", "Club"];
const SUITS = ["Club", "Diamond", "Heart", "Spade"];
const SUIT_COLORS = ["#009900", "#0000FF", "#FF0000", "#000000"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const HANDS = ["Trash", "Pair", "Two Pairs", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush"]

function PokerTest(x, y, remaining, clearFunction = doNothing) {
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.remaining = remaining;
	this.clearFunction = clearFunction;
	this.active = false;
	this.leftHand = [];
	this.rightHand = [];
}
PokerTest.prototype = Object.create(GameObjectBase);
PokerTest.prototype.update = function() {
	if (runnee == this) {
		if (controller.pauseClicked) {
			exitStage();
			return;
		}
		player.takeDamage(1);
		if (controller.leftClicked)
			this.evalCorrect(this.leftHand, this.rightHand);
		else if (controller.rightClicked)
			this.evalCorrect(this.rightHand, this.leftHand);
	} else {
		if (this.isTouching(player) && controller.interactClicked) {
			runnee = this;
			this.randomHands();
		}
	}
	this.antiRec = false;
}
PokerTest.prototype.draw = function() {
	if (runnee == this && !this.antiRec) {
		this.antiRec = true;
		gameEngine.draw();
		for (var i = 0; i < 5; i++) {
			this.drawCard(this.leftHand[i], this.x - 50, this.y - 20 - 30*i)
			this.drawCard(this.rightHand[i], this.x + 50, this.y - 20 - 30*i)
		}
	} else {
		drawSpriteOnStage(this.sprites.Terminal, this.x, this.y);
		ctx.fillStyle = "#000000";
		ctx.font = zoom*20+"px monospace";
		if (this.remaining) ctx.fillText(this.remaining, stagex(this.x) - ctx.measureText(this.remaining).width/2, stagey(this.y-30));
	}
}
PokerTest.prototype.randomHands = function() {
	var deck = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	var i = 0;
	while (i < 10) {
		var dex = Math.floor(Math.random()*52);
		if (deck[dex]) {
			deck[dex] = 0;
			if (i < 5)
				this.leftHand[i] = dex;
			else
				this.rightHand[i-5] = dex;
			i++;
		}
	}
}
PokerTest.prototype.evalCorrect = function(hand1, hand2) {
	if (higherHand(hand1, hand2))
		this.remaining--;
	else {
		this.remaining++;
		player.takeDamage(90);
		playSound(miscSFX.Wrong);
	}
	if (this.remaining <= 0) {
		this.clearFunction();
		this.die();
		used -= 1;
		runnee = gameEngine;
	} else
		this.randomHands();
}
PokerTest.prototype.drawCard = function(card, x, y) {
	var suit = SUITS[card % 4];
	var rank = RANKS[card % 13];
	ctx.fillStyle = SUIT_COLORS[card % 4];
	ctx.font = 20*zoom+"px monospace";
	var wid = ctx.measureText(rank).width;
	ctx.drawImage(this.sprites[suit], stagex(x-12)-wid/2, stagey(y-20), 20*zoom, 20*zoom);
	ctx.fillText(rank, stagex(x+12)-wid/2, stagey(y-3));
}

function higherHand(hand1, hand2) {
	var res1 = evalHand(hand1);
	var res2 = evalHand(hand2);
	//console.log(hand1, hand2, res1, res2);
	for (var i = 0; i < res1.length; i++) {
		if (res1[i] > res2[i])
			return true;
		if (res1[i] < res2[i])
			return false;
	}
	console.log("Cards tied", hand1, hand2);
	return true;
}
function evalHand(hand) {
	var scoring = [0];
	var cont = countRanks(hand);
	var straight = false;
	for (var i = 0; i < 13; i++) {
		if (cont[i] == 1) {
			var straight = true;
			for (var j = 1; j < 5; j++) {
				if (!cont[i+j])
					straight = false;
			}
			if (straight) {
				straight = i + 4;
			}
		}
	}
	var flush = true;
	for (var i = 1; i < 5; i++) {
		if (hand[0]%4 != hand[i]%4)
			flush = false;
	}
	if (straight) {
		if (flush)
			return [8, straight];
		return [4, straight];
	} else if (flush)
		return [5, hand[0]%4];
	if (cont.indexOf(4) >= 0)
		return [7, cont.indexOf(4), cont.indexOf(1)];
	if (cont.indexOf(3) >= 0 && cont.indexOf(2) >= 0)
		return [6, cont.indexOf(3), cont.indexOf(2)];
	if (cont.indexOf(3) >= 0)
		return [3, cont.indexOf(3)];
	if (cont.indexOf(2) >= 0) {
		if (cont.slice(cont.indexOf(2)+1).indexOf(2) > 0)
			return [2, cont.slice(cont.indexOf(2)+1).indexOf(2), cont.indexOf(2), cont.indexOf(1)]
		return [1, cont.indexOf(2)]; //TODO tie
	}
	hand.sort(function(a, b){return (a%13) < (b%13)});
	return [0, hand[0]%13, hand[1]%13, hand[2]%13, hand[3]%13, hand[4]%13];
}
function countRanks(hand) {
	var counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	for (var i = 0; i < hand.length; i++) {
		counts[hand[i] % 13] ++;
	}
	return counts;
}
function cardName(num) {
	return RANKS[num%13]+" of "+SUITS[num%4]+"s";
}

/* TODo might not be wuite right
for (var peats = 0; peats < 100; peats++) {
	var deck = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	var hand = [];
	var i = 0;
	while (i < 5) {
		var dex = Math.floor(Math.random()*52);
		if (deck[dex]) {
			i++;
			deck[dex] = 0;
			hand[i] = dex;
			console.log(cardName(dex));
		}
	}
	console.log(evalHand(hand));
}
//*/