import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $age: Int!, $married: Boolean!) {
    createUser(name: $name, age: $age, married: $married) {
      name
      age
      married
    }
  }
`;

export const ADMIN_LOGIN_MUTATION = gql`
  mutation adminIdentification($email: String!, $password: String!) {
    adminIdentification(email: $email, password: $password) {
      text
      access_token
    }
  }
`;
