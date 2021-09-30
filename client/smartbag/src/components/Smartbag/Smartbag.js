import React from 'react';
import CartNavbar from '../Cart/CartNavbar';
import Footer from '../Footer/Footer';
import BagProducts from './BagProducts';
import './Smartbag.css';
const Smartbag = () => {
  const bagProd = [
    {
      name: 'Bru Coffee',
      rating: 4,
      price: 150,
      img:
        'https://res.cloudinary.com/flyingbing/image/upload/v1632159636/products/bru-1632159635543.jpg',
      quant: 2,
      id: 'wrqweteterter',
    },
    {
      name: 'Amul butter',
      rating: 4.5,
      img:
        'https://res.cloudinary.com/flyingbing/image/upload/v1632159303/products/butter-1632159303228.jpg',
      price: 40,
      quant: 2,
      id: 'wrqweteterterwerwae',
    },
    {
      name: 'Hide n seek Biscuit',
      rating: 4.2,
      price: 40,
      quant: 2,
      img:
        'https://res.cloudinary.com/flyingbing/image/upload/v1632160031/products/hns-1632160031597.jpg',
      id: 'wrqweteterterwerwae',
    },
    {
      name: 'Mothers choice cashew',
      rating: 4,
      price: 560,
      quant: 2,
      id: 'wrqweteterterwerwae',
      img:
        'https://res.cloudinary.com/flyingbing/image/upload/v1632162834/products/cahew-1632162832806.jpg',
    },
  ];
  return (
    <div className="bag">
      <CartNavbar islogged={true} />
      <BagProducts bagProd={bagProd} />
      <Footer />
    </div>
  );
};
export default Smartbag;
