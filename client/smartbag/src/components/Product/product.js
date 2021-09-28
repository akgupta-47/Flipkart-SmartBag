import React, { useState, useEffect, useContext } from 'react';
import Header from '../Cart/CartNavbar';
import './product.css';
import img from '../../Images/Product/12.png';
import img2 from '../../Images/Product/13.png';
import Footer from '../Footer/MainFooter';
import axios from 'axios';
import AuthContext from '../../store/AuthContext';

const baseUrl = 'http://localhost:5000/api/product';
function Product() {
  const [product, setProduct] = useState({});
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const getProd = async () => {
      const prod = await axios({
        method: 'GET',
        url: `${baseUrl}/${authCtx.id}`,
        withCredentials: true,
      });
      setProduct(prod.data.data);
    };
    getProd();
  }, [authCtx.id]);
  console.log(product);
  return (
    <div className="product">
      <Header />
      <div className="productpg center">
        <img src={img} className="responsive-img" id="product_fimg" />
        <div className="row productr ">
          <div className="col l3 m12 s12">
            <div className="container white " id="prod_cont">
              <img src={product.img} className="responsive-img" />
            </div>
            <a className="btn center" id="padding_zero2">
              {' '}
              Add to cart
            </a>
          </div>
          <div className="col l8 m12 s12 ">
            <p className="black-text">{product.name}</p>
            <div className=" right hide-on-med-and-down" id="shareproduct">
              <span className="grey-text right">
                Share<i className="material-icons ">share</i>
              </span>
            </div>
            <p className="black-text" id="pr_price">
              Rs {product.price}
              <span className="grey-text">
                <strike>Rs 150</strike>
              </span>
              <span className="green-text" id="prod_disc">
                34% off
              </span>
            </p>
            <span className="black-text left" id="padding_zero1">
              Available Offers
            </span>
            <br />
            <ul>
              <li className="listprod">
                <span className="black-text left" id="padding_zero">
                  <i className="tiny    material-icons">link</i> &nbsp; Bank
                  Offer10% off on Citi Credit and Debit Cards, up to ₹300. On
                  orders of ₹2000 and above. <a>T&C</a>{' '}
                </span>
              </li>
              <li className="listprod">
                <span className="black-text left" id="padding_zero">
                  <i className="tiny    material-icons">link</i> &nbsp; Bank
                  Offer10% off on Citi Credit and Debit Cards, up to ₹300. On
                  orders of ₹2000 and above. <a>T&C</a>{' '}
                </span>
              </li>
              <li className="listprod">
                <span className="black-text left" id="padding_zero">
                  <i className="tiny    material-icons">link</i> &nbsp; Bank
                  Offer10% off on Citi Credit and Debit Cards, up to ₹300. On
                  orders of ₹2000 and above. <a>T&C</a>{' '}
                </span>
              </li>
            </ul>
            <span className=" left specs_prod_hd" id="padding_zero1">
              Specifications
            </span>

            <table className=" responsive-table highlight" id="prod_table">
              <thead>
                <tr>
                  <th>Category</th>
                  <td>{product.categ}</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Rating</th>
                  <td>{product.rating}/5</td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>{product.quant}kg</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <th>Container Type</th>
                  <td>{product.contType}</td>
                </tr>
                <tr>
                  <th>Expiry</th>
                  <td>{product.exp} years</td>
                </tr>
              </tbody>
            </table>

            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Product;
