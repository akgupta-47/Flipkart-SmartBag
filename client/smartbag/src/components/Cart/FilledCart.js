import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import Order from './OrderModal';

const FilledCart = (props) => {
  const products = props.products;
  let tprice = 0;
  let discount = 0;
  const handleRemove = (key) => {
    let products = props.products;
    products = products.filter((product) => {
      return product.id !== key;
    });
    props.setProducts(products);
    if (!products) props.isEmpty = true;
  };
  return (
    <div className="row">
      <div className="col s8">
        <div className="card pagecard1">
          <span class="card-title main-title1">My Cart</span>
          <br />
          <div className="fcart">
            {products.map((product) => {
              tprice = tprice + product.price;
              discount =
                discount +
                (product.discount.split('%')[0] * product.price) / 100;
              return (
                <div className="card acard">
                  <div class="card pcard horizontal">
                    <div class="card-image">
                      <img src={product.image} />
                    </div>
                    <div class="card-stacked">
                      <div class="card-content pcon">
                        <h5>{product.name}</h5>
                        <br />
                        <p className="cp">{product.brand}</p>
                        <br />
                        <h5>
                          ₹ {product.price}{' '}
                          <span className="discount">
                            {product.discount} off available
                          </span>{' '}
                        </h5>
                      </div>
                      <div class="card-action">
                        <a
                          className="acart"
                          href="#"
                          onClick={() => {
                            handleRemove(product.id);
                          }}
                        >
                          Remove from Cart
                        </a>
                        <a
                          className="acart"
                          href="#"
                          onClick={() => {
                            handleRemove(product.id);
                          }}
                        >
                          Add Again
                        </a>{' '}
                        &nbsp;
                        <a id="qty_sign">-</a>
                        <span id="qty_cart">{product.quantity}</span>
                        <a id="qty_sign">+</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="porder">
            <a class="cart-btn btn modal-trigger" href="#pay">
              Place Order
            </a>
            <Order
              tprice={(Math.round(tprice * 100) / 100).toFixed(2)}
              discount={(Math.round(discount * 100) / 100).toFixed(2)}
              count={products.length}
            />
          </div>
        </div>
      </div>
      <div className="col s4">
        <div className="card price-card">
          <span class="card-title price-title">PRICE DETAILS</span>
          <p className="pp">
            Price:{' '}
            <span className="pright1">
              ₹ {(Math.round(tprice * 100) / 100).toFixed(2)}
            </span>
          </p>
          <p className="pp">
            Discount:{' '}
            <span className="pright2 " style={{ color: 'green' }}>
              - ₹ {(Math.round(discount * 100) / 100).toFixed(2)}
            </span>
          </p>
          <p className="pp">
            Delivery Charges:{' '}
            <span className="pright" style={{ color: 'green' }}>
              FREE
            </span>
          </p>
          <span className="dash">
            ----------------------------------------------------------
          </span>
          <h6>
            Total Amount:{' '}
            <span className="pright4">
              ₹ {(Math.round((tprice - discount) * 100) / 100).toFixed(2)}
            </span>
          </h6>
          <span className="dash">
            ----------------------------------------------------------
          </span>
          <p className="" style={{ color: 'green' }}>
            {' '}
            You will save ₹{' '}
            <span className="pbottom">
              {(Math.round(discount * 100) / 100).toFixed(2)}
            </span>{' '}
            on this order{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default FilledCart;
