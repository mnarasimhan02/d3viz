## Data Visualization- Project Essay

By mnarasimhan; mnarasimhan
Summer 2020

View visualization by clicking here : [Final Project - GDP Per Capita (in US\$) of various Countries](https://abc.github.io/)

### About the Visualization

The chosen hybrid structure is an Interactive Slideshow. It consists of 3 slides where the reader has the ability to look at the full dataset as well as highlight data based on a categorical variable.

The visualization is based on a dataset from the World Bank which contains the GDP Per Capita of various countries from year 2000 - 2015

### Scenes

There are three scenes in the narrative visualization. They follow the same template and layout for visual consistency.

- The project title is fixed in place above the visualization container for the duration of the narrative visualization.
- The visualization container which displays the data and is consistent with height 790px, width 960px, and background color "grey" through out the narrative visualization.
- The legends are consistent for the duration of the narrative visualization.
- The colors of each countries is the color assigned to each continent. This is the same across all scenes
- The scenes were designed for consistency to keep the viewer from getting disoriented through transitions.
- The order of the scenes were chosen to first highlight the overall data of the selected year(2000 by default) in scene 1, second to explore that trend in scene 2 based on the categorical variable continent, and finally in scene 3 asks the user to view the data for specific country.

### Annotations

Annotations are used to highlight a trend in the data, direct the user to further investigate the data, and ask the user to draw a conclusion from the data. The annotations use a consistent template for font size and a bolded style.

- The annotation in Scene 1 is text positioned inside the visualization container meant to highlight the primary call to action of the visualization. "Select the year using the dropdown to view the GDP per capita for a particular year" When the user clicks the button to transition forward to Scene 2 or Scene 3 the annotation for Scene 1 is cleared.
- The annotation in Scene 2 is text positioned inside the visualization container meant to highlight the possibility of user engagement with the data. The user is invited to click on the data to see the trends each continent independently. When the user clicks the button to navigate back to Scene 1 or forward to Scene 3 the annotation for Scene 2 is cleared.
- The annotation in Scene 3 is text positioned inside the visualization container meant to highlight the possibility of probing the data further by moving the mouse over individual country to see the details. When the user clicks the button to navigate back to Scene 1 or to Scene 2 the annotation for Scene 3 is cleared.

### Parameters

Parameters are used to engage the user in the narrative visualization and further explore the data. The parameter used in this visualization is the categorical variable "continent". The user has the ability to examine the data of one continent at a time by clicking the continent in the legend. The data belonging to other continents fade out while the currently selected continent is visible

The current state is controlled by this parameter continent. When user clicks on a continent legend, the current state changes and the data points belonging to the other continents have fill color = grey. When the user clicks anywhere else in the visualization, the initial fill colors are restored.

### Triggers

Triggers are utilized in two ways for this visualization.

The buttons along the top of the visualization container are triggers to change scenes. The buttons are labelled such that their functions are made to be obvious: "Scene 1", "Scene 2", "Scene-3" and "About the Visualizaton".

The user event of clicking one of these buttons changes the current state of the visualization by changing the visualization scene. Afforddance is used such that the button that represents the current state of the visualization is displayed with an increased brightness. When the user mouses over the other buttons they become temporarily highlighted which indicates to the user that they may be clicked. Upon clicking a button this triggers a change to the corresponding scene being displayed.

Triggers are also utilized with the data points.

The user event of "mouse over" a data point changes the current state of the chart by applying an opacity of 0.01 to all data not part of the vehicle type that is currently moused over. The user event of "mouse off" changes the current state of the chart by returning the opacity of all data points back to 1. This capability for the user event associated with data mouse over is communicated with an annotation.

### References

World map example used as reference
http://bl.ocks.org/micahstubbs/8e15870eb432a21f0bc4d3d527b2d14f

Data used gotten from World Bank
https://databank.worldbank.org/indicator/NY.GDP.PCAP.CD/1ff4a498/Popular-Indicators#
