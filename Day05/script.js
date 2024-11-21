// //MATH OBJECT 

// //methods 

// //Math.round() ;
// // .1 => .4 lower number
// //.5 => .9 higher number
// console.log(Math.round(1.5))  ;

// //NOTE remove the decimals part
// console.log(Math.trunc(-2.9)) ;

// console.log(Math.floor(-2.9)) ; 

// console.log(Math.ceil(2.1)) ;

// console.log(Math.trunc(Math.random()*10)) ;

// console.log(Math.floor(Math.random() * 6)+ 1) ;



// console.log(Math.max(1,2,3,4,5)) ;

// const arr = [1,2,3,4,5,6,7,8] ;

// console.log(Math.max(...arr))

// console.log(Math.min(...arr)) ;

// console.log(Math.pow(2,3)) ;

// console.log(Math.PI) ;


// //NOTE DATE() ;
// //returns current date and time 
// const date = new Date() ;

// console.log(date) ;

// const weekdays = ['sunday','monday','tuesday','wednesday','thursday']

// console.log(weekdays[date.getDay()]) ;

// //month
// console.log(date.getMonth() + 1) ;

// //year 
// console.log(date.getFullYear()) ;

// //
// console.log(date.getDate()) ;

// const newtime = new Date('12-aug-2022') ;


// console.log(newtime) ;


// //NOTE create a function which takes a date as a input and check if today's its his/her birthday : 

// function BirthDayRemainder(userDate){
// console.log(userDate) ;
// const userTime    = new Date(userDate) ;
// console.log(userTime)
// const todayTime = new Date() ;
// console.log(todayTime) ;

// if(userTime.getDate()===todayTime.getDate() && userTime.getMonth() === todayTime.getMonth()){
//     console.log('today is your birthday')
// }else{
//     console.log('not your birthday')
// }
// }


// BirthDayRemainder('21-Nov-1997') ;

// console.log(new Date(2024,12,21,9,13,10)) ;

// const epochTime = Date.now()

// console.log(new Date(epochTime)) ;

// const setTime = new Date() ;

// console.log(setTime.toLocaleTimeString('en-IN'))
// console.log(setTime.setHours(23)) 
// console.log(setTime) ;


//NOTE HOISTING  ;

//NOTE var 
console.log(window.a)
console.log(window)
var a = 5 ; 

//var is hoisted and its initial value be undefined 

//NOTE let and const 
// console.log(b)

// let b ;
// b=6  ;
// console.log(b)

// console.log(c)

// function abc(){

// }

//expression 
// console.log(sum())
// // undefined() ;

// var sum = (a,b) => {
//     return a+b
// }


// funciton declaration - hoisted - self function
// var - hoisted - undefined
// let ,const  - hoisted - tdz 
// function expression - depend on keyword /let/const/var


//NOTE DOM => 

// DOCUMENT OBJECT MODEL
// dom tree 
console.log(document); //root 


//DOM using js main select , update ,remove  :


//select 

//document.getElementById() ;

const h1 = document.getElementById('heading') ;

// h1.innerText = 'hi'
// h1.style.color = 'red'
// console.dir(h1)
// console.log(h1)

//2nd using getElementsByTagName 

const h2 = document.getElementsByTagName('h1') ;

console.log(h2)
// console.log([1,2,3])

const usingClass = document.getElementsByClassName('head');
console.log(usingClass) ;

//querySelector 
const querySelector = document.querySelector('.head') ;

console.log(querySelector) 

//querySelectorAll
const querySelectorAll = document.querySelectorAll('.head') ;
console.log(querySelectorAll)

querySelectorAll.forEach((el)=>{
    el.innerHTML = 'nodelist'
});

//NOTE converting htmlcollection into an array so that we can loop each element in the htmlCollection
const newArray = [...usingClass] ;

newArray.forEach((el)=>{
    el.style.color = 'blue'
})

//NOTE html collection donot have a foreach method so we have to first convert it into arry to loopo

//NOTE querySelectorAll returna a NODELIST which we can directly loop using forEach method : 

//Updated : 





















