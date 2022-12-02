import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <h1 className="blog-title">Yemariam Blog</h1>
                <div className="links">
                    <SearchBar />
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;