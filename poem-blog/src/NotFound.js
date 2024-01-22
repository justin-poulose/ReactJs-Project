import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="home">
            <h2>Page not Found</h2>
            <h1>Sorry.....!</h1>
            <Link to="/"> Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;