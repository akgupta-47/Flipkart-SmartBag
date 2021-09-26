import React, { useState } from 'react';
import CartNavbar from '../Cart/CartNavbar';
import Item from './item';
import Footer from '../Footer/Footer';
function Products() {
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
