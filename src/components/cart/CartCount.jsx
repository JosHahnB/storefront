import React from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import productSlice from '../../store/productSlice';
import { Link } from 'react-router-dom';
const CartCount = ({ itemCount }) => {
  const dispatch = useDispatch();

  const cartClick = () => {
    dispatch(productSlice.actions.showProduct(product));
  };
  // broswer router goes in App.js
  // should link to the checkout component
  // this button will havea react Link to the checkout component
  return (
    <>
      <Typography>Cart ({itemCount} items)</Typography>
      <Link to="/checkout" style={{ textDecoration: 'none' }}>
        <Button size="small" onClick={cartClick}>
          Checkout
        </Button>
      </Link>
    </>
  );
};

export default CartCount;
