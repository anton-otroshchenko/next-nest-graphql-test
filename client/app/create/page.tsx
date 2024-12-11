"use client";

import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GET_POSTS } from "@/queries/get-posts/get-posts";
import { CREATE_POST } from "@/mutations/create-post/create-post";
import { toast } from 'react-hot-toast';

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [errors, setErrors] = useState<{ title?: string; content?: string; author?: string }>({});

  const [createPost] = useMutation(CREATE_POST, {
    context: {
      operationName: 'createPost',
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { title?: string; content?: string; author?: string } = {};

    if (!title) {
      newErrors.title = 'Title is required';
    } else if (title.length > 100) {
      newErrors.title = 'Title cannot be more than 100 characters';
    }

    if (!content) {
      newErrors.content = 'Content is required';
    }

    if (!author) {
      newErrors.author = 'Author is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await createPost({
        variables: { title, content, author },
        refetchQueries: [{ query: GET_POSTS }],
      });

      router.push('/');
    } catch(err) {
      toast.error('Unauthorized');
    }
  };

  return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold" htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-700 w-full p-2 border border-gray-300 rounded"
            />
            {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
          </div>
          <div>
            <label className="block font-semibold" htmlFor="content">Content:</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-gray-700 w-full p-2 border border-gray-300 rounded"
                rows={6}
            />
            {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
          </div>
          <div>
            <label className="block font-semibold" htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="bg-gray-700 w-full p-2 border border-gray-300 rounded"
            />
            {errors.author && <div className="text-red-500 text-sm">{errors.author}</div>}
          </div>
          <button
              type="submit"
              className="w-full text-white p-2 border rounded hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </div>
  );
}
