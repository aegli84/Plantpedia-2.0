import {useState, useEffect} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'
import { titleAnimation } from '../../../animations'

const steps =['Shipping address', 'Payment details']

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] =useState(null)
    const [shippingData, setShippingData] = useState({});
    const history = useHistory();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        
                setCheckoutToken(token);
                } catch {
                if (activeStep !== steps.length) history.push('/');
                }
            };
        
            generateToken();
            }
        }, [cart, history, activeStep]);


    const test = (data) => {
        setShippingData(data);
    
        nextStep();
    };

    let Confirmation = () => order.customer ? (
        <>
            <div >
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {" "} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="contained" style={{  backgroundColor: '#83a46f', color: 'whitesmoke' }} type="button" to="/">Back to home</Button>
            </>
        ) :  (
            <div className={classes.spinner}>
                <CircularProgress style={{  color: '#83a46f' }}/>
            </div>
        );

        if (error) {
                <>
                    <Typography variant="h5">Error: {error}</Typography>
                    <br />
                    <Button component={Link} variant="contained" style={{ backgroundColor: '#7e66a3', color: 'whitesmoke', minWidth: '140px' }} type="button" to="/">Back to home</Button>
                </>
                
            }

    const Form = () => activeStep === 0
        ? <AddressForm 
            checkoutToken={checkoutToken} 
            nextStep={nextStep} 
            setShippingData={setShippingData} 
            test={test}
        /> 
        : <PaymentForm  
            shippingData={shippingData} 
            checkoutToken={checkoutToken} 
            nextStep={nextStep}
            backStep={backStep} 
            onCaptureCheckout={onCaptureCheckout}
            />

    
    return (
        <motion.div variants = {titleAnimation} 
        initial = "hidden" 
        animate = "show">
        
            <div />
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' style={{fontFamily: 'Montserrat', fontWeight: '500'}} align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (<Confirmation /> ) : ( checkoutToken &&  <Form /> )}
                </Paper>
            </main>
        </motion.div>
    )
}

export default Checkout