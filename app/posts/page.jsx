import Postcard from "../../components/Postcard";

async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  }
  //Renderizamooos
  async function Postpages() {
    const posts = await loadPosts();
    console.log(posts);
    return (
      <div>
        {posts.map((post) => (
            <Postcard post={post} key={post.id}/>
        ))}
      </div>
    );

    }
    export default Postpages;
