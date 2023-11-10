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

  // <CartCount itemCount={itemCount} 

  return (
    <Grid item xs={'auto'}>
      <Card align='center'>
        <CardMedia
          sx={{ height: 275 }}
          image={`http://source.unsplash.com/random?${product.name}`}
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
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;