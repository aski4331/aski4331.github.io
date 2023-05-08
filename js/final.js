
let game = false;
let oneCheck = false;
let twoCheck = false;
let threeCheck = false;
let fourCheck = false;

let score = 0;
let prevScore = 0;


//Source for delay function:
//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));



const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', redClick);

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', yellowClick);

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', greenClick);

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', blueClick);

const startButton = document.querySelector('#start');
startButton.addEventListener('click', startGame); //start


const title = document.querySelector('#words');


const audio1 = new Audio("/audio/beep1.mp3");
const audio2 = new Audio("/audio/beep2.mp3");
const audio3 = new Audio("/audio/beep3.mp3");
const audio4 = new Audio("/audio/beep4.mp3");

//https://www.soundjay.com/beep-sounds-1.html



//start game button 
//on start, play a song, then delay, then start first sequence

async function startGame()
{
    title.textContent = ("Starting up...");
    //reduce visibility of button
    startButton.style.visibility ="hidden";

    fourButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(106, 0, 255), inset -20px 0 80px rgb(0, 149, 255), inset 20px 0 300px rgb(170, 0, 255), inset -20px 0 300px rgb(0, 136, 255), 0 0 50px #fff, -10px 0 80px rgb(166, 0, 255), 10px 0 80px rgb(0, 179, 255)";  
    audio4.play();  await delay(200); fourButton.style.boxShadow = "none";

    oneButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(255, 0, 119), inset -20px 0 80px rgb(255, 174, 0),  inset 20px 0 300px rgb(255, 0, 132),   inset -20px 0 300px rgb(255, 166, 0),  0 0 50px #fff, -10px 0 80px rgb(255, 0, 102), 10px 0 80px rgb(255, 149, 0) ";
    audio1.play();  await delay(200); oneButton.style.boxShadow = "none";

    twoButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(255, 187, 0),   inset -20px 0 80px rgb(251, 255, 0), inset 20px 0 300px rgb(255, 234, 0),  inset -20px 0 300px rgb(251, 255, 0),  0 0 50px #fff,   -10px 0 80px rgb(255, 217, 0),  10px 0 80px rgb(255, 255, 0)";    
    audio2.play();  await delay(200); twoButton.style.boxShadow = "none";

    threeButton.style.boxShadow = "inset 0 0 50px #fff, inset 20px 0 80px rgb(83, 177, 10), inset -20px 0 80px rgb(0, 255, 157), inset 20px 0 300px rgb(64, 173, 17), inset -20px 0 300px rgb(0, 255, 153), 0 0 50px #fff, -10px 0 80px rgb(115, 255, 0), 10px 0 80px rgb(12, 200, 59)";
    audio3.play();  await delay(200); threeButton.style.boxShadow = "none";
    
    console.log("Game has been started.");
    await delay(750);
    title.textContent = ("Score: 0");
    getSequence();
}




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

    if (end() > 1) //check time, over two seconds
        { console.log("too slow"); failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        {
            if (userNum == sequenceNum) //last click
            {
                score++;
                title.textContent = ("Score: " + score);
                getSequence();

            }
            

            timeStart(); 
            
        }  //starts new time
    else
        { failed(); } //run failure function
}

function yellowClick()
{
    userSequence[userNum] = 2; //add to array
    userNum++; //increment number of items in array

    if (end() > 1) //check time, over two seconds
        { failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        { 
            if (userNum == sequenceNum)
            {

                score++;
                title.textContent = ("Score: " + score);

                getSequence();
            }
            
            timeStart(); 
            
        
        }  //starts new time
    else
        {failed(); } //run failure function
}

function greenClick()
{
    userSequence[userNum] = 3; //add to array
    userNum++; //increment number of items in array

    if (end() > 1) //check time, over two seconds
        { failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        { 
            if (userNum == sequenceNum)
            {


                //sequenceButton.style.visibility = "visible";
                score++;
                title.textContent = ("Score: " + score);

                getSequence();
            }
            
            timeStart(); 
            
        
        }  //starts new time
    else
        { failed(); } //run failure function
}

function blueClick()
{
    userSequence[userNum] = 4; //add to array
    userNum++; //increment number of items in array


    if (end() > 1) //check time, over two seconds
        { failed(); } //run failure function if time is over
    else if (userSequence[userNum - 1] === compSequence[userNum - 1]) //checks if click was correct
        { 
            
            if (userNum == sequenceNum)
            {

                score++;
                title.textContent = ("Score: " + score);

                getSequence();
            }
            
            timeStart(); 
           
        
        }  //starts new time
    else
        { failed(); } //run failure function
}




async function getSequence()
{
    await delay(500);
    title.textContent = ("Score: " + score);


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

    

    start();

}



function failed()
{
    //clear all arrays
    compSequence = [];
    userSequence = [];
    sequenceNum = 0;
    userNum = 0;
    console.log("Game Over!");
    prevScore = score;
    title.textContent = ("Game Over! Score: " + prevScore);
    score = 0;
    startButton.style.visibility ="visible";

}


//clicking glow functions:

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
