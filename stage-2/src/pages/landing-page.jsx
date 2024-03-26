import "../styles/landing-page.css";
import MoviesListComponent from "../components/movies-list-component";
import SearchBar from "../components/search-bar-components";
// import { topMovies } from "../dummy-data";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import.meta.env.VITE_APP_TMDB_API_KEY;

const accessTokenAuth = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN_AUTH;

const apiKeyAuth = import.meta.env.VITE_APP_TMDB_API_KEY_AUTH;

function LandingPage() {
    const [movies, setMovies] = useState([]);

    const [firstMovie, setFirstMovie] = useState({});

    const [genres, setGenres] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    const mainContentRef = useRef(null);

    async function fetchMovies() {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/top_rated",
                {
                    params: {
                        language: "en-US",
                        page: 1,
                    },
                    headers: {
                        Authorization: `Bearer ${accessTokenAuth}`,
                    },
                }
            );
            console.log(`THE DATA RESPONSE IS ${response.data}`);

            const top10Movies = response.data.results.slice(0, 10);

            const firstMovie = response.data.results[0];

            setMovies(top10Movies);

            setFirstMovie(firstMovie);

            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function fetchGenres() {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/genre/movie/list",
                {
                    params: {
                        language: "en",
                    },
                    headers: {
                        Authorization: `Bearer ${accessTokenAuth}`,
                    },
                }
            );

            const genreData = response.data.genres;

            setGenres(genreData);

            return response.data.genres;
        } catch (error) {
            console.error("Error fetching genre data:", error);
            return [];
        }
    }

    const searchMovies = async (query) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        api_key: `${apiKeyAuth}`,
                        language: "en-US",
                        query: query,
                    },
                }
            );

            setMovies(response.data.results);
        } catch (error) {
            console.error("Error searching for movies:", error);
        }
    };

    useEffect(() => {
        fetchMovies();

        fetchGenres();
    }, []);

    const scrollToMainContent = () => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleOnMovieClicked = (movieId) => {
        console.log(movieId);
    };

    let backgroundImage = firstMovie.poster_path;

    const heroMessageContainerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/w500${firstMovie.backdrop_path}`}
                alt="Landing Movie Thubmnail"
                id="landingMovieThumbnail"
            />

            {movies.length == 0 ? (
                <img src="/loading-spinner.gif" alt="Loading..." />
            ) : (
                <div id="landing-page-container">
                    <div id="hero-message-container__top">
                        <div id="logo-app-name-container">
                            <div id="logo">
                                <img src="/logo.png" alt="logo" />
                            </div>

                            <h3 id="app-name">MovieBox</h3>
                        </div>

                        <div id="search-bar">
                            <SearchBar
                                onSearch={(query) => {
                                    setSearchQuery(query);
                                    scrollToMainContent();

                                    searchMovies(query);
                                }}
                            />
                        </div>

                        <div id="far-right" onClick={() => window.alert("TODO")}>
                            <p>Sign in</p>
                            <div onClick={() => window.alert("TODO")}>
                                <i class="fa-solid fa-bars" id="menu-bar-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div id="hero-message-container" style={heroMessageContainerStyle}>
                        <div id="hero-message-container__middle">
                            <h1>{firstMovie.title}</h1>

                            <div className="ratings-outer-container">
                                <div className="ratings-container">
                                    <div id="imdb" className="ratings-icon">
                                        <i class="fa-brands fa-imdb"></i>
                                    </div>
                                    <p>{firstMovie.vote_average * 10} / 100</p>
                                </div>

                                <div className="ratings-container">
                                    <div id="rotten" className="ratings-icon">
                                        <i class="fa-solid fa-carrot"></i>
                                    </div>
                                    <p>{firstMovie.vote_average * 10}% </p>
                                </div>
                            </div>

                            <p>
                                <b>{firstMovie.overview}</b>
                            </p>

                            <Link
                                to={`movies/${firstMovie.id}`}
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                <div
                                    id="watch-now-container"
                                    onClick={() => handleOnMovieClicked(firstMovie.id)}
                                >
                                    <i class="fa-regular fa-circle-play"></i>

                                    <p>WATCH TRAILER</p>
                                </div>
                            </Link>
                        </div>

                        <div></div>
                    </div>

                    <div id="main-content-container" ref={mainContentRef}>
                        <MoviesListComponent
                            topMovies={movies}
                            genres={genres}
                            onMovieCardClicked={handleOnMovieClicked}
                        />
                    </div>

                    <div id="bottom-container">
                        <div id="socials-container">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-facebook"></i>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>

                        <div id="quick-links-container">
                            <h3 id>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Conditions of Use
                                </a>
                            </h3>
                            <h3>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Privacy & Policy
                                </a>
                            </h3>
                            <h3>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Press Room
                                </a>
                            </h3>
                        </div>

                        <div id="footer">
                            <h3>&copy; 2021 MovieBox by Adriana Eka Prayudha</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LandingPage;
