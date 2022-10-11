import React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { IProductItemProps } from '../interfaces';
import { StyledCard } from './style';

const ProductItem = (props: IProductItemProps) => {
  const { item } = props;
  return (
    <>
      <Grid item xs={12} sx={{ overflow: 'hidden' }}>
        <CardActionArea component="a" href="#">
          <StyledCard sx={{ display: 'flex', background: 'transparent' }}>
            <CardMedia
              component="img"
              sx={{ maxWidth: 110, display: { xs: 'none', sm: 'block' } }}
              image={item.image}
              alt={item.imageLabel}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h4" variant="h5" color="common.white">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="common.white">
                {item.description}
              </Typography>
              <Typography variant="subtitle1" paragraph color="common.white">
                {item.price}
              </Typography>
            </CardContent>
          </StyledCard>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default ProductItem;
