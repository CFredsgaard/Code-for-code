// Explanations - Variables
var favColor = 'orange';
var myFavColors = ['blue', 'green', 'red'];
var numOfFavColors = 3;
var hasGotFavColors = true;
var cecilieObject = {
	firstName: 'Cecilie',
	lastName: 'Fredsgaard',
	favColors: ['blue', 'green', 'red'],
	yearsAlive: 23,
	isFemale: true
};

// Explanation - Functions
var whatIsMyFavColor = function() {
	return 'orange';
} 

var doSomething = function() {
	console.log("Do Something Cool!!!");
}

var area = function (width, height) {
	return width * height;
}

var fullname = function (firstname, secondname) {
	return firstname + ' ' + secondname;
}

// Explanation - IF statements 

if ('female' == 'female') {
	//Do something
	alert('female')
};

var number1 = 25;
var number2 = 300;

if (number1 > number2){
	alert('true');
} else {
	alert('false');
}


var name1 = 'Cecilie';
var name2 = 'Charlie';

if (name1 == 'Cecilie'){
	alert('true');
} else if (name2 == 'Cecilie'){
	alert('true!');
} else {
	alert('false');
}

var name1 = 'Cecilie';
var name2 = 'Charlie';

//With the added && (and) both must be true
if (name1 == 'Cecilie' && name2 = 'Charlie'){
	alert('true');
} else if (name2 == 'Cecilie'){
	alert('true!');
} else {
	alert('false');
}

//With the added || (or) just one must be true (shortcut: option + i)



