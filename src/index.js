import "./styles.css";
import burritoImage from "./images/burrito1.webp";

console.log('Burrito image path:', burritoImage);

const homeButton = document.querySelector(".menu.one");
const menuButton = document.querySelector(".menu.two");
const aboutButton = document.querySelector(".menu.three");

const content = document.getElementById('content');

function changeContent(pageChoice) {
    if(pageChoice == "home") {
        content.innerHTML = 
            `<h1>BURRITO BOULEVARD</h1>

            <div class="container">
                <h3>Welcome to Flavor Town!</h3>
                <img src="${burritoImage}" alt="a delicious burrito">
                <p>Experience the most authentic and delicious burritos this side of the boulevard! Our handcrafted burritos are made fresh daily with premium ingredients, slow-cooked meats, and our signature salsas. From classic carne asada to creative fusion flavors, every bite is a journey to burrito paradise. Come <strong>hungry</strong>, leave <strong>happy!</strong></p>
            </div>
            `;
    }
    else {
        content.innerHTML = `<h1>Welcome!</h1>`;
    }
}

homeButton.addEventListener("click", () => changeContent("home"));
menuButton.addEventListener("click", () => changeContent("menu"));
aboutButton.addEventListener("click", () => changeContent("about"));

// Load home content by default
changeContent("home");