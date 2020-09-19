import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;    
    const publishablekey = 'pk_test_51HI9ZAIWnLKPmap4xpbSBWGctmMzzKA6BVRXbxiKNIpijh5KfxCZ8LTIWJafIFkqoCPBgRXQ2VI7Q5B2iAnF8Xb100Y2VFUTeC'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data : {
                amount : priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successfull!')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please ensure you use the provided credit card'
            )
        })
    }

    return (
        <StripeCheckout 
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddresshttps
          image = 'http://svgshare.com/i/CUz.svg'
          description={`Your Total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishablekey}
        />
    )
} 

export default StripeCheckoutButton;