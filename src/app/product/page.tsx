import Image from "next/image";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import p5 from "../../../public/p5.png";
import p6 from "../../../public/p6.png";
import p7 from "../../../public/p7.png";
import p8 from "../../../public/p8.png";
import "../../styles/product.css";

export default function Product(){
    return(
        <>
         <section className="product" id="product">
        <div className="main-txt">
            <h3>Products</h3>
        </div>
        <div className="card-content">
            <div className="row">
                <Image src= {p1} alt="p1"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <Image src={p2} alt="p2"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <Image src={p3} alt="p3"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <Image src={p4} alt="p4"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>

        <div className="card-content">
            <div className="row">
                <Image src={p5} alt="p5"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <Image src={p6} alt="p6"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <Image src={p7} alt="p7"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <Image src={p8} alt="p8"/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>

    </section>
        </>
    )
}