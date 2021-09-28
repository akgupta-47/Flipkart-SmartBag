import react from 'react'

const Order = (props)=>{
    return(
        <div id='pay' className="modal">
            <div className="modal-content">
                <h5>Order Summary</h5>
                <p>Total Items: {props.count}</p>
                <p>Total Value: {props.tprice}</p>
                <p>Total Discount: {props.discount}</p>
                <p>You pay: {props.tprice - props.discount}</p>
                <a className="btn"> Proceed for Payment </a>
            </div>
        </div>
    )
}
export default Order