// Get the container where the card will be added
const cardContainer = document.getElementById('card-container');

// Create card element
const card = document.createElement('div');
card.className = 'card';

// Create image element
const cardImage = document.createElement('img');
cardImage.src = 'https://via.placeholder.com/300x150';
cardImage.alt = 'Card Image';

// Create title element
const cardTitle = document.createElement('h3');
cardTitle.textContent = 'Card Title';

// Create description element
const cardDescription = document.createElement('p');
cardDescription.textContent = 'This is a simple card description. You can add more details here.';

// Create button element
const cardButton = document.createElement('button');
cardButton.textContent = 'Learn More';
cardButton.onclick = () => alert('Button Clicked!');

// Append all elements to the card
card.appendChild(cardImage);
card.appendChild(cardTitle);
card.appendChild(cardDescription);
card.appendChild(cardButton);

// Append the card to the container
cardContainer.appendChild(card);


const arr = [1,2,3,4,5];
const arr2 = new Array(1,3,4,5) ;

console.log(arr)
console.log(arr2.hasOwnProperty(3))





