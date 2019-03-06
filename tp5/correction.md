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