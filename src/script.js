
function generateBullet(event) {
    event.preventDefault();

// Build the API
let titleInput = document.querySelector("#title-input");
let skillsInput = document.querySelector("#skills-title");
let apiKey = "03bb378d4df0e4c5cat14b701460900o";
let prompt = `User instructions: Generate a bullet point about ${titleInput.value}, ${skillsInput}`;
let context = "You are a professional recruiting expert. Your mission is to generate 4 line resume bullet points in basic HTML and separate each line with a <br/>. This helps users turn simple job tasks into professional CV impactful bullet points using AI. Do NOT include inverted commas and the html word in the bullet points. The goal is to make writing resumes faster, easier and more effective for job seekers. Sign the bullets with a motivational compliment NOT at the end in a <strong> element.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

// To Call the genrated poem to be displayed with the style from CSS 
let bulletElement = document.querySelector("#bullet");
bulletElement.classList.remove("hidden");

// Display loader while generating bullet point
bulletElement.innerHTML = `<div class ="loader"></div>`

// Make a call to the API from Axios
axios.get(apiUrl).then(displayBullet);
}

// Display the generated bullet point
let bulletFormElement = document.querySelector("#title-skills-form");
bulletFormElement.addEventListener("submit", generateBullet);

