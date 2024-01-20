const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>VerseCraft</h1>
            <div className="links">
                <a href="">Homes</a>
                <a href="" style={{
                    color:"white",
                    backgroundColor: "#1e37c5",
                    borderRadius:'50px',
                    padding: '5px 15px 5px 15px',
                }}>Create Post</a>
            </div>
        </div>
     );
}
 
export default Navbar;