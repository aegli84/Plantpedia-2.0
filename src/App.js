import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Plantpedia from './pages/Plantpedia';
import Guides from './pages/Guides';
import BoutiqueShops from './pages/BoutiqueShops';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer';
import NavBurgerMenu from './components/Navbar/NavBurgerMenu';
import Watering from './pages/Watering';
import Light from './pages/Light';
import Pest from './pages/Pest';
import Humidity from './pages/Humidity';
import Chat from './pages/Chat';
import Soil from "./pages/Soil";
import AboutUsUi from '../src/components/AboutUs/AboutInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Impressum from './pages/Impressum';
import TC from './pages/TC';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact'
import Activate from '../src/components/LoginRegisterForm/auth/Activate';
import Forgot from '../src/components/LoginRegisterForm/auth/Forgot';



import ScrollToTop from "./components/ScrollToTop";
import Faqs from './pages/Faq';
import Privacy from './pages/Privacy';




function App() {
  
  return (
    <>
    <div className="App">
    <GlobalStyles/>
    <Navbar/>
    <NavBurgerMenu/> 
    <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Plantpedia">
          <Plantpedia />
        </Route>

        <Route path="/Guides">
          <Guides />
        </Route>

        <Route path="/BoutiqueShops">
          <BoutiqueShops />
        </Route>

        <Route path="/Subscription">
          <Subscription />
        </Route>

        <Route path="/Cart">
          <Cart 
                    />
        </Route>
        <Route path="/Checkout">
          <Checkout 
                    />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route> 

        <Route path="/Soil">
          <Soil />
        </Route>

        <Route path="/Watering">
          <Watering />
        </Route> 

        <Route path="/Light">
          <Light />
        </Route> 
        
        <Route path="/Pest">
          <Pest />
        </Route> 

        <Route path="/Humidity">
          <Humidity />
        </Route> 


        <Route path="/Impressum">
          <Impressum />
        </Route> 

        <Route path="/TC">
          <TC />
        </Route> 

        <Route path="/Chat">
          <Chat />
        </Route> 
        
        <Route path="/signin">
          <Login/>
        </Route> 

        <Route path="/signup">
          <Register/>
        </Route> 
        
        <Route path="/Contact">
          <Contact />
        </Route> 
      
        <Route path="/AboutUs">
          <AboutUsUi />
        </Route> 


        <Route path="/auth/activate/:token">
          <Activate/>
        </Route>

        <Route path="/auth/password/forgot">
          <Forgot/>
        </Route>

        <Route path="/Faqs">
          <Faqs />
        </Route> 

        <Route path="/Privacy">
          <Privacy />
        </Route> 


    </Switch>

    <Footer/>
    </div>
    </>
  );
}

export default App;
