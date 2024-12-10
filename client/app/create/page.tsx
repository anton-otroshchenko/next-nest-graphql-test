"use client";

import { gql, useMutation } from '@apollo/client';

export const CREATE_POST = gql`
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

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const [createPost, { loading, error: mutationError }] = useMutation(CREATE_POST);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !author) {
      setError('All fields are required');
      return;
    }

    try {
      await createPost({
        variables: { title, content, author },
      });

      router.push('/'); // Redirect after successful submission
    } catch (error) {
      setError('An error occurred while creating the post');
    }
  };

  return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Create a New Blog Post</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold" htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-700 w-full p-2 border border-gray-300 rounded"
                maxLength={100}
                required
            />
          </div>
          <div>
            <label className="block font-semibold" htmlFor="content">Content:</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-gray-700 w-full p-2 border border-gray-300 rounded"
                rows={6}
                required
            />
          </div>
          <div>
            <label className="block font-semibold" htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="bg-gray-700 w-full p-2 border border-gray-300 rounded"
                required
            />
          </div>
          <button
              type="submit"
              className="w-full text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
  );
}
