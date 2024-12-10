import Image from "next/image";

type Properties = {
  params: {
    id: string;
  }
}

export default function Post( {params} : Properties ) {
  return (
      <h1>Post {params.id}</h1>
  );
}
