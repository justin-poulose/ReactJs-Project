import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>VerseCraft</h1>
            <div className="links">
                <Link to="/">Homes</Link>
                <Link to="/createPost" style={{
                    color:"white",
                    backgroundColor: "#1e37c5",
                    borderRadius:'50px',
                    padding: '5px 15px 5px 15px',
                }}>Create Post</Link>
            </div>
        </div>
     );
}
 
export default Navbar;