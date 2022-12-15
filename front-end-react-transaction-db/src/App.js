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
 <TestComponent/>
{/* may not be needed */}
 {/* {isLoggedIn ? <EchangeApi/> : ""}  */}

    <Navbar/>
<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/ex" element={<EchangeApi />}/>

{/* Is Private */}
  <Route path={`/parts`} element={<PartsPage/>}/>
  <Route path={`/part/:partId`} element={<PartDetails/>}/>
  <Route path={`/quotes`} element={<QuotesPage/>}/>
  <Route path={`/quote/:quoteId`} element={<QuoteDetailsPage/> }/>
  {/* this will be a component  - this is just for testing purposes now */}
  <Route path={`/quoteForm`} element={<QuoteForm/>}/>

{/* AUTH ROUTES */}
{/* isAnon */}
  <Route path={`/signup`} element={<SignupPage/>}/>
  <Route path={`/login`} element={<LoginPage/>}/>
</Routes>


    

 
    </div>
  );
}

export default App;
