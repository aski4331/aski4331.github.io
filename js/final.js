
let game = false;
let oneCheck = false;
let twoCheck = false;
let threeCheck = false;
let fourCheck = false;

let score = 0;
let prevScore = 0;


const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', redClick);

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', yellowClick);

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', greenClick);

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', blueClick);

const startButton = document.querySelector('#start');
startButton.addEventListener('click', start); //start

const sequenceButton = document.querySelector('#sequence');
sequenceButton.addEventListener('click', getSequence);

const title = document.querySelector('#words');


const audio1 = new Audio("/audio/beep1.mp3");
const audio2 = new Audio("/audio/beep2.mp3");
const audio3 = new Audio("/audio/beep3.mp3");
const audio4 = new Audio("/audio/beep4.mp3");

//https://www.soundjay.com/beep-sounds-1.html



//start game button 
//on start, play a song, then delay, then start first sequence

function startGame()
{
    audio1.play();  delay(500);
    audio2.play();  delay(500);
    audio3.play();  delay(500);
    audio4.play();  delay(500);
    console.log("Game has been started.");
    delay(1500);
    getSequence();
}





/*
function oneFun()
{
    console.log("testing button 1...");
}

function twoFun()
{
    console.log("testing button 2...");
}

function threeFun()
{
    console.log("testing button 3...");
}

function fourFun()
{
    console.log("testing button 4...");
}
*/



// function to generate random number from ica12
function random(min, max) 
{
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
//end random function

startButton.style.visibility = "hidden";
//arrays:

let compSequence = [];
let userSequence = [];

let sequenceNum = 0;
let userNum = 0;

function start()
{
    startButton.style.visibility = "hidden";
    
    userNum = 0;
    userSequence = [];

    oneButton.style.visibility = "visible";
    twoButton.style.visibility = "visible";
    threeButton.style.visibility = "visible";
    fourButton.style.visibility = "visible";

    timeStart();
}


//source for start and end functions for timing:
//https://stackoverflow.com/questions/41632942/how-to-measure-time-elapsed-on-javascript
var startTime, endTime;

function timeStart() 
{
  startTime = new Date();
}

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
  return seconds; //returns the number of seconds passed
}
//end timing function 



