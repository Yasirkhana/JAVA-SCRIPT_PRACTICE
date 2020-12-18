


// console.log('heloo welcome ji');




// console.log(a);
// var a = 5;
// console.log(a);
// ####################################



// WHILE LOOP:


// var num = 0;

// while (num<100){
//     num = num + 1; 
//     console.log(num);
// }

// ####################################  CHALLENGES 1::: AGE:

// let age = 24;

let oneYear = 365;

function ageinday(){
    let age = prompt("ENTER YOUR AGE");
    const c = age*oneYear;
    console.log(c)
    document.getElementById("daywaliage").innerHTML = "YOUR AGE IN DAYS IS " + c;
  
}
function clearit(){
    document.getElementById("daywaliage").innerHTML = "------";
}

/*  ######################################## CHALLENGE 2 #################################### */


function generateCat(){
    var image = document.createElement('img');
     var flex_div= document.getElementById('flex-cat-gen');
    image.src = "https://media.glamour.com/photos/580e1edafa71013257a9180f/master/w_400%2Cc_limit/giphy%2520(2).gif";
    flex_div.appendChild(image) 
} 

/*  ######################################## CHALLENGE 3 #################################### */

function rpsGame(yourChoice){
console.log('User choice: ',yourChoice.id);
var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomRps());
    console.log('computer choice:' , botChoice);
    var results = decideWinner(humanChoice,botChoice);
    console.log(results);
    var message = finalMessage(results); 
   console.log("THIS IS THE MSSG: " ,message );  
   rpsFrontend(yourChoice.id,botChoice,message);

}


function decideWinner(yourChoice,computerChoice){
    var rpsData = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1 , 'paper' : 0.5 , 'scissor':0},
        'scissor':{'paper':1 ,  'scissor' : 0.5 , 'rock':0}
    };
    var yourScore = rpsData[yourChoice][computerChoice];
    var computerScore = rpsData[computerChoice][yourChoice];
        
    return [yourScore , computerScore];

}
function finalMessage(youScore,compScore){
    if (youScore == 0){
            return {'message': 'YOU LOST 😲 ' , 'color': 'red' };  
     }
     else if (youScore == 0.5){
        return {'message': 'YOU TIED 😇  ' , 'color': 'yellow' }; 
     }
     else {
        return {'message': 'YOU WON 🔥' , 'color': 'green' };  
      
    }

}
function rpsFrontend(humanimgChoice,botimgChoice,finalMessage){
    var imgsData = {
        'rock' : document.getElementById('rock').src ,
         'paper':document.getElementById('paper').src,   
         'scissor':document.getElementById('scissor').src  
        }
    
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div'); 


        humanDiv.innerHTML = "<img src= '" + imgsData[humanimgChoice] + "'style= 'box-shadow: 0px 10px 50px rgba(37 , 50 , 233 ,1)' > " ;
        messageDiv.innerHTML = "<h2 style = 'color: "+ finalMessage['color'] + "; font-size:60px; padding:30px;   '>" + finalMessage['message'] + "</h2>" ; 
        botDiv.innerHTML = "<img src= '" + imgsData[botimgChoice] + "'style= 'box-shadow: 0px 10px 50px rgba(255, 0, 0)' > " ;

        document.getElementById('flex-box-rps').appendChild(humanDiv);
        document.getElementById('flex-box-rps').appendChild(botDiv);
        document.getElementById('flex-box-rps').appendChild(messageDiv);
        
}


function randomRps(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

/*  ######################################## CHALLENGE 4 #################################### */ 
var allButtons = document.getElementsByTagName('button');


var copyAllbtns = [];
for (let i=0;i<allButtons.length;i++){
    copyAllbtns.push(allButtons[i].classList[1]);
    
}

function btnColorChange(btnThink){
  if (btnThink.value == 'red' ){
    buttonRed();
  } 
  else if (btnThink.value == 'green'){
      buttonGreen();
  }
  
  else if (btnThink.value == 'reset'){
    buttonReset();
}

else if (btnThink.value == 'random'){
    randomColors();
}
}
function buttonRed(){
    for(let i=0 ; i< allButtons.length ; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');

    }
}
function buttonGreen(){
    for(let i=0 ; i< allButtons.length ; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');

    }
}

function buttonReset(){
    for(let i=0 ; i< allButtons.length ; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllbtns[i]);

    }
}

function randomColors(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    for ( let i=0;i<allButtons.length;i++)
    {
        var randomNumb =Math.floor(Math.random()*4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllbtns[randomNumb]);
    }
    }

   /*  ######################################## CHALLENGE 5 #################################### */
    let blackjackGame = {
        'you' : {'scoreSpan': '#yourResult', 'div' : '#yourBox' , 'score' : 0},
        'dealer' : {'scoreSpan': '#dealerResult', 'div' : '#dealerBox' , 'score' : 0},
        'cards' : ['2','3','4','5','6','7','8','9','10','k','Q','J','A' ],
        };
    const YOU = blackjackGame['you'];
    const DEALER = blackjackGame['dealer'];

    const hitSound = new Audio ('sounds/swish.m4a');



    document.querySelector('#hitBtn').addEventListener('click', blackjackHit);
    document.querySelector('#dealBtn').addEventListener('click', blackjackDeal);

   function blackjackHit(){
       let card = randomCard();
       console.log(card);
    showCard(YOU);

       }
    function blackjackDeal(){
        showCard(DEALER);
        let yourImgs = document.querySelector('#yourBox').querySelectorAll('img');
           let dealerImgs = document.querySelector('#dealerBox').querySelectorAll('img');
            for (let i=0 ; i<yourImgs.length;i++)
            {
                yourImgs[i].remove();
            } 
            for (let i=0 ; i<dealerImgs.length;i++)
            {
                dealerImgs[i].remove();
            } 
        }

    function showCard (activePlayer) {
        let cardImg = document.createElement('img');
        cardImg.src = 'images/Q.png';
        document.querySelector(activePlayer['div']).appendChild(cardImg);
        hitSound.play();
    }   
    funtion randomCard(){
        let randomIndex = Math.floor(Math.random()*13);
        return blackjackGame['cards'][randomIndex];
    }

// ######################## 6.02 #####################################
