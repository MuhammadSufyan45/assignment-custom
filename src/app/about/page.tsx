import "../../styles/about.css";
import aboutimg from "../../../public/about-img.png";
import Image from "next/image";

export default function About(){
    return(
        <>
        <section className="about" id="about">
        <div className="about-img">
            <Image src={aboutimg} alt="about"/>
        </div>
        <div className="about-text">
            <h3>Furniture service About us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo maxime, eligendi nesciunt quis quaerat cupiditate rerum enim obcaecati eum totam facilis, sunt tempore libero officia. Ad, excepturi. Qui, voluptatem officia aspernatur iure nam, architecto quos molestiae assumenda nesciunt porro voluptatum dolorum consequatur odit. Laudantium saepe sunt perspiciatis dolores ex.</p>

            <button id="about-btn">Read More...</button>
        </div>
        
    </section>
        </>
    )
}