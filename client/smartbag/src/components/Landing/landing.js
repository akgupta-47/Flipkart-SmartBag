import React from 'react';
import './landing.css'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer'
import Img1 from '../../Images/landing/1.png'

function Landing(){
    return(
        <div className="landing">
            
            <Navbar />
            <div className="land_cont">
                <p className="lnd_p">Don’t have time for buying groceries from the market or you are unhappy with the quality of the products that are available at the nearest grocery store? Luckily, online grocery stores are making lives simpler as you will find all the necessities in one place. You can get quality products of your choice with just a click. All you need is a smartphone and internet connection. You can choose from a variety of products, precisely monthly staples, snacks and beverages, packaged food, personal and baby care, and eggs and dairy products. You can browse through this online grocery store and get daily staples like dal, different kinds of flour, rice, oil, salt, turmeric powder, spices, pickles, and more. Apart from day-to-day needs, you can also shop for toiletries such as shower gels, soaps, shampoos, and conditioners. You can also pick personal hygiene products and baby care products online. An online grocery store could be your last-minute saviour especially on days when you are unable to shop for monthly essentials because of your busy schedule. So, save time and opt to order online.

                </p>
                <img src={Img1} className="responsive-img center lnd_img" />
            </div>


            <Footer />
        </div>
       
    ); 
}

export default Landing;