import CommingSoonComponent from "../components/comming-soon-component";
import NavRailComponent from "../components/nav-rail-component";
import "../styles/movies-page.css";

function MoviesPage() {
    return (
        <>
            <div id="movies-page-container">
                <div className="nav-rail-container-pg">
                    <NavRailComponent />
                </div>

                <div className="main-content-container-pg">
                    <CommingSoonComponent message={"Movies Page"} />
                </div>
            </div>
        </>
    );
}

export default MoviesPage;
