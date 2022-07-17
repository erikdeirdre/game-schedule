import { gql } from "apollo-boost";

export const GET_GAMES = gql`
  query allGames {
    allGames {
      edges {
        node {
          id
          gameDt
          coaches {
            lastName
            firstName
          }
          field {
            address {
              address1
              address2
              state
              zipCode
            }
            name
          }
        }
      }
    }
  }
`;

export const GET_FIELDS = gql`
  query allFields {
    allFields {
      edges {
        node {
          id
          name
          address {
            address1
            state
            city
            zipCode
          }
        }
      }
    }
  }
`;
