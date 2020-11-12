# Site Time/Weather Data Table

### This website is designed to create table items containing a site name, a site city, and other cities that will be associated with the site. Each city that is entered into the WeatherCentral.json file will be entered by "Name" and "ID". ID is a WOEID that was retrieved from the Yahoo Weather API.

## requirements:
- npm install
- node.js
- express.js
- node-fetch

## notes:

- known bugs: 1. adding city in the site select window will deselect the current site. Must reselect. 2. Site select and Sister select window has some small CSS issues when "add city" window is open.

- This program connects to the Yahoo Weather API.