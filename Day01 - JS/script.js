console.log('external file');

//NOTE to print anything in the js you can use console.log() ;

//Javscript basics

//NOTE VALUE AND VARIABLES

// 'ritesh' => value => different types '' , "" , ``

//NOTE EXPRESSION AND STATEMENt
//NOTE EXPRESSSION => expression can be evaluated into a single value  eg like 5+7-8 the result is going to be a single value
//NOTE Statement => statement can be a any string or sentence.

//TODO DATATYPES => primitive and non primitve

//PRIMITIVE
//STRING
//NUMBER
//BOOLEAN
//UNDEFINED
//NULL
// BIGINT
// SYMBOL

//NOTE STRING

let firstName = 'ritesh';

//typeof => is used to check which type of data is stored in the variable

console.log(typeof firstName);

let phoneNumber = 32423423;
console.log(typeof phoneNumber);

let willIpassInExam = true;
console.log(typeof willIpassInExam);

//NOTE UNDEFINED ;

let college;
//gives undefined till line 46 because i haven't assign value to it till line 46
console.log(typeof college);

college = 'arya';

console.log(typeof college);

//NOTE NULL

let lastName = null;

console.log(typeof lastName);

//NOTE HOW TO DECLARE Varaiables in hte javascript

//naming the js variable you have to follow the "camelCase" ;
// isJavascriptFun

//keywords used to decalre variables .

//var , let and const

//Note let

//ON BASIS OF REASSIGN and REDECLARATION

let address = 'Jaipur';

address = 'Delhi';

console.log(address);

//let is reassignable✅ value can be changed in the future

//REDECLARATION ❌
// let address = 'mumbai'

//NOTE CONST ;

const mobNumber = 3423432324;

//REASSIGN ❌
// mobNumber = 324324 ;

console.log(mobNumber);

//REDECLARATION ❌

// const mobNumber = 3243243

//VAR keyword
//REASSIGN ✅
var department = 'cs';
department = 'ec';

console.log(department);

//REDECLARATION ✅
var department = 'me';
console.log(department);

//NON-PRIMITIVE ;

let friends1 = 'aman ';
let friend2 = 'utsav';

let friendArr = ['aman', 'utsav', 5, ['aman']];

console.log(typeof friendArr);

const addresss = {
  state: 'rajasthan',
  city: 'jaipur',
};

console.log(typeof addresss);

//operators

//NOTE airthmetic operators ;
//Note + , - , * , / ,% , **
console.log(5 + 5);
console.log('arya' + 'college');

//NOTE Assignment operators ;
//NOTE = , += , -= , *= , /=
let x = 5;
x = x + 5;
x += 5;
//NOTE Comparison operators ;
//NOTE  == , === , != , !== , > ,<

//NOTE LOOSE EQUALITY (==) ;
console.log(5 == '5');

//NOTE STRICT EQUALITY (===) ;
console.log(5 === '5');

//NOTE LOOSE NOT EQUALITY (!=)
console.log(5 != '5');

//NOTE STRICT NOT EQUALITY (!==) ;
console.log(5 !== '5');

//NOTE Logical && , || , !
let a = true;
let b = false;

console.log(a && b);
console.log(a && true);

let c = true;
let d = false;

console.log(!c);
console.log(!d);

//REVIEW TOPICS FOR INTERVIEW from today class

//TODO diffrence between null and undefined  ;
//type of null
//type of array
//let , const ,var ,  diffrence 
//strict equality and loose equality .


