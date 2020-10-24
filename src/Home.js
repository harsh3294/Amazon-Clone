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
            </div>
        </div>
    )
}

export default Home
