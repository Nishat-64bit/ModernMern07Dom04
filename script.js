// // catch all playerone and player two Box
// const PlayerOneBox = document.querySelector(".PlayerOneBox")
// const PlayerTwoBox = document.querySelector(".PlayerTwoBox")

// /// catch all the variable mainbox

// const mainBox = document.querySelector(".mainBox")
// const title = document.querySelector(".title")
// const PlayerOne = document.querySelector(".PlayerOne")
// const inputField = document.querySelector(".inputField")
// const Start = document.querySelector(".Start")


// // all error for mainbox and guessbox
// const allError = document.querySelector(".allError")
// const allError2 = document.querySelector(".allError2")

// /// catch all the variable GuessBox

// const GuessBox = document.querySelector(".GuessBox")
// const guessBoxTitle = document.querySelector(".guessBoxTitle")
// const playertwo = document.querySelector(".playertwo")
// const GuessField = document.querySelector(".GuessField")
// const Guess = document.querySelector(".Guess")
// const Playagain = document.querySelector(".Playagain")


// // ======================= player 1  =================================

// // mainbox startbtn addeventlistener
// let PlayerOneValue = null
// let chance = 5;
// Start.addEventListener("click",()=>{
//     // if player give string 
//     if(isNaN(inputField.value)){
//         allError.innerHTML = "Please Insert a Number"
//         allError.style.color="red"
//         allError.style.textAlign="center"
//         return
//     }else if (inputField.value.length>4){
//         allError.innerHTML = "Please Insert Maximum 3 Digit Number"
//         allError.style.color="red"
//         allError.style.textAlign="center"
//     }

//     // if player give number
//     PlayerOneValue = inputField.value; // ekane 1st player er kaj ses
//     //console.log(PlayerOneValue);
//     PlayerOneBox.style.display="none"
//     PlayerTwoBox.style.display="block"
    
// })


// // keydown eventlistenter to remove error message
// inputField.addEventListener("keydown",(e)=>{
//     if(e.key=="Backspace"){
//         allError.innerHTML=''
//     }
//     return;
// })

// // ======================= player 1  =================================

// // mainbox startbtn addeventlistener
// let PlayerTwoValue = null
// Guess.addEventListener("click",()=>{
//     // if player give string 
//     if(isNaN(Guess.value)){
//         allError2.innerHTML = "Please Insert a Number"
//         allError2.style.color="red"
//         allError2.style.textAlign="center"
//         return
//     }else if (GuessField.value.length>4){
//         allError2.innerHTML = "Please Insert Maximum 3 Digit Number"
//         allError2.style.color="red"
//         allError2.style.textAlign="center"
//     }

//     // if player 2 give number
//     PlayerTwoValue = GuessField.value; // ekane 1st player er kaj ses
//     //console.log(PlayerTwoValue);

//     // jodi player one and player two mile ba na mile 
//     if(PlayerOneValue==PlayerTwoValue){
//         // console.log("milse");
//         // jodi mile jai //
//         Guess.style.display="none"
//             GuessField.style.display="none"
//             playertwo.style.display="none"
//             guessBoxTitle.style.display="none"
//             allError2.innerHTML= "Congratulation,Winner"
//             allError2.style.color = "black"
//             allError2.style.backgroundColor="white"
//             allError2.style.borderRadius = "10px"
//             allError2.style.border = "1px solid black"
//             allError2.style.padding = "10px 20px"
//             allError2.style.textAlign = "center"
//             allError2.style.fontSize = "25px"
//             // create playagin // 
//             Playagain.style.display="block"
//             Playagain.innerHTML = "Play Again"

//     }else{
//         // jodi na mile tahole chance kome jabe
//         chance--
//         if(chance==0){
//             Guess.style.display="none"
//             Guess.style.display="none"
//             GuessField.setAttribute("disabled",'')
//             GuessField.style.display="none"
//             playertwo.style.display="none"
//             guessBoxTitle.style.display="none"
//             allError2.innerHTML= "Gameover"
//             allError2.style.color = "red"
//             allError2.style.backgroundColor = "white"
//             allError2.style.border = "1px solid red"
//             allError2.style.borderRadius = "10px"
//             allError2.style.padding = "10px 20px"
//             allError2.style.textAlign = "center"
//             allError2.style.fontSize = "25px"
//              // create playagin // 
//              Playagain.style.display="block"
//              Playagain.innerHTML = "Play Again"
//         }else{
//             allError2.innerHTML =`You have ${chance} Chance Remaing`
//             allError2.style.color="red"
//            allError2.style.textAlign="center"
//         }

//     }

    
// })


// // keydown eventlistenter to remove error message
// GuessField.addEventListener("keydown",(e)=>{
//     if(e.key=="Backspace"){
//         allError2.innerHTML=''
//     }
//     return;
// })


// // playagain btn functionality : 
// Playagain.addEventListener("click",()=>{
//     let sure = confirm("Are You sure, You Want to restart")
//     if(sure){
//         location.reload()
//     }
// })