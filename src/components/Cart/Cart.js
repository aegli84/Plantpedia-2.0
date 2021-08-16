import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { CircularProgress } from '@material-ui/core'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
    
    <>
        <Typography variant = 'substitle1' style={{ color: 'whitesmoke', fontFamily: 'Montserrat', fontSize: '1.5rem' }}>There are no items in your shopping cart, 
            <Link to='/Subscription' className={classes.link} style={{ color: '#83a46f' }}> start adding now!</Link>
        </Typography>
    
        </>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <br/><br/> <br />
            <Typography variant = 'h5' style={{ color: 'whitesmoke', marginLeft: '1.2rem' }}><HiOutlineArrowLeft size='1.3rem' style={{ color: 'whitesmoke', marginRight: '.5rem' }}/>Return to 
            <Link to='/Subscription' className={classes.link} style={{ color: '#83a46f' }}> products!</Link>
            </Typography>
            <div className={classes.cardDetails}>
                <Typography variant='h4' gutterBottom style={{ color: 'whitesmoke', marginLeft: '1rem', marginBottom: '1.2rem' }}>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' style={{ backgroundColor: '#7e66a3', color: 'whitesmoke' }} onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component = {Link} to='/Checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' style={{ backgroundColor: '#83a46f', color: 'whitesmoke' }}>Checkout</Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return <div className={classes.spinner}><CircularProgress style={{ color: '#83a46f'}}/></div>

    return (
        <Container>
            <div className={classes.toolbar} />
            
            <Typography className={classes.title}  style={{ color: 'whitesmoke', fontSize: '2.6rem', fontWeight: '500' }} >Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            
        </Container>
    )
}

export default Cart