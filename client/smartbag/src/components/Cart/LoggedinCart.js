import React from 'react';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
const LoggedinCart = (props) => {
  const links = props.isEmpty ? (
    <EmptyCart />
  ) : (
    <FilledCart isEmpty={props.isEmpty} />
  );
  return <div className="lincart">{links}</div>;
};

export default LoggedinCart;
