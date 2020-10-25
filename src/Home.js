import React from 'react'
import './Home.css'
import Product from './Product'

function Home()
{
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="Banner" />
                <div className="home__row">
                    <Product id={1} title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)" price={27999} image="https://images-na.ssl-images-amazon.com/images/I/71gag816F7L._SY606_.jpg" rating={4} />
                    <Product id={2} title="Xiaomi Mi A2 (Gold, 4GB RAM, 64GB Storage)" price={10890} image="https://images-na.ssl-images-amazon.com/images/I/91zwD%2B7G9zL._SY606_.jpg" rating={4} />
                    <Product id={3} title="Apple iPhone 11 (128GB) - Black (Includes EarPods, Power Adapter)" price={54999} image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX466_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product id={4} title="Dell XPS 9570 15.6-inch FHD Laptop (8th Gen Core i7-8750H/16GB/512 GB SSD/Windows 10 + MS Office/ Nvidia GTX 1050Ti 4GB Graphics/Silver)" price={134490} image="https://images-na.ssl-images-amazon.com/images/I/51EEVjBIxYL._SY450_.jpg" rating={3} />

                    <Product id={5} title="Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Grey (7th Generation)" price={34900} image="https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SX466_.jpg" rating={4} />

                    <Product id={6} title="Apple iPhone 11 (128GB) - Black (Includes EarPods, Power Adapter)" price={54999} image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX466_.jpg" rating={5} />

                </div>
                <div className="home__row">
                    {/* <Product /> */}
                    <Product id={7} title="Xiaomi Mi A2 (Gold, 4GB RAM, 64GB Storage)" price={10890} image="https://images-na.ssl-images-amazon.com/images/I/91zwD%2B7G9zL._SY606_.jpg" rating={4} />
                    <Product id={8} title="Apple iPhone 11 (128GB) - Black (Includes EarPods, Power Adapter)" price={54999} image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX466_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product id={9} title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)" price={8699} image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SX679_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
