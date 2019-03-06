// récupérage des éléments du DOM
var graphic = document.getElementById("graphic");
var buttons = document.getElementsByTagName("button");
var reinitialize = document.getElementById("reinitialize");
var sidebar = document.getElementById("sidebar");
// var random       = document.getElementById("random");

// création d'un nouvel élément du DOM
var warning = document.createElement("p");
warning.id = 'warning';
warning.textContent = "Chargement en cours";

// création d'un nouvel élément du DOM
var graph =  document.createElement("svg");
document.getElementById("content").appendChild(graph);  

// définitions des variables
var url_initial = graphic.src;
var url_current = graphic.src;
var urls_for_random_graphic = [
  "http://www.vackerunderbar.se/wp-content/uploads/2010/08/gapminder.png",
  "https://cdn.quotesgram.com/img/16/29/360148697-DSC8242hans-rosling.jpg",
  "https://i0.wp.com/econlife.com/wp-content/uploads/2017/02/Gapminder_World-1.jpg",
  "http://www.stashmedia.tv/wp-content/uploads/2010/12/rosling.png"
];

// définition des fonctions
function load_image(event) {

  var button = event.target;

  if (button.id == "reinitialize") {

    url_current = url_initial;

  } else if (button.id == "random") {

    var urls = urls_for_random_graphic.filter(
      url => url != url_current
    );
    url_current = urls[Math.floor(Math.random() * urls.length)];
  }

  /* charger une image peut prendre du temps
  nous simulons ça par une attente de 2s
  avant de générer l'événement "image_ready" ;
  pendant ce temps, le reste du code continue à être exécuté */
  graphic.src = url_current;
  setTimeout(function() {
    var image_ready = new Event('image_ready');
    /* Le fait que l'image soit prête à être affichée
    ne concerne pas le bouton lui même! L'événement 
    est domc généré directement au niveau
    du document tout entier. */
    document.dispatchEvent(image_ready);
  }, 2000); // 2000 ms = 2s
}

var add_warning = function() {
  sidebar.insertBefore(warning, null);
  // Le javascript standard requiert à la fois un élément parent ET un élément frère pour insérer un nouvel élément. (Le nouvel élément est inséré juste devant le frère. "null" signifie donc en dernière position!) De nombreuses bibliothèques simplifient cette syntaxe alambiquée.
}

function remove_warning() {
  sidebar.removeChild(warning);
}

var blur_image = function() {
  graphic.style.opacity = 0.5;
}

var unblur_image = function() {
  graphic.style.opacity = 1;
}

/*
    correctoin question 3
*/
function toggleCircle(){
    var cercles = document.getElementsByTagName("circle");
    Array.from(cercles).forEach(cercle => {
        cercle.classList.toggle("selected")
    });
}
firstCircle.addEventListener("click", toggleCircle);


// initialisation
reinitialize.addEventListener("click", load_image);
reinitialize.addEventListener("click", blur_image);
reinitialize.addEventListener("click", add_warning);
random.addEventListener("click", load_image);
random.addEventListener("click", blur_image);
random.addEventListener("click", add_warning);
document.addEventListener("image_ready", unblur_image);
document.addEventListener("image_ready", remove_warning);

