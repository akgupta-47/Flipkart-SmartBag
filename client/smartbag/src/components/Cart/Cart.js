import React, { useContext, useEffect } from 'react';
import CartNavbar from './CartNavbar';
import CartDetails from './CartDetails';
import './Cart.css';
import Footer from '../Footer/Footer';
import MainFooter from '../Footer/MainFooter';
import CartContext from '../../store/CartContext';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/cart';
const Cart = () => {
  const cartCtx = useContext(CartContext);
  console.log('12345');
  useEffect(() => {
    console.log('1234');
    const carty = async () => {
      console.log('123');
      const prods = await axios({
        method: 'GET',
        url: `${baseUrl}`,
        withCredentials: true,
      });
      let pros = [];
      console.log('some', prods);
      for (let i = 0; i < prods.data.data[0].prods.length; i++) {
        let temp = {
          image: prods.data.data[0].prods[i].prod.img,
          brand: prods.data.data[0].prods[i].prod.brand,
          name: prods.data.data[0].prods[i].prod.name,
          price: prods.data.data[0].prods[i].prod.price,
          quantity: prods.data.data[0].prods[i].quant,
          id: prods.data.data[0].prods[i].prod._id,
          discount: '20%',
        };
        pros.push(temp);
        cartCtx.addItem(temp);
      }
    };
    carty();
  }, []);

  return (
    <div className="cart">
      <CartNavbar islogged={true} />
      <CartDetails islogged={true} isEmpty={false} />
      <Footer />
      <MainFooter />
    </div>
  );
};
export default Cart;
