import Image from "next/image";
import logo from "../../public/logo.png";
import "../styles/footer.css";


export default function Footer(){
    return(
        <>
        <footer id="footer">
        <div className="footer-content">
            <div className="logo">
                <Image src={logo} alt="logo"/>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore suscipit nisi non, laudantium delectus?
                <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!
            </p>
            <div className="socail-links">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-pinterest-p"></i>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom-content">
            <p>Designed By <a href="#">Someone</a></p>
            <div className="copyright">
                <p>&copy;Copyright <strong>Someone</strong>.All Rights Reserved</p>
            </div>
        </div>
    </footer>
        </>
    )
}