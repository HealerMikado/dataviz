// Données

var countries = [
  {
    "name": "Afghanistan",
    "income_per_person": 1925,
    "life_expectancy": 53.8,
    "population": 32526562,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Albania",
    "income_per_person": 10620,
    "life_expectancy": 78,
    "population": 2896679,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Algeria",
    "income_per_person": 13434,
    "life_expectancy": 76.4,
    "population": 39666519,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Andorra",
    "income_per_person": 46577,
    "life_expectancy": 84.8,
    "population": 70473,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Angola",
    "income_per_person": 7615,
    "life_expectancy": 59.6,
    "population": 25021974,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Antigua and Barbuda",
    "income_per_person": 21049,
    "life_expectancy": 76.4,
    "population": 91818,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Argentina",
    "income_per_person": 17344,
    "life_expectancy": 76.5,
    "population": 43416755,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Armenia",
    "income_per_person": 7763,
    "life_expectancy": 74.7,
    "population": 3017712,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Australia",
    "income_per_person": 44056,
    "life_expectancy": 82.3,
    "population": 23968973,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Austria",
    "income_per_person": 44401,
    "life_expectancy": 81.3,
    "population": 8544586,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Azerbaijan",
    "income_per_person": 16986,
    "life_expectancy": 72.9,
    "population": 9753968,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Bahamas",
    "income_per_person": 22818,
    "life_expectancy": 73.7,
    "population": 388019,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Bahrain",
    "income_per_person": 44138,
    "life_expectancy": 79.1,
    "population": 1377237,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Bangladesh",
    "income_per_person": 3161,
    "life_expectancy": 70.4,
    "population": 160995642,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Barbados",
    "income_per_person": 12984,
    "life_expectancy": 75.7,
    "population": 284215,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Belarus",
    "income_per_person": 17415,
    "life_expectancy": 71,
    "population": 9495826,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Belgium",
    "income_per_person": 41240,
    "life_expectancy": 80.5,
    "population": 11299192,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Belize",
    "income_per_person": 8501,
    "life_expectancy": 71.7,
    "population": 359287,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Benin",
    "income_per_person": 1830,
    "life_expectancy": 62.3,
    "population": 10879829,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Bhutan",
    "income_per_person": 7983,
    "life_expectancy": 72.7,
    "population": 774830,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Bolivia",
    "income_per_person": 6295,
    "life_expectancy": 73.2,
    "population": 10724705,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Bosnia and Herzegovina",
    "income_per_person": 9833,
    "life_expectancy": 78.9,
    "population": 3810416,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Botswana",
    "income_per_person": 17196,
    "life_expectancy": 58.7,
    "population": 2262485,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Brazil",
    "income_per_person": 15441,
    "life_expectancy": 74.4,
    "population": 207847528,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Brunei",
    "income_per_person": 73003,
    "life_expectancy": 77.1,
    "population": 423188,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Bulgaria",
    "income_per_person": 16371,
    "life_expectancy": 74.8,
    "population": 7149787,
    "year": 2015,
    "continent": "europe"
  },
  {
    "name": "Burkina Faso",
    "income_per_person": 1654,
    "life_expectancy": 60.9,
    "population": 18105570,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Burundi",
    "income_per_person": 777,
    "life_expectancy": 61.4,
    "population": 11178921,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Cambodia",
    "income_per_person": 3267,
    "life_expectancy": 69.4,
    "population": 15577899,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Cameroon",
    "income_per_person": 2897,
    "life_expectancy": 59.4,
    "population": 23344179,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Canada",
    "income_per_person": 43294,
    "life_expectancy": 81.7,
    "population": 35939927,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Cape Verde",
    "income_per_person": 6514,
    "life_expectancy": 72.9,
    "population": 520502,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Central African Republic",
    "income_per_person": 599,
    "life_expectancy": 49.6,
    "population": 4900274,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Chad",
    "income_per_person": 2191,
    "life_expectancy": 57.4,
    "population": 14037472,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Chile",
    "income_per_person": 22465,
    "life_expectancy": 79.4,
    "population": 17948141,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "China",
    "income_per_person": 13334,
    "life_expectancy": 76.2,
    "population": 1376048943,
    "year": 2015,
    "continent": "asia"
  },
  {
    "name": "Colombia",
    "income_per_person": 12761,
    "life_expectancy": 78,
    "population": 48228704,
    "year": 2015,
    "continent": "americas"
  },
  {
    "name": "Comoros",
    "income_per_person": 1472,
    "life_expectancy": 68.1,
    "population": 788474,
    "year": 2015,
    "continent": "africa"
  },
  {
    "name": "Congo. Dem. Rep.",
    "income_per_person": 809,
    "life_expectancy": 60.8,
    "population": 77266814,
    "year": 2015,
    "continent": "africa"
  }
];

