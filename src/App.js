import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Plantpedia from './pages/Plantpedia';
import Guides from './pages/Guides';
import BoutiqueShops from './pages/BoutiqueShops';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer';
import NavBurgerMenu from './components/Navbar/NavBurgerMenu';
import Watering from './pages/Watering';
import Light from './pages/Light';
import Pest from './pages/Pest';
import Humidity from './pages/Humidity';
import Chat from './pages/Chat';
import Soil from "./pages/Soil";
import AboutPage from './components/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact'
import { useState, useEffect }from 'react'
import { commerce } from './lib/commerce'
//import {CartProvider} from './components/CartContext'

function App() {
  // const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  
//   const fetchProducts = async () => {
//     const { data } = await commerce.products.list();

//     setProducts(data);
// }
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
  }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)

        setCart(item.cart)
        
    }

    useEffect (() => {
        // fetchProducts();
        fetchCart();
        handleAddToCart()
    
    }, []);

    
  return (
    <div className="App">
  
    <GlobalStyles/>
    
    <Navbar totalItems={cart.total_items}/>
    
    <NavBurgerMenu/> 
    
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

        <Route path="/Login">
          <Login />
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

        <Route path="/Chat">
          <Chat />
        </Route> 
        
        <Route path="/Register">
          <Register />
        </Route> 
        <Route path="/Contact">
          <Contact />
        </Route> 

        <Route path="/AboutUs">
          <AboutPage />
        </Route> 

    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
