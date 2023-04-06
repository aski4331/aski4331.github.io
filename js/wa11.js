
const relaxButton = document.querySelector('#js-relax');
const socialButton = document.querySelector('#js-social');
const productiveButton = document.querySelector('#js-productive');
const hobbyButton = document.querySelector('#js-hobby');

relaxButton.addEventListener('click', getRelax);
socialButton.addEventListener('click', getSocial);
productiveButton.addEventListener('click', getProductive);
hobbyButton.addEventListener('click', getHobby);

//social, recreational, cooking, relaxation, education, busywork, charity, music
//Find a hobby(recreational, cooking, music), Be productive(busywork, education, charity), Relax(relaxation), Be social(social)
// const triviaAPI = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
const activityAPI = 'https://www.boredapi.com/api/activity';

async function getRelax() //function must be async to allow for await
{
    //console.log('Hello');

    //whatever we put in try will try to execute (put fetch API here)
    try
    {
        const response = await fetch(activityAPI); //await is waiting until we get a response from the fetch call

        if (!response.ok) //in the case of a response that isn't good,
        {
            throw Error(response.statusText); //check for an error
        }

        const json = await response.json(); //make a variable, convert the response to json

        if (json.type == 'relaxation')
        {displayActivity(json.activity); console.log(json.type);}//sends the question to the display function to be displayed in the white box
        else
        {getRelax();}
        
        // answerButton.addEventListener('click', () => showPrice(json.price));
    }
    //if something is wrong wth fetching from API, send out an error to alert and console
    catch (err)
    {
        console.log(err);
        alert('Failed to fetch activity');
    }
    
}

async function getSocial() //function must be async to allow for await
{
    //console.log('Hello');

    //whatever we put in try will try to execute (put fetch API here)
    try
    {
        const response = await fetch(activityAPI); //await is waiting until we get a response from the fetch call

        if (!response.ok) //in the case of a response that isn't good,
        {
            throw Error(response.statusText); //check for an error
        }

        const json = await response.json(); //make a variable, convert the response to json

        if (json.type == 'social')
        {displayActivity(json.activity); console.log(json.type);}//sends the question to the display function to be displayed in the white box
        else
        {getSocial();}
        
        // answerButton.addEventListener('click', () => showPrice(json.price));
    }
    //if something is wrong wth fetching from API, send out an error to alert and console
    catch (err)
    {
        console.log(err);
        alert('Failed to fetch activity');
    }
    
}

// Be productive(busywork, education, charity),
async function getProductive() //function must be async to allow for await
{
    //console.log('Hello');

    //whatever we put in try will try to execute (put fetch API here)
    try
    {
        const response = await fetch(activityAPI); //await is waiting until we get a response from the fetch call

        if (!response.ok) //in the case of a response that isn't good,
        {
            throw Error(response.statusText); //check for an error
        }

        const json = await response.json(); //make a variable, convert the response to json

        if (json.type == 'busywork' || json.type == 'education' || json.type == 'charity')
        {displayActivity(json.activity); console.log(json.type);}//sends the question to the display function to be displayed in the white box
        else
        {getProductive();}
        
        // answerButton.addEventListener('click', () => showPrice(json.price));
    }
    //if something is wrong wth fetching from API, send out an error to alert and console
    catch (err)
    {
        console.log(err);
        alert('Failed to fetch activity');
    }
    
}

//hobby(recreational, cooking, music),
async function getHobby() //function must be async to allow for await
{
    //console.log('Hello');

    //whatever we put in try will try to execute (put fetch API here)
    try
    {
        const response = await fetch(activityAPI); //await is waiting until we get a response from the fetch call

        if (!response.ok) //in the case of a response that isn't good,
        {
            throw Error(response.statusText); //check for an error
        }

        const json = await response.json(); //make a variable, convert the response to json

        if (json.type == 'recreational' || json.type == 'cooking' || json.type == 'music')
        {displayActivity(json.activity); console.log(json.type);}//sends the question to the display function to be displayed in the white box
        else
        {getHobby();}
        
        // answerButton.addEventListener('click', () => showPrice(json.price));
    }
    //if something is wrong wth fetching from API, send out an error to alert and console
    catch (err)
    {
        console.log(err);
        alert('Failed to fetch activity');
    }
    
}


//{"activity":"Make homemade ice cream","type":"cooking","participants":1,"price":0.2,"link":"","key":"3818400","accessibility":0.2}


function displayActivity(quote)
{
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;  //set the quote text to the quote
    const answer = document.querySelector('#js-answer-text');
    answer.textContent = '';
}

function showPrice(answer) 
{
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;  //set the answer text to the quote
}


function showRelaxation(activity) 
{
    const activityText = document.querySelector('#js-quote-text');
    activityText.textContent = activity;  //set the answer text to the quote
}
