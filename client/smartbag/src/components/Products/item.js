import React, { useContext } from 'react';
import img from '../../Images/Items/13.png';
import AuthContext from '../../store/AuthContext';
import { useHistory } from 'react-router';
import './product.css';

const defaultImgAdd =
  'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg';
function Item(props) {
  // const idCtx = useContext(IdContext);
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const jab = () => {
    authCtx.idSetter(props.id);
    console.log(authCtx.id);
    history.push('/product');
  };
  return (
    <div className="item">
      <div className="card col auto z-depth-1" id="item_card">
        <div className="card-image " id="item_img_cont">
          <img
            src={props.image ? props.image : defaultImgAdd}
            className="responsive-img "
            id="item_img"
          />
        </div>
        <p className="black-text" id="head_item">
          {props.name}
        </p>
        <p className="black-text" id="item_price">
          Rs {props.price} &nbsp; <strike className="grey-text">Rs 235</strike>
          <span className="green-text" id="disc_item">
            10% off
          </span>
        </p>

        <div className="divider"></div>
        <div className="card-action ">
          <a onClick={jab}>View product</a>
          <a href="#" className="right">
            {' '}
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
export default Item;
