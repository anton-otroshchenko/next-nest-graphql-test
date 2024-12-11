"use client"

import { useRouter } from 'next/navigation';
import { Post } from "@/types/post.type";

type Properties = {
  post: Post;
}

export default function PostCard({ post }: Properties) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
      <div
          key={post.id}
          className="border border-gray-300 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="mb-2">Author: {post.author}</p>
        <p className="mb-4">Date: {post.createdAt}</p>
        <button
            className="text-white border-b-2 border-transparent hover:border-white"
            onClick={handleReadMore}
        >
          Read More
        </button>
      </div>
  );
}
