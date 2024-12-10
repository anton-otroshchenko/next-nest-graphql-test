"use client"

import PostCard from "@/components/PostCard/PostCard";
import { useRouter } from 'next/navigation';

import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      author
      createdAt
    }
  }
`;

export default function Home() {

  const router = useRouter();

  const handleCreateNewPost = () => {
    router.push("/create");
  }

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div className="font-sans">
        <div className="flex justify-between px-16 py-4 border-b border-gray-500">
          <h1 className="text-2xl">Posts</h1>
          <button onClick={handleCreateNewPost} className="border border-gray-500 px-4 py-2 rounded-2xl hover:bg-gray-500">
            Create
          </button>
        </div>
        <div className="px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
          </div>
        </div>
      </div>
  );
}
