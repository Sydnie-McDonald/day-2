// import functions
import { people } from './data.js';
// grab DOM elements
const selectEl = document.querySelector('.select');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const container = document.querySelector('.profile');
console.log(selectEl, nameEl, ageEl, bioEl, hobbiesEl, container);

// set event listeners 
// get user input
function userSelect{
    container.classList.add('${people[index].name}');
    nameEl.textContent = 'Name: ' + people[index].name;
    ageEl.textContent = 'Name: ' + people[index].age;
    bio.textContent = 'Name: ' + people[index].bio;

    for (const hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}
// use user input to update state 
// update DOM to reflect the new state
selectEl.addEventListener('change', (e) => {
    console.log('user clicked');
});