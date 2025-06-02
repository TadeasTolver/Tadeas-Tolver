import {setNavEnglish, setNavSpanish, setNavCzech} from "./nav-language.js";

const mainPtext = {
    cz: `
    Vitejte na mé webovce.<br>
    Pokuď si chcete přečíst popis mých videí, nebo chcete podpořit dobro, jste na správném místě. Doufám že tahle webovka je více profesionální 
    než ta předchozí.
    ` ,
    en: `
    Welcome to my website.<br>
    If you want to read a description of my videos, or you want to support the good, you are in the right place. I hope this website is more proffesional
    than the previous one.
    `,
    es:
    `
    Bienvenido a mi sitio.<br>
    Si quiere usted leer sobre mis vídeos, o si quiere apoyar el bueno, está en el derecho luego. Espero que este sitio es más profesinal que el último.
    `
};

const mainP = document.querySelector("#main-p");
const title = document.querySelector(".jmeno");
const contactDiv = document.querySelector(".contact-div");
const czechButton = document.querySelector("#cesky"); 
const englishButton = document.querySelector("#english"); 
const spanishButton = document.querySelector("#espanol"); 


function setCzech() {
    czechButton.style.backgroundColor = "#19660d";
    czechButton.style.color = "white";
    englishButton.style.backgroundColor = "white";
    englishButton.style.color = "black";
    spanishButton.style.color = "black";
    spanishButton.style.backgroundColor = "white";
    
    mainP.innerHTML = mainPtext.cz;
    
    setNavCzech();
    
    localStorage.setItem("language", "cz");   
}

function setEnglish() {
    englishButton.style.backgroundColor = "#19660d";
    englishButton.style.color = "white";
    czechButton.style.backgroundColor = "white";
    czechButton.style.color = "black";
    spanishButton.style.color = "black";
    spanishButton.style.backgroundColor = "white";
    
    mainP.innerHTML = mainPtext.en;
    
    setNavEnglish();
    
    localStorage.setItem("language", "en"); 
}

function setSpanish() {
    spanishButton.style.backgroundColor = "#19660d";
    spanishButton.style.color = "white";
    czechButton.style.backgroundColor = "white";
    czechButton.style.color = "black";
    englishButton.style.color = "black";
    englishButton.style.backgroundColor = "white";
    
    mainP.innerHTML = mainPtext.es;
    
    setNavSpanish();
    
    localStorage.setItem("language", "es"); 
}

if (localStorage.getItem("language") === "en") {
    setEnglish();
} else if (localStorage.getItem("language") === "es") {
    setSpanish();
} else {
    setCzech();
}

czechButton.addEventListener("click", setCzech);
englishButton.addEventListener("click", setEnglish);
spanishButton.addEventListener("click" , setSpanish); 



// image carousel:
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

function initializeSlider() {
    slides[slideIndex].style.display = "block";
    intervalId = setInterval(nextSlide, 10000);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    slides[slideIndex].style.display = "block";
    
    if (slideIndex === 1) {
        mainP.style.color = "#4d73a8";
        title.style.color = "#4d73a8";
        contactDiv.style.color = "#09225c";
    } else {
        mainP.style.color = "#19660d";
        title.style.color = "#19660d";
        contactDiv.style.color = "#19660d";
    }
    
    console.log(slideIndex);
}


function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
