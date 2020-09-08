'use strict';

var userName = prompt('Hello! Please enter your name below:');
console.log(userName);

var play = confirm('Welcome to my site ' + userName + ', we are now going to play a game so you get to know me. Okay?');


if (play === false){

    var check = confirm('Are you sure you do not want to play? Click OK to play and Cancel to exit');
    if (check === true){
        game();
    } else{
        console.log(userName + ' did not want to play.');
    }

} else{
    var intro = alert('This game is made up of 5 questions. Please answer with yes/no or y/n.');
	var q1 , q2 , q3 , q4 , q5 , q6 , q7;
	var x = 0;

    q1 = prompt('My biggest fear is snakes.').toLowerCase();
    
    while (q1 !== 'yes' && q1 !== 'no' && q1 !== 'y' && q1 !=='n') {
		q1= prompt('My biggest fear is snakes.').toLowerCase();
    } 
    console.log(q1);
	
    switch (q1){
		
		case 'yes': case 'y':
			// console.log('I feel like this was an easy one, but GOOD JOB you are right!');
            alert('I feel like this was an easy one, but GOOD JOB you are right!');
			console.log(x=x+1);
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
	console.log(x)	

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
		console.log(x=x+1);
	}
	console.log(x);

 
    q3 = prompt('My favorite color is green.').toLowerCase();

    while (q3 !== 'yes' && q3 !== 'no' && q3 !== 'y' && q3 !=='n') {
        q3 = prompt('My favorite color is green.').toLowerCase();
    } 
    console.log(q3);

    switch (q3){

         case 'yes': case 'y':
            // console.log('You are right I love green, I think it is such an energetic color.');
			alert('You are right I love green, I think it is such an energetic color.');
			console.log(x=x+1);
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
	console.log(x);


    q4 = prompt('I got my first job at 16.').toLowerCase();

    while (q4 !== 'yes' && q4 !== 'no' && q4 !== 'y' && q4 !=='n') {
        q4  = prompt('I got my first job at 16.').toLowerCase();
    } 
    console.log(q4);

    if (q4 === 'yes' || q4 === 'y') {
        // console.log('You are correct.');
		alert('You are correct.');
		console.log(x=x+1);
    } else {
        // console.log('I know this is not very common but it is TRUE.');       
		alert('I know this is not very common but it is TRUE.');   
   }
   console.log(x);


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
		console.log(x=x+1);
   }
   console.log(x);


   q6 = prompt('How old do you think I am?');
    console.log(q6);
   if(Number(q6)=== 24){
		alert('You got it!');
		console.log(x=x+1);
   }else{
        for (var i = 3 ; i > 0 ; i--){
            if (Number(q6)=== 24){ 
				alert ('Yes that is it!')
				console.log(x=x+1);
                break; 
            } else if (Number(q6) > 24){
                alert ('Too high!');
                q6 = prompt('Try again, how old do you think I am?');
            } else if (Number(q6) < 24) {
                alert ('Too low.');
                q6 = prompt('Try again, how old do you think I am?');
            }
            if ( i === 1 && Number(q6) !== 24){
                alert('It\'s okay that you didn\'t guess, I am 24');
            }
        }
    }
	console.log(x);


	q7 = prompt ('What kinds of pets did I have growing up?').toLowerCase();
	while (q7 === ' ' ||  q7 === null || !isNaN(q7)) {
		q7 = prompt ('What kinds of pets did I have growing up?').toLowerCase();
	} 
	console.log(q7.toLowerCase());

   	var pets = new Array ('bird' , 'dog' , 'fish');
    var check;
	var m , n;
	//console.log(pets.indexOf(q7))

    for(m = 0 ; m < pets.length ; m++) {
        if(q7 === pets[m]){
			//console.log('You are correct! I actually had 3 pets: ' + pets.toString() + '.');
			alert('You are correct! I actually had 3 pets: ' + pets.toString() + '.');
			console.log(x=x+1);
            break;
        } else {
            check = 'false';
        }       
    }  console.log(check);
   
   if( check !== 'true' ) {

        for (var j = 5 ; j > 0 ; j--){ 
			if(pets.indexOf(q7) === -1){
				q7 = prompt ('Try again. What pets did I have?');
			} else {
				alert('Yes that is true! I actually had 3 pets: ' + pets.toString() + '.');
				console.log(x=x+1);
				break;
			} 
			if (j === 1 && pets.indexOf(q7) === -1 ){
				//console.log('It is totally fine that you didn\'t guess the right answers, but so you know, I had 3 different kinds of pets growing up: ' + pets.toString() + '.');
				alert('It is totally fine that you didn\'t guess the right answers, but so you know, I had 3 different kinds of pets growing up: ' + pets.toString() + '.');
			}
        }
	}

	console.log(x);
	
	var total = x;
	console.log(total);

	if (total == 0) {
		alert('It takes someone who really knows me to get every question wrong ;)');
	} else if (total > 0 && total < 4){
		alert('I guess this means we need to get to know each other more. Your score is ' + total + ' out of 7.');
	} else if (total > 3 && total < 7){
		alert('You did great! Your score is ' + total + ' out of 7.');
	} else if (total == 7){
		alert('Congrats! You got all the questions right.');
	}
}

alert('Thank you for your time ' + userName + '! This page is about me if you are interested in learning more.');



    
