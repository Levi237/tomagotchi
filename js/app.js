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

let myPet = {};
let age;
let bored;
let hungry;
let tired;

    // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
//-- as time increases increase hunger level, sleepiness, and boredom
    // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
    // Morph your pet at certain ages.
//--> M
    // Animate your pet across the screen while it's alive.

//create a display to show stats

//--> EXAMPLE COUNTER
// inter = setInterval(() => {
//     // console.log('hi')
//     myPet.age++
//     if (myPet.age === 50){
//         clearInterval(inter)
//         console.log("congrats, your pet has died of old age")
//     }
//     }, 30000)

// const timeout = setTimeout(() => {
//     clearInterval(inter); 
//     console.log("done")
//     this.age = this.age++;
//     console.log(this.age)
//     }, 10000);
// inter = setInterval(() => {
//     // console.log('hi')
//     myPet.age++
//     if (myPet.age === 50){
//         clearInterval(inter)
//         console.log("congrats, your pet has died of old age")
//     }
//     }, 3000)
const actionimage = document.querySelector("#image");
const prompt = document.querySelector("#prompt");
//--> EVENT LISTENERS <--\\
document.querySelector('#feed').addEventListener('click', () => {
    console.log("feed button clicked")    
    myPet.hunger = 1;
    alert(`${myPet.name} loves bananas`)
})

document.querySelector('#play').addEventListener('click', () => {
console.log("play button clicked")    
    myPet.bored = 1;  
    alert(`${myPet.name} is bored, let's play!`)
}) 

document.querySelector('#rest').addEventListener('click', () => {
console.log("rest button clicked")    
    myPet.sleep = 1;
    alert(`${myPet.name} is sleepy, lights off!`);
})

document.querySelector(".submitBtn").addEventListener('click', () => {
    console.log("input entered")
    const petName = document.querySelector('#submitScreen').value
    console.log(petName);
    myPet = new Pet(petName);
    // alert("You have a new pet, say hello to " +myPet.name);
//--> insert image
// prompt = myPet.name
    actionimage.src = "https://media3.giphy.com/media/l2RsBwQxFPXUvXmi0u/200w.webp?cid=ecf05e475ca2a29171574f38672f524e"
    // document.querySelector('p')
    // document.paragraph.appendChild(document.createElement('<img src="https://media3.giphy.com/media/l2RsBwQxFPXUvXmi0u/200w.webp?cid=ecf05e475ca2a29171574f38672f524e">'))
    // src="
//--> INTERVAL TIMER
        inter = setInterval(() => {
            // console.log('hi')
            myPet.age++
            if (myPet.age === 50){
                clearInterval(inter)
                console.log("congrats, your pet has died of old age")
            }}, 3000)
        bored = setInterval(() => {
            myPet.bored++
            if (myPet.bored === 10){  // end game
            clearInterval(bored)
            console.log("Sorry your pet got sick and died")
            }}, 3000);
        hungry = setInterval(() => {
            myPet.hungry++
            if (myPet.hungry === 10){  // end game
                clearInterval(hungry)
                console.log("Sorry your pet starved to death")
            }}, 1000);    
        tired = setInterval(() => {
            myPet.tired++
            if (myPet.tired === 10){  // end game
                clearInterval(tired)
                console.log("Sorry your pet went insane and commitd suicide")
            }}, 3000);    
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