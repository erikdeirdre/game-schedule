import gql from "apollo-boost";

const CoachesQuery = gql`
  query Coaches {
    fields {
      id
      firstName
      lastName
    }
  }
`;

export default CoachesQuery;
