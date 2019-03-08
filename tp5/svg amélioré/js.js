// Données
var countries = [
  {
    x: 102,
    y: 345,
    text: "Pays 1",
    color: "#E89777"
  },
  {
    x: 34,
    y: 67,
    text:  "Pays 2",
    color: "#E89777"
  },
  {
    x: 563,
    y: 241,
    text:  "Pays 3",
    color: "#E89777"
  },
  {
    x: 120,
    y:  52,
    text:  "Pays 4",
    color: "#98A7F0"
  },
  {
    x: 467,
    y: 207,
    text:  "Pays 5",
    color: "#98A7F0"
  },
  {
    x: 366,
    y: 291,
    text: "Pays 6",
    color: "#98A7F0"
  },
  {
    x: 111,
    y: 34,
    text: "Pays 7",
    color: "#98A7F0"
  },
  {
    x: 234,
    y: 345,
    text: "Pays 8",
    color: "#54BC9A"
  },
  {
    x: 509,
    y: 344,
    text: "Pays 9",
    color: "#54BC9A"
  },
  {
    x: 375,
    y: 120,
    text: "Pays 10",
    color: "#54BC9A"
  }
];

// Sélection/création des éléments du DOM

/* Question 6 */

let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
document.getElementById("content").appendChild(svg);
// document.getElementById("content").insertBefore(svg, null);

/* Question 7 */

// for(let i=0;i<countries.length;i++){
  
//   let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
//   let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//   let text   = document.createElementNS("http://www.w3.org/2000/svg", "text");
//   circle.setAttribute('cx',     countries[i].x);
//   circle.setAttribute('cy',     countries[i].y);
//   circle.setAttribute('fill',   countries[i].color);
//   circle.setAttribute('stroke', countries[i].color);
//   text.textContent =            countries[i].text;
//   text.setAttribute('x',        countries[i].x+10);
//   text.setAttribute('y',        countries[i].y+5);
//   text.setAttribute('fill',     countries[i].color);
//   svg.appendChild(group);
//   group.appendChild(circle);
//   group.appendChild(text);
// } 

countries.forEach(countrie => {
  let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  let text   = document.createElementNS("http://www.w3.org/2000/svg", "text");
  circle.setAttribute('cx',     countrie.x);
  circle.setAttribute('cy',     countrie.y);
  circle.setAttribute('fill',   countrie.color);
  circle.setAttribute('stroke', countrie.color);
  text.textContent =            countrie.text;
  text.setAttribute('x',        countrie.x+10);
  text.setAttribute('y',        countrie.y+5);
  text.setAttribute('fill',     countrie.color);
  svg.appendChild(group);
  group.appendChild(circle);
  group.appendChild(text);
}
)

// Actions
function toggle_circle() {
  this.classList.toggle("selected");
}

// Abonnements

/* Question 8 */
let circles  = document.getElementsByTagName("circle");
for (let circle of circles) {
    circle.addEventListener('click', toggle_circle)
}