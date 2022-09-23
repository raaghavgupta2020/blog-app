import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found . ERROR 404</p>
            <Link to="/">Click to go to home page</Link>
        </div>
    );
}
 
export default NotFound;