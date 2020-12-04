import { gql } from "@apollo/client";

export const PROFILE = gql`
  {
    users {
      profilePic
      points
    }
  }
`;

const ADD_PROFILE = gql`
  mutation(
    $email: String!
    $password: String!
    $GPM: Integer!
    $showerLength: Integer!
  ) {
    insertUser(
      objects: [
        {
          email: $email
          password: $password
          GPM: $GPM
          showerLength: $showerLength
        }
      ]
    ) {
      returning {
        id
      }
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
