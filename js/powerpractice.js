console.log("hello world")

class Pet {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.tired = 0;
        this.bored = 0;
    }
    // feed(){
    //     // listen for click to give food to T
    //     document.querySelector("feed")  // later add different foods
    // }
    // play(){
    //     // listen for click to play with T
    //     document.querySelector("play")
    // }
    // rest(){
    //     // listen for click to rest T
    //     document.querySelector("rest")
    // }
}

let myPet = {};
let age;
let bored;
let hunger;
let tired;


const actionimage = document.querySelector("#image");
const prompt = document.querySelector("#prompt");

 
const hungryBar = () => {
    let barHungry = document.querySelector("#hungry-bar")
    if (myPet.hunger >= 0) {
        barHungry.value = myPet.hunger;
    }
}
const boredBar = () => {
    let barBored = document.querySelector("#bored-bar")
    if (myPet.bored >= 0) {
        barBored.value = myPet.bored;
    }
}
const tiredBar = () => {
    let barTired = document.querySelector("#tired-bar")
    if (myPet.tired >= 0) {
        barTired.value = myPet.tired;
    }
}

const resetGame = () => {
    if (myPet.hunger === 10 || myPet.tired === 10 || myPet.bored === 10){
    console.log("reset game")
    clearInterval(bored);
    clearInterval(tired);
    clearInterval(hunger);
    clearInterval(ageInter);
    actionimage.src = "https://media.giphy.com/media/l0Iydl9zWjbLvLv6U/giphy.gif";
    document.querySelector("#age-ticker").innerHTML = `${myPet.name} is dead at age ${myPet.age}`;}
}
// let boredBarInterval;
// let hungerBarInterval;
// let tiredBarInterval;
//--> EVENT LISTENERS <--\\
document.querySelector('#feed').addEventListener('click', () => {  
    myPet.hunger = 0;
    actionimage.src = "https://media.giphy.com/media/dah9icgJA9AFG/giphy.gif";
    hungryBar()     //---> Clayton Helped
    // alert(`${myPet.name} loves bananas`)
})
document.querySelector('#play').addEventListener('click', () => { 
    myPet.bored = 0;
    actionimage.src = "https://media.giphy.com/media/cDJq5MNA7GE6c/giphy.gif";
    boredBar() 
    // alert(`${myPet.name} is bored, let's play!`)
}) 
document.querySelector('#rest').addEventListener('click', () => {
    myPet.tired = 0;
    actionimage.src = "https://media.giphy.com/media/3o6ZsUJ44ffpnAW7Dy/giphy.gif";
    tiredBar()
    // alert(`${myPet.name} is sleepy, lights off!`);
})
//----> SUBMIT CLICK
document.querySelector(".submitBtn").addEventListener('click', () => {
    const petName = document.querySelector('#submitScreen').value
    myPet = new Pet(petName);
    document.querySelector("#age-ticker").innerHTML = `${myPet.name} is ${myPet.age} toma years old!`;
    actionimage.src = "https://media.giphy.com/media/GEfzIkjvLXNSM/giphy.gif";
    //--> INTERVAL TIMER
        ageInter = setInterval(() => {
            myPet.age++
            document.querySelector("#age-ticker").innerHTML = `${myPet.name} is ${myPet.age} toma years old!`;
            // if (myPet.hunger === 10 || myPet.tired === 10 || myPet.bored === 10){
            //     clearInterval(ageInter);
                // alert("death!")
            // }
            if (myPet.age === 5){
                // clearInterval(ageInter)
                alert("congrats, your pet can evolve")
            }}, 300)
        bored = setInterval(() => {
            myPet.bored++
            boredBar()
            if (myPet.bored === 10){  // end game
            // clearInterval(bored)
            resetGame()
            // clearInterval(boredBarInterval)
            console.log("Sorry your pet got sick and died")
            }}, 400);
        hunger = setInterval(() => {
            myPet.hunger++
            hungryBar()                                //----> Mike Helped
            if (myPet.hunger === 10){  // end game
                // clearInterval(hunger)
                resetGame()
                // clearInterval(hungerBarInterval)       //----> Mike Helped
                console.log("Sorry your pet starved to death")
            }}, 100);    
        tired = setInterval(() => {
            myPet.tired++
            tiredBar()
            if (myPet.hunger === 10 || myPet.tired === 10 || myPet.bored === 10){  // end game
                clearInterval(tired)
                resetGame()
                // clearInterval(tiredBarInterval)
                console.log("Sorry your pet went insane and commitd suicide")
            }}, 300);    
})


// resetGame()
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