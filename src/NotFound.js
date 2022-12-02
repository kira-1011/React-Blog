import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>404</h1>
            <p>Oops! Page not found</p>
            <Link to="/">Homepage</Link>
        </div>
    );
}
 
export default NotFound;