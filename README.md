# aTrueFoodie

This is a Node.JS Express app that uses JawsDB (with MySQL) for data persistence (user signup/login information). The app allows users to search for a food or restaurant and see individual and aggregated ratings from Yelp and Google Places, as well as the NYC Food Grade given to the restaurant.

  

## Getting Started

  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

  

### Prerequisites

The following must be installed on your machine to run the app locally:

- Git Bash

- NodeJS

- NPM

- MySQL

  
### Installing Dependencies

Use NPM to install all required dependencies:

  

npm install

  

## Running the App

  

Use the following command to start the app:

  

`npm start`

  

## Using the App:

### Demo:

You can use the live app at the following url: pacific-ocean-86624.herokuapp.com


## Programming Methodology

  

### Approach

This project was worked on by 5 team members: myself, Jonathan G, Johnathan C, Sung, Kevin. Most front end styling and HTML structuring was worked on by the other team members, while I focused on the backend and ajax calls. Data is returned to the front end by the following route: 

- *POST /api/search* - This post route will take in the user's location which is obtained using Google's in-browser location system, which the user is prompted to allow (which I also integrated into the app). Google location will return an the longitude and latitude of the user. Additionally, it will also take in the search term that the user searched for so that the data passed to the post route will be structured in the following: 
`data = {
    location: [47, 52],
    searchTerm: 'burger 
}`

These user's location and searchTerm is passed into the Yelp API and the results are sorted by popularity to return one single top search result. The top search result is passed by a callback function to the Google Places API which will then search for the same restaurant. A final function searches the NYC Restaurants's Food Grade Rating API for the health grade awarded to the restaurant. The data from each API is appended to an `allData` object and returned via the response.

This is an example of the final data:
`{
    yelpData: {
        id: 'gJg_Gh2lqrCprDzR6ZP9QQ',
        name: 'Bar314',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/fZLhJf0twzEaL6culGnw3Q/o.jpg',
        location: '1260 Amsterdam Ave, New York, 10027',
        phone: '(646) 682-7645',
        rating: 5,
        yelp_review_count: 32
    },
    googleData: {
        id: '350b591ceef0f5ae1a53cdab6be3cbe21ce8f48e',
        name: 'Bar 314',
        rating: 5,
        open: false,
        price_range: undefined,
        google_review_count: 15
    },
    trueReview: {
        trueRating: 5,
        total_review_count: 47
    },
    food_rating: {
        grade: undefined
    }
}`

I also deployed the app onto Heroku and configured JawsDB.

## Built With

  
- NodeJS

- NPM

- Express

- Handlebars

- MySQL

- Heroku

- JawsDB


## Syntax and Conventions

The app is written in written in vanilla JavaScript (non ES6). 
