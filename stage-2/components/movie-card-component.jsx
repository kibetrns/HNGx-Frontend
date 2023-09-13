    import "../styles/movie-card-component.css";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faImdb } from "@fortawesome/free-solid-svg-icons";

    function MovieCardComponent({ moviePoster, movieReleaseDate }) {
    return (
        <>
        <div data-testid="movie-card">
            <img src={moviePoster} alt="Movie Poster" data-testid="movie-poster" />

            <h2 data-testid="movie-title">{MovieTitle}</h2>

            <h5 data-testid="movie-release-date">{movieReleaseDate}</h5>

            <h2 data-testid="movie-poster">{MovieTitle}</h2>

            <div data-testid="rating-container">
            <FontAwesomeIcon icon={faImdb} />

            <div>
                <h6>rating</h6>
            </div>

            <div>
                <h5>genres</h5>
            </div>
            </div>
        </div>
        </>
    );
    }

    export default MovieCardComponent;
