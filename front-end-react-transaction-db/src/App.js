import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PartsPage from './pages/PartsPage';
import PartDetails from './pages/PartDetails';
import QuotesPage from './pages/QuotesPage';
import QuoteForm from './components/QuoteForm';
import QuoteDetailsPage from './pages/QuoteDetailsPage';
//AUTH ROUTES
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';


import EchangeApi from './components/EchangeApi';

import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

import { AuthContext } from './context/auth.context';

import { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';



import TestComponent from './components/TestComponent';

function App() {
const {isLoggedIn} =
  useContext(AuthContext)
  



  return (
    <div className="App">

{/* may not be needed */}
 {/* {isLoggedIn ? <EchangeApi/> : ""}  */}

    <Navbar/>
<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/ex" element={<EchangeApi />}/>

{/* Is Private */}
  <Route path={`/parts`} element={<IsPrivate><PartsPage/></IsPrivate>}/>
  <Route path={`/part/:partId`} element={<IsPrivate><PartDetails/></IsPrivate>}/>
  <Route path={`/quotes`} element={<IsPrivate><QuotesPage/></IsPrivate>}/>
  <Route path={`/quote/:quoteId`} element={<IsPrivate><QuoteDetailsPage/></IsPrivate> }/>
  {/* this will be a component  - this is just for testing purposes now */}
  <Route path={`/quoteForm`} element={<IsPrivate><QuoteForm/></IsPrivate>}/>

{/* AUTH ROUTES */}
{/* isAnon */}
  <Route path={`/signup`} element={<IsAnon><SignupPage/></IsAnon>}/>
  <Route path={`/login`} element={<IsAnon><LoginPage/></IsAnon>}/>
</Routes>


    

 
    </div>
  );
}

export default App;
