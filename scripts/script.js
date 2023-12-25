
/*Upside down */ 

// document.getElementById("upside").addEventListener("click",function(){
//     document.body.classList.add("upside")
// })

// document.getElementById("world").addEventListener("click",function(){
//     document.body.classList.remove("upside")
// })




/* Texte d'acceuil */
const welcomeText = "Bonjour, moi c'est Lyes SID ALI et bienvenu sur mon porfolio !";
const contentText = "Vous allez être embarqué dans un univers spécial dans quelques instants, Appuyez sur le bouton ci dessous afin d'accéder au premier niveau pour en savoir plus sur moi."
let welcomeIndex = 0;
let contentIndex = 0;

function typeWelcomeText() {
    if (welcomeIndex < welcomeText.length) {
        document.getElementById("welcome-text").textContent += welcomeText.charAt(welcomeIndex);
        welcomeIndex++;
        setTimeout(typeWelcomeText,20); 
    } else {
        typeContentText();
    }
}

function typeContentText() {
    if (contentIndex < contentText.length) {
        document.getElementById("content-text").textContent += contentText.charAt(contentIndex);
        contentIndex++;
        setTimeout(typeContentText,20); 
    } else{
        document.getElementById("start").style.display = "inline";

    }
}

typeWelcomeText();



/* Défilement des pages */
document.getElementById("start").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("presentation").classList.remove('hidden');
    const presentationSection = document.getElementById("posp"); 
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("accp").addEventListener("click", function(event) {
    event.preventDefault(); 
    const presentationSection = document.getElementById("posa");
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("presp").addEventListener("click", function(event) {
    event.preventDefault(); 
    const presentationSection = document.getElementById("posp");
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("etoile").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("formations").classList.remove('hidden');
    const presentationSection = document.getElementById("posf"); 
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("forp").addEventListener("click", function(event) {
    event.preventDefault(); 
    const presentationSection = document.getElementById("posf");
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("prop").addEventListener("click", function(event) {
    event.preventDefault(); 
    const presentationSection = document.getElementById("pospj");
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("conp").addEventListener("click", function(event) {
    event.preventDefault(); 
    const presentationSection = document.getElementById("posc");
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("tricher").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("formations").classList.remove('hidden');
    const presentationSection = document.getElementById("posf"); 
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("affiche").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("projets").classList.remove('hidden');
    const presentationSection = document.getElementById("pospj"); 
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});

document.getElementById("affichee").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("contact").classList.remove('hidden');
    const presentationSection = document.getElementById("posc"); 
    presentationSection.scrollIntoView({ behavior: "smooth" }); 
});


/* Sticky header */
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


