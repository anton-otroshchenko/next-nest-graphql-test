"use client"

import PostCard from "@/components/PostCard/PostCard";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleCreateNewPost = () => {
    router.push("/create");
  }

  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      author: "John Doe",
      createdAt: "10/06/2024",
    },
    {
      id: 2,
      title: "Second Blog Post",
      author: "Jane Smith",
      createdAt: "12/06/2024",
    },
    {
      id: 3,
      title: "Third Blog Post",
      author: "Alice Johnson",
      createdAt: "15/06/2024",
    },
    {
      id: 4,
      title: "Third Blog Post",
      author: "Alice Johnson",
      createdAt: "15/06/2024",
    },
  ];

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
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
          </div>
        </div>
      </div>
  );
}
