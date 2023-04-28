
let game = false;
let oneCheck = false;
let twoCheck = false;
let threeCheck = false;
let fourCheck = false;


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

//arrays:

let compSequence = [];
let userSequence = [];

let sequenceNum = 0;
let userNum = 0;

function start()
{
    startButton.style.visibility = "hidden";
    sequenceButton.style.visibility = "visible";
    userNum = 0;
    userSequence = [];
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
        { timeStart(); }  //starts new time
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
        { timeStart(); }  //starts new time
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
        { timeStart(); }  //starts new time
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
        { timeStart(); }  //starts new time
    else
        { console.log(userSequence[userNum - 1] + " =? " + compSequence[userNum - 1]); failed(); } //run failure function
}



//style.visibility="hidden" "visible"


//Source for delay function:
//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));

async function getSequence()
{
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
            oneButton.style.backgroundColor = "black";
            twoButton.style.backgroundColor = "yellow";
            threeButton.style.backgroundColor = "green";
            fourButton.style.backgroundColor = "blue";
            //await delay(500)
        }

        if (compSequence[i] === 2)
        {
            //yellow
            console.log("yellow");
            oneButton.style.backgroundColor = "red";
            twoButton.style.backgroundColor = "black";
            threeButton.style.backgroundColor = "green";
            fourButton.style.backgroundColor = "blue";
        }

        if (compSequence[i] === 3)
        {
            //green
            console.log("green");
            oneButton.style.backgroundColor = "red";
            twoButton.style.backgroundColor = "yellow";
            threeButton.style.backgroundColor = "black";
            fourButton.style.backgroundColor = "blue";
        }

        if (compSequence[i] === 4)
        {
            //blue
            console.log("blue");
            oneButton.style.backgroundColor = "red";
            twoButton.style.backgroundColor = "yellow";
            threeButton.style.backgroundColor = "green";
            fourButton.style.backgroundColor = "black";
        }

        await delay(500);

    }

    oneButton.style.backgroundColor = "red";
    twoButton.style.backgroundColor = "yellow";
    threeButton.style.backgroundColor = "green";
    fourButton.style.backgroundColor = "blue";

    startButton.style.visibility = "visible";



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

    //display a failure message

}







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


