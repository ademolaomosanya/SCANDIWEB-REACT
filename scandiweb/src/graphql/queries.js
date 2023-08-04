import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
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

