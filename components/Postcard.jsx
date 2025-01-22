"use client"
function Postcard({post}) {
  return (
    <div>
        <h3>{post.id}. {post.title}</h3>
        <p>{post.body}</p>  
        <button onClick={() => alert('Hola')}>Click aquí</button>
    </div>  
  )
}

export default Postcard