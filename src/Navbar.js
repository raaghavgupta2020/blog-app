const Navbar = () => { //if curly brackets are used in arrow functions then we have to use the return statement
    //brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
    return (
        <nav className="navbar">
            <h1>BLOG APPLICATION</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{ //first bracket is to tell react that we are inputting something which is dynamic 
                //and the secodn bracket is for writing the object ke value pairs
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;