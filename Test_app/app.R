#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
library(tidyverse)
library(DT)

load("NUTS2_year.RData")
NUTS2_year <- NUTS2_year %>% filter(!is.na(superficie),!is.na(population), !is.na(année) )
minYear <- NUTS2_year %>% filter(!is.na(superficie),!is.na(population), !is.na(année) ) %>%pull(année) %>% min ()
maxYear <- NUTS2_year %>% filter(!is.na(superficie),!is.na(population), !is.na(année) ) %>%pull(année) %>% max ()

# Define UI for application that draws a histogram
ui <- fluidPage(
   
   # Application title
   titlePanel("Visualisation intéractive avec R shiny"),
   
   # Sidebar with a slider input for number of bins 
   sidebarLayout(
      sidebarPanel(
        selectInput(
          inputId = "xAxis",
          label = "Axe X",
          choices = c("population",
                      "population_femmes",
                      "population_hommes",
                      "population_0_19",
                      "population_20_59",
                      "population_60_plus",
                      "superficie"
          ),
          selected = "population"
        ),
        selectInput(
          inputId = "yAxis",
          label = "Axe Y",
          choices = c("population",
                      "population_femmes",
                      "population_hommes",
                      "population_0_19",
                      "population_20_59",
                      "population_60_plus",
                      "superficie"
          ),
          selected = "superficie"
        ),
        
        numericInput(inputId = "year",
                     label ="année",
                     min = minYear,
                     max = maxYear,
                     step = 1,
                     value = 2015
        ),
        
        radioButtons(inputId = "color",
                     label = "Option de couleur",
                     choices = c("Par pays" = "pays","Heatmap" = "heatmap","none" ="none"),
                     selected = "none"
                     )
        
      ),
      
      # Show a plot of the generated distribution
      mainPanel(
         plotOutput("plot", brush = brushOpts(id = "plot_brush",resetOnNew = TRUE),  dblclick = "plot_dblclick"),
         dataTableOutput("table")
      )
   )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
  
##############################################
  #graph
  ranges <- reactiveValues(x = NULL, y = NULL)
  output$plot <- renderPlot({
    validate(
      need(input$year >= minYear, paste("L'année doit être supérieure à " ,minYear)),
      need(input$year <= maxYear,  paste("L'année doit être inférieure à " , minYear))
    )
    if ( input$color == "pays") {
      NUTS2_year %>% filter(année == input$year) %>%
        ggplot(aes_string(x=input$xAxis, y=input$yAxis)) +
        geom_point(aes(color=str_sub(id_anc, end=2))) +
        coord_cartesian(xlim = ranges$x, ylim = ranges$y, expand = FALSE)+
        scale_x_continuous(name = NULL, labels = scales:::number) +
        scale_y_continuous(name = NULL, labels = scales:::number)+
        guides(color="none") 
      
    } else if ( input$color == "heatmap") {
      NUTS2_year %>% filter(année == input$year) %>%
        ggplot(aes_string(x=input$xAxis, y=input$yAxis)) +
        geom_bin2d() +
        scale_x_continuous(
          labels = scales:::number
        ) +
        scale_y_continuous(
          labels = scales:::number
        ) +
        scale_fill_gradient(low='#56b1f7', high='black') +
        coord_cartesian(xlim = ranges$x, ylim = ranges$y, expand = FALSE)+
        scale_x_continuous(name = NULL, labels = scales:::number) +
        scale_y_continuous(name = NULL, labels = scales:::number) 
      
    } else if  ( input$color == "none") {
      NUTS2_year %>% filter(année == input$year) %>%
        ggplot(aes_string(x=input$xAxis, y=input$yAxis)) +
        geom_point() +
        coord_cartesian(xlim = ranges$x, ylim = ranges$y, expand = FALSE)+
        scale_x_continuous(name = NULL, labels = scales:::number) +
        scale_y_continuous(name = NULL, labels = scales:::number) 
      
    }
  })
  # When a double-click happens, check if there's a brush on the plot.
  # If so, zoom to the brush bounds; if not, reset the zoom.
  observeEvent(input$plot_dblclick, {
    brush <- input$plot_brush
    if (!is.null(brush)) {
      ranges$x <- c(brush$xmin, brush$xmax)
      ranges$y <- c(brush$ymin, brush$ymax)
      
    } else {
      ranges$x <- NULL
      ranges$y <- NULL
    }
  })
##############################################
  # table
  output$table <- DT::renderDataTable({
    NUTS2_year %>% filter(année == 2015, !is.na(superficie)) %>%
      brushedPoints(input$plot_brush) %>% 
      select(id_anc, nom_anc, population, superficie)
  })


# Run the application 
shinyApp(ui = ui, server = server)
