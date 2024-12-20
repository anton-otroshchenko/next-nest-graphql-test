"use client"

import { useRouter } from 'next/navigation';
import { Post } from "@/types/post-type/post.type";
import { transformTimestamp } from "@/helpers/transform-timestamp/transform-timestamp";
import { AppRoute } from "@/enums/app-route/app-route.enum";

type Properties = {
  post: Post;
}

export default function PostCard({ post }: Properties) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`${AppRoute.POST}/${post.id}`);
  };

  return (
      <div
          key={post.id}
          className="border border-gray-300 rounded-lg shadow-md shadow-gray-200 p-6"
      >
        <h2 className="text-xl font-bold mb-2 truncate">{post.title}</h2>
        <p className="mb-2">Author: {post.author}</p>
        <p className="mb-4">Date: {transformTimestamp(post.createdAt)}</p>
        <button
            className="text-white border-b-2 border-transparent hover:border-white"
            onClick={handleReadMore}
        >
          Read More
        </button>
      </div>
  );
}
