import { gql } from "@apollo/client";

export const PROFILE = gql`
  {
    users {
      profilePic
      points
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation AddUser(
    $name: String!
    $email: String!
    $password: String!
    $GPM: Int!
    $showerLength: Int!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      GPM: $GPM
      showerLength: $showerLength
    ) {
      name
      email
      password
      GPM
      showerLength
    }
  }
`;

export const ADD_SHOWER = gql`
  mutation($biography: String, $name: String, $oldName: String) {
    update_person(
      where: { name: { _eq: $oldName } }
      _set: { biography: $biography, name: $name }
    ) {
      returning {
        name
        biography
      }
    }
  }
`;
