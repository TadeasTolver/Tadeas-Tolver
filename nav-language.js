const home = document.querySelector("#nav-link1");
const good = document.querySelector("#nav-link3");

export function setNavEnglish() {
    home.innerHTML = "Home";
    good.innerHTML = "Karma enchancer";
}

export function setNavSpanish() {
    home.innerHTML = "Casa";
    good.innerHTML = "Quiero más karma";
} 

export function setNavCzech() {
    home.innerHTML = "Domů";
    good.innerHTML = "Vylepšovač karmy";
}
