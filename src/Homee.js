import { useEffect, useState } from "react";
//functions can be performed at each render usingt the useEffect hook -> rendering takes place 
//when the site first loads and Re-rendering takes place when every time a state changes.


import BlogList from "./BlogList";

//we will be creating a state for list of blogs because the user might update , delete or change a particular
//blog a particular time 
//the initial value of the state will be an array of blogs 
//ID will be used by react later to output each of the blog later

//the map method cycles through the array and it can do something with each item in the array

//in jsx we can write javascript and we can retrun javascript as well and we can do that by enclosing the javascript code inside curly brackets

const Homee = () => {

    const[name , setName] = useState("mario");

    // const [blogs , setBlogs] = useState([
    //     {title: 'My new website ' , body: 'lorem ipsum ...', author: 'mario', id: '1'},
    //     {title: 'New Blog' , body: 'lorem ipsum ...', author: 'yoshi', id: '2'},
    //     {title: 'Product description' , body: 'lorem ipsum ...', author: 'mario', id: '3'}
    // ])

    const [blogs , setBlogs] = useState([
        {title: 'My new website ' , body: 'lorem ipsum ...', author: 'mario', id: '1'},
        {title: 'New Blog' , body: 'lorem ipsum ...', author: 'yoshi', id: '2'},
        {title: 'Product description' , body: 'lorem ipsum ...', author: 'mario', id: '3'}
    ])
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>(
            blog.id!==id
        ))
        setBlogs(newBlogs);

    }

    //this function will fire on every render
    //if we bychances change the state in useEffect function we will be struck in a continuous LOOP
    //useEffect hook can also be used to fetch data

    // useEffect(()=>{
    //     console.log("re rendering took place , hence useEffect function ran");
    //     console.log(name);
    // },[name]);

    useEffect(()=>{
        console.log("re rendering took place , hence useEffect function ran");
        console.log(name);
    },[]);

    //There is something called as a dependency array which can be used to allow function inside useEffect hook to run for 
    // specific re-renders only . an empty dependancy array means  the useEffect hook will only fire the function for the initial render only 
    //when we have put name in the second argument .This means that the function will be fired also when the state={name} changes

    //we will be using useEffect hook to fetch data also,
    //as normally we wont be hardcoding any datas in our websites like "blogs" , Rather, we will be fetching data 
    //from some API endpoints. Now for instance  we will be creating a fake Rest API endpoint using json server.
    //This can be done by creating a json file 

    //in json file we have-> 1 property called blogs -> which is an array of 2 objects -> each object is a blog
    //in json file each top level property is considered as a resource . This creates end points for us to interact
    //with the file. We can delete , update , etc now 

    //Various APIs are provided by the json-server, we can test these on the local browser 

    return (
        <div className="home">
            {/* we want to return some jsx template on each call (callback function is fired)*/ }
            {/* for each item we get access to an item from the array, we will call it blog */}
            {/* when we output a list like this using map function , each root element must have a key property */}
            {/* key keeps the record of each item as it outputs it , so of data changes at any point ,like if items 
            are added or deleted at any point then react can keep a record of all these changes  . Key must be unique 
            for each item , hence it is mostly the ID*/}

            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}

            {/* all the above code can be made resuuable by creating a resuable compenent and
            passing blogs arraya and other required data as props */}

            <BlogList blogs={blogs} title={"All blogs"}/>

            {/* filter basically filters the array an removes the elements from the array which do not
            satisfy the condtions inside . Now a refined array is going in the same BlogList component
            and output is being generated */}

            <BlogList blogs={blogs.filter((blog)=>(
                blog.author === 'mario' //checks comparison strictly
            ))} title={"Mario's blogs"}/>

            {/* here blogs is a property name and {blogs} is the value and this complete thing i.e
            blogs = {blogs} is called as a prop 
            We can pass multiple props also*/}

            <BlogList blogs={blogs} title={"All blogs"} handleDelete={handleDelete}/>

            <button onClick={()=>{setName("mithu")}}>Click me to change "name" state </button>
            <p>{name}</p>
            {/* here we are changing the state */}


        </div>
    );
}
 
export default Homee;

