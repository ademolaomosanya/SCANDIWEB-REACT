import { React, useContext } from 'react';
import './productDetailsPage.css'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from '../graphql/queries';
import CartContext from '../Context/context';


const ProductPage = () => {

  const { productId } = useParams();

  const { cartState, dispatch } = useContext(CartContext);



  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };


  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });




  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { product } = data;
  const { cartItems } = cartState;



  return (
    <div className='prod_details'>



      <div className='detail_pics'>
        {product.gallery.map((picture) => (
          <img className='detail_pic' src={picture} alt='' />
        ))}
      </div>


      <div className='group'>
        <div>
          <img className='prod_img' src={product.gallery[0]} alt='' />
        </div>

        <div className='properties'>
          <h2>{product.name}</h2>
          <p className='id'>{product.attributes[0].id}:</p>
          <div className='value'>
            {product.attributes[0].items.map((attribute) => (
              <p className='box' >{attribute.displayValue}</p>
            ))}
          </div>
          <p>PRICE:</p>
          <p className='price'>{product.prices[0].currency.symbol}{product.prices[0].amount}</p>


          {cartItems.some((p) => p.id === product.id) ? (
            <button
              className='prod_button'
              onClick={() => removeFromCart(product.id)
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className='prod_button'
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          )}

          <p>{product.description}</p>
        </div>

      </div>

    </div>
  );

};

export default ProductPage;