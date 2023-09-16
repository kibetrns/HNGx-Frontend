import CommingSoonComponent from "../components/comming-soon-component";
import NavRailComponent from "../components/nav-rail-component";
import "../styles/upcomming-page.css";

function UpcommingPage() {
    return (
        <>
            <div id="upcomming-page-container">
                <div className="nav-rail-container-pg">
                    <NavRailComponent />
                </div>

                <div className="main-content-container-pg">
                    <CommingSoonComponent message={"Upcomming Page"} />
                </div>
            </div>
        </>
    );
}

export default UpcommingPage;
