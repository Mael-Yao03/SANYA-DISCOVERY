// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/spir.jpg') {
    myImage.setAttribute ('src','images/naruto.jpg');
  } else {
    myImage.setAttribute ('src','images/spir.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt("Entrez votre nom d'utilisateur svp.");
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Le manga c'est génial, " + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "Le manga c'est génial, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}
