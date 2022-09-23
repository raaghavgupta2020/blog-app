import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

//we grab the route parameter using a hook called as useParams
const BlogDetails = () => {
    const { id } = useParams() //id is the name of the route parameter
    const {data:blog ,error,isPending} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    
    const handleClick = () => {
         fetch('http://localhost:8000/blogs/' + blog.id , {
            method : 'DELETE'
         }).then(()=>{
            history.push('/')
         })
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog Details - {id} </h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;