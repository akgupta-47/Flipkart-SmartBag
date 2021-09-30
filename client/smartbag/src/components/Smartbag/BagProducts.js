import React from 'react';
import Item from '../Products/item';
import './Smartbag.css';

const BagProducts = (props) => {
  const products = props.bagProd;
  let i = 0;
  const items = products.map((el) => {
    return (
      <div className="col s3">
        <Item
          name={el.name}
          image={el.img}
          rating={el.rating}
          price={el.price}
          quantitiy={el.quant}
          id={el._id}
          key={i++}
        />
      </div>
    );
  });

  return (
    <div className="card pagecard">
      <div className="centerMaker">
        <span className="card-title bag-title headingBig">My Smartbag</span>
      </div>

      <div className="row">{items}</div>
      <button
        class="btn waves-effect waves-light submitButton"
        type="submit"
        name="action"
      >
        <a href="/cart" className="linkColor">
          Add All to Cart
        </a>
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
};
export default BagProducts;
