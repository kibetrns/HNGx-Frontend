import CommingSoonComponent from "../components/comming-soon-component";
import NavRailComponent from "../components/nav-rail-component";
import "../styles/promos-page.css";

function PromosPage() {
    return (
        <>
            <div id="promos-page-container">
                <div className="nav-rail-container-pg">
                    <NavRailComponent />
                </div>

                <div className="main-content-container-pg">
                    <CommingSoonComponent message={"Promos Page"} />
                </div>
            </div>
        </>
    );
}

export default PromosPage;
