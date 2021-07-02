import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
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
<<<<<<< HEAD
  <NavBar/>
=======
    <GlobalStyles/>
    <Navbar/>
>>>>>>> 4b035a7d7a2a81cd209eb7e7b903626ec739733c
    
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
