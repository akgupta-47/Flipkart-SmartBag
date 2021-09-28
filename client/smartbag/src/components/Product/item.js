import { PromiseProvider } from 'mongoose';
import React from 'react';
import img from '../../Images/Items/13.png';
import './product.css';
const Item=(props)=> {
  return (
    <div className="item">
      <div className="card col auto z-depth-1" id="item_card">
        <div className="card-image " id="item_img_cont">
          <img src={props.src} className="responsive-img " id="item_img" />
        </div>
         <p className="black-text" id="head_item">
                  {props.name}</p>  
                  <p className="black-text" id="item_price">Rs 260 &nbsp; <strike className="grey-text">Rs 235</strike><span className="green-text" id="disc_item">10% off</span></p>
  
              <div className="divider"></div>
        <div className="card-action ">
            <a href="#">View product</a>
            <a href="#" className="right"> Add to cart</a>
        </div>
      </div>
    </div>
  );
}
export default Item;
