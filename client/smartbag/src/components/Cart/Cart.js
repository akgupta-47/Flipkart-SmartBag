import React, { useState } from 'react';
import CartNavbar from './CartNavbar';
import CartDetails from './CartDetails';
import './Cart.css';
import Footer from '../Footer/Footer';

const Cart = () => {
  const [products, setProducts] = useState([
    {
      name: 'Puma Shoes',
      id: 'hshsshshshsh',
      description: 'Size: 6, Color: Black, Seller: SuriIndustries',
      price: 299,
      discount: '20 %',
      image:
        'https://rukminim1.flixcart.com/image/224/224/kj61gnk0-0/shoe/g/k/9/new-0124-black-37-sppif-black-original-imafysvf2vu4zfyk.jpeg?q=90',
    },
    {
      name: 'Adidas Shoes',
      id: 'hdhdhdhdhd',
      description: 'Size: 6, Color: Black, Seller: SuriIndustries',
      price: 599,
      discount: '10 %',
      image:
        'https://rukminim1.flixcart.com/image/224/224/kovsvbk0/slipper-flip-flop/m/c/i/10-11420886-puma-white-original-imag38zzyehqpk6r.jpeg?q=90',
    },
  ]);
  return (
    <div className="cart">
      <CartNavbar islogged={false} />
      <CartDetails
        islogged={false}
        isEmpty={false}
        products={products}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
};
export default Cart;
