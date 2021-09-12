import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
// eslint-disable-next-line no-unused-vars
const [{ basket }, dispatch] = useStateValue();
console.log(basket);

return (
  <div className='subtotal'>
    <CurrencyFormat 
      renderText={(value) => (
        <>
          <p>
            {/* homework */}
            Subtotal ({basket?.length} items): <strong>{value}</strong>
          </p>
          <small className='subtotal__gift'>
            <input type='checkbox'/> This order contains a gift
          </small>        
        </>
      )}
      decimalScale={2}
      // value={0} // homework
      value={getBasketTotal(basket)}
      displayType='text'
      thousandSeparator={true}
      prefix={'$'}
    />

    <button>Proceed to Checkout</button>
  </div>
  )
}

export default Subtotal