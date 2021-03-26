import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery($skip: Int = 0, $first: Int, $status: String = "AVAILABLE") {
    allProducts(first: $first, skip: $skip, where: { status_in: [$status] }) {
      id
      name
      price
      description
      user {
        id
      }
      status
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
