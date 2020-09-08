'use strict';

var userName = prompt('Hello! Please enter your name below:');
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
    var intro = confirm('This game is made up of 5 yes or no questions.');
    var q1 , q2 , q3 , q4 , q5 ;


    q1 = prompt('My biggest fear is snakes.').toLowerCase();
    
    while (q1 !== 'yes' && q1 !== 'no') {
        q1= prompt('My biggest fear is snakes.').toLowerCase();
    }

    switch (q1){

        case 'yes':
            // console.log('I feel like this was an easy one, but GOOD JOB you are right!');
            alert('I feel like this was an easy one, but GOOD JOB you are right!');
            break;

        case 'no':
            // console.log('I tried to help you with an easy question, but unfortunately your answer is wrong');
            alert('I tried to help you with an easy question, but unfortunately your answer is wrong');
            break;

        default:
            // console.log('I am very afraid of snakes!');
            alert('I am very afraid of snakes!');
            break;


    }



   q2 = prompt('I love being on boats.').toLowerCase();

    while (q2 !== 'yes' && q2 !== 'no') {
        q2 = prompt('I love being on boats.').toLowerCase();
    }

    if (q2 === 'yes') {
        // console.log('This is very untrue, I am very afraid of open water.');       
        alert('This is very untrue, I am very afraid of open water.');       
   } else {
        // console.log('You are for sure right!');
        alert('You are for sure right!');
   }

 
    q3 = prompt('True or false: My favorite color is green.').toLowerCase();

    while (q3 !== 'yes' && q3 !== 'no') {
        q3 = prompt('My favorite color is green.').toLowerCase();
    } 
    switch (q3){

        case 'yes':
            // console.log('You are right I love green, I think it is such an energetic color.');
            alert('You are right I love green, I think it is such an energetic color.');
        break;

        case 'no':
            // console.log('I mean technically you are not completely wrong because I like all the colors, well, except orange.');
            alert('I mean technically you are not completely wrong because I like all the colors, well, except orange.');
        break;

        default:
            // console.log('Colors are great!');
            alert('Colors are great!');
        break;


    }


    q4 = prompt('I got my first job at 16.').toLowerCase();

    while (q4 !== 'yes' && q4 !== 'no') {
        q4  = prompt('I got my first job at 16.').toLowerCase();
    } 

    if (q4 === 'yes') {
        // console.log('I know this is not very common but it is TRUE.');       
        alert('I know this is not very common but it is TRUE.');       
   } else {
        // console.log('Unfortunately you got this one wrong.');
        alert('Unfortunately you got this one wrong.');
   }


   q5 = prompt('Pizza is my favorite food.').toLowerCase();

   while (q5 !== 'yes' && q5 !== 'no') {
    q5  = prompt('True or false: Pizza is my favorite food.').toLowerCase();
    } 

    if (q5 === 'yes') {
        // console.log('This was actually a trick question, because how can you just have ONE favorite food?');
        alert('This was actually a trick question, because how can you just have ONE favorite food?');       
   } else {
        // console.log('You are right! All food is my favorite food ;)');
        alert('You are right! All food is my favorite food ;)');
   }
    

}

alert('Thank you for your time ' + userName + '! This page is about me if you are interested in learning more.')



    