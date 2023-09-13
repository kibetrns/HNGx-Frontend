import "../styles/nav-rail-component.css"

function NavRailComponent() {

    return (
        <>

            <div id="nav-rail-container">
                <div className="nav-item">

                    <i class="fa-solid fa-house"></i>

                    <p>Home</p>

                </div>


                <div className="nav-item">

                    <i class="fa-solid fa-video"></i>

                    <p>Movies</p>

                </div>


                <div className="nav-item">

                    <i class="fa-solid fa-tv"></i>

                    <p>TV Series</p>

                </div>

                <div className="nav-item">

                    <i class="fa-solid fa-calendar-days"></i>

                    <p>Upcoming</p>

                </div>

                <div id="playQuiz-container">

                    <h4>
                        Play movie quizes and earn free tickets
                    </h4>

                    <h6>
                        50k people are playing now
                    </h6>

                    <button>Start playing</button>



                </div>

                <div className="nav-item">

                    <i class="fa-solid fa-arrow-right-from-bracket"></i>

                    <p>Log out</p>

                </div>

            </div>



        </>
    )

}

export default NavRailComponent