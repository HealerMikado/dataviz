// Min et max d'une liste avec d3

d3.extent(iterable[, accessor])


// Sauf que vous vous voulez le min max d'une des attributs de vos éléments. Utiliser la fonction map

countries.map(d=>d.income_per_person)

// Retourne une liste avec seulement income_per_person


// Donc vous devez écrire :

d3.extent(countries.map(d => d.income_per_person))
