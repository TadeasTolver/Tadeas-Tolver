import {setNavEnglish, setNavSpanish, setNavCzech} from "./nav-language.js";


//----------------------------------

const wwfLogo = document.querySelector("#wwf-logo");
wwfLogo.addEventListener("mouseover", () => {
    document.querySelector("#wwf-page-p").style.display = "block";
});
wwfLogo.addEventListener("mouseout", () => {
    document.querySelector("#wwf-page-p").style.display = "none";
});

//-----------------------------------

const headtitle = document.querySelector("title");
const title = document.querySelector(".title");
const karmaP = document.querySelector("#karma-p");
const supportBtn = document.querySelector("#support-wwf-btn");
const supportLocalBtn = document.querySelector("#support-local-btn");
const dontLikeNatureBtn = document.querySelector("#dont-like-nature-btn");


supportLocalBtn.style.display = "block";

function setEnglish() {
    title.innerHTML = "Enhance your karma";
    karmaP.innerHTML = "Do you want to enhance your karma? And do you want to help innocent and helpless nature and animals? If yes, you can support the organization WWF. Respekt to all that donate at least a bit. You don't have to support monthly or annually, you can do it once. Thank you in advance.";
    supportBtn.innerHTML = "Support WWF";
    supportLocalBtn.style.display = "none";
    dontLikeNatureBtn.innerHTML = "I don't like animals and nature";
    headtitle.innerHTML = "Tadeas Tolver | Karma enhancer";
    
    setNavEnglish();
}

function setSpanish() {
    title.innerHTML = "Mejorar su karma";
    karmaP.innerHTML = "Quiere usted mejorar su karma? Y quiere usted ayudar los inocentos animales y la natura? Si es así, puede apozar la organización WWF. Respeto a todos los que apoyan. No es necesario que apoye usted mensual o anualmente, puede hacerlo una sola vez. Gracias de antemano.";
    supportBtn.innerHTML = "Apoyar a WWF";
    supportLocalBtn.innerHTML = "WWF España";
    supportLocalBtn.onclick = () => {
        window.location.href = "https://www.wwf.es/";
    };
    dontLikeNatureBtn.innerHTML = "No me gusto los animales";
    headtitle.innerHTML = "Tadeas Tolver | + karma";
    
    setNavSpanish();
}

function setCzech() {
    title.innerHTML = "Vylepšete si karmu";
    karmaP.innerHTML = "Chcete si vylepšit karmu? A chcete pomoct nevyním zvířatům a přírodě? Pokuď ano, můžete podpořit nezyskovou organizaci WWF která pomáhá přírodě a zvířatům. Respekt všem kteřý podpoří. Nemusíte podporovat měsíčně ani ročně, můžete jednorázově. Předem děkuju.";
    supportBtn.innerHTML = "Podpřit WWF";
    supportLocalBtn.innerHTML = "WWF Česko";
    supportLocalBtn.onclick = () => {
        window.location.href = "https://www.wwfcz.org/";
    };
    dontLikeNatureBtn.innerHTML = "Nemám rád zvířata a přírodu";
    title.innerHTML = "Tadeas Tolver | Vylepšovač karmy";
    
    setNavCzech();
}


if (localStorage.getItem("language") === "en") {
    setEnglish();
} else if (localStorage.getItem("language") === "es") {
    setSpanish();
} else {
    setCzech();
}

