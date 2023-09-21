# See it Live [here](https://kibetrns-hngxfrontend-stage2.onrender.com/)

# Running the App

This guide will walk you through the steps to Stage 2 application.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Make sure NPM is installed and running on your machine.

- A web browser. 

- A TMDBI [API KEY](https://developer.themoviedb.org/reference/intro/getting-started) - Get yourself this Key and the set this in the env variable ```VITE_APP_TMDB_API_KEY = <Your api key>```


Clone the HNGx-Frontend and navigate to stage-2 directory:
```
git clone https://github.com/kibetrns/HNGx-Frontend.git
```
Navigate to stage-2 directory
```
cd stage-2
```
Install packages
```
npm install
```
Run the app:
```
npm run dev
```

The application should be accessible at http://localhost:5173/


# Objective

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.

# Requirements
1. User Interface:

-Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate: [this](https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0)
- You should list the top 10 movies on the homepage.
- They should be displayed in a grid layout with their movie posters.
- The Card component should display the movie title and release date.
    - card -> ``` [data-testid: movie-card]```
    - movie poster -> ``` [data-testid: movie-poster]```
    - movie title -> ``` [data-testid: movie-title]```
    - movie release date -> ```[data-testid: movie-release-date]```

2. Movie Search:
- Implement a search feature that allows users to search for movies by title.
- Display search results, including movie posters, titles, and release dates.
- Show a loading indicator while fetching search results.

3. Movie Details:
- When i go to to /movies/:id route (where :id is the id), I should see the movie details page.
- I should see
    - title -> ```[data-testid: movie-title] ```
    - release date (in UTC) - ```[data-testid: movie-release-date] ```
    - runtime (in minutes) - ```[data-testid: movie-runtime]```
    - overview - ```[data-testid: movie-overview]```


# API Integration

1. Consume the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) to fetch movie data.

2. Use the following API endpoints:
    - [Fetch movie details by ID](https://api.themoviedb.org/3/movie/%7Bmovie_id%7D): 


# Error Handling 

-  Implement error handling to display meaningful error messages to users in case of API failures or other issues.

# Submission

- Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
- Provide clear instructions on how to run your project locally in your `README.md` file.
- Ensure that the code is well-documented and organized.
- This frontend challenge requires you to build a dynamic movie discovery app that interacts with a real API to fetch and display  movie data.
- PS: You MUST use react or  Next js
