import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import CartContext from '../../store/CartContext';
import './product.css';

const defaultImgAdd =
  'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg';
function Item(props) {
  // const idCtx = useContext(IdContext);
  const history = useHistory();
  const jab = () => {
    // console.log(authCtx.id);
    localStorage.setItem('prodId', props.id);
    history.push('/product');
  };
  const cartCtx = useContext(CartContext);

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
          Rs {props.price} &nbsp;{' '}
          <strike className="grey-text">Rs {props.price + 10}</strike>
          <span className="green-text" id="disc_item">
            {((10 / props.price) * 100).toFixed(2)}% off
          </span>
        </p>

        <div className="divider"></div>
        <div className="card-action ">
          <a onClick={jab}>View product</a>
          <a
            href="#"
            className="right"
            onClick={() =>
              cartCtx.addItem({
                image: props.image,
                price: props.price,
                name: props.name,
                brand: props.brand,
                discount: '20%',
              })
            }
          >
            {' '}
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
export default Item;
