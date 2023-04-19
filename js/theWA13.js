function submit() {
    alert('Your volume is now ' + output.textContent);
    //turns button blue
}

function plus() {    

    if (outputInt <= 100)
    {
    output.textContent = outputInt++;
    iconWidth = iconWidth + 2;
    increase.style.width = iconWidth + "px";
    }
    
    if (freeze == true)
    {
        //freezeButton.style.backgroundColor = "rgb(168, 168, 168)";
        freeze = false;
        freezeBox.style.backgroundColor = "rgb(168, 168, 168)";
    }
}

//const freeze = document.querySelector('.freeze-button');

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

let iconWidth = 70;
const increase = document.querySelector('.increase-button');
const freezeBox = document.querySelector('.freeze-button')

const plusButton = document.querySelector('.increase-button').addEventListener('click', plus);
const freezeButton = document.querySelector('.freeze-button').addEventListener('click', freezeDecrease);




setInterval(decrease, 240);
//setInterval(shrink, 130);
let freeze = false;

/*
function shrink() //makes shrinking smoother
{
    if (outputInt > 0 && freeze == false)
    {

        iconWidth = iconWidth - 1;
        increase.style.width = iconWidth + "px";
    }
}
*/

function decrease()
{
    if (outputInt > 0 && freeze == false)
    {
        outputInt--;
        output.textContent = outputInt;
        iconWidth = iconWidth - 2;
        increase.style.width = iconWidth + "px";

    }
}

function freezeDecrease()
{
    //freezeButton.style.backgroundColor = "blue";
    freeze = true;
    freezeBox.style.backgroundColor = "blue";
}