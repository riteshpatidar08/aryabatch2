'use strict';

//NOTE -  ASYNCHRONOUS JS

// console.log('hello')
// alert('hi')
// console.log('bye')

//setTimeout , setInterval
// console.log(window)\

//NOTE callback

function greet(callback) {
  callback();
}

function msg() {
  console.log('hi how are you');
}

greet(msg);

// setTimeout(()=>{
// alert('hi')
// },2000) ;

// setInterval(()=>{
//     console.log('hello')
// },1000) ;

//NOTE PROMISES :

// object= {} => properties , method

//NOTE PROMISES : PENDING < FULFILLED < REJECTED

//NOTE STEP2 => fulfilled => how to handle it
// rejected => how to handle it

//NOTE CREATING PROMISE IN JS

const willYouPassInExam = new Promise((resolve, reject) => {
  reject('you are fail in exam');
});

console.log(willYouPassInExam);

willYouPassInExam
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('always run');
  });

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => console.log(data));

function fetch2() {
  return new Promise((resolve, reject) => {
    resolve('hello from fetch2');
  });
}

fetch2().then((data) => console.log(data));

// https://restcountries.com/v3.1/all

//NOTE fetch the api
//NOTE get the data takes the country name out of the response
//NOTE create a div for each country name
//NOTE append it to the body

// fetch('https://restcountries.com/v3.1/all')
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((country) => {
//       console.log(country.name.common);
//       const h1 = document.createElement('h1');
//       h1.innerText = country.name.common;
//       document.body.appendChild(h1);
//     });
//   })
//   .catch((err)=>console.log(err)) ;

//async await => we can handle promises using async await keywords

async function message() {
  console.log('msg');
}

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    console.log('async', data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

//NOTE :
//use strict

// firstName = 'ritesh';
// console.log(firstName);

// function sum(a,a){
//     console.log(a,a)
// }

// const multiply =(b,b) => {
//     conosle.log(b,b)
// }

//this keyword

//global scope

// this.alert('hi')  window object

// function hello(){
//     console.log(this)
// }

// hello()

//obj
let firstName = 'ritesh';
let weekday = ['mon'];
const myDetails = {
  firstName,
  [weekday[0]]: true,
  printName: function () {
    console.log(this.firstName);
  },
  printLastName() {
    console.log('hi');
  },
};

console.log(myDetails);

//obj
