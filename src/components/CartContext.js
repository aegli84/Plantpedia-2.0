import React, {useState, useEffect} from 'react';
import { commerce } from '../lib/commerce'

export const CartContext = React.createContext(null);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart}= await commerce.cart.add(productId, quantity)

        setCart(cart)
        
    }

    useEffect (() => {
        handleAddToCart()
        fetchCart();
    }, [cart]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
        {cart.children}
        </CartContext.Provider>
    )
}