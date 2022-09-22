import { Link } from "react-router-dom";

const Navbar = () => { //if curly brackets are used in arrow functions then we have to use the return statement
    //brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
    return (
        <nav className="navbar">
            <h1>BLOG APPLICATION</h1>
            <div className="links">
                <Link to="/">Home</Link>

                {/* if we use anchor tag then still our application is sending requests to server each time we click these tags*/}
                {/* Instead of this we must use React Links tags - > by this react will handle route changes within the browser
                without sending a fresh request to the server each time */}

                {/* 'a' is changed to Link and 'href' is changed to 'to' */}
                <Link to="/create" style={{ //first bracket is to tell react that we are inputting something which is dynamic 
                //and the secodn bracket is for writing the object ke value pairs
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;