var content = d3.select("#content");
var circles;

function generateSVG() {
  d3.select('svg').remove();
  var  svg     = content.append("svg");

// Paramètres graphiques


let height  = content.node().offsetHeight,
    width   = content.node().offsetWidth,
    inner_margin = 30, // entre les axes et le premier point
    outer_margin = 30, // entre le graphique lui-même et le bord
    margin = inner_margin+outer_margin;

let myColors = ["#6EBB87", "#2CB8EA", "#DA94CE", "#DE9D6C"];
// couleurs de: http://bl.ocks.org/katossky/af9e0f577c5a5aaa9c254cf2dd4b5b96

// Échelles et axes

/* Question d */
var xDomain = d3.extent(countries.map(d => d.income_per_person)),
    yDomain = d3.extent(countries.map(d => d.life_expectancy)),
    rDomain = [0, d3.max(countries.map(d => d.population))];

var x = d3.scaleLinear() /* Question 15 et d */
      .domain(xDomain)
      .range([margin, width-margin]),
    y = d3.scaleLinear()
      .domain(yDomain)
      .range([height-margin, margin]),
    o = d3.scaleOrdinal()
      .domain(["asia", "africa", "europe", "americas"])
      .range(myColors),
    r = d3.scaleSqrt() /* Question 16 : car comme on veut la surface prop, on veut le le rayon en racine²*/
      .domain(rDomain)
      .range([0,80]);

// Objets graphiques

let groups  = svg
  .selectAll("g")
    .data(countries)
  .join("g")
    .attr("fill", d => o(d.continent)); /* Question 15 */

circles = groups
    .sort((a,b) => b.population-a.population)
  .append("circle")
    .attr("cx",     d => x(d.income_per_person)) /* Question 15 */
    .attr("cy",     d => y(d.life_expectancy))
    .attr("stroke", d => o(d.continent))
    .attr("r",      d => r(d.population)); /* Question 16 */

groups
  .append("text")
    .attr("x",      d => x(d.income_per_person)+r(d.population)+5) /* Question 15 + 16 */
    .attr("y",      d => y(d.life_expectancy)+5)
    .text(d => d.name);

let xAxis = svg.append("g")
    .attr("transform", "translate(0," + (height-outer_margin) + ")")
    .call(d3.axisBottom().scale(x));

let yAxis = svg.append("g") /* Question 17 */
    .attr("transform", "translate(" + outer_margin + ",0)")
    .call(d3.axisLeft().scale(y));
 
xAxis.append("text")
    .attr("fill", "grey")
    .attr("text-anchor", "end")
    .attr("x", width - margin)
    .attr("y", -3)
    .text("Revenu par habitant, en parité de pouvoir d'achat (dollars)");

yAxis.append("text") /* Question e */
    .attr("text-anchor", "end")
    .attr("fill", "grey")
    .attr("x", -margin)               /* Difficile */
    .attr("y", 10)                    /* Difficile */
    .attr("transform", "rotate(-90)") /* Difficile */
    .text("Espérance de vie (années)");

}
// Actions

function toggle_circle() {
  this.classList.toggle("selected");
}


generateSVG();

// Abonnements

circles.on("click", toggle_circle);
window.addEventListener("resize", generateSVG);
