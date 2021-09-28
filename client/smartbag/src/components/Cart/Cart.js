import React, { useState, useContext, useEffect } from 'react';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const carty = async () => {
      const prods = await axios({
        method: 'GET',
        url: `${baseUrl}`,
        withCredentials: true,
      });
      let pros = [];
      for (let i = 0; i < prods.data.data[0].prods.length; i++) {
        let temp = {
          image: prods.data.data[0].prods[i].prod.img,
          brand: prods.data.data[0].prods[i].prod.brand,
          name: prods.data.data[0].prods[i].prod.name,
          price: prods.data.data[0].prods[i].prod.price,
          quantity: prods.data.data[0].prods[i].quant,
          discount: '20%',
        };
        pros.push(temp);
        cartCtx.addItem(temp);
      }
      setProducts(pros);
    };
    carty();
  }, []);

  console.log(cartCtx.items);
  return (
    <div className="cart">
      <CartNavbar islogged={true} />
      <CartDetails
        islogged={true}
        isEmpty={false}
        products={products}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
};
export default Cart;
