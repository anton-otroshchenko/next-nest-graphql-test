"use client"

import PostCard from "@/components/PostCard/PostCard";
import { useRouter } from 'next/navigation';

import { useQuery } from '@apollo/client';
import { Post } from "@/types/post-type/post.type";
import { GET_POSTS } from "@/queries/get-posts/get-posts";
import { AppRoute } from "@/enums/app-route/app-route.enum";

export default function Home() {

  const router = useRouter();

  const handleCreateNewPost = () => {
    router.push(AppRoute.CREATE);
  }

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div>
        <div className="flex items-center justify-between px-16 py-4 border-b border-gray-500">
          <h1 className="text-center text-2xl">Posts</h1>
          <button onClick={handleCreateNewPost} className="border border-gray-500 px-4 py-2 rounded-2xl hover:bg-gray-500">
            Create
          </button>
        </div>
        <div className="px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.length === 0
            ? <p>No posts to show</p>
                : data.posts.map((post: Post) => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
          </div>
        </div>
      </div>
  );
}
