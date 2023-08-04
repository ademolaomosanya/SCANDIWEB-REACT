import React, { useContext } from 'react';
import CartContext from '../Context/context';
import './cart.css'



const Cart = () => {
  const containerStyle = {
    margin: 0,
    padding: 0,
  };
  const { cartState } = useContext(CartContext);

  const { cartItems } = cartState;


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartState.cartItems.length; i++) {
      const item = cartState.cartItems[i];
      totalPrice += item.prices[0].amount;
    }
    console.log(totalPrice);
    return Math.round(totalPrice);
  };


  return (


 <>
    {cartItems.length === 0 ? (
      <div className='empty'> Your cart is empty</div>
  ) : (
    <div className='bag_items'>
      <h3>CART</h3>
     
      {cartItems.map(item => (
        <div className='frame_cart' key={item.id}>

          <div className='column'>
            <p className='bag_name'> {item.name}</p>
            <p className='size'>{item.prices[0].currency.symbol}{item.prices[0].amount}</p>
            <p className='size'>{item.attributes[0].id}:</p>
            <div className='attribute'>
              {item.attributes[0].items.map((attribute) => (
                <p className='bagbox' >{attribute.displayValue.length > 3 ?
                  <p style={containerStyle}>{attribute.displayValue[0]}</p>
                  :
                  <p style={containerStyle}>{attribute.displayValue}</p>}
                </p>
              ))}
            </div>
          </div>





          <div className='column'>
            <img className='bag_img' src={item.gallery[2]} alt='' />
          </div>

        </div>
      ))}
      <div className='total'>
        <p>Total</p>
        <p className='totalprice'>${calculateTotalPrice()}.00</p>
      </div>
      <button className='product_button'>
       ORDER
      </button>
    </div>
    )}
 </>
                            
  );
};

export default Cart;





