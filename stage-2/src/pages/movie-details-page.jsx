import MovieDetailsComponent from "../components/movie-details-component";
import NavRailComponent from "../components/nav-rail-component";
import "../styles/nav-rail-component.css";
import { Outlet, useParams } from "react-router-dom";
import { topMovies } from "../dummy-data";
import "../styles/movie-details-page.css";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN_AUTH;

function MovieDetailsPage() {
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState([]);

    const [recommendMovies, setrecommendMovies] = useState([]);

    async function fetchMovieDetails() {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        Accept: "application/json",
                    },
                }
            );

            const movieDetails = response.data;
            console.log(`MOVIE DETAILS : ${movieDetails}`);

            setMovieDetails(movieDetails);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    }

    async function fetchRecomendedMovies() {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        Accept: "application/json",
                    },
                }
            );

            const recommendMovies = response.data;
            console.log(`RECOMENDED MOVIES: ${recommendMovies}`);

            console.log(`MOVIE ID: ${movieId}`);

            setrecommendMovies(recommendMovies);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    }

    useEffect(() => {
        fetchMovieDetails();
        fetchRecomendedMovies();
    }, [movieId]);

    return (
        <>
            <div id="movie-details-page-container">
                <div className="nav-rail-container-pg">
                    <NavRailComponent />
                </div>

                <div className="main-content-container-pg">
                    <MovieDetailsComponent
                        movie={movieDetails}
                        recommendedMovies={recommendMovies}
                    />
                </div>
            </div>
        </>
    );
}

export default MovieDetailsPage;
