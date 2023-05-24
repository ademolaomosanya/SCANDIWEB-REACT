import React from 'react'
import './tech.css'
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
export default function Tech() {
  const { data, loading, error } = useQuery(STORE_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  const firstCategory = data.categories[2];

  return (

    <div>

    <h3>{firstCategory.name}</h3>
    <div  className='container'>
      {firstCategory.products.map((product) => (
        <div className='card' key={product.id}>
          <Link to={`/products/${product.id}`}>
          <img className='card-image ' src={product.gallery[0]} alt='' />
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












