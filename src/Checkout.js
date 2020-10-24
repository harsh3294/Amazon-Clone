import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout()
{
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase2/Header_PC_1500x178_English1.jpg" alt="banner" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
