import "../styles/card.css";

export default function Card(){
    return(
        <>
        <section className="offers">
        <div className="offer-content">
            <div className="row">
                <i className="fa-solid fa-truck-fast"></i>
                <h3>Free Delivery</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-headset"></i>
                <h3>Support 24/7</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-rotate-left"></i>
                <h3>30 Day Return</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-cart-shopping"></i>
                <h3>Secure Shopping</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </section>
        </>
    )
}