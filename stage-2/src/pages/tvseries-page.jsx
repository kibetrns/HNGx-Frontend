import CommingSoonComponent from "../components/comming-soon-component";
import NavRailComponent from "../components/nav-rail-component";
import "../styles/tvseries-page.css";

function TvSeriesPage() {
    return (
        <>
            <div id="tvseries-page-container">
                <div className="nav-rail-container-pg">
                    <NavRailComponent />
                </div>

                <div className="main-content-container-pg">
                    <CommingSoonComponent message={"TV Series Page"} />
                </div>
            </div>
        </>
    );
}

export default TvSeriesPage;
