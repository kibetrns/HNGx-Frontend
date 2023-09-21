import { useState } from 'react';
import './App.css'
import AuthPage from './pages/auth-page'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import * as Realm from "realm-web";
import DojoComponent from './components/dojo-component';
import HomePage from './pages/home-page';

const appID = import.meta.env.VITE_APP_REALMDB_APP_ID

const app = new Realm.App({ id: "application-0-iqdbw" });

function App() {
  const [user, setUser] = useState(app.currentUser)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage app={app} user={user} setUser={setUser} />} />
          <Route
            path='/home'
            element={user ? <HomePage /> : <UnauthorizedHomePage />}
          />
          <Route path='*' element={<DojoComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

function UnauthorizedHomePage() {
  return (
    <>
      <h1>Unauthorized Access</h1>
      <p>Please log in to access the home page.</p>
    </>
  );
}
