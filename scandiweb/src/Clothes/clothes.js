import React from 'react'
import './clothes.css'
import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom';

const STORE_QUERY = gql`
query{
  categories{
    name
    products{
      id
      name
    gallery
      category
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
export default function Clothes() {
  const { data, loading, error } = useQuery(STORE_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const firstCategory = data.categories[1];

  return (

    <div>

    <h3>{firstCategory.name}</h3>
    <div  className='container'>
      {firstCategory.products.map((product) => (
        <div className='card_product' key={product.id}>
          <Link className='link' to={`/products/${product.id}`}>
          <img className='card-image ' src={product.gallery[2]} alt='' />
            <div className='details'>
            <p className='product_name'>{product.name}</p>
            <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p>
          </div>
          </Link>
        </div>
      ))}
     
    </div>

  </div>





  );
}












