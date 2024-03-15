import NavBar from '../component/navbar';
import experience_picture from '../image/homepage.png';
import aboutus_picture  from '../image/aboutus.jpg';
import './Home.css';

const Home = () => {
    return ( 
        <div className="home">
            <NavBar/>
            <div className="container">
                <img src={experience_picture} alt="image" />
                <div className="centered-text">THE NEW EXPERIENCE</div>
            </div>
            <div className="aboutus-homepage">
                <div className="detail">
                    <h3>About us</h3>
                    <div className="aboutus-detail">Chickalic is a craft beer bar in Lang Suan, located at Velaa Sindhorn Village. Our bar takes you on a voyage of jazz vibes with craft beer and craft soda - international option on the tap and over 60 canned and bottled selections. If you're looking for something non-beer, there are also soft drinks available and mocktail. Though Chickalic doesn't serve main dishes, you can pair with munchies suchas popcorns, edamames, naems, sausages, and Taro fish snack. It's basically a beer lover's heaven.</div>
                </div>
                <img src={aboutus_picture} alt="image" /> 
            </div>
        </div>
     );
}
 
export default Home;