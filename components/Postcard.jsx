"use client";
import Link from "next/link";

function Postcard({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert("Hola")}>Click aquí</button>
    </div>
  );
}

export default Postcard;
