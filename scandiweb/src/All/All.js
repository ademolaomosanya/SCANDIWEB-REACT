import React from 'react'
import './All.css'
import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom';
import Stock from "../Svg/Stock"

const STORE_QUERY = gql`
query{
  categories{
    name
    products{
      id
      name
      gallery
      category
      inStock
     prices{
      amount
      currency{
        label
        symbol
      }
    }
    }
  }
}
`;
export default function All() {
  const { data, loading, error } = useQuery(STORE_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const firstCategory = data.categories[0];


  console.log(firstCategory.products)

  return (

    <div>
      
      <h3>{firstCategory.name}</h3>
      <div className='container'>
        {firstCategory.products.map((product) => (
          <div key={product.id} >

            {product.inStock ? (
              <div className='card_product'>
                <Link className="link" to={`/products/${product.id}`}>
                  <img className='card-image' src={product.gallery[0]} alt='' />
                  <div className='details'>
                    <p className='product_name'>{product.name}</p>
                    <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p>
                  </div>
                </Link>
              </div>
            ) : (
              <div className='cardstock_product'>
                <img className='cardstock-myimage' src={product.gallery[0]} alt='' />
                <div className='details-stock'>
                  <p className='product_name'>{product.name}</p>
                  <Stock className='stock' />
                  <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p>
                </div>
              </div>
            )}
          </div>
        ))}

      </div>

    </div>



  );
}












