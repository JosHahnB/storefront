import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import productSlice from '../../store/productSlice';
// import cartSlice from '../../store/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(productSlice.actions.showProduct(product));
  };
  // "name": "TV",
  // "category": "electronics",
  // "price": 699.0,
  // "inStock": 5
  return (
    <Grid item xs={8}>
      <Card>
        <CardMedia
          sx={{ height: 10 }}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant='text.secondary'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(product.price)}
      </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            View
          </Button>
          {/* <Button size="small" onClick={handleClickCart}>
            Add to Cart
          </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
