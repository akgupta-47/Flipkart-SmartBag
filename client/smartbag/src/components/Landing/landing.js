import React from 'react';
import './landing.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import Img1 from '../../Images/landing/1.png';
import img2 from '../../Images/landing/3.png';
import img3 from '../../Images/landing/4.png';
import img4 from '../../Images/landing/5.png';
import img5 from '../../Images/landing/6.png';
import img6 from '../../Images/landing/7.png';
import MainFooter from '../Footer/MainFooter';
import { Link } from 'react-router-dom';
import Footer1 from '../Footer/Footer';

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <div className="land_cont">
        <p className="lnd_p">
          Don’t have time for buying groceries from the market or you are
          unhappy with the quality of the products that are available at the
          nearest grocery store? Luckily, online grocery stores are making lives
          simpler as you will find all the necessities in one place. You can get
          quality products of your choice with just a click. All you need is a
          smartphone and internet connection. You can choose from a variety of
          products, precisely monthly staples, snacks and beverages, packaged
          food, personal and baby care, and eggs and dairy products. You can
          browse through this online grocery store and get daily staples like
          dal, different kinds of flour, rice, oil, salt, turmeric powder,
          spices, pickles, and more. Apart from day-to-day needs, you can also
          shop for toiletries such as shower gels, soaps, shampoos, and
          conditioners. You can also pick personal hygiene products and baby
          care products online. An online grocery store could be your
          last-minute saviour especially on days when you are unable to shop for
          monthly essentials because of your busy schedule. So, save time and
          opt to order online.
        </p>
        <img src={Img1} className="responsive-img center lnd_img" />

        <div className="sc_row row">
          <div className="col l8 s12 m12">
            <Link to="/products">
              <img src={img2} className="responsive-img" />
            </Link>
          </div>
          <div className="col l4 m12  s12">
            <Link to="/products">
              <img src={img3} className="responsive-img" />
              <img src={img4} className="responsive-img" />
            </Link>
          </div>
        </div>
        <img src={img5} className="responsive-img center lnd_img" />
        <Link to="/products">
          <img src={img6} className="responsive-img center lnd_img2" />
        </Link>
        {/* <div className="container row">
          <div className="col s12 m12 l4">
            <img src={ } className="responsive-img"/>
          </div>

        </div> */}
      </div>
      <Footer1 />

      <MainFooter />
    </div>
  );
}

export default Landing;
