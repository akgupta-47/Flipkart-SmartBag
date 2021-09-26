import React, { useState, useEffect } from 'react';
import CartNavbar from '../Cart/CartNavbar';
import Item from './item';
import Footer from '../Footer/Footer';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/product';
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProds = async () => {
      const prods = await axios({
        method: 'POST',
        url: `${baseUrl}/search`,
        data: {
          search: 'malt',
        },
        withCredentials: true,
      });
      const prodArray = [];
      for (let i = 0; i < prods.data.data.length; i++) {
        prodArray.push({
          name: prods.data.data[i].name,
          img: prods.data.data[i].img,
          price: prods.data.data[i].price,
          rating: prods.data.data[i].rating,
          id: prods.data.data[i]._id,
          quant: prods.data.data[i].quant,
        });
      }
      console.log(prods.data.data);
      setProducts(prodArray);
    };
    getProds();
  }, []);
  console.log(products);
  return (
    <div className="products">
      <CartNavbar />
      <div className="row prod_cont">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
