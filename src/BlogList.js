// const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title
//we can also directly type like this 
// const BlogList = ({blogs , title , handleDelete}) => {  //then we dont have to define any variable separately
import { Link } from "react-router-dom";
const BlogList = ({blogs , title }) => {
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    {/* <button onClick={()=>(handleDelete(blog.id))}>Delete blog temporarily</button>  */}
                    {/* we will delete blog wrt the id , Now we cannot create this handleDelete function here 
                        We should actually create it where we have the blogs array itself
                        And we must then pass it as a prop to use it here */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList
