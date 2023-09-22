import { useState } from 'react';
import './App.css'
import AuthPage from './pages/auth-page'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import * as Realm from "realm-web";
import DojoComponent from './components/dojo-component';
import HomePage from './pages/home-page';



const appID = import.meta.env.VITE_APP_REALMDB_APP_ID

const app = new Realm.App({ id: "application-0-iqdbw" });

const DATA_SOURCE_NAME = "mongodb-atlas"

const DATABASE_NAME = "sample_airbnb"
const COLLECTION_NAME = "listingsAndReviews"






const mongo = app.currentUser.mongoClient(DATA_SOURCE_NAME);
const collection = mongo.db(DATABASE_NAME).collection(COLLECTION_NAME);


function App() {
  const [user, setUser] = useState(app.currentUser)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage app={app} user={user} setUser={setUser} />} />
          <Route
            path='/home'
            element={user ? <HomePage app={app} collection={collection} /> : <UnauthorizedHomePage />}
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
