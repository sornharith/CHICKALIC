export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="logo">CHICKALIC</a>
        <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Menu</a></li>
            <li><input type="search" name="search" id="searchbox" /></li>
            <li><button class="login">Login</button></li>
        </ul>
    </nav>
    );
}

