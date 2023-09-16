import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import MovieDetailsPage from "./pages/movie-details-page";
import ErrorPage from "./pages/error-page";
import CommingSoonComponent from "./components/comming-soon-component";
import UpcommingDetailsPage from "./pages/upcomming-page";
import MoviesPage from "./pages/movies-page";
import TvSeriesPage from "./pages/tvseries-page";
import PromosPage from "./pages/promos-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />} />

          <Route path="upcoming" element={<UpcommingDetailsPage />} />

          <Route path="movies" element={<MoviesPage />} />

          <Route path="tvseries" element={<TvSeriesPage />} />

          <Route path="promos" element={<PromosPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