function redClick()
{
    userSequence[userNum] = 1; //add to array
    userNum++; //increment number of items in array
    //numClicks++; //increment number of clicks

    if (end() > 2) //check time, over two seconds
        { console.log("too slow"); failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        {
            if (userNum == sequenceNum)
            {

                oneButton.style.visibility = "hidden";
                twoButton.style.visibility = "hidden";
                threeButton.style.visibility = "hidden";
                fourButton.style.visibility = "hidden";

                sequenceButton.style.visibility = "visible";
                score++;
                title.textContent = ("Score: " + score);


            }
             timeStart(); 
        }  //starts new time
    else
        { console.log(userSequence[userNum - 1] + " =? " + compSequence[userNum - 1]); failed(); } //run failure function
}

function yellowClick()
{
    userSequence[userNum] = 2; //add to array
    userNum++; //increment number of items in array
    //numClicks++; //increment number of clicks

    if (end() > 2) //check time, over two seconds
        { failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        { 
            if (userNum == sequenceNum)
            {

                oneButton.style.visibility = "hidden";
                twoButton.style.visibility = "hidden";
                threeButton.style.visibility = "hidden";
                fourButton.style.visibility = "hidden";

                sequenceButton.style.visibility = "visible";
                score++;
                title.textContent = ("Score: " + score);


            }
            
            timeStart(); 
        
        }  //starts new time
    else
        { console.log(userSequence[userNum - 1] + " =? " + compSequence[userNum - 1]); failed(); } //run failure function
}

function greenClick()
{
    userSequence[userNum] = 3; //add to array
    userNum++; //increment number of items in array
    //numClicks++; //increment number of clicks

    if (end() > 2) //check time, over two seconds
        { failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        { 
            if (userNum == sequenceNum)
            {

                oneButton.style.visibility = "hidden";
                twoButton.style.visibility = "hidden";
                threeButton.style.visibility = "hidden";
                fourButton.style.visibility = "hidden";

                sequenceButton.style.visibility = "visible";
                score++;
                title.textContent = ("Score: " + score);


            }

            timeStart(); 
        
        }  //starts new time
    else
        { console.log(userSequence[userNum - 1] + " =? " + compSequence[userNum - 1]); failed(); } //run failure function
}

function blueClick()
{
    userSequence[userNum] = 4; //add to array
    userNum++; //increment number of items in array
    //numClicks++; //increment number of clicks

    if (end() > 2) //check time, over two seconds
        { failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        { 
            
            if (userNum == sequenceNum)
            {

                oneButton.style.visibility = "hidden";
                twoButton.style.visibility = "hidden";
                threeButton.style.visibility = "hidden";
                fourButton.style.visibility = "hidden";

                sequenceButton.style.visibility = "visible";
                score++;
                title.textContent = ("Score: " + score);


            }
            
            timeStart(); 
        
        
        
        }  //starts new time
    else
        { console.log(userSequence[userNum - 1] + " =? " + compSequence[userNum - 1]); failed(); } //run failure function
}



//if click is last one: if userNum  = sequencenum
//hide game, show sequence button, increment score



//style.visibility="hidden" "visible"


//Source for delay function:
//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));

async function getSequence()
{
    title.textContent = ("Score: " + score);
    oneButton.style.visibility = "visible";
    twoButton.style.visibility = "visible";
    threeButton.style.visibility = "visible";
    fourButton.style.visibility = "visible";
    
    //title.textContent = ("Remember the Sequence!");
    sequenceButton.style.visibility = "hidden";

    compSequence[sequenceNum] = random(1, 4); //increase sequence
    console.log(compSequence[sequenceNum]);
    sequenceNum++; //increment number of items in sequence

    for(let i = 0; i < sequenceNum; i++) //for each item in sequence
    {
        //flash buttons
        if (compSequence[i] === 1)
        {
            //red
            console.log("red");
            oneButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(255, 0, 119), inset -20px 0 80px rgb(255, 174, 0),  inset 20px 0 300px rgb(255, 0, 132),   inset -20px 0 300px rgb(255, 166, 0),  0 0 50px #fff, -10px 0 80px rgb(255, 0, 102), 10px 0 80px rgb(255, 149, 0) ";
            twoButton.style.boxShadow = "none";
            threeButton.style.boxShadow = "none";
            fourButton.style.boxShadow = "none";
            audio1.play();
            await delay(400);
            oneButton.style.boxShadow = "none";
            await delay(150);

        }

        if (compSequence[i] === 2)
        {
            //yellow
            console.log("yellow");
            oneButton.style.boxShadow = "none";
            twoButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(255, 187, 0),   inset -20px 0 80px rgb(251, 255, 0), inset 20px 0 300px rgb(255, 234, 0),  inset -20px 0 300px rgb(251, 255, 0),  0 0 50px #fff,   -10px 0 80px rgb(255, 217, 0),  10px 0 80px rgb(255, 255, 0)";    
            threeButton.style.boxShadow = "none";
            fourButton.style.boxShadow = "none";
            audio2.play();
            await delay(400);
            twoButton.style.boxShadow = "none";

            await delay(150);
        }

        if (compSequence[i] === 3)
        {
            //green
            console.log("green");
            oneButton.style.boxShadow = "none";
            twoButton.style.boxShadow = "none";
            threeButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(83, 177, 10), inset -20px 0 80px rgb(0, 255, 157), inset 20px 0 300px rgb(64, 173, 17), inset -20px 0 300px rgb(0, 255, 153), 0 0 50px #fff, -10px 0 80px rgb(115, 255, 0), 10px 0 80px rgb(12, 200, 59)";
            fourButton.style.boxShadow = "none";
            audio3.play();
            await delay(400);
            threeButton.style.boxShadow = "none";
            await delay(150);
        }

        if (compSequence[i] === 4)
        {
            //blue
            console.log("blue");
            oneButton.style.boxShadow = "none";
            twoButton.style.boxShadow = "none";
            threeButton.style.boxShadow = "none";
            fourButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(106, 0, 255), inset -20px 0 80px rgb(0, 149, 255), inset 20px 0 300px rgb(170, 0, 255), inset -20px 0 300px rgb(0, 136, 255), 0 0 50px #fff, -10px 0 80px rgb(166, 0, 255), 10px 0 80px rgb(0, 179, 255)";  
            audio4.play();
            await delay(400);
            fourButton.style.boxShadow = "none";
            await delay(150);
        }

       // await delay(500);

    }
    await delay(200);

    oneButton.style.boxShadow = "none";
    twoButton.style.boxShadow = "none";
    threeButton.style.boxShadow = "none";
    fourButton.style.boxShadow = "none";

    startButton.style.visibility = "visible";

    oneButton.style.visibility = "hidden";
    twoButton.style.visibility = "hidden";
    threeButton.style.visibility = "hidden";
    fourButton.style.visibility = "hidden";

}


function checkSequence()
{
    startButton.style.visibility = "hidden";
    sequenceButton.style.visibility = "visible";

    for (j = 0; j < sequenceNum; j++)
    {
       console.log(compSequence[j] + ", "); 
    }
}



function failed()
{
    //clear all arrays
    //let clearArray = [];
    compSequence = [];
    userSequence = [];
    sequenceNum = 0;
    userNum = 0;
    console.log("Game Over!");
    prevScore = score;
    title.textContent = ("Game Over! Score: " + prevScore);
    sequenceButton.style.visibility = "visible";
    score = 0;
    //display a failure message

}


oneButton.onmousedown = function()
{
    oneButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(255, 0, 119), inset -20px 0 80px rgb(255, 174, 0),  inset 20px 0 300px rgb(255, 0, 132),   inset -20px 0 300px rgb(255, 166, 0),  0 0 50px #fff, -10px 0 80px rgb(255, 0, 102), 10px 0 80px rgb(255, 149, 0) ";
    audio1.play();
};

oneButton.onmouseup = function()
{
    oneButton.style.boxShadow = "none";
};


twoButton.onmousedown = function()
{
    twoButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(255, 187, 0),   inset -20px 0 80px rgb(251, 255, 0), inset 20px 0 300px rgb(255, 234, 0),  inset -20px 0 300px rgb(251, 255, 0),  0 0 50px #fff,   -10px 0 80px rgb(255, 217, 0),  10px 0 80px rgb(255, 255, 0)";    
    audio2.play();
};

twoButton.onmouseup = function()
{
    twoButton.style.boxShadow = "none";
};



threeButton.onmousedown = function()
{
    threeButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(83, 177, 10), inset -20px 0 80px rgb(0, 255, 157), inset 20px 0 300px rgb(64, 173, 17), inset -20px 0 300px rgb(0, 255, 153), 0 0 50px #fff, -10px 0 80px rgb(115, 255, 0), 10px 0 80px rgb(12, 200, 59)";
    audio3.play();
};

threeButton.onmouseup = function()
{
    threeButton.style.boxShadow = "none";
};



fourButton.onmousedown = function()
{
    fourButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(106, 0, 255), inset -20px 0 80px rgb(0, 149, 255), inset 20px 0 300px rgb(170, 0, 255), inset -20px 0 300px rgb(0, 136, 255), 0 0 50px #fff, -10px 0 80px rgb(166, 0, 255), 10px 0 80px rgb(0, 179, 255)";  
    audio4.play();
};

fourButton.onmouseup = function()
{
    fourButton.style.boxShadow = "none";
};







    //when button is clicked, check if it is black, if it is, (new function) check if it was clicked soon enough
    // pick a new button to turn black
    //if not, failure

    //store array of random sequence
    //when user clicks, store 

/*
function startFun()
{
    game = true;
    //console.log(game);
    //oneButton.style.backgroundColor = "black";

    while(game == true)
    {
        for(let i = 0; i < sequenceNum; i++)
        {
            //turn on button

            if (sequence[i] == 1)
                {
                    //red
                    oneButton.style.backgroundColor = "black";
                    twoButton.style.backgroundColor = "yellow";
                    threeButton.style.backgroundColor = "green";
                    fourButton.style.backgroundColor = "blue";
            }

            if (sequence[i] == 2)
            {
                //yellow
                oneButton.style.backgroundColor = "red";
                twoButton.style.backgroundColor = "black";
                threeButton.style.backgroundColor = "green";
                fourButton.style.backgroundColor = "blue";
            }

            if (sequence[i] == 3)
            {
                //green
                oneButton.style.backgroundColor = "red";
                twoButton.style.backgroundColor = "yellow";
                threeButton.style.backgroundColor = "black";
                fourButton.style.backgroundColor = "blue";
            }

            if (sequence[i] == 4)
            {
                //blue
                oneButton.style.backgroundColor = "red";
                twoButton.style.backgroundColor = "yellow";
                threeButton.style.backgroundColor = "green";
                fourButton.style.backgroundColor = "black";
            }



                    //wait until button gets pressed
                /*
                setTimeout(function () {
                if (newState == -1) {
                    alert('VIDEO HAS STOPPED');
                }
                }, 5000);

                



                //when button is clicked, check if it is black, if it is, (new function) check if it was clicked soon enough
                // pick a new button to turn black
                //if not, failure


        } //end inner for loop (each length of sequence)

        game= false;
        sequence[sequenceNum] = random(1,4); //add new number to the array
        sequenceNum++;
    }



}*/


//on mouse down
//mouse events
//<p onmousedown="myFunction()">Click the text!</p>
//object.onmousedown = function(){myScript};