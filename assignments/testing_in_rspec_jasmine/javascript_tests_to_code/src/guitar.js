if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

// var new_guitar = Object.create(guitar);

var guitar = {
<<<<<<< HEAD
	name: "Fender Esquire",
	numberOfStrings: 6,
	volume: 5,

	setName: function(name) {
		this.name = name;
	},

	breakString: function(numberOfStrings) {
		this.numberOfStrings = this.numberOfStrings - 1
			if(this.numberOfStrings < 1) {
				guitar.volume = 0;
		}
	},

	restring: function() {
		guitar.numberOfStrings = 6;
		guitar.volume = 5;
	},

	playRock: function() {
		if(this.numberOfStrings > 0) {
			this.volume = 11;
		}
	},

	restring: function() {
		this.numberOfStrings = 6;
		this.volume = 5;
	}

};
























// 	numberOfStrings: 6,
// 	volume: 5,
// 	name: "Fender Esquire",
// 	setName: function(name) {
// 		this.name = name;
// 	},
// 	breakString: function() {
// 		this.numberOfStrings = this.numberOfStrings - 1;
// 		if (this.numberOfStrings < 1) {
// 			this.volume = 0;
// 		}
// 	},
// 	restring: function() {
// 		this.numberOfStrings = 6;
// 		this.volume = 5;
// 	},
// 	playRock: function() {
// 		this.numberOfStrings > 0 ? this.volume = 11 : this.volume = 0;
// 	},
// 	restringForMoreRock: function() {
// 		this.numberOfStrings = 7;
// 	},
// 	playBasicRhythm: function () {
// 		return "jug jigga jug jigga jug";
// 	},
// 	playHighStrings: function () {
// 		return "meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley MEEEEEEEEEEEEEEEE. \'And the dragon comes in the NIIIiiiiIIIiiiiIIIIIIIIiiiiiiiiiiiIIIIIIIIiiiIIGGHH\'";
// 	}
// };
=======
};
>>>>>>> upstream/master
