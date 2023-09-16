import "../styles/movies-list-component.css";
import MovieCardComponent from "./movie-card-component";
import { Link } from "react-router-dom";

function MoviesListComponent({ topMovies, genres, onMovieCardClicked }) {
  const cardLinkStyles = {
    textDecoration: "none",
    color: "black",
  };

  console.log(topMovies);

  let movies = topMovies.map((movie) => {
    const movieGenres = movie.genre_ids.map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.name : "";
    });

    return (
      <Link to={`/movies/${movie.id}`} style={cardLinkStyles} key={movie.id}>
        <MovieCardComponent
          moviePoster={movie.poster_path}
          movieTitle={movie.title}
          movieReleaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          genresList={movieGenres}
          onMovieCardClicked={() => onMovieCardClicked(movie.id)}
        />
      </Link>
    );
  });

  return (
    <>
      <div id="top-ml-container">
        <h1>Featured Movie</h1>

        <div id="see-more" onClick={() => window.alert("TODO")}>
          <h5>See more </h5>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div id="body-ml-container">{movies}</div>
    </>
  );
}

export default MoviesListComponent;
