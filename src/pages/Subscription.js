import styled from "styled-components";
import subspage from '../assets/bgimg/subspage.png'
import { commerce } from '../lib/commerce'
import  {Products, Cart, Checkout} from '../components'
import { useState, useEffect }from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import Navbar from '../components/Navbar/Navbar';

const Subscription = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity)

        setCart(cart)
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity})

        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId)

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty()

        setCart(cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
            setOrder(incomingOrder);
    
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    useEffect (() => {
        fetchProducts();
        fetchCart();
    }, []);

console.log(cart)

    return (
        <>
        <Div>
            <H1>Our Plant Subsciption Boxes</H1>
            <P>
                Plants are an intimate part of our lives — we live with them and love them every day — and we want to share this lifestyle with you by carefully curating kits with hardy plants that will ease your anxiety about greenery care. We thoughtfully designed our plant subscription box service as a program that takes you through different levels of plant care
            </P>
            <div>
            <Products 
                    products={products} 
                    onAddToCart={handleAddToCart}
                    />
                </div>
        </Div>
        
            {/* <Navbar totalItems={cart.total_items}/> */}
            
                
                    {/* <Products 
                    products={products} 
                    onAddToCart={handleAddToCart}
                    /> */}
                
                
                    {/* <Cart 
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    /> */}
                
                    {/* <Checkout 
                    cart={cart} 
                    order={order} 
                    onCaptureCheckout={handleCaptureCheckout} 
                    error={errorMessage}
                    /> */}
            
        </>
    )
}


const Div =styled.div`
    height: 140vh;   
    width: 100vw;
    display: inline-block;
    justify-content: center;
    align-items: center;
    background-image: url(${subspage});
    background-repeat: no-repeat;
    background-size: cover;
`
const H1 = styled.h1`
    text-align: center;
    color: whitesmoke;
    padding-top: 2rem;
    font-size: 3.5rem;
    font-family: 'Raleway', sans-serif !important;
`
const P = styled.p`
    text-align: center;
    color: whitesmoke;
    margin: 0 10rem;
    padding-top: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;
`
export default Subscription;