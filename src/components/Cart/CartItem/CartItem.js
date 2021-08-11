import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    
// const image = item.media.source

    return (
        <Card className={classes.root}>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            
            <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{ fontFamily: 'Montserrat'}}>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
                </div>
                <Button variant='contained' type='button' style = {{backgroundColor:'#7e66a3', color: 'whitesmoke'}} onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;