import { gql } from 'graphql-tag';
export const ADD_TO_CART_MUTATION = gql`
 
mutation Product($productId: String!) {
  product(productId: $productId, ) {
    id
    name
   
  }
}
`;


  