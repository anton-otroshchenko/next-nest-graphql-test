import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $author: String!) {
    createPost(createPostInput: { title: $title, content: $content, author: $author }) {
      id
      title
      content
      author
      createdAt
    }
  }
`;

export { CREATE_POST }