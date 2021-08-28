import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import styled from "styled-components";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
        console.log('[error]', error);
        } else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, 
                            lastname: shippingData.lastName, 
                            email: shippingData.email 
                        },
                shipping: { name: 'Domestic', 
                            street: shippingData.address, 
                            town_city: shippingData.city, 
                            county_state: shippingData.shippingSubdivision, 
                            postal_zip_code: shippingData.zip, 
                            country: shippingData.shippingCountry 
                        },
                fulfillment: { shipping_method: shippingData.shippingOption 
                        },
                payment: {
                            gateway: 'stripe',
                            stripe: {
                            payment_method_id: paymentMethod.id,
                },
            },
        };
            console.log(orderData)
            onCaptureCheckout(checkoutToken.id, orderData);

        

            nextStep();
        }
    }
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography>
            <Select name="card-test-number">
                <option value="">-- Test Card Details --</option>
                <option value="">-- Card no --4242424242424242-- MM--42-- YY--42-- CVC--42 --ZIP--42</option>
                
            </Select>
            </Typography>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            
            <Elements stripe={stripePromise}>
            <ElementsConsumer>
                {({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <CardElement/>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" style={{ backgroundColor: '#7e66a3', color: 'whitesmoke', minWidth: '140px' }} onClick={backStep}>Back</Button>
                            <Button type="submit" variant="contained" disabled={!stripe} style={{ backgroundColor: '#83a46f', color: 'whitesmoke', minWidth: '140px' }}>Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                            </Button>
                        </div>
                    </form>
                )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}
const Select = styled.select `
    border-radius: .3rem;
    padding: .5rem;
    margin-top: .5rem;
    border: none;
    outline: none;
    width: 100%;
    font-family: 'Montserrat', sans-serif !important;
    border: 2px solid #83a46f;
`

export default PaymentForm
