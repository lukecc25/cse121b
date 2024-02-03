/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Luke Campbell",
    photo: "images/me.jpeg",
    favoriteFoods: ["Pizza", "Sushi", "Lasagna", "Mac&Cheese", "Ribs"],
    hobbies: ["Video Games", "Watching TV", "Traveling"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Mesa, AZ',
        length: '18 years'
    },
    {
        place: 'Iba, PH-ZMB',
        length: '6 months'
    },
    {
        place: 'Guagua, PH-PAM',
        length: '3 months'
    },
    {
        place: 'San Narciso, PH-ZMB',
        length: '1 month'
    },
    {
        place: 'La Junta, CO',
        length: '6 months'
    },
    {
        place: 'Salida, CO',
        length: '4 months'
    },
    {
        place: 'Colorado Springs, CO',
        length: '3 months'
    },
    {
        place: 'Choteau, MT',
        length: '3 years'
    }
);
/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */ 

document.getElementById('photo').src = myProfile.photo;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
