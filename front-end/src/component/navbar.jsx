// import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
    return (  
        <nav className ={"navbar"}>
            <div className = {"container"}>
                <a href="/" id='logo'>CHICKALIC</a>
                <div className="navigate">
                    <a href="/aboutus" id='aboutus'>About us</a>
                    <a href="/Menu" id='menu'>Menu</a>
                    <button>Search</button>
                    <button>Login</button>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;  

