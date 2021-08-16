import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import {useState} from 'react'

import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product, onAddToCart}) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleAddToCart = () => onAddToCart(product.id, 1);
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
            
                <div className={classes.cardContent}>
                    <Typography  variant="h5" style = {{fontFamily: 'Montserrat'}} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography  variant="h5">
                        €{product.price.formatted}
                    </Typography>
                </div>
                
                <CardActions className={classes.cardActions}>
                
                <Button variant='contained' type='button' style = {{backgroundColor:'#7e66a3', color: 'whitesmoke'}} onClick={() => setShow(!show)}>
                    Product details 
                </Button>
                    <IconButton aria-label="Add to Cart" onClick={handleAddToCart} >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
                    {show && <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='textSecondary' style = {{fontFamily: 'Montserrat'}}/>}
                    <br/>
                    
                
            </CardContent>
            
        </Card>
    )
}

export default Product;
