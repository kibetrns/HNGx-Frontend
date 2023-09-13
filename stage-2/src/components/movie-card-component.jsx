import "../styles/movie-card-component.css";


function MovieCardComponent({ moviePoster, movieReleaseDate, movieTitle }) {
return (
    <>
    <div data-testid="movie-card">
        <img src="/src/assets/70756575.png" alt="Movie Poster" data-testid="movie-poster" />
        <h5 data-testid="movie-release-date">{movieReleaseDate}</h5>


        <h2 data-testid="movie-title">{movieTitle}</h2>

        <div id = "rating-container">
        <div>
            <h6>rating imdb</h6>

        </div>

        <div>
            <h6>rating rotten </h6>

        </div>

       
        </div>

        <div id="genres-container">
            <h5>genres...</h5>
        </div>




      

    </div>
    </>
);
}

export default MovieCardComponent;
