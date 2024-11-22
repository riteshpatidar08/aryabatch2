//getting values from the element

const h1 = document.getElementById('heading');
const link = document.getElementById('link');
const img = document.getElementById('img');
const inputEl = document.getElementById('username');
//container
const container = document.getElementById('container');
console.log(h1);
console.log(link);

//textContent
console.log(h1.textContent);
h1.textContent = `<p>hello</p>`;
h1.textContent = 'updated using js';
//innerText
console.log(h1.innerText);
h1.innerText = `<p>hello</p>`;
// //innerHTML
console.log(h1.innerHTML);
h1.innerHTML = `<p>hello</p>`;

//changing anchor innerText
link.innerText = 'Amazon';
link.href = 'https://www.amazon.com';

//changin img src
// console.log(img.src)

// console.log(inputEl.value) ;

//creating element :

//decide which element you are going to create

const para = document.createElement('p');
para.innerText = 'lorem ipsum';
console.log(para);

container.appendChild(para);

const arr = [1, 2, 3, 4, 5, 6];

// document.body.appendChild(div)

arr.forEach((el) => {
  const div = document.createElement('div');
  div.innerText = el;
  document.body.appendChild(div);
});

{
  /* <input type='text' id='username' placeholder="enter user name"/> ; */
}

//create input element
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'username');
input.setAttribute('placeholder', 'enter username');
console.log(input);
document.body.appendChild(input);

//css
// h1.style.color = 'red'
// h1.style.border = '1px solid red' ;

//classlist add and remove classes

// console.log(h1.classList.remove('heading'))
// h1.classList.add('heading') ;
const ul = document.getElementById('list');
const li = document.createElement('li');
li.innerText = 'update item';
const li2 = document.createElement('li');
li2.innerText = 'update item 2';

// ul.appendChild(li ,li2)
// appendChild only add single element
// appned can add multiple element

ul.prepend(li);

//insertAdjacentElement

// ul.insertAdjacentElement('afterend' , li)
ul.insertAdjacentHTML('afterend', `<li>hello</li>`);

ul.removeChild(li);

//NOTE DOM METHODS

//SELECT

//document.getElmentByid
//documnet.getELementsByClassName
//document.getElmeentsBYTagName
//document.querySelector
//document.querySelectorAll

//NOTE update

// updating text in a html

//innerHTml , innerText , textContent

//NOTEupdating href

// el.hre = 'random url'

//NOTE append ,appendChild , prepend , insertAdjacentElement , insertAdjacentHTML ,insertAdjacentText , insertBefore

//NOTE EVENTS :

//we can write in two ways

const btn = document.getElementById('btn');

// console.dir(btn)

// btn.onclick = function(){
//     console.log('hello')
// } ;

// btn.onclick = function(){
//     console.log('dbl clicked')
// }

//addEventListener

btn.addEventListener('mouseenter', function () {
  btn.innerText = 'remove the cursor';
});
btn.addEventListener('mouseout', function () {
  btn.innerText = 'Click';
});

//input value get

// inputEl.addEventListener('input',(event)=>{
// console.log(event.target.value)
// console.log(event.target.name)
// })

document.body.addEventListener('keypress', (event) => {
  if (event.key === 'r') {
    document.body.style.backgroundColor = 'red';
  }
});

//submit

const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
console.log(form);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (user.value === '') {
    const error = document.createElement('span');
    console.log(error);
    error.textContent = 'Required Username';
    error.style.color = 'red';
    document.body.appendChild(error);
    user.style.border = '1px solid red';
  }
  const formData = {
    username: user.value,
    email: email.value,
  };
  console.log(formData);
});
