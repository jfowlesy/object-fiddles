//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
  var me = {
    name: "Jason Fowles",
    age: 32
  };
  alert(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
  var favoriteThings = {
   band: 'Volbeat',
   food: 'hamburgers',
   person: 'Shar',
   book: 'True Grit',
   movie: 'Lego Movie',
   holiday: 'Christmas'
 };


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
  favoriteThings.car = 'Dodge Ram';
   favoriteThings.brand = 'Under Armor';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
  favoriteThings.food = 'Lettuce';
   favoriteThings.book = '50 Shades of Gray';



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here
  var backPack = {};
   var item = 'firstPocket';
   backPack[item] = 'chapstick';
   backPack.color = 'black';
//After you do the above, alert your entire backPack object.

  //Code here
alert(backPack);
/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here
alert(backPack);



//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here
  var alsoMe = {
     name: 'Jason Fowles',
     age: 21,
     height: '5\' 10"',
     gender: 'M',
     married: true,
     eyeColor: 'brown',
     hairColor: 'brown'
   };
//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
  for(var prop in alsoMe) {
     alert(prop + ": " + alsoMe[prop]);
   }



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
  var album = {
     BlackBart: 3.56,
     Killpop: 3.43,
     IntoTheOcean: 3.45,
     AtlasRise: 6.35,
     ScottyDoesntKnow: 3.10,
   };
//Now, loop through your album object alerting every song title individually.

  //Code Here
  for (var name in album) {
     alert(name);
   }



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here
  var states = {
     California: '30000000',
     Nebraska: '1500',
     Nevada: '7000',
     NewYork: '1500000',
     NorthDakota: '3000'
   };
//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here
  for (var key in states) {
   if (states[key] > 30000) {
    alert(key);
  }
}

//NEXT PROBLEM
var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

 for (var x in user) {
  if (user[e] || user[e] === 0) {
    continue;
     }
    else {
    delete user[e];
  }
}
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
  user1.name = 'Jason Fowles';
  user1.username = 'jfowlesy';
  user1.pwHash = '1234';



//NEXT PROBLEM
var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here
  user.name = 'Tyler S. McGinnis';
  user.email = 'tyler.mcginnis@devmounta.in';
//Now call the sayEmail method that's on the user object which will alert the users email

  //Code Here
user.name();



//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here
var methodCollection = {};
/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here
  methodCollection.alertHello = function() {
     alert('hello');
   };
   methodCollection.logHello = function() {
     console.log('hello');
   };
//Now call your alertHello and logHello methods.

  //Code Here

  methodCollection.alertHello();
  methodCollection.logHello();

//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  //Code Here
  function MakePerson(name, bday, ssn) {
  var person = {};
  person.name = name;
  person.bday = bday;
  person.ssn = ssn;
  return person;
}
var firstPerson = MakePerson("Dustin", "3/14", 98234759384759384);
var secondPerson = MakePerson("Joe", "4/14", 982347594567);
var thirdPerson = MakePerson("Jake", "5/14", 87);

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);


//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  //Code Here
  function MakeCard(cardNumber, exp) {
  var card = {};
  card.cardNumber = cardNumber;
  card.exp = exp;
  return card;
}

var firstCard = MakeCard(2345, "07/17");
var secondCard = MakeCard(23456, "08/17");
var thirdCard = MakeCard(234567, "09/17");


//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  //Code Here
  var bindCard = function(person, card) {
  var newCard = {};
  newCard.name = person.name;
  newCard.bday = person.bday;
  newCard.ssn = person.ssn;
  newCard.cardNumber = card.cardNumber;
  newCard.exp = card.exp;
  return newCard;
};

var card1 = bindCard(firstPerson, firstCard);
var card2 = bindCard(secondPerson, secondCard);
var card3 = bindCard(thirdPerson, thirdCard);

console.log("card1: ", card1);
console.log("card2: ", card2);
console.log("card3: ", card3);
