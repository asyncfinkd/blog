import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      name
      age
      married
    }
  }
`;

export const ME_QUERY = gql`
  mutation {
    me {
      email
      _id
    }
  }
`;
