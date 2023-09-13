import MovieDetailsComponent from "../components/movie-details-component"
import NavRailComponent from "../components/nav-rail-component"
import "../styles/nav-rail-component.css"
import { Outlet } from "react-router-dom"
import { topMovies } from "../dummy-data";
import "../styles/movie-details.-page.css"


function MovieDetailsPage() {

    const firstMovie = topMovies.results[0];


    return(
        <>
        <div id="movie-details-page-container">
        <NavRailComponent />



        <MovieDetailsComponent movie={firstMovie} />
        </div>


        </>
    )
}

export default MovieDetailsPage