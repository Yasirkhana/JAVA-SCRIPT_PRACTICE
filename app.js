


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

