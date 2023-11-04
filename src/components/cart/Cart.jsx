import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../store/cartSlice';
// import productSlice from '../../store/cartSlice';

const Cart = () => {
  // const dispatch = useDispatch();
  // const handleClickCart = () => {
  //   dispatch(cartSlice.actions.itemAddedToCart(cartItems));
  // };
  
  const cartItems = useSelector((state) => state.cart.cartItems);
console.log(cartItems);
  return (
    <Grid item xs={8}>
  {cartItems.map((item) => (
    <Grid
      container
      direction="column" 
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}
    >
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant='text.secondary'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(item.price)}
      </Typography>
    </Grid>
  ))}
</Grid>

    // <Button
    //   size="large"
    //   variant="contained"
    //   color="inherit"
    //   backgroundColor="secondary"
    //   margin="px"
    // >
    //   View Cart
    // </Button>
  );
};

export default Cart;
