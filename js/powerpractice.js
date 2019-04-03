console.log("hello world")

class Pet {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.tired = 0;
        this.bored = 0;
    }
    // feed(){}
    // play(){}
    // rest(){}
}

//--> Variables
let myPet = {};
let age;
let bored;
let hunger;
let tired;

//--> Const / Functions
const actionimage = document.querySelector("#image");
 
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

const removePrompt = () => {
    let element = document.getElementById('submitScreen');
    element.parentNode.removeChild(element);
    let e = document.getElementById('submitBtn');
    e.parentNode.removeChild(e);
}

const startGame = () => {
    ageInter = setInterval(() => {
        myPet.age++
        document.querySelector("#age-ticker").innerHTML = `<b>${myPet.name}</b> is ${myPet.age} toma years old!`;
        if (myPet.age === 5){
            alert("congrats, your pet can evolve")
        }}, 6000)
    bored = setInterval(() => {
        myPet.bored++
        boredBar()
        if (myPet.bored === 10){ 
            gameOver();
        }}, 800);
    hunger = setInterval(() => {
        myPet.hunger++
        hungryBar()                               
        if (myPet.hunger === 10){ 
            gameOver()
        }}, 1600);
    tired = setInterval(() => {
        myPet.tired++
        tiredBar()
        if (myPet.tired === 10){ 
            gameOver()
        }}, 2400);    
}

const gameOver = () => {   
    if (myPet.hunger === 10 || myPet.tired === 10 || myPet.bored === 10){
    clearInterval(bored);
    clearInterval(tired);
    clearInterval(hunger);
    clearInterval(ageInter);
    actionimage.src = "https://media.giphy.com/media/ktvFa67wmjDEI/giphy.gif";
    // document.getElementsByTagName("button").removeEventListener();
    document.querySelector("#age-ticker").innerHTML = `<b>${myPet.name}</b> is dead at age ${myPet.age}`;}
}

//--> EVENT LISTENERS 
document.querySelector('#feed').addEventListener('click', () => {  
    myPet.hunger--;
    actionimage.src = "https://media.giphy.com/media/w0CJXS2M44xfW/giphy.gif";
    hungryBar()     
})

document.querySelector('#play').addEventListener('click', () => { 
    myPet.bored--;
    actionimage.src = "https://media.giphy.com/media/s7zMzcaHs9j0s/giphy.gif";
    boredBar() 
}) 

document.querySelector('#rest').addEventListener('click', () => {
    // if (myPet.tired < 10) {
    myPet.tired--;
    actionimage.src = "https://media.giphy.com/media/31AFIhDmJA86Y/giphy.gif";
    tiredBar()
})

//--> EVOLVE ATTEMPT
// https://media.giphy.com/media/hFqSV9JBsFbOw/giphy.gif

//----> SUBMIT CLICK
document.querySelector(".submitBtn").addEventListener('click', () => {
    const petName = document.querySelector('#submitScreen').value
    myPet = new Pet(petName);
    document.querySelector("#age-ticker").innerHTML = `<b>${myPet.name}</b> is ${myPet.age} toma years old!`;
    actionimage.src = "https://media.giphy.com/media/IMfi5ugpf3W1y/giphy.gif";
    removePrompt();
    startGame();
//--> INTERVAL TIMER
        // ageInter = setInterval(() => {
        //     myPet.age++
        //     document.querySelector("#age-ticker").innerHTML = `<b>${myPet.name}</b> is ${myPet.age} toma years old!`;
        //     if (myPet.age === 5){
        //         alert("congrats, your pet can evolve")
        //     }}, 6000)
        // bored = setInterval(() => {
        //     myPet.bored++
        //     boredBar()
        //     if (myPet.bored === 10){ 
        //         gameOver();
        //     }}, 800);
        // hunger = setInterval(() => {
        //     myPet.hunger++
        //     hungryBar()                               
        //     if (myPet.hunger === 10){ 
        //         gameOver()
        //     }}, 1600);
        // tired = setInterval(() => {
        //     myPet.tired++
        //     tiredBar()
        //     if (myPet.tired === 10){ 
        //         gameOver()
        //     }}, 2400);    
})



// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!