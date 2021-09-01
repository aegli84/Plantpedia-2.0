import styled from "styled-components";
import subspage from '../assets/bgimg/subspage.png'
import { commerce } from '../lib/commerce'
import  {Products} from '../components'
import { useState, useEffect }from 'react'
import { motion } from 'framer-motion'
import { titleAnimation, fade, pageAnimation } from '../animations'
import contactpage from '../assets/bgimg/contactpage.png'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({ })

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity)

        setCart(cart)
        console.log(cart);
    }


    useEffect (() => {
        fetchProducts();
        
    }, [cart]);

// console.log(cart)

    return (
        <>
        <Div >
        <motion.div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
            <H1 variants = {titleAnimation} >Our Plant Subscription Boxes</H1>
            <P variants = {fade} >
                Plants are an intimate part of our lives — we live with them and love them every day — and we want to share this lifestyle with you by carefully curating kits with hardy plants that will ease your anxiety about greenery care. We thoughtfully designed our plant subscription box service as a program that takes you through different levels of plant care
            </P>
                <Products 
                    products={products} 
                    onAddToCart={handleAddToCart}
                    />
                </motion.div>
        </Div>
        </>
    )
}


const Div =styled.div`
    min-height: 100vh;   
    width: 100%;
    background-image: url(${subspage});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 4rem;
    padding-top: 5rem;

@media (max-width: 768px) {
    min-height: 80vh;  
    background-image: url(${contactpage});
    padding-top: 5rem;
    padding-bottom: 5rem;
}

@media (max-width: 480px) {
    min-height: 60vh;
    padding-top: 5rem;
}
`
const H1 = styled(motion.h1)`
    text-align: center;
    text-shadow: 0  15px 7px black; 
    color: whitesmoke;
    padding-top: 2rem;
    font-size: 3.5rem;
    font-family: 'Raleway', sans-serif !important;

@media (max-width: 768px) {
    padding-top: 3rem;
}

@media (max-width: 480px) {
    padding-top: 1.5rem;
    font-size: 5rem;
}
`
const P = styled(motion.p)`
    text-align: center;
    color: whitesmoke;
    margin: 0 10rem;
    padding-top: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;

@media (max-width: 768px) {
    margin: 1.5rem 6rem;
    font-size: 1.6rem;
}

@media (max-width: 480px) {
    margin: 1rem 2rem;
    font-size: 1.6rem;
}
`
export default Shop;