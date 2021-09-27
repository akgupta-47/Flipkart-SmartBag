import React from 'react';
import Header from '../Cart/CartNavbar';
import './product.css';
import img from '../../Images/Product/12.png';
import img2 from '../../Images/Product/13.png';
import Footer from '../Footer/MainFooter';
import Item from '../Products/item';
function Product() {
  return (
    <div className="product">
      <Header />
      <div className="productpg center ">
        <img src={img} className="responsive-img" id="product_fimg" />
        <div className="row productr ">
          <div className="col l3 m12 s12">
            <div className="container white " id="prod_cont">
              <img src={img2} className="responsive-img" />
            </div>
            <a className="btn center" id="padding_zero2">
              {' '}
              Add to cart
            </a>
          </div>
          <div className="col l8 m12 s12 ">
            <p className="black-text">
              NYCIL Soothing Body Mist Antibacterial (100 ml)
            </p>
            <div className=" right hide-on-med-and-down" id="shareproduct">
              <span className="grey-text right">
                Share<i className="material-icons ">share</i>
              </span>
            </div>
            <p className="black-text" id="pr_price">
              Rs 99
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
                  <td>Shampoos</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Rating</th>
                  <td>4.3/5</td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>2kg</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>Nycil</td>
                </tr>
                <tr>
                  <th>Container Type</th>
                  <td>Plastic</td>
                </tr>
                <tr>
                  <th>Expiry</th>
                  <td>2 years</td>
                </tr>
              </tbody>
            </table>

            <br />
          </div>
        </div>
        <div className="white card row z-depth-1" id="pdt_bt">
          <p className="black-text" id="pdt_bt_head">
            Similar Items
          </p>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <br />
        <div className="white card row z-depth-1" id="pdt_bt">
          <p className="black-text" id="pdt_bt_head">
            Bought Together
          </p>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
export default Product;
