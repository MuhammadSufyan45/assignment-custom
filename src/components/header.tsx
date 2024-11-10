import "../styles/header.css";
import image from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
       <div className="header">
         <nav>
            
            <input type="checkbox" id="show-search"/>
            <input type="checkbox" id="show-menu"/>
            <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
            <div className="content">
                <div className="logo"><Link href="/"><Image src={image} alt="logo"/></Link></div>

                <ul className="links">
                    <Link href="/home">
                    <li><span id="first">Home</span></li>
                    </Link>
                    <Link href="/about">
                    <li><span id="first">About</span></li> 
                    </Link>
                    <Link href="/product">
                    <li><span  id="first">Products</span></li>
                    </Link>
                    <Link href="/review">
                    <li><span id="first">Review</span></li>
                    </Link>
                    <Link href="/contact">
                    <li><span id="first">Contact</span></li>
                    </Link>
                </ul>
            </div>
            <label htmlFor="show-search" className="search-icon"><i className="fas fa-search"></i></label>
            <form action="#" className="search-box">
                <input type="text" placeholder="Search" required />
                <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
            </form>

         </nav>
     </div>
    )
}