import NavBar from '../component/navbar';
import Footer from '../footer/footer';
import './Menu.css';
//import Home from '';
import background_picture  from '../image/background_menu_1.png';

const Menu = () => {
    return (
       <div className='navbar'>
        <NavBar/>
        <div className='background'>
            <img src={background_picture} alt="image" />
            
            <button className='back'>Back</button>
          
            <div className='type_rum'> Rum </div>
            <div className='name_rum1'> Brugal Anejo Superior </div>
            <div className='detail_rum1'> 
            Anejo is skillfully blended using our reserves from white American oak casks 
            that previously held bourbon, and our distillation process removes many of 
            the heavy alcohols that other rums leave in. The result? A clean, smooth 
            and not-so-sweet spirit that tastes like something you’ll never forget.
            </div>
            <div className='price_rum1'> 1,059 BAHT</div>
        </div>
        <Footer/>
       </div>
    );
}
export default Menu;