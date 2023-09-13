import "../styles/landing-page.css";
import MoviesListComponent from "../components/movies-list-component";
import SearchBar from "../components/search-bar-components";
import { topMovies } from "../dummy-data";

function LandingPage() {
    const firstMovie = topMovies.results[0];

    let backgroundImage = firstMovie.poster_path
    

    const heroMessageContainerStyle = {
        backgroundImage: `url(${backgroundImage})`
       
      };
    return (
        <>
            <div id="hero-message-container" style={heroMessageContainerStyle}>
                <img
                    src="../assets/70756575.png"
                    alt="Landing Movie Thubmnail"
                    id="landingMovieThumbnail"
                />
                <div id="hero-message-container__top">
                    <div id="logo-app-name-container">
                        <div id="logo">
                            <i class="fa-solid fa-jedi fa-2xl"></i>
                        </div>

                        <h3 id="app-name">MovieBox</h3>
                    </div>

                    <div id="search-bar">
                        <SearchBar onSearch={() => console.log("May Come Soon:)")} />
                    </div>

                    <div id="far-right">
                        <p>Sign in</p>
                        <div>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>

                <div id="hero-message-container__middle">
                    <h1>{firstMovie.title}</h1>

                    <div className="ratings-outer-container">
                    <div className="ratings-container">
                        <div id="imdb" className="ratings-icon">
                            <i class="fa-brands fa-imdb"></i>
                        </div>
                        <p>{(firstMovie.vote_average )* 10} / 100</p>

                    </div>

                    <div className="ratings-container">
                        <div id="rotten" className="ratings-icon">
                        <i class="fa-solid fa-carrot"></i>
                        </div>
                        <p>{(firstMovie.vote_average) * 10}% </p>

                    </div>

                    </div>
                    
                    <p>{firstMovie.overview}</p>

                    <div id="watch-now-container" onClick={() => alert("TODO")}>

                    <i class="fa-regular fa-circle-play"></i>

                    <p>WATCH TRAILER</p>

                    </div>

                </div>


                <div></div>
            </div>

            <div id="main-content-container">
                <MoviesListComponent topMovies={topMovies} />
            </div>

            <div id="bottom-container">
                <div id="socials-container">

                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>

                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>

                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
                    
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>

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
        </>
    );
}

export default LandingPage;
