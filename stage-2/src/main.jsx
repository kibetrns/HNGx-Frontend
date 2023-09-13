import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes, Outlet
} from "react-router-dom";
import './index.css'
import LandingPage from './pages/landing-page.jsx';
import ErrorPage from './pages/error-page.jsx';
import MovieDetailsPage from './pages/movie-details.-page';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<LandingPage />} />


          <Route path="*" element={<ErrorPage />} />

        </Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />


        <Route>

        </Route>

      </Routes>


    </BrowserRouter>

  </React.StrictMode>,
)
