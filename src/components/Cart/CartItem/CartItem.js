import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './styles'
import { motion } from 'framer-motion'
import { titleAnimation } from '../../../animations'


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <motion.div variants = {titleAnimation} 
        initial = "hidden" 
        animate = "show">
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
        </motion.div>
    )
}

export default CartItem;