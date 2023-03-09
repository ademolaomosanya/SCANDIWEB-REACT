import React from 'react'
import './All.css'
import { useQuery, gql } from "@apollo/client";

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
export default function All() {
  const { data, loading, error } = useQuery(STORE_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  console.log(data.categories[0])
  const firstUser = data.categories[0].products
  const firstUser1 = data.categories[0]

  return (

    <div>
      <h1>{firstUser1.name}</h1>

      <div className='container'>
        {Object.keys(firstUser).map(key => (
          <div className='card' key={key}>
            <img className='card-image ' src={firstUser[key].gallery[0]} alt='' />

          <div className='details'>
          <p className='product_name'>{firstUser[key].name}</p>
          <p>{firstUser[key].prices[0].currency.symbol}{firstUser[key].prices[0].amount}</p>
          </div>
          </div>

        ))}
      </div>
    </div>







    // <div>
    //   {data.categories.map(category => (        
    //       <div>
    //         {category.products.map(product => (
    //          <>          
    //          <p key={product.id}>{product.name}</p>

    //          </>
    //         ))}
    //       </div>

    //   ))}
    // </div>






  );
}












// {firstUser[key].gallery.map((picture) => (
//   <div key={picture.id}>
//     <img className='Image' src={picture} alt=''/>
//   </div>
// ))}