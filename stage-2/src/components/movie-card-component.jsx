import { useState } from "react";
import "../styles/movie-card-component.css";
import { Link } from "react-router-dom";

function MovieCardComponent({
    moviePoster,
    movieReleaseDate,
    movieTitle,
    voteAverage,
    genresList,
    onMovieCardClicked,
}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        onMovieCardClicked(movieId);
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        alert("TODO");
    };

    return (
        <>
            <div data-testid="movie-card">
                
                {/* TODO("Use Web Storage to store favorite movies") */}
                <div
                    id="favorite-icon"
                    onClick={handleFavoriteClick}
                    style={{ color: isFavorite ? "red" : "#d1d5db" }}
                >
                    <i class="fa-solid fa-heart"></i>
                </div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
                    alt="Movie Poster"
                    data-testid="movie-poster"
                />

                <div onClick={onMovieCardClicked} style={{ cursor: "pointer" }}>
                    <h5 data-testid="movie-release-date">{movieReleaseDate}</h5>

                    <h2 data-testid="movie-title">{movieTitle}</h2>

                    <div id="rating-container-outer">
                        <div>
                            <div id="rating-container-c">
                                <div id="imdb" className="ratings-icon-c">
                                    <i class="fa-brands fa-imdb"></i>
                                </div>
                                <p style={{ marginLeft: "1rem" }}>
                                    {(voteAverage * 10).toFixed(0)} / 100
                                </p>
                            </div>
                        </div>

                        <div>
                            <div id="rating-container-c">
                                <div id="rotten" className="ratings-icon-c">
                                    <i class="fa-solid fa-carrot"></i>
                                </div>
                                <p style={{ marginLeft: "1rem" }}>
                                    {(voteAverage * 10).toFixed(0)}%{" "}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div id="genres-container">
                        <p>{genresList.join(", ")}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCardComponent;
