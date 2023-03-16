const customName = document.getElementById('customname'); //stores name that is inputted
const randomize = document.querySelector('.randomize'); //stores reference to the generate button
const story = document.querySelector('.story'); //stores the story


//takes an array, and returns one of the items stored inside the array at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = "On Tuesday, Bob decided that life was boring. It was a balmy 80 fahrenheit outside, so Bob decided to leave home and set out on an adventure. After several hours of walking, :insertx: jumped out of a nearby bush and said, ':inserty:'  Bob, unfazed by the outburst, said, 'How do you do,' then :insertz:. In return for the kindness, Bob was offered 240 pounds of gold. Instead of taking it, Bob said, 'it would only weigh us down,' and continued the adventure beside their new friend.";

const insertX = 
    [
        "an enormous troll",
        "a spider the size of a car and wearing a top hat",
        "a scarecrow with a head made from a beet"
    ];

    const insertY = 
    [
        "AAAAAAAAAAAAH!!!",
        "Who are you and what are you doing on my sidewalk?",
        "They're coming! Run while you still can!"
    ];
    const insertZ = 
    [
        "offered to make some tea for them both",
        "asked if they could use a friend so they didn't feel the need to yell so much",
        "started laughing. They both laughed together until the sun set"
    ];


    //when the generate button (represented by the randoize variable) is clicked, the result() function is run.
randomize.addEventListener('click', result);

//if a name WAS inputted (custom name is not empty)
function result() {

let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    //stores inputted name into variable name
    const name = customName.value;
    //replace Bob in the story with that custom name."
    newStory = newStory.replace('Bob', name);
    newStory = newStory.replace('Bob', name);
    newStory = newStory.replace('Bob', name);
    newStory = newStory.replace('Bob', name);
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    //replace 300 with a calculation that converts 300 pounds into stones. 
    //Concatenate ' stone' onto the end of the result of the overall Math.round() call.
    const weight = Math.round(240 * 0.071429) + " stone";

    //replace 94 with a calculation that converts 94 Fahrenheit into centigrade. 
    //Concatenate ' centigrade' onto the end of the result of the overall Math.round() call.
    const temperature =  Math.round((80-32) * (5/9) ) + " centigrade";

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('80 fahrenheit', temperature);

  }

  story.textContent = newStory; //textContent property references the paragraph
  story.style.visibility = 'visible';
}
