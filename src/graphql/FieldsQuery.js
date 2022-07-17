import gql from "apollo-boost";

const FieldsQuery = gql`
  query Fields {
    fields {
      id
      name
      city
      state
    }
  }
`;

export default FieldsQuery;
