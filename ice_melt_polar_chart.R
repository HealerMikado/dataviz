library(tidyverse)

#Import des données
ice_melt<- read.table("data/ice_melt.txt", quote="\"", comment.char="")

#Renommage des colonnes
colnames(ice_melt) <- c("année",  "janvier", "fevrier", "mars", "avril", "juin","mai", "juillet", "août", "septembre", "octobre", "novembre", "décembre")

#Besoin de modifier les données pour faire le graph. On va faire une table avec comme colonne, mois, année, valeur de glace
ice_melt_clean<- data.frame("mois" = rep(c("Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),40)
                , "value"=0
                , "année" = 0)

#Besoin de l'ordre des mois sinon le graph ne resemble à rien
ice_melt_clean$mois = factor(ice_melt_clean$mois, levels = month.abb)

#Bon je ne suis pas un expert de R, et il y a peut-être plus R-friendly.  Le principe, on va lire les données d'une ligne (= une année)
#pour les mettre dans un vecteur qu'on va ensuite coller dans le colonne value. Et au passage on génère aussi la colone année
valeursFinales <-c()
année <-c()

for (i in 1:40) {
  valeursFinales <- c(valeursFinales,as.numeric(ice_melt2 [i,]))
  année <- c(année, rep(1978+i, 12))
}

#On colle tout ça dans les colones
ice_melt_clean[,2] <- valeursFinales
ice_melt_clean[,3] <-année

# Tel quel le diagrame va avoir un trou entre décembre et janvier, alors on va ruser et faire des 'ponts'
bridges <- ice_melt_clean[ice_melt_clean$mois == 'Jan',] #récupére donnée de janvier
bridges$année <- bridges$année - 1    # On décale pour mettre ça à l'année n-1
bridges$mois <- NA    # On met la valeur de mois à NA pour ensuite la virer


ggplot(rbind(ice_melt_clean, bridges), aes(mois, value,group=année, color=année)) + 
  geom_line() + # on fait un diagramme basique en ligne
  geom_line(data = . %>% filter (année ==2018), color="red") +
  scale_x_discrete(expand = c(0,0), breaks = month.abb, name=NULL) + # On ferme les trous et on redéfini les labels pour ne pas avoir NA
  scale_y_continuous(name="Volume de glace (10³km³)") + 
  coord_polar(theta = "x",start=-pi*1/12) + # On fait un diagramme en coordonnées polaire et la magie s'opère <3
  scale_color_continuous(name="Année") + 
  geom_text(data = . %>% filter(row_number()==1 ), aes(label=année),
            nudge_y=2) +
  geom_text(data = . %>% group_by(année) %>% summarise(
    annéeGroup=last(année),
    mois=last(mois),
    value=last(value)
    ) %>% filter(annéeGroup == 2018), aes(label=année),
    nudge_y=-5.5,
    color="red") +
  theme_minimal()+
  labs(
    title    = "La spirale infernale de la fonte des glaces",
    subtitle = "PIOMAS Arctic Sea Ice Volume (10³km³)", 
    caption = "Source: http://psc.apl.uw.edu/research/projects/arctic-sea-ice-volume-anomaly/data/"
  )
 