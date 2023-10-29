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
import beastSlice from '../../store/beast';

const Beast = ({ beast }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(beastSlice.actions.showBeast(beast));
  };

  return (
    <Grid item xs={8}>
      <Card>
        <CardMedia
          sx={{ height: 300 }}
          image={beast.image_url}
          title={beast.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {beast.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {beast.description}
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

export default Beast;
