import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Plantpedia from './pages/Plantpedia';
import BoutiqueShops from './pages/BoutiqueShops';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer';
import Watering from './pages/Watering'
import Light from './pages/Light'
import Soil from './pages/Soil'
import Pest from './pages/Pest'
import Humidity from './pages/Humidity'
import Chat from './pages/Chat'
import NavBurgerMenu from './components/NavBurgerMenu'
import AboutUs from './pages/AboutUs'
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
  
    <GlobalStyles/>
    <Navbar/>
    <NavBurgerMenu/> 

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Plantpedia">
          <Plantpedia />
        </Route>

        <Route path="/BoutiqueShops">
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

        <Route path="/Watering">
          <Watering />
        </Route> 
        <Route path="/Light">
          <Light />
        </Route> 
        <Route path="/Soil">
          <Soil />
        </Route> 
        <Route path="/Pest">
          <Pest />
        </Route> 
        <Route path="/Humidity">
          <Humidity />
        </Route> 
        
        <Route path="/Chat" component={LoginForm}>
          <Chat />
        </Route> 
        <Route path="/AboutUs">
          <AboutUs />
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
