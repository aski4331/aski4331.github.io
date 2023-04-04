/*

Select the new quote button using a querySelector. Assign it to a new variable.
Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.

Add a new variable that holds the API endpoint: 
https://trivia.cyberwisp.com/getrandomchristmasquestion
Change the getQuote function to use the fetch method to get a random quote from that endpoint.
If successful, output the quote to the console
If it fails, output an error message to the console AND via alert
Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
Adjust getQuote to run displayQuote at the proper place in the code.
Notice when you refresh that a quote isn't displayed. Fix that.
*/


const quoteButton = document.querySelector('#js-new-quote');
const answerButton = document.querySelector('#js-tweet');

quoteButton.addEventListener('click', getQuote);


const triviaAPI = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() //function must be async to allow for await
{
    //console.log('Hello');

    //whatever we put in try will try to execute (put fetch API here)
    try
    {
        const response = await fetch(triviaAPI); //await is waiting until we get a response from the fetch call

        if (!response.ok) //in the case of a response that isn't good,
        {
            throw Error(response.statusText); //check for an error
        }

        const json = await response.json(); //make a variable, convert the response to json
        // console.log(json.question); //prints the question
        // console.log(json.answer); //prints the answer
        displayQuote(json.question);//sends the question to the display function to be displayed in the white box
        
        answerButton.addEventListener('click', () => showAnswer(json.answer));
    }
    //if something is wrong wth fetching from API, send out an error to alert and console
    catch (err)
    {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
    
}

function displayQuote(quote)
{
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;  //set the quote text to the quote
    const answer = document.querySelector('#js-answer-text');
    answer.textContent = '';
}

function showAnswer(answer) 
{
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;  //set the answer text to the quote
}

getQuote();