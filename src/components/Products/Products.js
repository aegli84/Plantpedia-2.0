import React from 'react'
import Grid  from '@material-ui/core/Grid'
import Product from './Product/Product'
import useStyles from './styles';
import { CircularProgress } from '@material-ui/core'

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    if (!products.length) return <div className={classes.spinner}><CircularProgress style={{ color: '#83a46f'}}/></div>
    
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} variant='regular'/>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid  key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;