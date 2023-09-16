import { Link, NavLink } from "react-router-dom";
import "../styles/nav-rail-component.css";

function NavRailComponent() {
  const navLinkStyle = {
    textDecoration: "none",
  };

  const activelinkStyle = {
    //color: "#fcf5f7",
    color: "yellow",
    fontWeight: "bold",
  };

  return (
    <>
      <div id="nav-rail-container">
        <Link to={"/"} style={navLinkStyle}>
          <div id="branding-container">
            <div className="nav-item">
              <img src="/logo.png" alt="logo" />

              <p style={{ color: "gray", fontWeight: "bold" }}>MovieBox</p>
            </div>
          </div>
        </Link>

        <div id="nav-items-container">
          <NavLink
            to={"/"}
            style={navLinkStyle}
            className={({ isActive }) =>
              isActive ? "activeNavItem" : "inActiveNavItem"
            }
          >
            <div className="nav-item">
              <i class="fa-solid fa-house"></i>

              <p>Home</p>
            </div>
          </NavLink>

          <NavLink
            to={"/movies"}
            style={navLinkStyle}
            className={({ isActive }) =>
              isActive ? "activeNavItem" : "inActiveNavItem"
            }
          >
            <div className="nav-item">
              <i class="fa-solid fa-video"></i>

              <p>Movies</p>
            </div>
          </NavLink>

          <NavLink
            to={"/tvseries"}
            style={navLinkStyle}
            className={({ isActive }) =>
              isActive ? "activeNavItem" : "inActiveNavItem"
            }
          >
            <div className="nav-item">
              <i class="fa-solid fa-tv"></i>

              <p>TV Series</p>
            </div>
          </NavLink>

          <NavLink
            to={"/upcoming"}
            style={navLinkStyle}
            className={({ isActive }) =>
              isActive ? "activeNavItem" : "inActiveNavItem"
            }
          >
            <div className="nav-item">
              <i class="fa-solid fa-calendar-days"></i>

              <p>Upcoming</p>
            </div>
          </NavLink>
        </div>

        <NavLink
          to={"/promos"}
          style={navLinkStyle}
          className={({ isActive }) =>
            isActive ? "activeNavItem" : "inActiveNavItem"
          }
        >
          <div id="playQuiz-container">
            <h4>Play movie quizes and earn free tickets</h4>

            <h6>50k people are playing now</h6>

            <button>Start playing</button>
          </div>
        </NavLink>

        <NavLink
          to={"/"}
          style={navLinkStyle}
          className={({ isActive }) =>
            isActive ? "activeNavItem" : "inActiveNavItem"
          }
          onClick={() => window.alert("TODO")}
        >
          <div id="log-out-nav-item-container">
            <div className="nav-item">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>

              <p>Log out</p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default NavRailComponent;
