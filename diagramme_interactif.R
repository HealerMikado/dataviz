install.packages("tidyverse")
library(tidyverse)

load("data/NUTS2_year.RData")

NUTS2_year %>% filter(!is.na(superficie),!is.na(population), !is.na(année) ) %>%pull(année) %>% min ()

min(NUTS2_year$année)