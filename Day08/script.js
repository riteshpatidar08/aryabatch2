// // this keyword binding

// function greet(age){
//     console.log(this)
//     console.log(`my name is ${this.firstname} and age is ${age}`)
// }

// greet()

// const person = {
//     firstname : 'ritesh'
// }

// // this = person

// //call
// greet.call(person,30) ;

// //apply
// greet.apply(person,[30]) ;

// //bind
// const newfn = greet.bind(person,30)
// newfn()

// const train1  = {
//     TrainName : 'Jaipur-Mumbai' ,
//     bookings : function(trainNum,name){
//     console.log(`${name} booked ticket on ${trainNum} ${this.TrainName}`)
//     }
// }

// train1.bookings(12334,'ritesh') ;

// const train2 = {
//     TrainName : 'Jaipur-chennai'
// }

// const book = train1.bookings ;

// book.call(train2 ,12321,'ritesh') ;

//constructor function

// function Player(firstname, team) {
//   (this.firstname = firstname), (this.team = team);
//   // this.Playfor = function(){
//   //     console.log(`${this.firstname} plays for ${this.team}`)
//   // }
// }

// Player.prototype.Playfor = function () {
//   console.log(`${this.firstname} plays for ${this.team}`);
// };
// console.log(Player.prototype);

// const Virat = new Player('virat', 'india');
// const Rohit = new Player('rohit', 'india');
// console.log(Virat);
// console.log(Rohit);
// Virat.Playfor();
// Rohit.Playfor();

// console.log(Virat.__proto__);

// console.log(Virat.hasOwnProperty('firstname'));

//ES6 CLASSES

class Player {
  constructor(firstname, team) {
    (this.firstname = firstname), (this.team = team);
  }
  playsfor() {
    console.log(`${this.firstname} plays for ${this.team}`);
  }
}

const virat = new Player('virat', 'india');
const gill = new Player('gill', 'india');

console.log(virat, gill);

class Bumrah extends Player {
  constructor(firstname, team, Iplteam) {
    super(firstname, team);
    this.Iplteam = Iplteam;
  }
  playsfor() {
    console.log(`${this.firstname} plays for ${this.team} and ${this.Iplteam}`);
  }
}

const playerJasprit = new Bumrah('Jasprit', 'india', 'mi');
console.log(playerJasprit.playsfor());

// const date = new Date()

// date.getTime(); => instance

// Date.now() => static

//NOTE closures

function dummy() {
  const a = 5;
  const b = 10;
  return function () {
    console.log(a, b);
  };
}

const a = dummy();
a();

//scope chain

function fn1() {
  const college = 'arya';
  function fn2() {
    function fn3() {
      console.log(college);
      const department = 'cs';
    }
    fn3();
  }
  fn2();
}

fn1();

//scope => global , function scope , block ;

let aa = 5;

function b() {
  var team = 'mi';
}

b();

// console.log(team)

if (true) {
  // let gadget = 'laptop'
  var gadget2 = 'laptop';
}

// console.log(gadget)
// console.log(gadget2)

function add(a = 5, b = 5) {
  console.log(a + b);
}

// short circuiting
//short circuits when it gets truthy value
console.log('hello' || 5);

//short &&
//short circuits when it get falsy value
console.log(0 && 'hello');

//when both the values are truthy in && it will return last one.

const myDetails = {
  firstname: 'ritesh',
  age: 30,
};

// JSON => javascript object notation

// {"firstname" : "ritesh","age": "30"}
const string = JSON.stringify(myDetails);

const newObj = JSON.parse(string);

console.log(newObj);



