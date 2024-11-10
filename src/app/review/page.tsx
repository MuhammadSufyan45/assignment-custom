import Image from "next/image"
import pic1 from "../../../public/pic-1.png";
import pic2 from "../../../public/pic-2.png";
import pic3 from "../../../public/pic-3.png";
import "../../styles/review.css";

export default function Review(){
    return(
        <>
        <section className="review" id="review">
        <div className="main-txt">
            <h3>Customers <span>Review</span></h3>
        </div>

        <div className="review-content">
        <div className="box">
        <div className="img">
            <Image src={pic1} alt="pic1"/>
        </div>
        <h3>Elon Musk</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

    </div>
        <div className="box">
        <div className="img">
            <Image src={pic2} alt="pic2"/>
        </div>
        <h3>Mr.s Elon</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

    </div>
        <div className="box">
        <div className="img">
            <Image src={pic3} alt="pic3"/>
        </div>
        <h3>Junior Elon</h3>
        <div className="star">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

    </div>

</div>

    </section>
        </>
    )
}