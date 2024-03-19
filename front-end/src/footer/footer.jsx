import './footer.css';

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='logo'>
                <a href="/" id='logo'>CHICKALIC</a>
            </div>
            <div className='detail'>
                <a href="mailto: chickalic@email.com">Email: chickalic@email.com</a>
                
                <div className='phone'>0993295557</div>
                <div className='place'>villa sindhorn village</div>
                <div className='address'>87 Soi Langsuan, Lumphini, Pathum Wan, Bangkok 10330</div>
            </div>
        </footer>
    )
}
export default Footer; 