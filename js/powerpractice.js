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



// const ageTicker = () => {
//     let ticker = document.querySelector("#age-ticker")
//     if (myPet.age >= 0) {
//     ticker.innerHTML = myPet.age;
//     }
// }
// var paragraph = document.getElementById("p");
// var text = document.createTextNode("This just got added");

// paragraph.appendChild(text);

// ageTicker()

// document.addEventListener('click',(event) => {
//     if ( event.target.querySelector('#1') ){
//         const li = document.createElement('li');
//         li.textContent = "1"  // turn this into button click value???
        //    document.querySelector('#display').appendChild(li)
    //         }
    // }, false);

// connect to powerbar

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
// let boredBarInterval;
// let hungerBarInterval;
// let tiredBarInterval;
//--> EVENT LISTENERS <--\\
document.querySelector('#feed').addEventListener('click', () => {
    console.log("feed button clicked")    
    myPet.hunger = 0;
    hungryBar()     //---> Clayton Helped
    // alert(`${myPet.name} loves bananas`)
})

document.querySelector('#play').addEventListener('click', () => {
console.log("play button clicked")    
    myPet.bored = 0;
    boredBar() 
    // alert(`${myPet.name} is bored, let's play!`)
}) 

document.querySelector('#rest').addEventListener('click', () => {
console.log("rest button clicked")    
    myPet.tired = 0;
    tiredBar()
    // alert(`${myPet.name} is sleepy, lights off!`);
})

document.querySelector(".submitBtn").addEventListener('click', () => {
    console.log("input entered")
    const petName = document.querySelector('#submitScreen').value
    console.log(petName);
    myPet = new Pet(petName);
    document.querySelector("#age-ticker").innerHTML = `${myPet.name} is ${myPet.age} toma years old!`;
    actionimage.src = "https://media3.giphy.com/media/l2RsBwQxFPXUvXmi0u/200w.webp?cid=ecf05e475ca2a29171574f38672f524e"
//--> INTERVAL TIMER
        age = setInterval(() => {
            myPet.age++
            document.querySelector("#age-ticker").innerHTML = `${myPet.name} is ${myPet.age} toma years old!`;
            if (myPet.age === 50){
                clearInterval(age)
                console.log("congrats, your pet has died of old age")
            }}, 3000)
        bored = setInterval(() => {
            myPet.bored++
            boredBar()
            if (myPet.bored === 10){  // end game
            clearInterval(bored)
            // clearInterval(boredBarInterval)
            console.log("Sorry your pet got sick and died")
            }}, 4000);
        hunger = setInterval(() => {
            myPet.hunger++
            hungryBar()                                //----> Mike Helped
            if (myPet.hunger === 10){  // end game
                clearInterval(hunger)
                // clearInterval(hungerBarInterval)       //----> Mike Helped
                console.log("Sorry your pet starved to death")
            }}, 2000);    
        tired = setInterval(() => {
            myPet.tired++
            tiredBar()
            if (myPet.tired === 10){  // end game
                clearInterval(tired)
                // clearInterval(tiredBarInterval)
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