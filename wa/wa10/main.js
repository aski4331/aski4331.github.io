const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg"];

/* Declaring the alternative text for each image file */

const altText = ["Closeup of a human eye", "Wavy white stone", "A patch of purple and white flowers", "Egptian art of three central figures, one with a dog head", "A brown and orange butterfly on a large green leaf"]

/* Looping through images */
for(let i = 0; i < 5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => getInfo(altText[i], filenames[i]));
    
}


function getInfo(Alt, Src)
{   
    displayedImage.setAttribute('src', Src);
    displayedImage.setAttribute('alt', Alt);
}




/* 
Wiring up the Darken/Lighten button 
Checks the current class name set on the <button> — you can again achieve this by using getAttribute().

If the class name is "dark", changes the <button> class to "light" (using setAttribute()), 
its text content to "Lighten", and the background-color of the overlay <div> to "rgba(0,0,0,0.5)".

If the class name is not "dark", changes the <button> class to "dark", its text content back to "Darken", 
and the background-color of the overlay <div> to "rgba(0,0,0,0)".
*/

btn.addEventListener('click', () => change(btn.getAttribute("class")))


function change(Class)
{
    if (Class === "dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else
    {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}