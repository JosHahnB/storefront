import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  // CardMedia,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import productSlice from '../../store/productStored';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(productSlice.actions.Product(product));
  };
  // "name": "TV",
  // "category": "electronics",
  // "price": 699.0,
  // "inStock": 5
  return (
    <Grid item xs={8}>
      <Card>
        {/* <CardMedia
          sx={{ height: 300 }}
          image={product.image_url}
          title={product.title}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
          <Typography >
            {product.image}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Select
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
