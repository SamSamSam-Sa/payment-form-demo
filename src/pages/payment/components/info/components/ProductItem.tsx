import React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { IProductItemProps } from '../interfaces';

const ProductItem = (props: IProductItemProps) => {
  const { item } = props;
  return (
    <>
      <Grid item xs={12} sx={{ height: 150, overflow: 'hidden' }}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image={item.image}
              alt={item.imageLabel}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h4" variant="h5">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default ProductItem;
