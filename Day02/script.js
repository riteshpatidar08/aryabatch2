//NOTE  type conversion and type coersion

//NOTE TYPE COERSION

// const a = 5 + '5' ;
// console.log(a)
// console.log(typeof a )

// const b = +'5' ;
// console.log(typeof b)

// const c = true + 1 ;

// console.log(c)
// console.log( typeof c) ;

//Type conversion ;

const str = 'true';

console.log(typeof Boolean(str));
console.log(typeof Number('5'));

//TODO TYPE CONVERSION AND TYPE COERSION

//Control statement

// if(condition){
//     block will execute
// }

const studying = true;

if ({}) {
  console.log('we are studying');
}

//falsy and truthy values  ;

const raining = false;

if (raining) {
  console.log('raining please take an umbrella');
} else {
  console.log('go without umbrella');
}

const member = false;
const totalPurchase = 250;

if (member) {
  if (totalPurchase > 250) {
    console.log('you got 20% discount');
  } else {
    console.log('you got 10% discount');
  }
} else {
  console.log('you donot get a discount');
}

// const drink = prompt('Choose you drink cola , tea , coffee, pepsi')

// if(drink === 'cola'){
//     console.log('dispatch cola')
// }else if (drink  === 'tea'){

// }

// switch(drink) {
//     case 'cola' :
//         console.log('dispatching cola')
//         break ;
//     case 'tea' :
//         console.log('dispatching tea');
//         default :
//         console.log('invalid drink')
// } ;

//NOTE Functions ;
//immediately invoked function expression
//async function
//callback function
//higher order function
//anonymous function

//NOTE Function declaration
//NOTE we can call the function declaration before initialize the function because of the "hoisting"
const totalsum = sum(3, 4);
console.log(totalsum);

function sum(a, b) {
  return a + b;
}

//NOTE Function expression ;
//NOTE in javascript function treated as value ;
//NOTE we cannot call the function expression before initialization

// substraction(6,3)
// const substraction = function(a,b){
// return a-b ;
// }

//NOTE Arrow function

//NOTE single line
//note in the case of single line arrow function we donot need to use the curly braces or return statement
//NOTE not hoisted
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

//NOTE multi line
const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(4, 5));

//NON-PRIMITIVE TYPE ARRAY AND OBJECTS :

const arr = [true, 'string', 4];

console.log(arr.length);
console.log(arr[0]);

//methods in array ;

// 1 push method ;
//NOTE mutates the original array and returns the length of new array ;
const newarr = arr.push('hello');
console.log(newarr);
console.log(arr);

//NOTE 2 pop method ;
//return the element which is removed and mutates the original array
const popArray = arr.pop();
console.log(popArray);
console.log(arr);

//shift and unshift ;

//3.unshift
//NOTE mutates the original array and returns the length of new array ;
const unshiftArry = arr.unshift(5);
console.log(unshiftArry);
console.log(arr);

//4.shift => remove element from start
//return the element which is removed and mutates the original array .

const shiftArray = arr.shift();
console.log(shiftArray);
console.log(arr);

//Includes

const includeResult = arr.includes('string');
console.log(includeResult);

//important => ES6 destructring ;

// const item1 = arr[0] ;
// const item2 = arr[1] ;

// console.log(item1,item2)

const companies = ['google', 'meta', 'netflix', 'amazon'];

const [item1, , item3, item4, item5] = companies;

console.log(item1, item3, item4);

const num = [1, [2, 3, 4], 5, 6, 7];

const [a, [b, c, d], e, f] = num;

console.log(a, b, c, d, e, f);

//OBJ =>

const myDetails = {
  firstname: 'ritesh',
  age: 2024 - 1997,
  friend: ['aman', 'utsav'],
  address: {
    state: 'rajasthan',
    pincode: 302033,
    city: 'jaipur',
  },
  getname: function () {
    console.log('hello');
  },
};

//DOT NOTATION
//BRACKET NOTATION

//getting values from object
console.log(myDetails.firstname);
console.log(myDetails.friend[1]);
console.log(myDetails.address.state);

//change the value of any specific key

myDetails.firstname = 'abc';
console.log(myDetails.firstname);
console.log(myDetails.getname());

//adding a new property
myDetails.birthYear = 1997;
console.log(myDetails);

//destructuring in object ;

const {
  firstname: name,
  birthYear,
  address: { state, city },
} = myDetails;
console.log(name, birthYear);
console.log(state, city);
