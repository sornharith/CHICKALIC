// import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <nav className ={"navbar top-0 bg-gradient-to-r bg-[#1e0001e6] text-white py-2 font-family: Katibeh sticky"} >
            <div className ="container flex justify-between items-center" >
                <a href="/" className='ml-10  px-0 pr-4 text-white font-bold text-5xl relative font-[kurale] m-4'>CHICKALIC</a>
                <div className="navigate flex flex-row gap-20 px-10">
                    <a href="/aboutus" className="text-xl font-[kurale] no-underline hover:underline underline-offset-8 ">About us</a>
                    <a href="/menu" className="text-xl font-[kurale] no-underline hover:underline underline-offset-8">Menu</a>
                    <a href='/search' className="text-xl font-[kurale] no-underline hover:underline underline-offset-8">Search</a>
                    <button className='bg-transparent hover:bg-white text-white font-[kurale] hover:text-black py-1 px-4 border border-white hover:border-transparent rounded'>Login</button>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;  