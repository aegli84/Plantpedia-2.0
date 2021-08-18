import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import { useState } from 'react'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { motion } from 'framer-motion'
import { titleAnimation } from '../../../animations'
// import {createContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    // const [counter, setCounter] = useState(0);
    // const incrementCounter = () => setCounter(counter + 1);
    const notify = () => toast.warn(" 🪴   In the Cart!  🪴", {
        position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,

    });
    // const click = () => {
    //     alert('item added to cart');
    // };

    return (
        <>
        
        <motion.div variants={titleAnimation}
            initial="hidden"
            animate="show" >
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>

                    <div className={classes.cardContent} >
                        <Typography variant="h5" style={{ fontFamily: 'Montserrat' }} gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            €{product.price.formatted}
                        </Typography>
                    </div>

                    <CardActions className={classes.cardActions}>

                        <Button variant='contained' type='button' style={{ backgroundColor: '#7e66a3', color: 'whitesmoke' }} onClick={() => setShow(!show)}>
                            Product details
                        </Button>
                        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)} >

                            <AddShoppingCart onClick={notify} />
                            
                            {/* <h2> {counter}</h2>onClick={incrementCounter} */}
                        </IconButton>
                    
                    </CardActions>
                    {show && <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' style={{ fontFamily: 'Montserrat' }} />}
                    <br />


                </CardContent>
                
            </Card>
            <ToastContainer
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
transition={Bounce}
style={{ color: "grey" }}
/>

        </motion.div>
    </>
    )
}

export default Product;
