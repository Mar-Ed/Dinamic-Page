import Postcard from "../../components/Postcard";
import "./Posts.css"

async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    //await new Promise((resolve) => setTimeout(resolve, 4000));
    return data;
  }
  //Renderizamooos
  async function Postpages() {
    const posts = await loadPosts();
    console.log(posts);
    return (
      <div className="grid">
        {posts.map((post) => (
            <Postcard post={post} key={post.id}/>
        ))}
      </div>
    );

    }
    export default Postpages;
