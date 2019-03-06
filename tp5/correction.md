# Correction TP5

## SVG

Question :

1. Attributs :
   1. cx : position du centre en x
   2. cy : position du centre en y
   3. r : le rayon
   4. fill : couleur de remplissage
   5. opacity : transparence
   6. stroke-width : épaisseur du contour
   7. stroke : couleur du contour
2. Oui

   ```CSS
    circle {
        fill: indigo;
    }
   ```

   Et c'est le CSS qui gagne.

   > Comme dit rapidement dans le TP 4, il y a un système de hiérachie dans les styles. Un style défini précisement surchargera un style plus global. Ici même si l'attribut fill est défini au niveau de l'élément (donc théoriquement le plus précisement possible) c'est quand même le CSS qui gagne.
   >
   > Cela est dû au fait que l'on définit la couleur dans un attribut et pas dans le style de l'élément. Chose que l'on pourrait faire comme ça :
   >
   > ```HTML
   >            <circle cx= "90" cy= "80" r="50" style = "fill:blue"/>
   >```
   >
   > En définissant les couleurs dans un attributs style vous vous assurer que c'est le style définit dans l'objet qui sera pris. Mais ce n'est pas une très bonne pratique. Préférez les class et les id.

3. \<g\> \<\/g\> est un containeur (équivalment du span de HTML)

## Automatisation de la construction

1. ```JS
    var graph =  document.createElement("svg");
    document.getElementById("content").appendChild(graph);  
   ```
2. 
3. ```JS
    /*
    Fait référence à l'objet qui a appelé la méthode
    */
    function toggle_circle(e){
        this.classList.toggle("selected"); // classList est une syntaxe récente
    };

    /* 
    Iteration sur le talbeau des objets g qui contiennent un cercle et un text. La fonction map permet de retrouner un tableau avec les élèments contenus dans la fonction. Ici on récupère le premier fils de g, donc l'objet circle
    */
    let circles = document.selectElementsByTag("g")
        .map(g => g.childNodes[1]);
    /*
    On itère sur les cercles. foreach applique une fonction sur chaque élément de la liste en entrée mais ne renvoie rien. Ici on ajoute un id à chaque cercle, avec i l'index de l'objet dans le tableau
    */
    circles
            .forEach(function(c, i){
                c.id = "circle_"+i;
            });
    /*
    On met un evenListener sur chaque cercle
    */
    circles
            .forEach(function(c, i){
                c.addEventListener('click', toggle_circle);
            });


   ```

## Syntaxe simplifiée avec d3.js

1. 
   1. d3.select() : selectionne un seul élément
   2. d3.selectAll() : sélectionne un groupe
2. Ajoute un élément svg dans l'élément
3. Ajoute un cercle dans tout les \<g\>
4. Bon la réponse est loin d'être triviale. Comme dit précédement javascript est un langage utilisant beaucoup de programmation fonctionnelle. Ce qui peut rendre le code un peu compliqué à lire. Reprenons le code suivant :

   ```js
   let circles = groups
    .append("circle")
    .attr("r", 10)
    .attr("cx", d => d.x) // "d" fait référence au "datum"
    .attr("cy", d => d.y)
    .attr("color", d => d.color)
    .attr("id", (d,i) => "country_"+i);
   ```

    Déjà premier point, même s'il n'y a pas de boucle, il faut imaginer que l'on réalise ces action pour chaque élément de groups. Ainsi l'on fait :

    1. On ajoute un objet circle à notre groupe courant
    2. On définit le rayon du cercle à 10
    3. On définit cx comme égal au paramètre x du datum de l'élément courant
    4. Pareils pour cy et color
    5. On met un id en fonction de l'index de l'élément dans le datum

    Ensuite pourquoi ne pas faire simplement :
    ``` JS
    .attr("id", i=>"country_"+i)
    ```

    Et bien car le second argument de attr attend soit une constante, soit une fonction qui aura comme paramètre le curent datum (d), l'idex courant (i) et le group courant (node). Si tout les paramètre ne sont pas nécessaire à un même moment, l'ordre doit être conservé. Donc vous pouvez soit faire (d), (d,i) ou (d,i,node) ([Source](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr)). Et il ne faut pas oublier que la syntaxe

    ``` JS
     i=>"country_"+i
    ```

    est bien une fonction (appelée fonction fléchée). Elle est identique à :

     ``` JS
     function (i) { return "country_"+i }
    ```

    > Même si les fonctions fléchée permettent un code plus compact, il est plus difficile à lire pour les personnes qui ne les connaissent pas. Si en JavaScript c'est une syntaxe assez courante, dans d'autre langage même si la syntaxe existe, elles ne sont pas souvent utilisées. Donc à manipuler avec précaution !

## Echelle, couleurs et axes

1. Créer une variable uniquement en lecture. width/height taille de la zonne d'affichage. Oui on peut récupérer la taille disponible. Mais dans ce cas ne pas mettre des constantes, car on va vouloir faire evoluer la taille en direct.

``` JS
    const heigth = 800,
          width = 1000;

    var x = d3.scaleLinear()
        .domain(..............)
        .range(...............);

    var y = d3.scaleLinear()
        .domain([40,100])
        .range(0, heigth);

    // var color = .......... ;

    let circles = groups
        .append("circle")
        .attr("r", 10)
        .attr("cx", .............)
        .attr("cy", d => y(d.life_expectancy))
        // .attr("color", .............)
        .attr("id", (d,i) => "country_"+i);

    groups
        .append("text")
        .style("color", "grey")
        .attr("x", ...................)
        .attr("y", d => y(d.life_expectancy)-10)
        .text(d => d.name);
```