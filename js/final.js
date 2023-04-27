
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

const startButton = document.querySelector('#start').addEventListener('click', start);

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
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }


let compSequence = [];
let userSequence = [];

let sequenceNum = 0;
let userNum = 0;


    //when button is clicked, check if it is black, if it is, (new function) check if it was clicked soon enough
    // pick a new button to turn black
    //if not, failure

    //store array of random sequence
    //when user clicks, store 

//source for start and end functions for timing:
//https://stackoverflow.com/questions/41632942/how-to-measure-time-elapsed-on-javascript

var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
  return seconds;
}

let numClicks = 0;

function redClick(i)
{

    userSequence[i] = 1; //add to array
    userNum++;

    if (end() > 2000) //check time
    {
        return false;
    }

    if (userSequence[i] == compSequence[i]) //checks if click was correct
    {
        start();
        return true;
    }

    else
    {
        return false;
    }

}


//Source for delay function:
//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));

async function getSequence()
{
    sequence = [random(1, 4)];
    sequenceNum++;

    for(let i = 0; i < sequenceNum; i++)
    {
        //flash buttons
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

        await delay(1000);

    }

    //unhide the start button

}







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


