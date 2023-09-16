import "../styles/movie-details-component.css";
import { useEffect, useState } from "react";

function MovieDetailsComponent({ movie, recommendedMovies }) {
    const [isLoading, setIsLoading] = useState(true);

    const firstThreeRecommendedMovies =
        recommendedMovies?.results?.slice(0, 3) || [];

    const hasRecommendedMovies = firstThreeRecommendedMovies.length > 0;
    const [loadedImages, setLoadedImages] = useState(0);

    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

    const releaseDate = new Date(movie.release_date).toUTCString();

    let pgContent;
    if (movie.adult) {
        pgContent = "PG-18";
    } else {
        pgContent = "PG-13";
    }

    useEffect(() => {
        if (movie && Object.keys(movie).length > 0) {
            setIsLoading(false);
        }
    }, [movie]);

    const handleImageLoad = () => {
        setLoadedImages((prevCount) => prevCount + 1);
    };

    if (isLoading) {
        return (
            <div className="loading-spinner">
                <img src="/loading-spinner.gif" alt="Loading Gif Image..." />
            </div>
        );
    }

    return (
        <>
            <div id="movie-details-contianer">

                {/* TODO("Use videos; to align with design") */}
                <div id="movie-details-contianer__Top">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt="Back Drop Image"
                    />
                </div>

                <div id="movie-details-contianer__Bottom">
                    <div id="movie-details-contianer__Bottom__Left">
                        <div id="movie-details-contianer__Bottom__Left--Top">
                            <div id="header">
                                <div className="other-half">
                                    <h4 data-testid="movie-title">{movie.title}</h4>
                                    <p>
                                        <b>.</b>
                                    </p>
                                </div>

                                <div className="other-half">
                                    <h4 data-testid="movie-release-date">{releaseDate}</h4>
                                    <p>
                                        <b>.</b>
                                    </p>
                                </div>

                                <div className="other-half">
                                    <h4>{pgContent}</h4>
                                    <p>
                                        <b>.</b>
                                    </p>
                                </div>

                                {/* TODO("Check if this was supposed to be dynamic. Or possibility of hitting the wrong endpint") */}

                                <div className="other-half">
                                    <h4 data-testid="movie-runtime">180 Min</h4>
                                    <p>
                                        <b>.</b>
                                    </p>
                                </div>

                                {movie.genres && movie.genres.length > 0 && (
                                    <div id="genre-list-container">
                                        {movie.genres.map((genre) => (
                                            <p className="genre" key={genre.id}>
                                                {genre.name}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <p data-testid="movie-overview">{movie.overview}</p>
                        </div>

                        <div id="movie-details-contianer__Bottom__Left--Middle">
                            {/* Todo("map throught the participants lists and make them proper, :)" */}

                            <div id="participants-container">
                                <div className="participants-container-item">
                                    <p>Director: </p>
                                    <p className="participants-container-item-value">
                                        {" "}
                                        Lorem, Sit{" "}
                                    </p>
                                </div>

                                <div className="participants-container-item">
                                    <p>Writers: </p>{" "}
                                    <p className="participants-container-item-value">
                                        {" "}
                                        Consectetur, adipiscing elit, eiusmod
                                    </p>{" "}
                                </div>

                                <div className="participants-container-item">
                                    <p>Stars: </p>
                                    <p className="participants-container-item-value">
                                        {" "}
                                        Empor Incididunt, Ut Labore, Et Dolore
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="movie-details-contianer__Bottom__Left--Lower">
                            {/* Todo("make this dynamic :)" */}

                            <div id="top-rated-and-awards-container">
                                <div id="top-rated-container">
                                    <p>Top rated movies #65</p>
                                </div>

                                <div id="awards-conainer" onClick={() => window.alert("TODO")}>
                                    <p>Awards 9 nominations</p>
                                    <div id="chevron-down-icon">
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="movie-details-contianer__Bottom__Right">
                        <div id="movie-details-contianer__Bottom__Right--Top">
                            <div id="star-ratings-cont">
                                <div id="star-icon">
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div>
                                    <p>
                                        {movie.vote_average} | {movie.vote_count}{" "}
                                    </p>
                                </div>
                            </div>

                            <div
                                id="show-times-container"
                                onClick={() => window.alert("TODO")}
                            >
                                <i class="fa-solid fa-ticket"></i>

                                <b>
                                    <p>See Showtimes</p>
                                </b>
                            </div>

                            <div id="watch-more-options" onClick={() => window.alert("TODO")}>
                                <i class="fa-solid fa-list"></i>

                                <b>
                                    <p>More watch options</p>
                                </b>
                            </div>
                        </div>

                        {hasRecommendedMovies && (
                            <div id="movie-details-contianer__Bottom__Right--Lower">
                                <div id="recommend-movies-container">
                                    {firstThreeRecommendedMovies.map((recommendation) => (
                                        <img
                                            key={recommendation.id}
                                            src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                                            alt={recommendation.title}
                                            id="recommendation-img"
                                            onLoad={handleImageLoad}
                                            onClick={() => window.alert("TODO")}
                                        />
                                    ))}
                                </div>
                                {loadedImages < firstThreeRecommendedMovies.length && (
                                    <div className="loading-spinner">
                                        {/* Display a loader while images are loading */}
                                        <img
                                            src="/loading-spinner.gif"
                                            alt="Loading Gif Image..."
                                        />
                                    </div>
                                )}
                                <div
                                    id="recomendation-tag"
                                    onClick={() => window.alert("TODO")}
                                >
                                    <i className="fa-solid fa-list"></i>
                                    <p>The best movies of {currentMonth}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetailsComponent;
