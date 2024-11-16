//interaction function in the js

//prompt , confirm , alert

// alert('hello')

//prompt ;

//  let fName  = prompt('enter your name') ;
// console.log(fName);

// let input = confirm("are you over 18")
// console.log(input)

//global object window

console.log(window);

//loops

//for of

const products = ['ac', 'tv', 'refrigerator'];

for (let item of products) {
  console.log(item);
}

//for in

for (let index in products) {
  console.log(index);
}

const obj = {
  productName: 'TV',
  price: 43433,
};

//template string or string

const college = 'arya';
console.log('my' + ' ' + 'college' + 'name' + 'is' + college);

console.log(`my college name is ${college} `);

//for in loop

for (let keys in obj) {
  console.log(`${keys}:${obj[keys]}`);
}

//for
const numbersArray = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbersArray.length; i++) {
  if (i == 2) {
    break;
  }
  console.log(numbersArray[i]);
}

//const fruits = ['mango','grapes','papaya'] ;

// fruits : mango
// character 1 : m
// character 2 : a
// character 3 : n
// character 4 : g

//outer  loop condition fruits.length
// console.log(`fruits : ${fruits[i]}`)
//inner loop condition fruits[i].length
// character {1 + j} : fruits[i][j]

//NOTE do while
// let password = 'ritesh@123' ;
// let confirmPassword ;
// do{
// confirmPassword = prompt('enter your password')
// if(confirmPassword !== password){
//     alert('invalid password please try again')
// }

// }while(confirmPassword !== password) ;

// alert('Login successfull')

// prompt enter your choice
// 1. hi
// 2 .bye
// 3 .leave

//while

// let i = 0 ;

// while(i < numbersArray.length){
//     console.log(numbersArray[i]) ;
//     i++

// }

//NOTE REMAINING ARRAY METHOD :

const usernames = ['ritesh@123', 'abc@123', 'hello@123', 'test@123'];

//NOTE indexOf

const indexOfOutput = usernames.indexOf('ritesh@123');
console.log(indexOfOutput);

//NOTE at
const atOuput = usernames.at(1);
console.log(atOuput);

//NOTE Slice and Splice

//NOTE to extract the part of array from any start index to any end index

const slicedOutput = usernames.slice(1, 3);

//NOTE contains items = end index - start index
//always creates a new array
console.log(slicedOutput);
//note donot change original array
console.log(usernames);

//NOTE Splice (add ,replace ,delete) ;

const spliceOutput = usernames.splice(1, 0, 'xyz@123');

//mutates or change the original array
console.log(usernames);
console.log(spliceOutput);

//NOTE findIndex
//NOTE HIGHER ORDER METHOD WHICH ACCEPTS A FUNCTION AS AN ARGUMENT
//NOTE the function we are passing in a argumnet of higher order method is called callback function.
//NOTE passing a function as an argument
//NOTE => callback in arrow function ()=>{}
const num = [1, 2, 3, 4, 5];
const findIndexOutput = num.findIndex((item) => {
  return item > 5;
});

console.log(findIndexOutput);

//NOTE forEach()  (HIGHER ORDER METHOD)

usernames.forEach((item) => {
  console.log(item);
});

//NOTE filter method (HIGHER ORDER METHOD) ;
//array of object
const productss = [
  {
    productName: 'mobile',
    category: 'mobile',
    price: 45454,
    InStock : true ,
  },
  {
    productName: 'ac',
    category: 'electronics',
    price: 34343,
    InStock : false ,
  },
  {
    productName: 'tv',
    category: 'electronics',
    price: 34343,
    InStock : true
  },
];

const filteredOutput = productss.filter((item)=>{
    return item.category === 'electronics'
})

console.log(filteredOutput) ;


//NOTE FIND  returns only a single element which matches the condition in the callback function
const findOutput = productss.find((item)=>{
    return item.category === 'electronics'
})

console.log(findOutput) ;


//NOTE MAP method (HIGHER ORDER METHOD)  used to do some transformation on the original array and return a new array.

const namess = [{firstName:'abc',lastName:'xyz'}] ;

const mappedOutput = namess.map((item)=>{
 return `${item.firstName} ${item.lastName}`
})

console.log(mappedOutput)

//reduce reduce all the elements in to single value ;

const oneToTen = [1,2,3,4,5,6,7,8,9,10] ;

const reducedOutput = oneToTen.reduce((accumulator,currentItem)=>{
    console.log(accumulator,currentItem)
    return accumulator + currentItem ;
},0)  ;

console.log(reducedOutput) ;

const cartItem = [{productNane:'shirt',price:500,quantity : 2},{productNane:'Jeans',price:1000,quantity : 3}]

const totalCartItem = cartItem.reduce((accumulator,currentItem)=>{
    console.log(accumulator , currentItem)
    return accumulator + (currentItem.price * currentItem.quantity)
},0)

console.log(totalCartItem) ;

//NOTE join convert the array into string ;

const arry = ['hello','hi'] ;
//accepts a separator ;
const joinOutput = arry.join(' ') ;
console.log(joinOutput) ;


//NOTE SOME OR EVERY METHOD : RETURN TRUE AND FALSE ;

const someOutput = productss.some((item)=>{
 return !item.InStock
})

console.log(someOutput) ;

const everyOutput = productss.every((item)=>{
    return !item.InStock
})


console.log(everyOutput) ;

//reverse 

const reversedArray = productss.reverse() ;
console.log(reversedArray);
console.log(productss) ;

//toReversed donot mutate the original array

//NOTE sort 
const sorted = oneToTen.sort((a,b)=>{
return b-a
}) ;


console.log(sorted) ;

//OBJECT METHODS : 

const books = {
    bookName : "abc" ,
    author : 'xyz' ,
    price : 342
}

//Object.keys() ;

// const objkeys = Object.keys(books) ;

// console.log(objkeys) ;

// objkeys.forEach((key)=>{
//     console.log(key)
// })

//chaining 

Object.keys(books).forEach(key=>console.log(key)) ;


//Object.values() ;

Object.values(books).forEach(value=>console.log(value))

//Object.entries : 
const entryOutput = Object.entries(books) ;

console.log(entryOutput)

entryOutput.forEach(([key,value])=>{
    console.log(`${key}: ${value}`)
}) ;





