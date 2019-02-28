# Retour TP 4

## HyperText markup language

Comme dit dans votre TP, le HTML est le langage qui **structure** et qui donne un sens à une page web (on parle de **sémantique**). Pourquoi la sémantique de la page est importante ? Et bien pour plusieurs raisons. Déjà si son contenu est lisible par un humain, il est plus dur à analyser par un ordinateur, or, la majorité du traffic d'internet est fait par des machines. Alors si dans beaucoup de cas c'est un traffic non souhaité, dans le cas des moteurs de recherche qui scanne votre page, vous voulez leur offrir le plus d'information possible pour être mieux référencé.

L'autre raison est lié à l'accéssibilité du web. Internet doit être utilisable par tous. Et donc les non/mal voyant pour qui utilisent des lecteurs d'écran. Et ces lecteurs utilisent beaucoup le sens des balises (et d'autres choses aussi mais c'est hors sujet)

Enfin un page avec des balises qui ont du sens et qui sont bien utilisées et une page plus facile à relire par votre futur vous, ou pas le collègue qui va reprendre votre travail. S'il vous plait, pensez à lui.

La structure quant à elle est plus simple à comprendre je pense. Le HTML est très proche du XML (cf TP projet info). C'est un langage à balises, qui peuvent être mise les unes dans les autres à la façon de poupés russes. Cette hiérarchie s'appelle le DOM (Document Object Model). Je vous ai joint une page HTML assez basique pour que vous puissez voir l'assemblage des balises.

### Différence div et span

div et span sont les deux balises couteaux suisses de HTML. Elles ne portent aucun sens, et servent juste de container pour appliquer des styles CSS. Alors en quoi sont-elles différentes ? Et bien c'est "simple" :

- div est une balise "bloc"
- span est une balise "inline"

Dit autrement, imaginez une div comme un rectangle qui fait un retour à la ligne juste avant de commencer et à sa fin. Bien qu'il puisse contenir du texte avec des retours à la ligne à l'intérieur, pour lui la notion de ligne n'a pas de sens. C'est juste un bloc qui s'insère dans le flux de votre document.

span quant à lui est *inline* ce qui veut dire qui s'insère dans votre flux de document. Typiquement span va servir à mettre du texte en valeur dans un paragraphe.

### Class et id en HTML

En HTML il y a deux moyens préférable pour repérer des objets, les **class** et les **id**.

Un **id** est un identifiant UNIQUE ! Sur une page il ne doit y avoir qu'un seul élément pour un id donné. Si un id est présent plusieurs fois, le comportement du javascript sera incertain. Donc DON'T DO THAT !

Les class elles sont plus souples. Plusieurs objets peuvent avoir la même class, et un objet peut avoir plusieurs class.

L'utilité principale des class et des id est pour le CSS et le javascript car cela va vous permettre de répérer facilement vos objets dans votre page.

### Balises sémantiques

Il existe désormais beaucoup de balises poteuse de sens. Donc au revoir les 

``` html
<div id="header"> </div>
```

bonjour :


``` html
<header> </header>
```

Je ne vais pas faire la liste mais vous voyez l'idée :)

### HTML5 vs XHTML vs XML

En voilà une question de culture informatique

Rapidement le XHTML c'est un peu l'enfant du XML et du HTML. Il reprend les mêmes balises que le HTML mais force la rigueur du XML. Par exemple il n'aime pas les balises qu'on ne ferme pas. Car dans les fait, ce code HTML est valide

```html
<ul>
    <li> elemnt 1
    <li> elemnt 2
    <li> elemnt 3
    <li> elemnt 4
</ul>
```
Mais n'est pas valide en XHTML.
Franchement sauf dans une cas très spécifique je n'ai jamais du faire de page en XHTML spécifiquement.

Et le XML dans tout ça ? Et bien le HTML est un langage de balise dont assez proche du XML. Sauf qu'en XML vous pouvez définir les balises que vous souhaitez, pas en HTML. Donc le HTML semble plus restrictif. Mais en même temps, le HTML permet plus de liberté dans la gestion des balises. Il accèpte qu'on ne les ferme pas ou on peut avoir des attributs sans valeur. Globalement le HTML est plus un cousin du XML qu'une implémentation (chose que j'ai cru longtemps)

## Cascade Style Sheet

Maintenant que l'on a une page structurée, on va lui appliquer une couche de style. Pourquoi faire ça ailleurs que dans le HTML ? 

Parce que ce n'est pas le rôle du HTML de faire la présentation de votr page. La strucutrer et lui donner du sens c'est déjà pas mal ! En informatique on aime bien avoir des couches qui font des choses unitaires (même si ce paradigme change en ce moment). Donc on gère le style de la page ailleurs que dans la page.

> Il est possible de mettre du style directement dans la page HTML avec l'attribut style. D'expérience c'est une mauvaise idée car rapidement c'est ingérable.

Un fichier CSS ressemble à ça :

```css
selecteur1 {
    style1 : valeur1;
    style2 : valeur2;
    style3 : valeur3;
}

selecteur2 {
    style4 : valeur4;
    style5 : valeur5;
    style6 : valeur6;
}
```

### Les selecteurs CSS

Il y en a beaucoup ! Je vais vous présenter rapidement les plus courants

```css
/* Selecteur de balise
Le style s'applique sur toutes les balise h1*/
h1 {
}

/*Selecteur de class
Le style s'applique sur tout les éléments avec cette class*/
.myClass{
}

/*Selecteur d'id
Le style s'applique sur tout les éléments avec cet id
(un id peut être présent sur plusieurs pages)
*/
#id{ 
}

/*balise + class
Style sur les balises qui ont cette class*/
maBalise.myClass{
}

/*double class*/
.myClass.myOtherClass{
}

/*fils de*/
.myClass>.myOtherClass{
}

/*A l'intérieur de*/
.myClass .myOtherClass{
}
```

Je vais m'arrêter là je pense que c'est suffisant. Pour les styles il y en a beaucoup ! Et truc marrant certains sont spécifiques à un seul navigateur ! Bref faire une page jolie c'est pas simple et assez fastidieux. Deux solutions :

- Utiliser des bibliothèques pour vous faciliter le travail. Comme bootstrap ! Le résultat est vraiment bien sans trop d'effort
- Demander à une designer d'interface de la faire. Car même si HTML/CSS ne sont pas des langages de programmation, ils demandent une certaines expertise (surtout CSS) pour produire une page de qualité (ergonomique, accessible, responsive)
