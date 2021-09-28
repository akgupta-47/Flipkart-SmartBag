import react from 'react';
import './Cart.css';
const Order = (props) => {
  return (
    <div id="pay" className="modal orderm">
      <div className="modal-content">
        <h5 className="center horder">Order Summary</h5>
        <p className="porder">
          Total Items : <span className="sorder1">{props.count}</span>
        </p>
        <p className="porder">
          Total Price : <span className="sorder2"> ₹ {props.tprice}</span>
        </p>
        <p className="porder">
          Total Discount : <span className="sorder3"> - ₹ {props.discount}</span>
        </p>
        <p className="porder">
          You pay :{' '}
          <span className="sorder4">
          ₹ {(Math.round((props.tprice - props.discount) * 100) / 100).toFixed(
              2
            )}
          </span>
        </p>
        <a className="pay-btn btn"> Proceed for Payment </a>
      </div>
    </div>
  );
};
export default Order;
