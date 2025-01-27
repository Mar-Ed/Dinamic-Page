"use client";
import Link from "next/link";

function Postcard({ post }) {
  return (
    <div className="bg-gray-950 p-10 my-4 rounded-md">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-2xl font-bold mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button onClick={() => alert("Hola")}>Click aquí</button>
    </div>
  );
}

export default Postcard;
