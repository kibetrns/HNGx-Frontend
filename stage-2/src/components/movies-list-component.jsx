import "../styles/movies-list-component.css";
import MovieCardComponent from "./movie-card-component";
import { Link } from "react-router-dom";

function MoviesListComponent({topMovies}) {

    console.log(topMovies)

    let movies = topMovies.results.map(movie => 
      <MovieCardComponent
      movieTitle={movie.title}
      moviePoster={movie.backdrop_path}
      movieReleaseDate={movie.release_date}
      
      />

      )








  return (
    <>
      <div id = "top-ml-container">

        <h1>Featured Movie</h1>



        <div id="see-more">
            <h5>See more </h5>
            <i class="fa-solid fa-chevron-right"></i>

        </div>

      
      </div>
      <div id="body-ml-container">

          {movies}

        </div>
    </>
  );
}

export default MoviesListComponent