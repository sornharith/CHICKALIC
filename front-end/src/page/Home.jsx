import NavBar from '../component/navbar';
import experience_picture from '../image/first page.png';
import aboutus_picture  from '../image/aboutus.jpg';
import Details from './details';
import Footer from '../component/footer';

const Home = () => {
    return ( 
        <div className="home">
            <NavBar />
            <div className="container bg-first_page">
            <img src={experience_picture} alt="image" className="w-full h-full object-contain"/>
            </div>
            <div className="aboutus-homepage flex flex-row items-center">
                <div className="detail">
                    <h3 className='text-5xl mt-2 font-[Libre] font-bold text-[#562714] text-center'>About us</h3>
                    <div className="aboutus-detail flex-1 shrink-0 m-10 font-[Caslon] text-xl text-justify indent-10 leading-normal ">Chickalic is a craft beer bar in Lang Suan, located at Velaa Sindhorn Village. Our bar takes you on a voyage of jazz vibes with craft beer and craft soda - international option on the tap and over 60 canned and bottled selections. If you're looking for something non-beer, there are also soft drinks available and mocktail. Though Chickalic doesn't serve main dishes, you can pair with munchies suchas popcorns, edamames, naems, sausages, and Taro fish snack. It's basically a beer lover's heaven.</div>
                </div>
                <img src={aboutus_picture} alt="image" className="flex-1 max-w-lg ml-6 object-scale-down "/> 
            </div>
            <div className='menu h-60 flex flex-col justify-end items-center'>
                <p className='font-[Ledger] text-5xl underline underline-offset-8 text-[#562714] mt-auto'>ALCOHOL</p>
                <ul className='menu-bar flex flex-row justify-center'>
                    <li className='mx-20 mt-12 mb-5 font-[kurale] text-2xl'>Rum</li>
                    <li className='mx-20 mt-12 mb-5  ont-[kurale] text-2xl' >Gin</li>
                    <li className='mx-20 mt-12 mb-5 font-[kurale] text-2xl'>Whiskey</li>
                    <li className='mx-20 mt-12 mb-5 font-[kurale] text-2xl'>Wine</li>
                    <li className='mx-20 mt-12 mb-5 font-[kurale] text-2xl'>Tequila</li>
                </ul>
            </div>
            <Details />
            <Footer />
        </div>
     );
}
 
export default Home;