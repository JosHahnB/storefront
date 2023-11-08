import { Grid, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../store/cartSlice';
import { updateProduct } from '../../store/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const handleDelete = (index, item) => {
    dispatch(cartSlice.actions.deletedItemFromCart(index));
    dispatch(updateProduct({ product: item, amount: 0 }))
  };
  return (
    <Grid item xs={8}>
      {cartItems.map((item, index) => (
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
            Delete
          </Button>
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
