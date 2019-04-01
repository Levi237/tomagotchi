console.log("hello world")
// Description
// Let's use our front-end web development skills to create a "living" pet! We'll use 
// HTML, CSS, and JavaScript/jQuery to interact with our pet.

// Requirements
// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
class Pet {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.sleep = 0;
        this.bored = 0;
    }
    feed(){
        // listen for click to give food to T
        document.querySelector("feed")  // later add different foods
    }
    play(){
        // listen for click to play with T
        document.querySelector("play")
    }
    rest(){
        // listen for click to rest T
        document.querySelector("rest")
    }
}

//-->  const PetDude = new Pet (${addNameHereFromPrompt}, egg)
    // Display a character of your choice on the screen to represent your pet
//--> m = character?
    // Display the following metrics for your pet:
    // Hunger (1-10 scale)
    // Sleepiness (1-10 scale)
    // Boredom (1-10 scale)
    // Age
    // Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
//--> create functinos for feed, play, rest
const feedToma = () => {

}

const playTime = () => {

}

const turnOffLights = () => {

}


    // Add the ability to name your pet.
    // Style the page.
    // Increase your pet's age every x minutes
//--> pets age += every x minutes
//--> create a countdown from span of age (x minutes)
//--> for every x amount of seconds T needs Hunger, Sleepiness, and Bored metrics to change "every so many"

//--> create functions to feed, play and rest for pet.

    // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
//-- as time increases increase hunger level, sleepiness, and boredom
    // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
    // Morph your pet at certain ages.
//--> M
    // Animate your pet across the screen while it's alive.

//create a display to show stats
let myPet = {};

const bored = {
    displayValue: '0',
  };

const tired = {
    displayValue: '0',
  };

const hungry = {
    displayValue: '0',
  };

const updateBoredDisplay = () => {
    const display = document.querySelector('#bored');
    display.value = bored.displayValue;
}

//--> EVENT LISTENERS <--\\
document.querySelector('#feed').addEventListener('click', () => {
    console.log("feed button clicked")    
    myPet.hunger = 10;
})

document.querySelector('#play').addEventListener('click', () => {
console.log("play button clicked")    
    myPet.bored = 10;  
}) 


document.querySelector('#rest').addEventListener('click', () => {
console.log("rest button clicked")    
    myPet.sleep = 10;
})

document.querySelector(".submitBtn").addEventListener('click', () => {
    console.log("input entered")
    const petName = document.querySelector('#submitScreen').value
    console.log(petName);
    myPet = new Pet(petName);
    alert("You have a new pet, say hello to " +myPet.name);
    console.log(myPet.name+" last log")
})



// //--> COUNTER  <--\\
// //setInterval                                  1000 = one second
// const inter = setInterval(() => {
//     console.log('hi')
//     }, 1000)
// // clearInterval(inter) // to clear
// // setInterval(() =>{
// //     console.log("hello"), 1000
// // })
// const timeout = setTimeout(() => {
//     clearInterval(inter); 
//     console.log("done")
//     }, 10000);
// // setTimeout()
// // clearTimeout()
// /* <button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button> */

// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!