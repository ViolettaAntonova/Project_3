# Project_3

[Project host](https://violettaantonova.github.io/Project_3/)

# Contributors
1. Sultana Khan
2. Violetta Antonova
3. Tsvetan Tsvetkov
4. Sana Shah
5. Sumeyra Bharuchi

# Files
  - [index](index.html)
  - [styles file](static/css/style.css)
  - [main code file](static/js/plots.js)
  - python files
    - [mongo.db](python/Crime_in_UK.ipynb)
    - [extricting data with API](python/extracting_data.ipynb)
  - Data files
    - [data files](static/data)
  - [Presentation](Group_4_Project3_presentation.pdf)

# Requirements
## Data and Delivery:

 - Data components used in the project are clearly documented.
 - The dataset contains at least 100 unique records. 
 - A database is used to house the data (SQL, MongoDB, SQLite, etc.).
 - The project is powered by a Python Flask API and includes HTML/CSS, JavaScript, and the chosen database. 

## Back End: 

 - The page created to showcase data visualizations runs without error. 
 - A JavaScript library not shown in class is used in the project. 
 - The project conforms to one of the following designs: 
 - A Leaflet or Plotly chart built from data gathered through web scraping.
 - A dashboard page with multiple charts that all reference the same data.
 
## Visualizations: 

 - A minimum of three unique views present the data. 
 - Multiple user-driven interactions (such as dropdowns, filters, or a zoom feature) are included on the final page. 
 - The final page displays visualizations in a clear, digestable manner. 
 - The data story is easy to interpret for users of all levels. 

# Our project 
Birmingham is the most dangerous major city in the West Midlands, and is among the top 10 most dangerous overall out of the West Midlands's 44 towns, villages, and cities. The overall crime rate in Birmingham in 2022 was 145 crimes per 1,000 people. This compares poorly to the West Midlands's overall crime rate, coming in 17% higher than the West Midlands rate of 124 per 1,000 residents. For England, Wales, and Northern Ireland as a whole, Birmingham is the second most dangerous major city, and the 245th most dangerous location out of all towns, cities, and villages.

As we all live there or travel very often for various reasons we decided it’s going to be interesting to look at the crime statistics and compare it to other big cities in the UK.

## We came across a few challenges while pulling the data and writing the code:

  - The first challenge we had was which topic/website to use. We had a quite a few suggestions such as NHS, The Gap between Rich and Poor in the AI Revolution, Data Science Salaries 2023 etc. but in the end we all decided to go with the crimes within the Birmingham(City Centre).

  - Visualization was limited as we not have of a large range of data in the key value returns.

  - Next 2 issues was to extract data from API with polygon that covers particular area (using formula that was given in API documentation with no explanation how to use it). We were returning status code 503 that means that data set we are pulling out is too large, because API maximum return is just 10,000 crimes per log. Because of limitation in our project we are covering just Birmingham city center.

## Charts that could be seen in host:

First thing what have been done was preparing map with all crimes based on latitudes and longitudes. Second was to prepare drop down menu, that contains last 6 available months on police API. After that we connected drop down to map and all the rest charts. Also I’ve included line chart that represents to us crime level in January, Rebruary and March in years 2022 and 2023. Based on chart we could say that crime level has trend, but to make more accurate conclusion we need look at larger data set.

To make the bar chart I had to pull data on ‘category’. It became a little tricky trying to code into descending order, otherwise there were no major issues.
From the data, we can see the largest category of crime is ‘violent crime’ followed by ‘vehicle crime’ over the 6-month period. The only significant variation seen is that ‘other theft’ has a higher number than ‘vehicle crime’ in Oct and Nov 2022. The website did not specify in further detail what other theft encompasses, which does add limitations to gauging a full picture of crime committed within the city centre. However, overall the statistics do give a good starting point for further investigation.

Due to the limited number of key, value returns in the json pulled by the API, it was challenging trying to find what data could be used for another visualisation.
I decided to look at the ‘outcome category’ and had to remove al null values before pulling the different categories of ‘outcome_status’. You can see from the key to the pie chart, there are seven different categories to the ‘outcome_status’ of police investigations.
The pie chart clearly shows that West Midlands Police are struggling to find suspects, let alone solve perpetrators of crime. On average over the 6 months of data, 45.91% of crimes had ‘no suspect’ identified on completion of investigation. Thereafter, the largest percentage of outcome category was ‘unable to prosecute suspect’. We do not have the data to suggest why prosecution rates are so low, but having this data, I think, opens the door for further analysis on why rates of successful prosecution are so low.
As this is publicly available data, we could apply this model to other city centres (and cities) throughout the country, just to get a comparative picture of crime and how successful the police are in finding the perpetrators of crime. This in turn would be useful to many areas within the public and private sectors.

## Why and how could use the data:

 - People relocating: as the crime rate is so high in Birmingham some people have relocated to other places and cities where it is a safer environment for them and their families.
 - Investors and Business owners: anyone who will want to setup a business and or invest into a other company they will definitely look into the area or city where they are going to invest. They would not want to invest anywhere where the crime rates are high or any potential harm to the business.
  - Insurance companies: insurance companies look a lot into areas where there is a high crime rate. For eg. Car insurances are very high in bigger cities such as London and Birmingham comparatively than somewhere like Devon where the Insurance is very low as lower crime rate. House insurances also have a lot to say depending on the area we live in and what the crime rate.

## Next steps:

 - Next steps for a project like that would be to cover a larger area. Using an API without limitations and comparing different cities or periods of time. 
 - Creating more drop down menus will be useful for filtering through the data and having a better understanding of it.
 - More filtering options would make it easier to find trends and present the report to the public.

## Conclusion:

The crime statistics for Birmingham present a mixed picture of crime trends. 
While there was a slight increase in violent crimes and drug-related offenses, property crimes exhibited a moderate decrease. 
Cybercrime incidents rose significantly, reflecting the broader global trend. 
The stability in reported hate crimes suggests that ongoing efforts to address these offenses may be having some positive impact.

It is crucial to interpret these statistics with caution, considering that various factors influence crime rates. 

Law enforcement agencies, community organizations, and the general public should continue working together to maintain public safety and support initiatives aimed at reducing crime in Birmingham.

Disclamer: The street-level crimes returned in the API are only an approximation of where the actual crimes occurred, they are not the exact locations.
