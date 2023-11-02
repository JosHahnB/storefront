// import React from 'react'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from '../product/Product';

// map through productData and pass individual beasts to beast component
export const Products = () => {
  const productData = useSelector((state) => state.product.productData);
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );
  // console.log(selectedCategory);
  return (
    //fix the grid shit
    <Grid container spacing={4} marginTop={'10px'} width={'50%'}>
      <Grid item xs={12} md={6}>
        {productData
          .filter(
            (p) => p.category === selectedCategory || selectedCategory === 'all'
          )
          .map((product) => (
            <Product key={product.title} product={product} />
          ))}
      </Grid>
    </Grid>
  );
};

export default Products;
