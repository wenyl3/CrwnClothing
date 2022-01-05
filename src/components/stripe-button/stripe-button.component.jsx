import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KE91VIqaWCLKE027uigpHNU6ETGcEksg6Gacjapi0TN33yAOM2cDqSzMxa69tQgHGa4uyU7dSp42Hnv8rk98oeM00hWguzHsJ';
    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
    <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    );
}

export default StripeCheckoutButton;