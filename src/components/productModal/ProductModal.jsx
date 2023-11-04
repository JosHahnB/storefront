import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../store/cartSlice';
import productSlice from '../../store/productSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductModal = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(productSlice.actions.showProduct(undefined));
  };

  const addToCartOnClick = () => {
    dispatch(cartSlice.actions.itemAddedToCart(product));
  };

  return (
    <Modal open={product !== undefined} onClose={handleClose}>
      {product ? (
        <Card style={style}>
          <CardMedia
            sx={{ height: 275 }}
            image={product?.image}
            title={product?.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product?.description}
            </Typography>
            <Button onClick={addToCartOnClick}>Add to Cart</Button>
            <Typography>{product.inStock} left!</Typography>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default ProductModal;
