import { Grid, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../store/cartSlice';
import { updateProduct } from '../../store/productSlice';
import CartCount from './CartCount'; // Import the new component
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.length; // Calculate the item count

  const handleDelete = (index, item) => {
    dispatch(cartSlice.actions.deletedItemFromCart(index));
    dispatch(updateProduct({ product: item, amount: 0, remove: true }));
  };

  return (
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
              Delete
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={4}>
        <CartCount itemCount={itemCount} />
      </Grid>
      
    </Grid>
  );
};

export default Cart;
