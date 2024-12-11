'use client';

import { useQuery } from '@apollo/client';
import { use } from "react";
import { GET_POST } from "@/queries/get-post/get-post";
import { transformTimestamp } from "@/helpers/transform-timestamp/transform-timestamp";

type Properties = {
  params: Promise<{
    id: string;
  }>;
};

export default function Post({ params }: Properties) {
  const { id } = use(params);

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const { title, content, author, createdAt } = data.post;

  return (
      <div>
        <div className="flex flex-col justify-between gap-4 px-8 py-4 border-b border-gray-500">
          <h1 className="text-2xl truncate">{title}</h1>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Date:</strong> {transformTimestamp(createdAt)}
          </p>
        </div>
        <div className="px-8 py-4 leading-relaxed space-y-4 overflow-hidden break-words">
          {content}
        </div>
      </div>
  );
}
