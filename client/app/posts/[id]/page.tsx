'use client';

import { gql, useQuery } from '@apollo/client';
import { use } from "react";

type Properties = {
  params: Promise<{
    id: string;
  }>;
};

const GET_POST_QUERY = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      title
      content
      author
      createdAt
    }
  }
`;

export default function Post({ params }: Properties) {
  const { id } = use(params);

  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const { title, content, author, createdAt } = data.post;

  return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{title}</h1>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Date:</strong> {new Date(createdAt).toLocaleDateString()}
        </p>
        <hr />
        <p>{content}</p>
      </div>
  );
}
