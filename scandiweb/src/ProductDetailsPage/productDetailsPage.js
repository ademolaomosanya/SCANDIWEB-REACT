import React from 'react';
import './productDetailsPage.css'
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { gql } from '@apollo/client';
import { ADD_TO_CART_MUTATION } from '../graphql/mutations'

const GET_PRODUCT = gql`
query Product($productId: String!) {
  product(id: $productId) {
    id
    name
    gallery
    description
    attributes {
      id
      items {
        displayValue
        id
        value
      }
      name
      type
    }
    inStock
    category
    brand
    prices {
      amount
      currency {
        label
        symbol
      }
    }
  }
}
`;


const ProductPage = () => {
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION);
  const handleAddToCart = (productId) => {
    addToCart({
      variables: {
        productId: productId,
      },
    })
      .then((response) => {
        // Handle successful addition to cart
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const { productId } = useParams(); // Get the product ID from the URL parameter
  console.log(productId)
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId }, // Pass the product ID as a variable to the GraphQL query
  });

  if (loading) {
    return <p>Loading...</p>; // Render a loading indicator while the data is being fetched
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Render an error message if there's an error
  }

  const { product } = data; // Assuming the GraphQL query returns a 'product' field
  console.log(product.attributes[0].items)
  return (
    <div className='details'>


      <div>
        {product.gallery.map((picture) => (
          <img className='detail_pic' src={picture} alt='' />
        ))}
      </div>

      <div>
        <img className='prod_img' src={product.gallery[0]} alt='' />
      </div>

      <div className='properties'>
        <h2>{product.name}</h2>
        <p>{product.attributes[0].id}:</p>
        {product.attributes[0].items.map((attribute) => (
          <div>
            <p>{attribute.displayValue}</p>
          </div>
        ))}
        <p>Price:</p>
        <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p>
        <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
        <p>{product.description}</p>
      </div>

    </div>
  );

};

export default ProductPage;



// import React from 'react';

// export default function ProductPage() {
// return(
//   <>
//   <h1>hi</h1>
//   </>
// )
// }
