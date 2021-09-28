import React, { useState, useEffect } from 'react';
import Header from '../Cart/CartNavbar';
import './product.css';
import img from '../../Images/Product/12.png';
import Footer from '../Footer/MainFooter';
import Item from './item';
import axios from 'axios';

const defaultImgAdd =
  'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg';
const baseUrl = 'http://localhost:5000/api/product';
function Product() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProd = async () => {
      const prod = await axios({
        method: 'GET',
        url: `${baseUrl}/${localStorage.getItem('prodId')}`,
        withCredentials: true,
      });
      setProduct(prod.data.data);
    };
    getProd();
  }, []);

  return (
    <div className="product">
      <Header />
      <div className="productpg center ">
        <img src={img} className="responsive-img" id="product_fimg" />
        <div className="row productr ">
          <div className="col l3 m12 s12">
            <div className="container white " id="prod_cont">
              <img
                src={product.img ? product.img : defaultImgAdd}
                className="responsive-img"
              />
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
                <strike>Rs {product.price + 10}</strike>
              </span>
              <span className="green-text" id="prod_disc">
                {((10 / product.price) * 100).toFixed(2)}% off
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
        <div className="white card row z-depth-1" id="pdt_bt">
          <h5 className="black-text" id="pdt_bt_head">
            Similar Items
          </h5>
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxZ9MaxthdxNTdb-FjD-qfpT_0JApnnGcEvKG2jivOKoPH7uQ081f4plHi63qdtj5l2U&usqp=CAU"
            name="Ashirwaad aata"
          />
          <Item
            src="https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/flipkart-grocery-breakfast-items-corn-flakes-chocos-offer-discount-1529314833.jpg"
            name="Kellog's Corn Flakes"
          />
          <Item
            src="https://diginamaste.com/wp-content/uploads/2021/05/grocery_flour_fortune_besan-1.png"
            name="Fortune Besan"
          />
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6OCjpS_pyReuFpkY8e4ouqPn_z0_JoR6W3GNlxWtbA-GmzCp7V680PjCf6CgoK8gGUg&usqp=CAU"
            name="Nestle Maggi"
          />
        </div>
        <br />
        <div className="white card row z-depth-1" id="pdt_bt">
          <h5 className="black-text" id="pdt_bt_head">
            Bought Together
          </h5>
          <Item
            src="https://images-eu.ssl-images-amazon.com/images/I/61n1hm72dlL._AC_UL200_SR200,200_.jpg"
            name="Tata Salt"
          />
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0rUt9wldtHyXENTdDgkPn0Wz-uVrMBJG34gZ8kUH_LqLLxhhA1aqMv8LDMpGwYsr4FI&usqp=CAU"
            name="Red Label Tea"
          />
          <Item
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeY2dPl67CB-buTI3o0WUy4TKCQ4sUoegZZww11pCtDqXxqfUC_6x2RAQHIFpSIoeX4E&usqp=CAU"
            name="Doritos"
          />

          <Item
            src="https://m.media-amazon.com/images/I/81tiRzUBKEL._SX679_.jpg"
            name="Pack of 6"
          />
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
export default Product;
