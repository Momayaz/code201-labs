'use strict';

var userName = prompt('Hello! Please enter your name below:','Name');
console.log(userName);

var play = confirm('Welcome to my site ' + userName + ', we are now going to play a game so you get to know me. Okay?');

if (play === false){
    change();
} else{
    game();
}


function change(){
    var check = confirm('Are you sure you do not want to play? Click OK to play and Cancel to exit');
    if (check === true){
        game();
    } else{
        console.log(userName + ' did not want to play.');
    }
}

function game(){
    var intro = confirm('This game is made up of 5 true or false questions.');
    var q1 , q2 , q3 , q4 , q5 ;

    q1 = prompt('True or false: My biggest fear is snakes.');
    

    while (q1 !== 'true' && q1 !== 'false') {
        q1= prompt('True or false: My biggest fear is snakes.');;
    }

    switch (q1.toLocaleLowerCase()){

        case 'true':
            alert('I feel like this was an easy one, but GOOD JOB you are right!');
        break;

        case 'false':
            alert('I tried to help you with an easy question, but unfortunately your answer is wrong');
        break;

        default:
            alert('I am very afraid of snakes!')
        break;


    }



    q2 = prompt('True or false: I love being on boats.');

    while (q2 !== 'true' && q2 !== 'false') {
        q2 = prompt('True or false: I love being on boats.');
    }

    if (q2.toLocaleLowerCase() === true) {
        alert('This is very untrue, I am very afraid of open water.');       
   } else {
        alert('You are for sure right!');
   }

 
    q3 = prompt('True or false: My favorite color is green.');

    while (q3 !== 'true' && q3 !== 'false') {
        q3 = prompt('True or false: My favorite color is green.');
    } 
    switch (q1.toLocaleLowerCase()){

        case 'true':
            alert('You are right I love green, I think it is such an energetic color.');
        break;

        case 'false':

            alert('I mean technically you are not completely wrong because I like all the colors, well, except orange.');
        break;

        default:
            alert('Colors are great!');
        break;


    }


    q4 = prompt('True or false: I got my first job at 16.');
    while (q4 !== 'true' && q4 !== 'false') {
        q4  = prompt('True or false: I got my first job at 16.');
    } 

    if (q4.toLocaleLowerCase() === true) {
        alert('I know this is not very common but it is TRUE.');       
   } else {
        alert('Unfortunately you got this one wrong.');
   }


   q5 = prompt('True or false: Pizza is my favorite food.');

   while (q5 !== 'true' && q5 !== 'false') {
    q5  = prompt('True or false: Pizza is my favorite food.');
    } 

    if (q5.toLocaleLowerCase() === true) {
        alert('This was actually a trick question, because how can you just have ONE favorite food?');       
   } else {
        alert('You are right! All food is my favorite food ;)');
   }
    

}

alert('Thank you for playing ' + userName + '! This page is about me if you are interested in learning more.')



    