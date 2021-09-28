import React, { useState, useEffect, useContext } from 'react';
import CartNavbar from '../Cart/CartNavbar';
import Item from './item';
import Footer from '../Footer/Footer';
import MainFooter from '../Footer/MainFooter';
import axios from 'axios';
import AuthContext from '../../store/AuthContext';

const baseUrl = 'http://localhost:5000/api/product';
function Products() {
  const [products, setProducts] = useState([]);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const getProds = async () => {
      const prods = await axios({
        method: 'POST',
        url: `${baseUrl}/search`,
        data: {
          search: `${localStorage.getItem('search')}`,
        },
        withCredentials: true,
      });
      setProducts(prods.data.data.data);
    };
    getProds();
  }, []);

  let i = 0;
  const items = products.map((el) => {
    return (
      <Item
        name={el.name}
        image={el.img}
        rating={el.rating}
        price={el.price}
        quantitiy={el.quant}
        id={el._id}
        key={i++}
      />
    );
  });
  return (
    <div className="products">
      <CartNavbar />
      <div className="row prod_cont">{items}</div>
      <Footer/>
      <MainFooter />
    </div>
  );
}

export default Products;
