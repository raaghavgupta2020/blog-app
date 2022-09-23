import { useState } from "react";

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('mario');

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the form from submitting by default
        const blog = {title , body , author};
        //creating this object to be sent to the server to be added in the database , in our case (json file )
        console.log(blog);
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title </label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);//acts like a 2 way binding 
                    }}
                    //as we type anything in the text, setTitle is triggered hence title changes dynamically , which in turn is equal to value , hence value changes dynamically and so on
                />
                <label>Blog body </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>{
                        setBody(e.target.value)
                    }}>
                </textarea>
                <label>Blog author</label>
                <select 
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button >Add blog</button>
            </form>
            {/* <h1>{title}</h1>
            <h1>{author}</h1>
            <h1>{body}</h1> */}
        </div>
    );
}
 
export default Create;