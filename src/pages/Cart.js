import styled from "styled-components";
import plantname from '../assets/bgimg/plantname.png'
import giftpage from '../assets/bgimg/giftpage.png'
import { commerce } from '../lib/commerce'
import  {Cart} from '../components'
import { useState, useEffect }from 'react'

const Carty = () => {
    const [cart, setCart] = useState({})
    


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
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

    
    useEffect (() => {
        
        fetchCart();
    }, []);

console.log(cart)

    return (
        <Div>
            <Cart 
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    /> 
        </Div>
    )
}
const Div =styled.div`
    height: 110vh;   
    width: 100%;
    display: inline-block;
    background-image: url(${plantname});
    background-repeat: no-repeat;
    background-size: cover;
@media (max-width: 768px) {
    height: 75vh;
    padding-top: 5rem;
    
}

@media (max-width: 480px) {
    height: 143vh;
    
}
`

export default Carty;
