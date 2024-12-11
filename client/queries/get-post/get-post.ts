import { gql } from "@apollo/client";

const GET_POST = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      title
      content
      author
      createdAt
    }
  }
`;

export { GET_POST }