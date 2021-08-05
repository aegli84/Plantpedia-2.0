import styled from "styled-components";
import plantname from '../assets/bgimg/plantname.png'
import { commerce } from '../lib/commerce'
import  {Checkout} from '../components'
import { useState, useEffect }from 'react'

const Checkouto = () => {
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
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
        fetchCart();
    }, []);

console.log(cart)

    return (
        <Div>
            <Checkout 
                    cart={cart} 
                    order={order} 
                    onCaptureCheckout={handleCaptureCheckout} 
                    error={errorMessage}
                    /> 
        </Div>
    )
}
const Div =styled.div`
    min-height: 100vh;   
    width: 100%;
    display: inline-block;
    background-image: url(${plantname});
    background-repeat: no-repeat;
    background-size: cover;
`

export default Checkouto;



