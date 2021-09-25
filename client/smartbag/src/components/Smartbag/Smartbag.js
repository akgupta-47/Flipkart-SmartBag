import React from 'react';
import CartNavbar from '../Cart/CartNavbar';
import Footer from '../Footer/Footer';
import BagProducts from './BagProducts';
import './Smartbag.css';
const Smartbag = () => {
  const bagProd = [{}]
  return (
    <div className="bag">
      <CartNavbar islogged={true} />
      <BagProducts bagProd={bagProd}/>
      <Footer />
    </div>
  );
};
export default Smartbag;
