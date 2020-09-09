'use strict';
var userName = prompt('Hello! Please enter your name below:');
console.log(userName);
var q1, q2, q3, q4, q5, q6, q7;
var count=0;
var play = confirm('Welcome to my site ' + userName + ', we are now going to play a game so you get to know me. Okay?');

if(!play){
    alert('Maybe another time!')
} else{
    var intro = alert('This game is made up of 7 questions: 5 yes/no or y/n and 2 very short answer.');
    ques1();
    ques2();
    ques3();
    ques4();
    ques5();
    ques6();
    ques7();
 
    alert('Thank you for playing, your score is '+ Number (count) +' out of 7');
    alert('Thank you for your time ' + userName + '! This page is about me if you are interested in learning more.');
}

//function check(){
    // var check = confirm('Are you sure you do not want to play? Click OK to play and Cancel to exit');
    // if (check === true) {
    //     game();
    // } else {
    //     console.log(userName + ' did not want to play.');
    // }
//}

//function game(){
    // var intro = alert('This game is made up of 7 questions: 5 yes/no or y/n and 2 very short answer.');
    // ques1();
    // ques2();
    // ques3();
    // ques4();
    // ques5();
    // ques6();
    // ques7();

    
    // //console.log();

    // //     if (count == 0) {
    // //     alert('It takes someone who really knows me to get every question wrong ;)');
    // // } else if (count > 0 && count < 4) {
    // //     alert('I guess this means we need to get to know each other more. Your score is ' + count + ' out of 7.');
    // // } else if (count > 3 && count < 7) {
    // //     alert('You did great! Your score is ' + count + ' out of 7.');
    // // } else if (count == 7) {
    // //     alert('Congrats! You got all the questions right.');
    // // }
    // alert('Thank you for playing, your score is '+ Number (count) +' out of 7');
    // alert('Thank you for your time ' + userName + '! This page is about me if you are interested in learning more.');
//}

function ques1 (){
    q1 = prompt('My biggest fear is snakes.').toLowerCase();

        while (q1 !== 'yes' && q1 !== 'no' && q1 !== 'y' && q1 !=='n') {
		q1= prompt('My biggest fear is snakes.').toLowerCase();
    } 
    console.log(q1);
	
    switch (q1){
		
		case 'yes': case 'y':
			// console.log('I feel like this was an easy one, but GOOD JOB you are right!');
            alert('I feel like this was an easy one, but GOOD JOB you are right!');
		    count++;
		break;

        case 'no': case 'n':
            // console.log('I tried to help you with an easy question, but unfortunately your answer is wrong');
            alert('I tried to help you with an easy question, but unfortunately your answer is wrong');
		break;

        default:
            // console.log('I am very afraid of snakes!');
            alert('I am very afraid of snakes!');
        break;
    }	

}
function ques2 (){
    q2 = prompt('I love being on boats.').toLowerCase();

    while (q2 !== 'yes' && q2 !== 'no' && q2 !== 'y' && q2 !=='n') {
        q2 = prompt('I love being on boats.').toLowerCase();
    }
    console.log(q2);
    
    if (q2 === 'yes' || q2 === 'y') {
        // console.log('This is very untrue, I am very afraid of open water.');       
		alert('This is very untrue, I am very afraid of open water.');  
   } else {
        // console.log('You are for sure right!');
        alert('You are for sure right!');
        count++;
	}
}
function ques3 (){
    q3 = prompt('My favorite color is green.').toLowerCase();

    while (q3 !== 'yes' && q3 !== 'no' && q3 !== 'y' && q3 !=='n') {
        q3 = prompt('My favorite color is green.').toLowerCase();
    } 
    console.log(q3);

    switch (q3){

         case 'yes': case 'y':
            // console.log('You are right I love green, I think it is such an energetic color.');
			alert('You are right I love green, I think it is such an energetic color.');
		    count++;
		break;

       case 'no': case 'n':
            // console.log('I mean technically you are not completely wrong because I like all the colors, well, except orange.');
			alert('I mean technically you are not completely wrong because I like all the colors, well, except orange.');
        break;

        default:
            // console.log('Colors are great!');
            alert('Colors are great!');
        break;
    }
}
function ques4 (){
    q4 = prompt('I got my first job at 16.').toLowerCase();

    while (q4 !== 'yes' && q4 !== 'no' && q4 !== 'y' && q4 !=='n') {
        q4  = prompt('I got my first job at 16.').toLowerCase();
    } 
    console.log(q4);

    if (q4 === 'yes' || q4 === 'y') {
        // console.log('You are correct.');
		alert('You are correct.');
        count++;
    } else {
        // console.log('I know this is not very common but it is TRUE.');       
		alert('I know this is not very common but it is TRUE.');   
   }
}
function ques5 (){
    q5 = prompt('Pizza is my favorite food.').toLowerCase();

    while (q5 !== 'yes' && q5 !== 'no' && q5 !== 'y' && q5 !=='n') {
     q5  = prompt('True or false: Pizza is my favorite food.').toLowerCase();
     } 
     console.log(q5);
 
     if (q5 === 'yes' || q5 === 'y') {
         // console.log('This was actually a trick question, because how can you just have ONE favorite food?');
         alert('This was actually a trick question, because how can you just have ONE favorite food?');
    } else {
         // console.log('You are right! All food is my favorite food ;)');
         alert('You are right! All food is my favorite food ;)');
         count++;
        }
 

}
function ques6 (){
    q6 = prompt('How old do you think I am?');
    console.log(q6);

    if (Number(q6) === 24) {
        alert('You got it!');
        count++;
    } else {
        for (var i = 3; i > 0; i--) {
            if (Number(q6) === 24) {
                alert('Yes that is it!')
                count++;
                break;
            } else if (q6 === ' ' || q6 === null || isNaN(Number(q6))){
                q6 = prompt('Try again, this time try only numbers please. How old do you think I am?');
            }else if (Number(q6) > 24) {
                alert('Too high!');
                q6 = prompt('Try again, how old do you think I am?');
            } else if (Number(q6) < 24) {
                alert('Too low.');
                q6 = prompt('Try again, how old do you think I am?');
            } 
            if (i === 1 && Number(q6) !== 24) {
                alert('It\'s okay that you didn\'t guess, I am 24');
            }
        }
    }

}
function ques7 (){
    q7 = prompt('What kinds of pets did I have growing up?').toLowerCase();
    while (q7 === ' ' || q7 === null || !isNaN(q7)) {
        q7 = prompt('What kinds of pets did I have growing up?').toLowerCase();
    }
    console.log(q7.toLowerCase());

    var pets = new Array('bird', 'dog', 'fish');
    var check;
    //console.log(pets.indexOf(q7))

   for (var j = 5; j > 0; j--) {
         if (pets.indexOf(q7) === -1) {
            q7 = prompt('Try again. What pets did I have?');
        } else {
            alert('Yes that is true! I actually had 3 pets: ' + pets.toString() + '.');
		    count++;
        break;
        }
        if (j === 1 && pets.indexOf(q7) === -1) {
            //console.log('It is totally fine that you didn\'t guess the right answers, but so you know, I had 3 different kinds of pets growing up: ' + pets.toString() + '.');
            alert('It is totally fine that you didn\'t guess the right answers, but so you know, I had 3 different kinds of pets growing up: ' + pets.toString() + '.');
        }
    }
}





