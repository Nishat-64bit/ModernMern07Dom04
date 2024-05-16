    ------------------------------------------------------------------    
                know about js Dom 04 Number Guessing Game  <Start>
    -------------------------------------------------------------------
    // 1stly string dile wronginput dibe
    // 2ndly Number dile se nibe 
    // 3rdly 



    // isNan  aeta number na 
    // isNaN(10) // false kintu 10 to number tie false return korbe
    // isNaN("Nishat") // true karon Nishat holo string , aeta number na 

    ================== Game start ==========================================
    //catch playerOneBox and playerTwoBox

    const PlayerOneBox = document.querySelector('.PlayerOneBox')
    const PlayerTwoBox = document.querySelector('.PlayerTwoBox')


    // catch Number Guess Title Box 

    const mainBox = document.querySelector(".mainBox")
    const title = document.querySelector(".title")
    const inputField = document.querySelector(".inputField")
    const Start = document.querySelector(".Start")
    const PlayerOne = document.querySelector(".PlayerOne")

    // all error element catch/select for player one and two 
    const allError = document.querySelector(".allError")
    const allError2 = document.querySelector(".allError2")


    // catch guessBox title Box
    const GuessBox = document.querySelector(".GuessBox")
    const guessBoxTitle = document.querySelector(".guessBoxTitle")
    const GuessField = document.querySelector(".GuessField")
    const Guess = document.querySelector(".Guess")
    const playertwo = document.querySelector(".playertwo")
    const Playagain = document.querySelector(".Playagain")

    /**
    * todo : add button functionality and check number
    */
    //===============================  player 1  ========================
    // global varibale for player one 
    let PlayerOneValue  = null // null mane kicu dei nai ekono user, jokon e dibe ta inputfield.value te save hobe
    let chance = 5;
    Start.addEventListener("click",()=>{

        // string er jonno 
        if (isNaN(inputField.value)){
            allError.innerHTML="Please Insert a Number"
            allError.style.color = "red"
            allError.style.textAlign = "center"
            return; // condition true hole aar nice jete dibe na ,, ber kore dibe // 

        // number 4 digit ba tar  besi hoi 
        }else if (inputField.value.length>4){ 
            allError.innerHTML = "Please Insert Maximum 3 Character"
            allError.style.color = "red"
            allError.style.textAlign = "center"
            return
        }
        
        // jodi kew number dei // mane false hole // obossoi hobe karon number guesing game
        PlayerOneValue = inputField.value; // ae jaigai player 1 er kaj ses 
        //console.log("Our final value for player one is ",PlayerOneValue);
        PlayerOneBox.style.display="none" // jokon e   player 1 er kaj se tokon PlayerOneBox chole jabe , asve 2nd player er box (PlayerTwoBox) chole e asve
        PlayerTwoBox.style.display="block" // block mande display show korbe
        

        // console.log(inputField.value); // input e ja likbo ta console e dekabe 
        // alert("yes Sir") // kaj korse
    })


    //KeyDown Add Event listener Add : 
    // jokon e keydown hobe tokon backspace kore chapelei error message chole jabe
    inputField.addEventListener("keydown",(e)=>{
        if(e.key == "Backspace"){
            allError.innerHTML = ""
        }
        return
    })



    //===============================  player 2  ========================
    // player 2 guessbtn functionality
    let PlayerTwoValue  = null // null mane kicu dei nai ekono user, jokon e dibe ta inputfield.value te save hobe
    Guess.addEventListener("click",()=>{

        // string er jonno 
        if (isNaN(GuessField.value)){
            allError2.innerHTML="Please Insert a Number"
            allError2.style.color = "red"
            allError2.style.textAlign = "center"
            return; // condition true hole aar nice jete dibe na ,, ber kore dibe // 

        // number 4 digit ba tar  besi hoi 
        }else if (GuessField.value.length>4){ 
            allError2.innerHTML = "Please Insert Maximum 3 Character"
            allError2.style.color = "red"
            allError2.style.textAlign = "center"
            return
        }
        

        PlayerTwoValue = GuessField.value; // ae jaigai player 2 er kaj ses 
        //console.log("Our final value for player two is ",PlayerTwoValue);
        
        // jodi  playerone er number playertwo er guess number er sate mile jai
        if(PlayerOneValue==PlayerTwoValue){
            Guess.style.display="none"
            GuessField.style.display="none"
            playertwo.style.display="none"
            guessBoxTitle.style.display="none"
            allError2.innerHTML= "Congratulaton,Winner!!"
            allError2.style.color = "black"
            allError2.style.backgroundColor = "white"
            allError2.style.borderRadius = "10px"
            allError2.style.border = "1px solid black"
            allError2.style.padding = "10px 20px"
            allError2.style.textAlign = "center"
            allError2.style.fontSize = "25px"
            // important // play again // 
            Playagain.style.display="block"
            Playagain.innerHTML="Play Again"
        }else{
        // na mille chance kome jabe // aar aeta na milar block
        chance--
            if(chance==0){
                Guess.style.display="none"
                GuessField.setAttribute("disabled",'')
                GuessField.style.display="none"
                playertwo.style.display="none"
                guessBoxTitle.style.display="none"
                allError2.innerHTML= "Gameover"
                allError2.style.color = "red"
                allError2.style.backgroundColor = "white"
                allError2.style.border = "1px solid red"
                allError2.style.borderRadius = "10px"
                allError2.style.padding = "10px 20px"
                allError2.style.textAlign = "center"
                allError2.style.fontSize = "25px"
                // important // play again // 
            Playagain.style.display="block"
            Playagain.innerHTML="Play Again"
                
            }else{
        allError2.innerHTML = `Be CareFul!  You Have ${chance} Chance Remaining , `
        allError2.style.color = "red"
        allError2.style.textAlign = "center"
            }
        }
        
    })


    //KeyDown Add Event listener Add : 
    // jokon e keydown hobe tokon backspace kore chapelei error message chole jabe
    GuessField.addEventListener("keydown",(e)=>{
        if(e.key == "Backspace"){
            allError2.innerHTML = ""
        }
        return
    })

    // playagain restart btn functionality ? restart functionalit

    Playagain.addEventListener("click",()=>{
        const sure = confirm("Are You Sure , You Want to Play Again?") // yes and cancel option thake
        if(sure){
            location.reload();
        }
    })
    ============================== Game over =========================================================
    ------------------------------------------------------------------    
                know about js Dom 04 Number Guessing Game  <End>
    -------------------------------------------------------------------