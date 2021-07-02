import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Plantpedia from './pages/Plantpedia';
import BoutiqueShops from './pages/BoutiqueShops';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <NavBar/>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Plantpedia">
          <Plantpedia />
        </Route>

        <Route path="/Boutique-Shops">
          <BoutiqueShops />
        </Route>

        <Route path="/Subscription">
          <Subscription />
        </Route>

        <Route path="/Blog">
          <Blog />
        </Route> 

        <Route path="/Login">
          <Login />
        </Route> 

        <Route path="/Register">
          <Register />
        </Route> 

    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
