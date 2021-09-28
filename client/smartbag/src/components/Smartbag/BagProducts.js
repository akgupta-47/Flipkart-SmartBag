import React from 'react';
import Item from '../Products/item';
const BagProducts = (props) => {
  const products = props.bagProd;
  let i = 0;
  return (
    <div className="card pagecard">
      <span class="card-title bag-title">My Smartbag</span>
      <div className="row">
        <div className="col s3">
          {/* {
          products.map((el) => {
            <Item
              name={el.name}
              image={el.img}
              rating={el.rating}
              price={el.price}
              quantitiy={el.quant}
              id={el._id}
              key={i++}
            />;
          })} */}
        </div>
      </div>
    </div>
  );
};
export default BagProducts;
