import { Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  return (
    <>
      <Box>
        <Typography>Billing Address</Typography>
        <input name='Name'/>
        {/* <input>Address</input>
        <input>City</input>
        <input>State</input>
        <input>Zip</input> */}
      </Box>
      <Box>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Back to Shop
        </Link>
      </Box>
    </>
  );
};
