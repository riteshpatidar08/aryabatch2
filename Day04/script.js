//NOTE Spread OPerator(...) ;

const arr = [1,2,3,4,5] ;

console.log(...arr) ;


// const newarr = arr ;

// newarr.push(6) ;
// console.log(newarr) ;
// console.log(arr) ;

//NOTE used to create a copy of array ;

const newSpreadArray = [...arr] ; 
console.log(newSpreadArray) ;

newSpreadArray.push(6) ;
console.log(newSpreadArray)
console.log(arr) ;

//NOTE two array concate ;

const fruits = ['mango','grapes'];
const vegatables = [

'tomato ' , 'potato'
]


const groceryItems = [...fruits,...vegatables] ;

console.log(groceryItems) ;

//NOTE adding new item : 


const newFruits = ['papaya' ,...fruits,'orange']
console.log(newFruits)


//NOTE object 

const myDetails = {
    firstName : "ritesh",
    address : 'jaipur',
    branch : 'it'
}

const newItem = {
    branch : 'cs'
}


//concate two objects 

const fullDetails = {...myDetails , ...newItem} ;

console.log(fullDetails) ;

//NOTE updating a new property using spread operator ;


const newObj = {...myDetails , address:"ajmer"} ;

console.log(newObj); 


//NOTE  STRING METHODS : 

//NOTE Split  method 

const str = 'I am learning javascript' ;

const splitOutput = str.split(' ') ;
console.log(splitOutput)
const longestWord = splitOutput.reduce((longest,currentItem)=>{
console.log(longest , currentItem)
return currentItem.length > longest.length ? currentItem : longest
}," ")
 
console.log(longestWord) ;




//split
//reduce
//longest = ''; 


//NOTE indexOf

//return -1 if the word is not available in the string
console.log(str.indexOf('z',6))

//NOTE charAt 

console.log(str.charAt(3))
 

//NOTE slice

console.log(str.slice(5,1)) ;

//NOTE substring

//NOTE when the start index is greater than end index it will reverse the index value (5,1) => (1,5)
console.log(str.substring(5,1))


//NOTE => I am the student of arya ;

//split
//map
//each word charAt(0).touppercase + word.slice(1)
//join


//NOTE toUpperCase() ;
const toUpper = 'i am the student of arya';

const splittedOuput = toUpper.split(' ')
console.log(splittedOuput) ;

const mappedOutput = splittedOuput.map((word)=>{
   console.log(word.charAt(0).toUpperCase() + word.slice(1))
})


//toLowerCase 

const toLower = 'HELLO HOW ARE YOU' ;

console.log(toLower.toLowerCase())  ;

//includes 

const email = 'abc@gmail.com' ;

console.log(email.includes('@')) ;

//startWith  //endsWith


console.log(email.endsWith('.com'))

console.log('we are here'.startsWith('we'));

//trim : 

console.log('   hello   '.trim()) ;

console.log('    hello     '.trimEnd()) ;

//padStart 

const cardNumber = '43243243243243'  ;

const sliceCardNumber = cardNumber.slice(-4);
 
console.log(sliceCardNumber) ; 

console.log(sliceCardNumber.padStart(16,'*'))

const p =  'hope' ;
console.log(p.padEnd(10,'.')) ;
 

//NOTE .png and .jpeg ;

function checkImage(img){
    return img.endsWith('.png') || img.endsWith('.jpeg')
}


console.log(checkImage('img.png')) ;


const extensions = ['.jpg','.png','.jpeg','.webp'] ;

const imageName = 'imge.jpg'
const validImage = extensions.some((ext)=>{
    return  imageName.endsWith(`${ext}`)
})

console.log(validImage)

//NOTE repeat 

const dot = '.' 

console.log(`Loading${dot.repeat(5)}`) 

//NOTE replace ; //NOTE replace only first occurance of speicific word
//NOTE replaceALl replace all the occurance of the specific word
const sentence = 'hello we is is learning js' ;

console.log(sentence.replace('is','are'))

const para =  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quas est ipsam doloremque! Consequuntur atque dolorum ipsam ad nihil esse placeat asperiores odio fugiat, sapiente adipisci, harum nulla, deleniti repellat.'


console.log(para.match('esse')) ;

console.log(para.search('elit')) ; 



//error handling 
// let college = 'arya'
// console.log(colleg)
// //reference error + 
// //typeerror 

// [1,2,3,4].substring(1,2)

//debugger 
let n = 10
for(let i=0 ; i< n ; i++ ){
    // debugger ;
    console.log(i)
}


try {
    let  b = null ;
    if(b === null) {
     throw  new Error('b value is null')
    }
} catch (error) {
    console.log(error)
}

 





       


 











