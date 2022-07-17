import { gql } from "apollo-boost";

const GamesQuery = gql`
  query {
    games {
      id
      dateTime
      coach
      field
    }
  }
`;

export default GamesQuery;
