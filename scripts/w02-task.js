/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Luke Campbell";
const year = new Date();
let currentYear = year.getFullYear();
let profilePicture = ("images/me.jpeg");



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */

imageElement.setAttribute("src", profilePicture);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`)
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let favFoods = [" Pizza", " Sushi", " Lasagna", " Mac&Cheese"]
const addedFood = " Ribs";
favFoods.push(addedFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




