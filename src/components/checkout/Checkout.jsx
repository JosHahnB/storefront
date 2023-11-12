import { Typography, Box, Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../store/cartSlice';
import { updateProduct } from '../../store/productSlice';

export const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const itemCount = cartItems.length; // Calculate the item count

  const handleDelete = (index, item) => {
    dispatch(cartSlice.actions.deletedItemFromCart(index));
    dispatch(updateProduct({ product: item, amount: 0, remove: true }));
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    textAlign: 'center',
    display: 'inline-block', // Add display property to prevent link from taking full width
    border: '2px solid #3498db',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
    backgroundColor: '#fff',
    color: '#3498db',
  };

  const hoverStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((product) => {
      total += product.price * product.quantity;
    });

    // Format the total as currency
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(total);
  };

  return (
    <Box>
      <Header style={{ padding: '20px', margin: '20px' }} />
      <Link to="/" style={{ ...linkStyle, ...hoverStyle }}>
        Shop Some More!
      </Link>
      <Grid container>
        <Grid item xs={8}>
          {cartItems.map((item, index) => (
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}
              key={index}
            >
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="text.secondary">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.price)}
              </Typography>
              <Button
                variant="text"
                size="small"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(index, item)}
              >
                Remove
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box></Box>

      <Box>
        <Typography>Name</Typography>
        <input name="Name" />
        <Typography>Address</Typography>
        <input name="Address" />
        <Typography>Card Number</Typography>
        <input name="Name" />
        {/* <input>Address</input>
        <input>City</input>
        <input>State</input>
        <input>Zip</input> */}

        <p>
          <strong>Total: {calculateTotal()}</strong>
        </p>
        <Button style={buttonStyle}>Place Order</Button>
      </Box>
    </Box>
  );
};
