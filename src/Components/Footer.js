

//import { UilFacebook, UilInstagramAlt, UilTwitter, UilLinkedin } from '@iconscout/react-unicons'

function Footer() {
    return (
        <>
            <footer>
                <div className="f-col f-col-1">
                    <img src="logo.png" className='logo' alt='Diet' />
                </div>

                <div className="f-col">

                        <strong>Over ons</strong> <br/>

                    <div>
                        <a href='#'>Portfolio</a> <br />
                        <a href='#'>Werken bij</a><br />
                        <a href='#'>Contact</a>
                    </div>

                </div>

                <div className="f-col">
                        <strong>Contacteer ons</strong> <br/> 
                        <p>Lorem ipsum dolor sit amet, consectateur adispicing elit. <br/>
                        Fusce euismod convallis velit
                        <br/>+07001234567</p>
                </div>

                {/* <div className="footer-sm-icons f-col">
                    <a  className="icon color-black" href="#"><UilFacebook/></a>
                    <a  className="icon color-black" href="#"><UilInstagramAlt/></a>
                    <a  className="icon color-black" href="#"><UilTwitter/></a>
                    <a  className="icon color-black" href="#"><UilLinkedin/></a>
                </div>
                <div className='copyright'><span>Copyright© 2024 Noortje Eliza Adolfs Alle rechten voorbehouden</span></div> */}
            </footer>
        </>
    );
}
export default Footer;