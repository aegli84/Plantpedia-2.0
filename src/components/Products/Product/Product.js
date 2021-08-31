import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import { useState } from 'react'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { motion } from 'framer-motion'
import { titleAnimation } from '../../../animations'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    
    const notify = () => toast(`Box added to cart! 👉`, {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    });
    

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
                toastStyle={{ backgroundColor: "#83a46f", color: "whitesmoke", fontFamily: 'Montserrat', width: '17rem' }}
                />
        </motion.div>
    </>
    )
}

export default Product;
