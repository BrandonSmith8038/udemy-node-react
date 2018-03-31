import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component{
  render(){
    return(
      <StripeCheckout 
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="EMAILY"
        description="$5 For 5 Emails Credits"
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}

export default Payments